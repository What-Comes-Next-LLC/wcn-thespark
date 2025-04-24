import { createClient } from '@supabase/supabase-js';
import { config } from './config.js';
import { secureStorage } from './secure-storage.js';

class AuthService {
    constructor() {
        this.supabase = createClient(config.supabaseUrl, config.supabaseAnonKey);
        this.tokenKey = 'supabase_token';
    }

    async initialize() {
        try {
            const { data: { session } } = await this.supabase.auth.getSession();
            if (session) {
                await secureStorage.setItem(this.tokenKey, session.access_token);
            }
            return session;
        } catch (error) {
            console.error('Error initializing auth:', error);
            return null;
        }
    }

    async signIn(email, password) {
        try {
            const { data, error } = await this.supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;

            if (data.session) {
                await secureStorage.setItem(this.tokenKey, data.session.access_token);
            }

            return data;
        } catch (error) {
            console.error('Error signing in:', error);
            throw error;
        }
    }

    async signOut() {
        try {
            await this.supabase.auth.signOut();
            await secureStorage.removeItem(this.tokenKey);
            return true;
        } catch (error) {
            console.error('Error signing out:', error);
            return false;
        }
    }

    async getCurrentToken() {
        return await secureStorage.getItem(this.tokenKey);
    }

    isAuthenticated() {
        return this.getCurrentToken() !== null;
    }
}

// Export a singleton instance
export const authService = new AuthService(); 