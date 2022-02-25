let imagematual = 1;
let imgarrays = ['lampadaapagada.png' , 'lampadaacesa.png'];


function mudar(){
    if(imagematual == imgarrays.length){
        imagematual = 0;
    }
    document.getElementById('img').src=imgarrays[imagematual]; imagematual++;
}