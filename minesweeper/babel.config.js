module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@common': './src/common/',
            '@navigator': './src/navigator/',
            '@recoil': './src/recoil/',
            '@game': './src/views/game/',
            '@start': './src/views/start/',
          },
        },
      ],
    ],
  };
};
