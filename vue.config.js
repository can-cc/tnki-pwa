module.exports = {
  pwa: {
    name: "Tnki"
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3500/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      },
      "/image": {
        target: "http://localhost:3500",
        changeOrigin: true
      }
    }
  }
};
