const fs = require('fs');
const path = require('path');

// Путь к директории, где находятся ваши SVG
const svgDir = path.resolve(__dirname, './src/core/assets/svgs');

// Путь к index.ts, который будет сгенерирован
const outputFile = path.resolve(__dirname, './src/components/assetImgsAndComponents/svgs/index.ts');

// Получаем все файлы в папке svgDir
const svgFiles = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'));

// Функция для преобразования строки с тире в camelCase
const toCamelCase = (str) => {
  return str
    .split('-')
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join('');
};

// Создаем массив строк для импорта и экспорта
const importStatements = svgFiles.map((file) => {
  const componentName = toCamelCase(path.basename(file, '.svg')); // Название файла без расширения
  return `import ${componentName} from '../../../core/assets/svgs/${file}';`;
});

const exportStatements = svgFiles.map((file) => {
  const componentName = toCamelCase(path.basename(file, '.svg')); // Название файла без расширения
  return `export { ${componentName} };`;
});

// Объединяем импорты и экспорты
const fileContent = `${importStatements.join('\n')}\n\n${exportStatements.join('\n')}`;

// Записываем все в файл index.ts
fs.writeFileSync(outputFile, fileContent);

console.log(`Successfully generated exports for ${svgFiles.length} SVG files.`);
