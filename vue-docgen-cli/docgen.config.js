var path = require('path')
module.exports = {
  componentsRoot: './components', //需要解析的组件目录 相对路径
	components: '**/*.{vue,ts,tsx}', //正则匹配组件的名字
	outDir: './docs/components',//编译后的组件的位置
  // defaultExamples: true
  getDocFileName: (componentPath) =>
     componentPath.replace(/\.vue$/, '.md'), 
  getDocFileName: (componentPath) =>
     componentPath.replace(/\.vue$/, '.md'),
    // templates: {//指定用于呈现组件的函数的对象。
    //   //包装所有其他组件的全局组件模板参见
    //   component: require('templates/component'),
    //   events: require('templates/events'),
    //   methods: require('templates/methods'),
    //   props: require('templates/props'),
    //   slots: require('templates/slots'),
    //   // 如果组件是功能性的，则显示为标记的静态模板
    //   functionalTag: '**functional**'
    // },
    require: [path.join(__dirname, 'global.requires.js')]
}
