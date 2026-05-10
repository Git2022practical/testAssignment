
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Git2022practical.github.io/testAssignment/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/testAssignment"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 685, hash: '365c34ca3f047281b986095c4dce8c7546e1937275a77e211fc31b3b62d325ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: '86928cbab874bd769605bfaa78910c7c68495f54e7e64a7ddbf44a72591a7b5a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9130, hash: '9a752a88671d3e7df5d5cb81bc03ea9f2a6694675c2996bb8bf0b046ca3937f4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CO5AJWM2.css': {size: 51, hash: 'cElj45uho5Y', text: () => import('./assets-chunks/styles-CO5AJWM2_css.mjs').then(m => m.default)}
  },
};
