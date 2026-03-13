var fs=require('fs')
var readStream=fs.createReadStream('f1.txt')
readStream.on('open',function(){
    console.log('FileOpened...')
})