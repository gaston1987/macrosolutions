module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    https: false,
    port: 8080,
    disableHostCheck: true,
    host: "0.0.0.0",
    open: "Google Chrome",
    progress: true,
    overlay: {
      warnings: false,
      errors: false
    }
  },
}