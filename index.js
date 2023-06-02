"use strict";
import { preprocess } from './lib/preprocess.js'

const conditionPlugin = ({ conditionType = 'H5', filter, fileType = 'js' }) => {
  return {
    name: 'vite-plugin-condition',
    enforce: 'pre',
    transform(code, id) {
      let newConditionType = conditionType
      let newFileType = fileType === 'css' ? 'js' : fileType
      if (filter && filter.test(id)) {
        return preprocess(code, { [newConditionType]: true }, { type: newFileType })
      }
      return preprocess(code, { [newConditionType]: true }, { type: newFileType })
    },
  }
}

export default conditionPlugin
