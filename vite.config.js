export default ({
    base: '/the-webshop-team-1-1/',
        plugins: [
          svgr(),
          react({
            babel: {
              plugins: [
                [
                  'babel-plugin-styled-components',
                  {
                    displayName: true,
                    fileName: false,
                  },
                ],
              ],
            },
          }),
        ],
      });