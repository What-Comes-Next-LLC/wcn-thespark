// WebView bridge for handling communication between native and web content
class WebViewBridge {
    constructor() {
        this.messageHandlers = new Map();
        this.initialize();
    }

    initialize() {
        // Listen for messages from the native app
        window.addEventListener('message', (event) => {
            const { type, data } = event.data;
            const handler = this.messageHandlers.get(type);
            if (handler) {
                handler(data);
            }
        });
    }

    // Register a handler for a specific message type
    on(type, handler) {
        this.messageHandlers.set(type, handler);
    }

    // Send a message to the native app
    postMessage(type, data) {
        if (window.Android) {
            // Android WebView
            window.Android.postMessage(JSON.stringify({ type, data }));
        } else if (window.webkit && window.webkit.messageHandlers) {
            // iOS WebView
            window.webkit.messageHandlers.postMessage.postMessage({ type, data });
        } else {
            console.warn('Native bridge not available');
        }
    }

    // Initialize the bridge and notify the native app
    ready() {
        this.postMessage('bridgeReady', {});
    }
}

// Export a singleton instance
export const webViewBridge = new WebViewBridge(); 