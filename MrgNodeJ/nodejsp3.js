var f1=require('fs')
f1.open('f1.txt',function(err,fd){
    if(err){
        console.log("error in opening file");
    }
    else{
        console.log("file opened successfully");
        console.log("file descriptor is "+fd);
    }
})

// The first three file descriptors (0, 1, and 2) are reserved by default for standard input, standard output, and standard error, respectively.
// 0: stdin (Standard Input - typically keyboard)
// 1: stdout (Standard Output - typically the console/terminal)
// 2: stderr (Standard Error - also typically the console/terminal for error messages)
// Therefore, the first file opened by a program will usually receive the file descriptor value of 3. 