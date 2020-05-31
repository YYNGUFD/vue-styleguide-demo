// 文件名字初始化
/**
 * 将组件文档目录中index.md替换成目录名字+.md
 * 如 原文件 rAction/index.md=>rAction/rAction.md
 */
const fs = require('fs');
const path = require('path')
var renameComponentMd =function(path){
    var files = fs.readdirSync(path);  
    files.forEach((file)=>{
      //获取当前文件目录的地址
      var currBaseDir = path+'/'+file;
      var fileStat = fs.statSync(currBaseDir); 
      if(fileStat.isDirectory()){
        var fileChildren = fs.readdirSync(currBaseDir);//获取当前文件目录的子目录结
        var indexMd = fileChildren.indexOf('index.md');  
        //当前文件目录中存在index.md 则进行改名字
        if(indexMd>-1){
          var fsChildren = fileChildren[indexMd] 
          var chPath = currBaseDir+'/'+fsChildren;
          if(fs.statSync(chPath).isFile()){
            var renameFile = chPath.replace('index',file) 
            fs.rename(chPath,renameFile,(err)=>{
              if(err){
                console.error(msg)
              }else{ 
              }
            })
          }

        }
      }
    })
} 
module.exports ={
  renameComponentMd
} ;