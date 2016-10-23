// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import {chalkProcessing} from './chalkConfig';
import proxyMiddleware from 'http-proxy-middleware';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

const apiProxy = proxyMiddleware('/api', {
  target: 'http://107.170.13.129:8080',
  changeOrigin: true,
  logLevel: 'debug',
  secure: false
});

// Run Browsersync
browserSync({
  port: 3000,
  ui: {
    port: 3001
  },
  server: {
    baseDir: 'dist'
  },
  ghostMode: false,
  files: [
    'src/*.html'
  ],
  middleware: [apiProxy, historyApiFallback()]
});
