class WebViewBridgeDebug {
    constructor() {
        this.webview = document.getElementById('webview');
        this.baseUrl = 'https://whatcomesnextllc.ai';
        this.setupMessageHandlers();
        this.setupDebugLogging();
        this.setupRequestInterceptors();
    }

    setupRequestInterceptors() {
        // Intercept fetch requests
        const originalFetch = window.fetch;
        window.fetch = async (input, init) => {
            let url = typeof input === 'string' ? input : input.url;
            
            // Normalize URL to handle www/non-www redirects
            if (url.includes('www.whatcomesnextllc.ai')) {
                url = url.replace('www.whatcomesnextllc.ai', 'whatcomesnextllc.ai');
            }

            // Add CORS headers
            const headers = new Headers(init?.headers || {});
            headers.set('Origin', this.baseUrl);
            headers.set('Access-Control-Allow-Origin', this.baseUrl);
            headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, rsc');

            const modifiedInit = {
                ...init,
                headers,
                mode: 'cors',
                credentials: 'include'
            };

            console.log('[WebViewBridgeDebug] Modified Fetch Request:', {
                url,
                headers: Object.fromEntries(headers.entries()),
                mode: modifiedInit.mode
            });

            try {
                const response = await originalFetch(url, modifiedInit);
                console.log('[WebViewBridgeDebug] Fetch Response:', {
                    url,
                    status: response.status,
                    headers: Object.fromEntries(response.headers.entries())
                });
                return response;
            } catch (error) {
                console.error('[WebViewBridgeDebug] Fetch Error:', {
                    url,
                    error: error.message
                });
                throw error;
            }
        };
    }

    setupDebugLogging() {
        // Log initial WebView state
        console.log('[WebViewBridgeDebug] Initial URL:', this.webview.src);
        console.log('[WebViewBridgeDebug] Window Origin:', window.location.origin);
        
        // Monitor WebView navigation
        this.webview.addEventListener('loadstart', (event) => {
            console.log('[WebViewBridgeDebug] Navigation Start:', {
                url: event.url,
                timestamp: new Date().toISOString()
            });
        });

        this.webview.addEventListener('loadend', (event) => {
            console.log('[WebViewBridgeDebug] Navigation End:', {
                url: event.url,
                timestamp: new Date().toISOString()
            });
        });
    }

    setupMessageHandlers() {
        window.addEventListener('message', async (event) => {
            if (event.origin !== this.baseUrl) {
                console.log('[WebViewBridgeDebug] Message from unexpected origin:', event.origin);
                return;
            }

            console.log('[WebViewBridgeDebug] Received Message:', {
                type: event.data.type,
                payload: event.data.payload,
                origin: event.origin
            });

            const { type, payload } = event.data;

            switch (type) {
                case 'supabase_auth':
                    await this.handleSupabaseAuth(payload);
                    break;
                case 'auth_status_request':
                    await this.handleAuthStatusRequest();
                    break;
                case 'sign_out_request':
                    await this.handleSignOutRequest();
                    break;
            }
        });
    }

    async handleSupabaseAuth({ email, password }) {
        console.log('[WebViewBridgeDebug] Handling Supabase Auth:', { email });
        try {
            const success = await window.AuthService.signIn(email, password);
            console.log('[WebViewBridgeDebug] Auth Result:', { success });
            this.sendMessage('supabase_auth_result', { success });
        } catch (error) {
            console.error('[WebViewBridgeDebug] Auth Error:', error);
            this.sendMessage('supabase_auth_result', { 
                success: false, 
                error: error.message 
            });
        }
    }

    async handleAuthStatusRequest() {
        console.log('[WebViewBridgeDebug] Handling Auth Status Request');
        const isAuthenticated = await window.AuthService.isAuthenticated();
        const token = await window.AuthService.getCurrentToken();
        
        console.log('[WebViewBridgeDebug] Auth Status:', { isAuthenticated, hasToken: !!token });
        
        this.sendMessage('auth_status', {
            isAuthenticated,
            token: isAuthenticated ? token : null
        });
    }

    async handleSignOutRequest() {
        console.log('[WebViewBridgeDebug] Handling Sign Out Request');
        try {
            await window.AuthService.signOut();
            console.log('[WebViewBridgeDebug] Sign Out Success');
            this.sendMessage('sign_out_result', { success: true });
        } catch (error) {
            console.error('[WebViewBridgeDebug] Sign Out Error:', error);
            this.sendMessage('sign_out_result', { 
                success: false, 
                error: error.message 
            });
        }
    }

    sendMessage(type, payload) {
        console.log('[WebViewBridgeDebug] Sending Message:', { type, payload });
        this.webview.contentWindow.postMessage({ type, payload }, this.baseUrl);
    }
}

// Initialize the debug bridge
window.WebViewBridge = new WebViewBridgeDebug(); 