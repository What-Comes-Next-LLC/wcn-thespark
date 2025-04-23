import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.whatcomesnext.spark',
  appName: 'The Spark',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    allowNavigation: ['*whatcomesnextllc.ai*']
  },
  android: {
    allowMixedContent: true
  }
};

export default config; 