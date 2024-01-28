import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), svgLoader({defaultImport: 'component'}),],
    resolve: {
        alias: [
            {find: '@', replacement: path.join(__dirname, 'src')},
        ]
    },
})
