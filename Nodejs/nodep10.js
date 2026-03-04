const intervalid=setInterval(()=>{
    console.log("This is keep Running..")
},1000)
//stop after 5 seconds

setTimeout(()=>{
    clearInterval(intervalid)
    console.log("Interval stopped")
},5000)