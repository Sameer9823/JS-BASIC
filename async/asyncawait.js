// async function printResult() {
//     const data = new Promise(() => {
//         setTimeout((resolve, reject) => {
//             console.log("jhfgjha");
            
//         }, 2000)
        
//     })
//     const result = await data;
//     console.log(result);
// }
// printResult();

async function fetchData() {
    try {
        const res = await fetch('https://api.github.com/users/sameer9823')
        let data = await res.json()
        console.log(data);
        
        
    } catch (error) {
        console.log(error);
        
        
    }
}
fetchData()

        
        
        
        
        
        
