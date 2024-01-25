import { resolve } from 'path';
export default {
    base: '/the-webshop-team-1-1/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'vaxter.html'),
                nested2: resolve(__dirname, 'skotselrad.html'),
                nested3: resolve(__dirname, 'productPage.html'),
                nested4: resolve(__dirname, 'omOss.html'),
                nested5: resolve(__dirname, 'kontaktaOss.html'),
                nested6: resolve(__dirname, 'checkoutPage.html'),
                nested7: resolve(__dirname, 'orderConfirmation.html'),
            }
        }
    }
    
  };