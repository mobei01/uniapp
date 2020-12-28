export default {
  namespaced: true,
  state: {
    userInfo: uni.getStorageSync('userInfo') ? JSON.parse(uni.getStorageSync('userInfo')) : {},
    isLogin: uni.getStorageSync('token') ? true : false
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setUserStatus(state, payload) {
      state.isLogin = payload
    },
  }
}
