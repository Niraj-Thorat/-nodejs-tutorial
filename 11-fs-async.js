// Asynchrounous 
const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/subfolder/first.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
    first = result

    readFile('./content/subfolder/second.txt','utf-8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        second = result
    
        writeFile('./content/result-async',`Here is the result : ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})

console.log('starting the next task')

