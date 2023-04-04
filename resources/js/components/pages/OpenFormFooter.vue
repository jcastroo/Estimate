<template>
  <div class="w-full">
    <div class="grid md:grid-cols-3 my-8">
      <div class="flex mt-2">
        <p class="text-sm text-gray-600 dark:text-gray-400 text-center w-full">
          Setup Tech © Copyright 2022. All Rights Reserved
        </p>
      </div>
      <div class="flex justify-center mt-5 md:mt-0">
        <router-link :to="{ name: user ? 'home' : 'welcome' }" class="flex-shrink-0 font-semibold flex items-center">
          <img :src="asset('img/logo.png')" alt="notion tools logo" class="w-20 h-12">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    appName: window.config.appName,
  }),

  computed: {
    ...mapGetters({
      user: 'auth/user'
    }),
    helpUrl: () => window.config.links.help_url,
    githubUrl: () => window.config.links.github_url,
    forumUrl: () => window.config.links.github_forum_url,
    changelogUrl: () => window.config.links.changelog_url,
    facebookGroupUrl: () => window.config.links.facebook_group,
    twitterUrl: () => window.config.links.twitter,
    featureRequestsUrl: () => window.config.links.feature_requests
  },

  mounted () {},

  methods: {}
}
</script>
