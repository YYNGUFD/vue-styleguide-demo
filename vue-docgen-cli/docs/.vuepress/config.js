const path = require('path')
const glob = require('globby')
const cwd = path.join(__dirname, '..')
const { parse } = require('vue-docgen-api')

const { renameComponentMd} =require('./fileinit.js')  
var vuepressConfig = async () => {
  renameComponentMd(cwd+'/components')
  const docFiles = glob.sync('components/**/*.md', { cwd }).map(f => '/' + f) 
	const components = await Promise.all(
		glob
			.sync('../../components1/**/[a-z].{vue,jsx,ts,tsx}', { cwd, absolute: true })
			.map(async path => {
				return {
					name: (await parse(path)).displayName.replace(/[^a-zA-Z0-9_]/g, ''),
					path
				}
			})
  )
  console.log(docFiles) 
 //引入fs文件目录模块
	return {
		dest: path.join(__dirname, '../../dist'),
		base: '/docgen/',
		title: 'VuePress DocGen Live',
		themeConfig: {
      search: true,
      editLinks: true,
      nav:[ // 导航栏配置
        {text: 'github', link: 'https://github.com/YYNGUFD/vue-styleguide-demo/tree/master/vue-docgen-cli' },  
         
      ], 
      sidebar: docFiles,
      markdown: { // 为每个代码块显示行号
        lineNumbers: true
      }, 
		},
		plugins: [
			['live'],
			[
        '@vuepress/register-components',
        '@vuepress/nprogress',
				{
          //热更新时进行检测文件 但是.md文件如何进行更改后就无法进行热更新检测了
          components, 
          componentsDir: '../../components1' 
				}
			]
		]
	}
} 
vuepressConfig()
module.exports = vuepressConfig;
