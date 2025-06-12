
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/legal"
  },
  {
    "renderMode": 2,
    "route": "/privacy"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7559, hash: '7a9f90046f1886f0d6423ad5eb28ff983494e25a854bbf5977ae670932aaf1ed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: '9545a340af9ccc3b13540d85901aaa4baa214165a3b501aca703a9e140d3e74a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21467, hash: '245045c496cd621dd77416a0976b84a6556679aad58cb57c3cc8198429d10a3b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 31365, hash: '287ded52d1e12f7165e81a8bd34a69cae5873f35d2af8ca3aee77857010f396b', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 19221, hash: '0a9d4cf53af6458688e174023bd56074846e0fb188682e08273f1847f0ed1c7b', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 27382, hash: '1eb85007f1bd2b570caa40b55f6f0e6db0d9aed2fa877e126634296b62e29475', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 46038, hash: 'ef2529a2bcf4c5d022d8270cd0712ae910599e3baa49dcb4f45f02d2673b9cf7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2IWBIMII.css': {size: 28467, hash: 'uZ5SGLotmVc', text: () => import('./assets-chunks/styles-2IWBIMII_css.mjs').then(m => m.default)}
  },
};
