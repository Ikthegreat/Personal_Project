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
            '@start': './src/views/start/',
            '@survey': './src/views/survey/',
            '@preview': './src/views/preview/',
            '@common': './src/common/',
            '@navigator': './src/navigator/',
            '@recoil': './src/recoil/',
            '@assets': './src/common/assets/',
            '@utils': './src/common/utils/',
            '@widgets': './src/common/widgets/',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
