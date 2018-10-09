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
<<<<<<< HEAD
  data() {
    return {
      posts: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
      ]
    }
  },
  created() {
    console.log(`Hello ${this.name}`)
  },
  methods: {
    handleItemClick({ id, name }) {
      console.log({ id, name })
    }
  },
=======

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
>>>>>>> Add load_posts
}
</script>

<style>
</style>
