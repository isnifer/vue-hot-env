<template>
  <div id="app">
    <div v-for="post of posts">
      {{ post.id }} {{ post.name }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Main',

  data() {
    return {
      name: 'lol',
    }
  },

  mounted() {
    this.loadPosts()
  },

  methods: {
    ...mapActions('main', [
      'loadPosts',
    ]),
  },

  computed: {
    ...mapState('main', [
      'posts',
    ]),
  }
}
</script>

<style>
</style>
