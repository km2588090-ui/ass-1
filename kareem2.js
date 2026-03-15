//Q1
//function showroad()
//{
//    console.log({
//      __filename,
//      __dirname
//});
//}
//showroad();
//---------------------------
//Q2
//const path=require('path')
//function getpath(filepath)
//{
//    return path.basename(filepath)
//}
//console.log(getpath(filepath))
//----------------------------
//Q3
//const path = require('path')
//function buildPath(obj) {
//    return path.format({
//       dir: obj.dir,
//        name: obj.name,
//        ext: obj.ext
//    });
//}
//console.log(buildPath(obj))
//------------------------------
//Q4
//const path = require('path')
//function getExtension(filePath) {
//   return path.extname(filePath);
//}
//console.log(getExtension('filepath'))
//Q5
//const path = require('path')
//function parsePath(filePath)
 //{
//    const result = path.parse(filePath)
//    return {
//        name:result.name,
//        ext:result.ext
//    }
//}
//console.log(parsePath('/home/app/main.js'))
//Q6
//const path = require('path')
//function check(filePath) {
//    return path.isAbsolute(filePath)
//}
//console.log(check(filepath));
//Q7
//const path = require('path')
//function joinpaths(a,b,c)
//{
//    return path.join(a,b,c)
//}
//console.log(joinpaths("src","components","App.js"))
//----------------------------
//Q8
//const path = require('path')
//function resolvepath(filepath)
//{
//    return path.resolve(filepath)
//}
//console.log(resolvepath('./index.js'))
//----------------------------
//Q9
//const path = require('path')
//function joinTwo(a,b)
//{
//    return path.join(a,b)
//}
//console.log(joinTwo('/folder1','folder2/file.txt'))
//----------------------------
//Q10
//const fs = require('fs')
//function deletefile(filepath)
//{
//    fs.unlink(filepath,(err)=>{
//        console.log('The file.txt is deleted.')
//    })
//}
//deletefile(filepath)
//----------------------------
//Q11
//const fs = require('fs')
//function createfolder(name)
//{
//    fs.mkdirSync(name)
//    console.log("Success")
//}
//createfolder(folder)
//----------------------------
//Q12
//const EventEmitter = require('events')
//const emitter = new EventEmitter()
//emitter.on('start',()=>{
//    console.log('Welcome event triggered!')
//})
//emitter.emit('start')
//----------------------------
//Q13
//const EventEmitter = require('events')
//const emitter = new EventEmitter()
//emitter.on('login',(username)=>{
//    console.log('User logged in: '+username)
//})
//emitter.emit('login','Ahmed')
//----------------------------
//Q14
//const fs = require('fs')
//function readfile(filepath)
//{
//    const data = fs.readFileSync(filepath,'utf8')
//    console.log('the file content => '+data)
//}
//readfile('./notes.txt')
//----------------------------
//Q15
//const fs = require('fs')
//function writeasync(path,content)
//{
//    fs.writeFile(path,content,(err)=>{
//        console.log('done')
//    })
//}
//writeasync('./async.txt','Async save')
//----------------------------
//Q16
//const fs = require('fs')
//function checkdir(filepath)
//{
//    return fs.existsSync(filepath)
//}
//console.log(checkdir("./notes.txt"))
//----------------------------
//Q17
//const os = require('os')
//function getos()
//{
//    return {
//        Platform:os.platform(),
//        Arch:os.arch()
//    }
//}
//console.log(getos())