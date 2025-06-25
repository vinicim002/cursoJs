let x = 50;

function fora(){
    let x = 1000;
    function somarXMais3(){
        return x + 3;
    };
    return somarXMais3;
}



module.exports = fora();