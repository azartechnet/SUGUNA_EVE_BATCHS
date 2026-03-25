var fs=require('fs')
var rs=fs.createReadStream('f1.txt')
rs.on('open',function(){
    console.log('FileOpened...')
})