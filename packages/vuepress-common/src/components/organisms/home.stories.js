import {
  Button,
  BxIcon,
  Contributors,
  Feature,
  getUserNavLinks,
  GithubStars,
  Navbar,
  WordsSlider
} from '@tsed/vuepress-common'
import { text } from '@storybook/addon-knobs'
import contributors from '../molecules/contributors/contributors.json'
import HeroBanner from '../molecules/hero-banner/HeroBanner'
import config from './__mock__/config.js'

export default {
  title: 'Organisms/HomePage'
}

export const overview = () => ({
  components: {
    Navbar,
    Contributors,
    Button,
    GithubStars,
    BxIcon,
    WordsSlider,
    Feature,
    HeroBanner
  },
  props: {
    keywords: {
      default: text('keywords', '#Decorators, #Rest API, #DI, #Controller')
    },
    contributors: {
      default: contributors
        .map((contributor) => {
          const { avatar_url, html_url, login } = contributor
          return {
            src: avatar_url,
            href: html_url,
            login,

            ...contributor
          }
        })
    },
    socialUrls: {
      default: config.themeConfig
    },
    links: {
      default: getUserNavLinks({
        $site: config.themeConfig,
        $router: {},
        $localeConfig: {
          path: ''
        },
        $themeLocaleConfig: config.themeConfig.locales['/']
      })
    }
  },
  template: `
    <div style="width: 100vw" class="init">
    <Navbar
        site-title="Ts.ED"
        html-title="<span class='text-blue'>Ts</span>.ED" href="/"
        :social-urls="socialUrls"
        :items="links"/>

    <HeroBanner :keywords="keywords">
      <template #hero-brand>
        <strong>Ts.ED</strong> Framework<br/>
        <small>for <a class="text-darker-gray">Node.js</a> and <a class="text-darker-gray">TypeScript</a></small>
      </template>

      <template #hero-slogan>
        Build your awesome server-size <strong>application.</strong>
      </template>

      <template #hero-cta>
        <HeroBannerCta/>
      </template>
    </HeroBanner>

    <div class="bg-gray-lighter py-10">
      <div class="container flex flex-col w-full max-w-md mx-auto px-3 pb-10  text-center">
        <h2 class="mb-5 normal-case">Why <span class="text-blue">Ts</span>.ED</h2>
        <!--          # Ts.ED is based on a powerful modular architecture. Use -->


        Ts.ED is a Node.js and TypeScript framework on top of Express to write your application with TypeScript (or
        ES6). It provides a lot of decorators and guideline to make your code more readable and less error-prone.
      </div>
    </div>

    <div class="bg-white">
      <div class="container flex flex-col w-full max-w-site mx-auto px-5 py-5 md:py-10">
        <div>

          <div class="flex flex-wrap align-center justify-center">
            <Feature title="Rest API" icon="bx-server" class="w-full sm:w-1/2 md:w-1/3 mb-5">
              Create your Rest API easily and create different version paths of your API
            </Feature>

            <Feature title="Configuration" icon="bx-shape-square" class="w-full sm:w-1/2 md:w-1/3 mb-5">
              Don't waste your time with configuration, the server is preconfigured to start quickly!
            </Feature>

            <Feature title="Class based" icon="bx-diamond" class="w-full sm:w-1/2 md:w-1/3 mb-5">
              Define class as Controller, Model, Service (DI), Filter, Middleware, Converter etc...
            </Feature>

            <Feature title="Decorators" icon="bx-paint" class="w-full sm:w-1/2 md:w-1/3 mb-5">
              A lot of decorators are provided to structure your code and define route and method.
            </Feature>

            <Feature title="Testing" icon="bx-test-tube" class="w-full sm:w-1/2 md:w-1/3 mb-5">
              To test or not to test? isn't a question. Ts.ED embeds some features to test your code! See more
            </Feature>
          </div>


          <!--            AND MORE-->
          <!--            Find some guide to integrate TypeORM, Swagger, AJV validation, Passport.js, Socket.io, AWS, React, Vue.js,-->
          <!--            Templating, etc...-->
        </div>
      </div>
    </div>
    <div class="bg-blue text-white">
      <div class="container flex flex-col w-full max-w-site mx-auto px-5 py-5 md:py-10">
        <div>
          <h2 class="mb-10 text-hairline">Our<br><b>Contributors</b></h2>

          <Contributors color="white" :contributors="contributors"/>

          <div class="flex items-center justify-center mb-5">
            <Button bg-color="white" color="blue" rounded="medium">
              Become contributor
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-lighter">
      <div class="container flex flex-col w-full max-w-site mx-auto px-5 py-5 md:py-10">
        <div>
          <h2 class="mb-5 text-hairline">Our<br><b>Backers</b></h2>

          <p class="mb-10">Thank you to all our backers! 🙏</p>

          <Contributors :contributors="contributors"/>

          <div class="flex items-center justify-center mb-5">
            <Button rounded="medium">
              Become backers
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="container flex flex-col w-full max-w-site mx-auto px-5 py-5 md:py-10">
        <div>
          <h2 class="mb-5 text-hairline">Our<br><b>sponsors</b></h2>
          <p class="mb-10">
            Support this project by becoming a sponsor. Your logo will show up here with a link to your website.
          </p>

          <Contributors :contributors="contributors"/>

          <div class="flex items-center justify-center mb-5">
            <Button rounded="medium">
              Become sponsor
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  `
})
