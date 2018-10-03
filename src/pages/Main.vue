<template>
  <div id="app">
    <div v-for="post of posts">
      <div @click="handleItemClick(post)" v-if="post.id !== 4">
        {{ post.id }}. {{ post.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
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
}
</script>

<style>
</style>
