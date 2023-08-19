const ruleta = document.getElementById("ruleta");
const girarBoton = document.getElementById("boton");
const estilo = document.getElementsByTagName("span");
const cua = document.getElementById("cua");
let girando = false

 girarBoton.addEventListener('click', () => {
    /*if (!girando){
        const grados = Math.floor(Math.random() *360) + 1800;//va a girar entre 5 y 7 vueltas
        ruleta.style.transform = `rotate(${grados}deg)`;
        girando = true;

        setTimeout(() => {
            girando = false;
            const gradosFinales = grados%360;
            ruleta.style.transform = `rotate(${gradosFinales}deg)`;
        }, 3000)//detenerse tras 3 segundo
    }*/
girarRuleta();
}); 
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
function getRandom(min,max){
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max-min)+min)
}
function girarRuleta(){
    let giros = 3600 + getRandom(1,360);
    document.documentElement.style.setProperty('--giro',`${giros}`);
    
    let ruletaGirando = document.createElement('IMG');
    ruletaGirando.setAttribute("src","ruleta de 5 colores.bmp");
    ruletaGirando.classList.add('ruleta');
    cua.appendChild(ruletaGirando);

    setTimeout(() =>{
        while (cua.firstChild){
            cua.removeChild(cua.firstChild);
        }
    },8000);
}
function aparecerPregunta(){
    
}