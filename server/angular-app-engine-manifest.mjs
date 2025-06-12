
export default {
  basePath: 'https://GhislaineAybram.github.io/stellium',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
