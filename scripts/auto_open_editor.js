var exec = require('child_process').exec;
// Hexo 2.x 用户复制这段
// hexo.on('new', function(path){
  // exec('start  "markdown编辑器绝对路径.exe" ' + path);
// });
// Hexo 3 用户复制这段
hexo.on('new', function(data){
  exec('start  "C:\Software\work\Sublime Text 3.exe" ' + data.path);
});