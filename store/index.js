import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                              id: "1",
                              title: "Hello 1",
                              previewText: "Our first post",
                              thumbnail:
                                "https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg"
                            },
                            {
                              id: "2",
                              title: "Hello 2",
                              previewText: "Our first second Post",
                              thumbnail:
                                "https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg"
                            },
                            {
                              id: "3",
                              title: "Hello 3",
                              previewText: "Our first third Post",
                              thumbnail:
                                "https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg"
                            }
                          ])
                      resolve();
                    }, 1000);
                })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore