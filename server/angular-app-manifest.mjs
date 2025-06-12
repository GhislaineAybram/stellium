
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '=/stellium/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/=/stellium"
  },
  {
    "renderMode": 2,
    "route": "/=/stellium/about"
  },
  {
    "renderMode": 2,
    "route": "/=/stellium/legal"
  },
  {
    "renderMode": 2,
    "route": "/=/stellium/privacy"
  },
  {
    "renderMode": 2,
    "route": "/=/stellium/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7569, hash: '026749021ecf915a25d5e4808ae6e353fcdf5e88f722f247aa7fe8bda6dad483', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: 'f17f55fdd457eaf98eb6bdede92e662cb697911d14ff6542fa6b96d2670458bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19213, hash: '55ec1072f3d3f8c9c801bc22215d2093caea8caab8cc13f24faa9209aa447708', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 19213, hash: '55ec1072f3d3f8c9c801bc22215d2093caea8caab8cc13f24faa9209aa447708', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 19213, hash: '55ec1072f3d3f8c9c801bc22215d2093caea8caab8cc13f24faa9209aa447708', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19213, hash: '55ec1072f3d3f8c9c801bc22215d2093caea8caab8cc13f24faa9209aa447708', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 19213, hash: '55ec1072f3d3f8c9c801bc22215d2093caea8caab8cc13f24faa9209aa447708', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'styles-2IWBIMII.css': {size: 28467, hash: 'uZ5SGLotmVc', text: () => import('./assets-chunks/styles-2IWBIMII_css.mjs').then(m => m.default)}
  },
};
