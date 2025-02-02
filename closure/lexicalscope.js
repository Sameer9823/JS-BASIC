// function outer(){
//     let x = 10;
//     function inner(){
//         console.log('inner', x);
        
//     }
//     function innerTwo(){
//         console.log('innerTwo', x);
//     }
//     innerTwo()
//     inner()
// }
// outer()

// //closure

// function close(){
//     let browser = 'crome'
//     function d(){
//         console.log(browser);
        
//     }
//     return d
// }
// let func = close()
// func()


function outer(){
    let string = "hello world"
    function inner(){
        console.log(string);
        
    }
    return inner
}
const result = outer()
result()
