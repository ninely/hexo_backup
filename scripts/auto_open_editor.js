var exec = require('child_process').exec;
// Hexo 2.x �û��������
// hexo.on('new', function(path){
  // exec('start  "markdown�༭������·��.exe" ' + path);
// });
// Hexo 3 �û��������
hexo.on('new', function(data){
  exec('start  "C:/Software/work/Sublime Text 3.exe" ' + data.path);
});