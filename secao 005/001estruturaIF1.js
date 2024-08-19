function soBoaNoticia(nota){
    if (nota >= 7){
        console.log(`Aprovado com ${nota}`);
    };
};

soBoaNoticia(7);
soBoaNoticia(6);

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`Eh verdade... ${valor}`);
    }
}

//Condicoes que dao false
seForVerdadeEuFalo(); //False
seForVerdadeEuFalo(null); //False
seForVerdadeEuFalo(undefined); //False
seForVerdadeEuFalo(NaN); //False
seForVerdadeEuFalo(''); //False
seForVerdadeEuFalo(0); //False

//Condicoes que dao verdadeiro
seForVerdadeEuFalo(-1); //Verdadeiro
seForVerdadeEuFalo(' '); //Verdadeiro
seForVerdadeEuFalo('?'); //Verdadeiro
seForVerdadeEuFalo([]); //Verdadeiro
seForVerdadeEuFalo([1,2]); //Verdadeiro
seForVerdadeEuFalo({}); //Verdadeiro