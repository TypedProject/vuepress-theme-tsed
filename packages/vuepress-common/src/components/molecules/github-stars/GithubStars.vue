<template>
  <div class="relative inline-flex w-auto">
    <ClientOnly>
      <Button :href="url"
              component="a"
              title="Github"
              border
              :color="borderColor"
              :border-color="borderColor"
              bg-color="transparent"
              class="border-2 relative flex items-center justify-center"
              padding-x="1"
              padding-y="1"
              rounded="medium">
        <BxIcon name="bxl-github" class="text-lg"></BxIcon>
      </Button>
    </ClientOnly>
    <span
        :style="{top: '-12px', right:'-28px'}"
        :class="[`bg-${borderColor} text-${color}`]"
        class="text-xs py-1 px-2 absolute right-0 rounded-medium rounded-bl-small">{{
        stargazersCount
      }}</span>
  </div>
</template>
<script>
import { getGithubMetadata } from '@tsed/vuepress-common'
import BxIcon from '../../atoms/icons/BxIcon'
import Button from '../button/Button'

export default {
  name: 'GithubStars',
  components: {
    BxIcon,
    Button
  },
  props: {
    borderColor: {
      type: String,
      default: 'gray-darker'
    },
    color: {
      type: String,
      default: 'white'
    }
  },
  data () {
    return {
      url: '',
      stargazersCount: 0
    }
  },

  async mounted () {
    const {
      repo,
      githubProxyUrl,
      docsRepo = repo
    } = this.$site.themeConfig

    const { stargazers_count, html_url } = await getGithubMetadata(githubProxyUrl || docsRepo)

    this.url = html_url
    this.stargazersCount = stargazers_count
  }
}
</script>
