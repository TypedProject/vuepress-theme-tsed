import Vue from 'vue'
import ButtonBadge from '../../molecules/button-badge/ButtonBadge'
import Frameworks from './Frameworks.vue'

export default {
  title: 'Organisms/Frameworks'
}

Vue.use({
  install (Vue) {
    Vue.mixin({
      created () {
        this.$frontmatter = {
          ...this.$frontmatter || {},
          frameworks: [
            {
              'title': 'TypeScript',
              'href': 'https://www.typescriptlang.org/',
              'src': 'https://v6.tsed.io/typescript.png'
            },
            {
              'title': 'Express.js',
              'href': 'https://expressjs.com/',
              'src': 'https://v6.tsed.io/expressjs.svg'
            },
            {
              'title': 'Koa.js',
              'href': 'https://koajs.com/',
              'src': 'https://v6.tsed.io/koa.svg'
            },
            {
              'title': 'Jest',
              'href': 'https://jestjs.io/',
              'src': 'https://v6.tsed.io/jest.svg'
            },
            {
              'title': 'Mocha',
              'href': 'https://mochajs.org/',
              'src': 'https://v6.tsed.io/mochajs.svg'
            },
            {
              'title': 'AJV',
              'href': '/tutorials/ajv.html',
              'src': 'https://ajv.js.org/images/ajv_logo.png'
            },
            {
              'title': 'Swagger',
              'href': '/tutorials/swagger.html',
              'src': 'https://v6.tsed.io/swagger.svg'
            },
            {
              'title': 'Passport',
              'href': '/tutorials/passport.html',
              'src': 'https://v6.tsed.io/passportjs.png'
            },
            {
              'title': 'Mongoose',
              'href': '/tutorials/mongoose.html',
              'src': 'https://v6.tsed.io/mongoose.png'
            },
            {
              'title': 'TypeORM',
              'href': '/tutorials/typeorm.html',
              'src': 'https://v6.tsed.io/typeorm.png'
            },
            {
              'title': 'TypeGraphQL',
              'href': '/tutorials/graphql.html',
              'src': 'https://v6.tsed.io/typegraphql.png'
            },
            {
              'title': 'Socket.io',
              'href': '/tutorials/socketio.html',
              'src': 'https://v6.tsed.io/socketio.svg'
            }
          ]
        }
      }
    })
  }
})

export const overview = () => ({
  components: {
    ButtonBadge,
    Frameworks
  },
  props: {},
  template: `
    <div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <Frameworks/>
    </div>`
})
