import snakeCase from 'lodash/snakeCase'

const LOAD_POSTS = 'LOAD_POSTS'

const MyPostsService = {
  get: () => {
    return new Promise(resolve => resolve([
      { id: 1, name: 'Post 1' },
      { id: 2, name: 'Post 2' },
      { id: 3, name: 'Post 3' },
      { id: 4, name: 'Post 4' },
      { id: 5, name: 'Post 5' },
    ]))
  }
}

export const state = {
  posts: [],
}

export const actions = {
  [snakeCase(LOAD_POSTS)] (context) {
    return MyPostsService.get()
      .then((posts) => {
        context.commit(LOAD_POSTS, posts)
      })
      .catch((error) => {
        throw new Error(error)
      })
  },
}

export const mutations = {
  [LOAD_POSTS] (state, posts) {
    state.posts = posts
  },
}

export default {
  state,
  actions,
  mutations
}
