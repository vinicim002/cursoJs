const divisivelPor3 = (num) => {
    if(num === 0){
        return false
    }
    return num % 3 === 0;
};

console.log(divisivelPor3(1));