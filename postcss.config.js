module.exports = {
    plugins: {
      autoprefixer: {
        // Disable color-adjust feature
        overrideBrowserslist: ['last 2 versions', '> 1%'],
        colorAdjust: false,
      },
    },
  };
  