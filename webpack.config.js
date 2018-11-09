module.exports = {
  // Uncomment when debugging
  // devtool: 'eval-cheap-module-source-map',
  entry: {
    main: './src/index.js',
    demo: './demo.js',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\..interpreted.js$/,
        use: [
          {
            loader: 'raw-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      }
    ],
  },
};
