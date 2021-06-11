# vuepress-theme-tsed

## Installation

Run:
```bash
npm install --save-dev vuepress-theme-tsed
```

Then create or edit enhanceApp.js in your `.vuepress` directory and import the theme:

```javascript
import VueTsed from 'vuepress-theme-tsed'

export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData
                }) => {

  Vue.use(VueTsed)
}
```
