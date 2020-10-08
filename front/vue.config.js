module.exports = {
  "devServer": {
    "proxy": "http://ruby:3000",
    "disableHostCheck": true
  },
  "transpileDependencies": [
    "vuetify"
  ]
}