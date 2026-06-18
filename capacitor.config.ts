import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'nishka.app',
  appName: 'Nishka App',
  webDir: 'dist',
  server: {
    url: 'https://nishka-portfolio-psi.vercel.app',
    cleartext: false
  }
};

export default config;