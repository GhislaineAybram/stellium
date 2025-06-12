
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://GhislaineAybram.github.io/stellium/',
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
    'index.csr.html': {size: 7601, hash: 'c12922667fe8ad8249f5e0ef6d4f2188b5fafb2fb1e05d5c7e3c949e0ce2aa8d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1047, hash: '128e357cee9c18cf96b8cdc6a791114d13ca50ae0404d4d5b3d0b344ebcc4bcf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21761, hash: 'e7e433128e9f2b307ed5308c47077acb9da591cea07390189a2b0841d8044b70', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 46332, hash: '7fc9d828f12f7ef2d1e4772c9218dd7c659a1789b0c2ae80e93552b75c24b12e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 19515, hash: '547dd31b7ff69191c1dbf32ebc75e95f3f274f501767a4d0593ef903c30f2739', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 31659, hash: '5770e9582ff91764adca14926092a5bc9d61c0b353e2130ca8bfd0b6d29891b6', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 27718, hash: 'd93d8fe5bd327f6795f92f4c1352cba86f13611a6813632ebf310f2bf9fb6891', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-2IWBIMII.css': {size: 28467, hash: 'uZ5SGLotmVc', text: () => import('./assets-chunks/styles-2IWBIMII_css.mjs').then(m => m.default)}
  },
};
