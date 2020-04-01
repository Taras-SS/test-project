(main = () => {
    let arr = [];
    const arr_length = 10;
    const min = -100;
    const max = 100;
    for(let i=0; i<arr_length; i++){
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    } 
    
    console.log(arr);
    
    let counter = 0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]%3 == 0 && arr[i]%5 != 0){
            counter++
        }
    }
    
    console.log(counter);
    
})();