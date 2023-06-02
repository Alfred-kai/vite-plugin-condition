# vite-plugin-condition
支持类似uni语法的条件编译插件

## 使用说明

```javascript
import conditionPlugin from 'vite-plugin-condition'
```

## 参数

### conditionType
Type: `string`

### filter
Type: `Regexp`

### fileType
Type: 'js' | 'html' | 'css'

## demo
```javascript
// #ifdef H5
console.log('this_is_H5')
// #endif

// #ifdef MP-WEIXIN
console.log('this_is_weixin')
// #endif
```

```javascript   
import { defineConfig } from "vite";
import conditionPlugin from "vite-plugin-condition";

export default defineConfig({
  publicDir: 'public',
  plugins: [
    vue(),
    conditionPlugin({ conditionType: 'H5' }),
  ]
});
```




