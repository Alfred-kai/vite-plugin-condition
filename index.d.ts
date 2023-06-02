import type { Plugin } from 'vite'

declare module 'vite-plugin-condition'

export interface ConditionPluginSConfig {
  conditionType?: string
  filter?: RegExp
  fileType?: 'js' | 'html' | 'css'
}

export interface conditionPluginStatic {
  (config: ConditionPluginSConfig): Plugin
}

declare const conditionPlugin: conditionPluginStatic

export default conditionPlugin
