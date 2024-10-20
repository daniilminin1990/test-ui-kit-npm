const fs = require('fs');
const path = require('path');

// Путь к директории, где находятся ваши компоненты
const componentDir = path.resolve(__dirname, './src/core/assets/componentsFromSvg');

// Путь к index.ts, который будет сгенерирован
const outputFile = path.resolve(__dirname, './src/components/assetImgsAndComponents/svgComponents/index.ts');

// Получаем все файлы в папке componentDir
const componentFiles = fs.readdirSync(componentDir).filter(file => file.endsWith('.tsx')); // Предполагается, что компоненты имеют расширение .tsx

// Создаем массив строк для импорта и экспорта
const importStatements = componentFiles.map((file) => {
  const componentName = path.basename(file, '.tsx'); // Название файла без расширения
  return `import ${componentName} from '../../../core/assets/componentsFromSvg/${componentName}';`;
});

const exportStatements = componentFiles.map((file) => {
  const componentName = path.basename(file, '.tsx'); // Название файла без расширения
  return `export { ${componentName} };`;
});

// Объединяем импорты и экспорты
const fileContent = `${importStatements.join('\n')}\n\n${exportStatements.join('\n')}`;

// Записываем все в файл index.ts
fs.writeFileSync(outputFile, fileContent);

console.log(`Successfully generated exports for ${componentFiles.length} components.`);
