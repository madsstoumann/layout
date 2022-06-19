/* https://preset-env.cssdb.org/features/ */
const postcssPresetEnv  = require('postcss-preset-env')
const combineSelectors  = require('postcss-combine-duplicated-selectors')
const lib = process.env.npm_lifecycle_event
const inlineMediaQueries = lib === 'lib:media' || lib === 'lib:supports'

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 0,
			autoprefixer: false,
      features: {
        'logical-properties-and-values': false,
        'prefers-color-scheme-query': false,
        'gap-properties': false,
        'custom-properties': false,
        'place-properties': false,
        'not-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'color-functional-notation': false,
        'custom-media-queries': {preserve:inlineMediaQueries}
      }
    }),
		combineSelectors(),
  ]
}