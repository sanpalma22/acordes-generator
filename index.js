const acordes = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
    "Cmaj7",
    "Dbmaj7",
    "Dmaj7",
    "Ebmaj7",
    "Emaj7",
    "Fmaj7",
    "Gbmaj7",
    "Gmaj7",
    "Abmaj7",
    "Amaj7",
    "Bbmaj7",
    "Bmaj7",
    "C7",
    "Db7",
    "D7",
    "Eb7",
    "E7",
    "F7",
    "Gb7",
    "G7",
    "Ab7",
    "A7",
    "Bb7",
    "B7",
    "Cm7",
    "Dbm7",
    "Dm7",
    "Ebm7",
    "Em7",
    "Fm7",
    "Gbm7",
    "Gm7",
    "Abm7",
    "Am7",
    "Bbm7",
    "Bm7",
    "Cm7b5",
    "Dbm7b5",
    "Dm7b5",
    "Ebm7b5",
    "Em7b5",
    "Fm7b5",
    "Gbm7b5",
    "Gm7b5",
    "Abm7b5",
    "Am7b5",
    "Bbm7b5",
    "Bm7b5",
    "Cm7",
    "Dbm7",
    "Dm7",
    "Ebm7",
    "Em7",
    "Fm7",
    "Gbm7",
    "Gm7",
    "Abm7",
    "Am7",
    "Bbm7",
    "Bm7",
    "Cm7b5",
    "Dbm7b5",
    "Dm7b5",
    "Ebm7b5",
    "Em7b5",
    "Fm7b5",
    "Gbm7b5",
    "Gm7b5",
    "Abm7b5",
    "Am7b5",
    "Bbm7b5",
    "Bm7b5",
    "C7",
    "Db7",
    "D7",
    "Eb7",
    "E7",
    "F7",
    "Gb7",
    "G7",
    "Ab7",
    "A7",
    "Bb7",
    "B7",
    "Cmaj7",
    "Dbmaj7",
    "Dmaj7",
    "Ebmaj7",
    "Emaj7",
    "Fmaj7",
    "Gbmaj7",
    "Gmaj7",
    "Abmaj7",
    "Amaj7",
    "Bbmaj7",
    "Bmaj7"
];


const displayNotas = document.getElementById("display");
const inputAcordes = document.getElementById("inputCant");
console.log(inputAcordes.value)
const inputIntervalo = document.getElementById("inputIntervalo");
const boton = document.getElementById("enter")



boton.onclick=()=>{
    const cantAcordes=inputAcordes.value
    const intervalo=inputIntervalo.value*1000
    generarNotas(cantAcordes,intervalo);
}

function generarNotas(cantAcordes,intervalo) {
  for (let i = 0; i < cantAcordes; i++) {
    setTimeout(() => {
      const rdm = Math.floor(Math.random() * acordes.length);
      displayNotas.innerHTML = acordes[rdm];
    }, i * intervalo);
  }

  setTimeout(() => {
    displayNotas.innerHTML = "";
  }, cantAcordes * intervalo);
}


