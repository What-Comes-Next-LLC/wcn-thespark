// Secure storage service for handling sensitive data
class SecureStorage {
    constructor() {
        this.storage = window.localStorage;
    }

    async setItem(key, value) {
        try {
            this.storage.setItem(key, value);
            return true;
        } catch (error) {
            console.error('Error storing data:', error);
            return false;
        }
    }

    async getItem(key) {
        try {
            return this.storage.getItem(key);
        } catch (error) {
            console.error('Error retrieving data:', error);
            return null;
        }
    }

    async removeItem(key) {
        try {
            this.storage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing data:', error);
            return false;
        }
    }
}

// Export a singleton instance
export const secureStorage = new SecureStorage(); 