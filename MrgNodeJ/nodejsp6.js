//setTimeout using file
var f1=require('fs')
f1.writeFile('f2.txt','welcome to nodejs',function(err){
    if(err)
    {
        console.log(err)
    }
    else
    {
        setTimeout(function(){
            console.log("welcome to the setTimeout")
        },2000)
        console.log("File Created..")
    }
})
//read the file after 3 seconds
f1.readFile('f2.txt',function(err,data){
    if(err)
    {
        console.log(err)
    }
    else
    {
        setTimeout(function(){
            console.log(data.toString())
        },10000)
    }
})