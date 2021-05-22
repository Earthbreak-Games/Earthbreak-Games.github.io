/*const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = {
    // https://github.com/vercel/next.js/issues/21079
    // Remove the workaround the issue is fixed
    images: {
      loader: "imgix",
      path: ""
    },
};


*/

/*
https://www.npmjs.com/package/replace-in-files-cli

"build-static": "next build && next export && npm run build-static-repair-index",

"build-static-repair-index": "replace-in-files --string "/_next/static" --replacement "./_next/static" out/index.html"*/