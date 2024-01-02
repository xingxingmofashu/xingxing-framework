import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
    shortcuts: {
        'border-base': 'border-gray-300 dark:border-gray-600'
    },
    presets: [
        presetUno(),
        presetIcons(),
        presetAttributify()
    ]
})