
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/stellium',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/stellium"
  },
  {
    "renderMode": 2,
    "route": "/stellium/about"
  },
  {
    "renderMode": 2,
    "route": "/stellium/legal"
  },
  {
    "renderMode": 2,
    "route": "/stellium/privacy"
  },
  {
    "renderMode": 2,
    "route": "/stellium/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7567, hash: '099f4f501e740d068ea50fd9762974292f2a5073a82760d8bb0d801ca5b24663', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: '82e061626e32da705f17a6f41433cc2bcbced5f618ad306f7f084eabc2a31a53', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21529, hash: 'a3f6fd0c57c06571613760edd99b3e0bb3ed0e5abec5ab06323e314f975532f9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 19283, hash: '3b100532c4e2e2f4edf6f704eb90707e4e565bd4d66d38393374451a52f28c35', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 31427, hash: 'cb0e9fe2528d757358c4d4937122dd3ecbaeea4664409bafe3ddf50753aaa586', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 27453, hash: '41164704e3e048b93d5f24b523e349bc01012c964ca23101f0d87971431c48ab', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 46100, hash: 'ec9ad435775c25004aea5436d009c4d42bf491a65283d8995559be52199dcf0a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2IWBIMII.css': {size: 28467, hash: 'uZ5SGLotmVc', text: () => import('./assets-chunks/styles-2IWBIMII_css.mjs').then(m => m.default)}
  },
};
