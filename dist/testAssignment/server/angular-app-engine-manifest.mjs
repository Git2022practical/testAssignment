
export default {
  basePath: 'https://Git2022practical.github.io/testAssignment',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
