import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react' // Импорт плагина для поддержки React

export default defineConfig({
  plugins: [react()], // Добавляем плагин React
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // Устанавливаем alias для папки src
    }
  }
})
