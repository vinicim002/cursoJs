// new Object -> Object.prototype

const objA = {
    chaveA: 'A'
};

// new Object -> Object.prototype

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA);

console.log(objB.chaveA);