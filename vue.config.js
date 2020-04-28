module.exports = {
  pwa: {
    name: "Tnki",
    workboxOptions: { skipWaiting: true }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8360/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
};
