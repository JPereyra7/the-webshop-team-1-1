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
                nestedPlant0: resolve(__dirname, 'productPage.html?plantIndex=0'),
                nestedPlant1: resolve(__dirname, 'productPage.html?plantIndex=1'),
                nestedPlant2: resolve(__dirname, 'productPage.html?plantIndex=2'),
                nestedPlant3: resolve(__dirname, 'productPage.html?plantIndex=3'),
                nestedPlant4: resolve(__dirname, 'productPage.html?plantIndex=4'),
                nestedPlant5: resolve(__dirname, 'productPage.html?plantIndex=5'),
                nestedPlant6: resolve(__dirname, 'productPage.html?plantIndex=6'),
                nestedPlant7: resolve(__dirname, 'productPage.html?plantIndex=7'),
            }
        }
    }
    
  };