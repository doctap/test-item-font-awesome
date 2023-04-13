module.exports = {
  presets: [
    "@babel/env",
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-typescript"
  ],
}

module.exports = function (api) {
  return {
    plugins: ['macros'],
  }
}