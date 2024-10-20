// rollup.config.js
const typescript = require('@rollup/plugin-typescript')
const postcss = require('rollup-plugin-postcss')
const url = require('@rollup/plugin-url')
const svgr = require('@svgr/rollup')
const terser = require('@rollup/plugin-terser')
const dts = require('rollup-plugin-dts')
const packageJson = require('./package.json')
const path = require('path') // path.resolve - из Node JS для преобразования относительного пути в абсолютный

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        // file: path.resolve(__dirname, packageJson.main), // Объединенный выход CJS
        file: packageJson.main, // Объединенный выход CJS
        format: 'cjs'
      },
      {
        // file: path.resolve(__dirname, packageJson.module), // Объединенный выход для ESM
        file: packageJson.module, // Объединенный выход для ESM
        format: 'esm'
      }
    ],
    external: ['react/jsx-runtime', ...Object.keys(packageJson.dependencies), ...Object.keys(packageJson.devDependencies)],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      }),
      postcss({
        extract: 'index.css',
        modules: true,
        use: ['sass'],
        minimize: true
      }),
      url({
        include: ['**/*.svg'], // Обрабатывает все SVG файлы
        limit: 8192 // Размер файла, выше которого SVG будет скопирован в виде файла, а не встраиваться как base64
      }),
      // Плагин для обработки SVG как React-компонентов
      svgr({
        icon: false, // Сохраняем оригинальные размеры SVG для корректного отображения
        ref: true, // Добавляем поддержку ref
        memo: true // Используем memo для оптимизации
      }),
      terser()
    ]
  },
  {
    // input: 'dist/esm/index.d.ts',
    // output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
    input: packageJson.types, // Объединенный выход для типов
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.(css|scss)$/]
  }
]
