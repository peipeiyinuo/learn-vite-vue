import {defineConfig, loadEnv} from 'vite'
import {visualizer} from 'rollup-plugin-visualizer'
import vue from '@vitejs/plugin-vue'

const baseConfig = {
  buildTest:{
    terserOptions:{
      //打包后移除console和注释
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    plugins:[ vue(), visualizer({open: true}),]
  },
  test:{
    terserOptions:{
      //打包后移除console和注释
      compress: {
        drop_console: false,
        drop_debugger: false,
      },
    },
    plugins:[ vue(), visualizer({open: true}),]
  }
}

// https://vitejs.dev/config/
export default defineConfig(({command, ssrBuild, mode}) => {
  const env = loadEnv(mode, './', 'VITE')
  console.log('command', command, 'mode', mode, 'ssrBuild', ssrBuild)

  let config = baseConfig[mode]
    if (command === 'serve') {
        config = {plugins: [vue()]}
    }
    if (command === 'build' && mode === 'test') {
        const testConfig = {

        }
        config = { ...baseConfig['buildTest'],...testConfig}
    }
    console.log('envs', env,)
    return config
})
