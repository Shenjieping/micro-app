module.exports = {
  configureWebpack: {
    output: {
      library: 'singleVue',
      libraryTarget: 'umd'
    },
    devServer: {
      port: 10000
    }
  }
};

/* 
  window.singleVue 下就有 bootstrap/mount/unmount了
 */