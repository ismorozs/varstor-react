module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: `./varstor-react.js`,
    library: "VarstorReact",
    libraryTarget: "umd",
    globalObject: "this",
  },
  mode: "development",
  watch: true,

  stats: {
    colors: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "babel-loader",
        exclude: ["/node_modules/"],
      },
    ],
  },

  externals: {
    react: "react",
    varstor: "varstor",
    "react/jsx-runtime": "react/jsx-runtime",
  },

  resolve: {
    extensions: [".ts", ".tsx"],
  },

  devtool: false,
};
