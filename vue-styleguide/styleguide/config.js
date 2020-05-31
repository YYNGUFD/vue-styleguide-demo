// styleguide.config.js的相关配置

const fs = require('fs');
const path = require('path')

//获取组件目录文件配置
var getComponentFiles =function(path){
    var filesDir =[]; //存储文件夹
    var files = fs.readdirSync(path); //获取当前component的下的文件夹
    files.forEach((file)=>{
      
      var currBaseDir = path+'/'+file;//获取当前文件目录的地址
      var fileStat = fs.statSync(currBaseDir);  //获取当前文件/目录的属性
      if(fileStat.isDirectory()){//如果是文件夹，则是我们需要遍历的文件夹
        var fileChildren = fs.readdirSync(currBaseDir);//获取当前文件目录的子目录结
        var regFile = new RegExp("^(index||"+file+")(.vue)") //正则匹配主要的文件
        fileChildren.forEach((item,index)=>{ 
          var regResult = item.match(regFile)
          if(regResult && regResult.length >0){ 
            var chPath = currBaseDir+'/'+regResult[0];
            filesDir.push(chPath)//将获取到的结果push到文件中
          }
        })
      }
    })
    return filesDir;
}  

//配置忽略的文件夹 path 为当前文件夹下的路径
var getIgnoreFiles =function(path){
  var fileDir =[
    '/iconfont/*.{vue,scss}',
    '/common/*.{vue,scss,js}',
    '/keyboard/*.{vue,scss,js}',
    '/dialog/*.{vue,scss,js}',
  ]
  return fileDir.map((item)=>{
    return path + item
  })
}
var result = getComponentFiles('./src/components')
console.log(result)
module.exports={
  getComponentFiles,
  getIgnoreFiles,
};