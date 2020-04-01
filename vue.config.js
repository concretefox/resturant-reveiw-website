module.exports = {

  // gives you access to Webpack dev server //
  //The proxy comes etween the backend and front end//
  // Tell axios that any requests are not made to a static address to go here //
  devServer: {
    proxy: 'http://localhost:8080/'
  },
  "transpileDependencies": [
    "vuetify"
  ]
}