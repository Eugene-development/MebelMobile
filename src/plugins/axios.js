export default function ({ $axios, store, $auth }) {
  $axios.onRequest((config) => {
    $axios.setToken(process.env.TOKEN, 'Bearer')
  })
}

// export default function ({ $axios, store, $auth }) {
//   $axios.onRequest((config) => {
//     $axios.setToken('DB5', 'Bearer')
//   })
// }
// export default function ({ $axios, store, $auth }) {
//   $axios.onRequest((config) => {
//     $axios.setToken($auth.user.name, 'Bearer')
//   })
// }
// export default function ({ $axios, store }, $auth) {
//   $axios.onRequest((config) => {
//     $axios.setToken($auth.login, 'Bearer')
//   })
// }
