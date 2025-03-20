const repetir = (elem, num) => {
    const array = [];

    for(let i=0; i<num; i++){
        array.push(elem);
    }

    return array;
}

console.log(repetir("codigo", 2));
console.log(repetir(7, 3));