const acordes = [
  { nombre: "C", tipo: 1 },
  { nombre: "Db", tipo: 1 },
  { nombre: "D", tipo: 1 },
  { nombre: "Eb", tipo: 1 },
  { nombre: "E", tipo: 1 },
  { nombre: "F", tipo: 1 },
  { nombre: "Gb", tipo: 1 },
  { nombre: "G", tipo: 1 },
  { nombre: "Ab", tipo: 1 },
  { nombre: "A", tipo: 1 },
  { nombre: "Bb", tipo: 1 },
  { nombre: "B", tipo: 1 },
  { nombre: "Cmaj7", tipo: 2 },
  { nombre: "Dbmaj7", tipo: 2 },
  { nombre: "Dmaj7", tipo: 2 },
  { nombre: "Ebmaj7", tipo: 2 },
  { nombre: "Emaj7", tipo: 2 },
  { nombre: "Fmaj7", tipo: 2 },
  { nombre: "Gbmaj7", tipo: 2 },
  { nombre: "Gmaj7", tipo: 2 },
  { nombre: "Abmaj7", tipo: 2 },
  { nombre: "Amaj7", tipo: 2 },
  { nombre: "Bbmaj7", tipo: 2 },
  { nombre: "Bmaj7", tipo: 2 },
  { nombre: "C7", tipo: 3 },
  { nombre: "Db7", tipo: 3 },
  { nombre: "D7", tipo: 3 },
  { nombre: "Eb7", tipo: 3 },
  { nombre: "E7", tipo: 3 },
  { nombre: "F7", tipo: 3 },
  { nombre: "Gb7", tipo: 3 },
  { nombre: "G7", tipo: 3 },
  { nombre: "Ab7", tipo: 3 },
  { nombre: "A7", tipo: 3 },
  { nombre: "Bb7", tipo: 3 },
  { nombre: "B7", tipo: 3 },
  { nombre: "Cm7", tipo: 4 },
  { nombre: "Dbm7", tipo: 4 },
  { nombre: "Dm7", tipo: 4 },
  { nombre: "Ebm7", tipo: 4 },
  { nombre: "Em7", tipo: 4 },
  { nombre: "Fm7", tipo: 4 },
  { nombre: "Gbm7", tipo: 4 },
  { nombre: "Gm7", tipo: 4 },
  { nombre: "Abm7", tipo: 4 },
  { nombre: "Am7", tipo: 4 },
  { nombre: "Bbm7", tipo: 4 },
  { nombre: "Bm7", tipo: 4 },
  { nombre: "Cm7b5", tipo: 5 },
  { nombre: "Dbm7b5", tipo: 5 },
  { nombre: "Dm7b5", tipo: 5 },
  { nombre: "Ebm7b5", tipo: 5 },
  { nombre: "Em7b5", tipo: 5 },
  { nombre: "Fm7b5", tipo: 5 },
  { nombre: "Gbm7b5", tipo: 5 },
  { nombre: "Gm7b5", tipo: 5 },
  { nombre: "Abm7b5", tipo: 5 },
  { nombre: "Am7b5", tipo: 5 },
  { nombre: "Bbm7b5", tipo: 5 },
  { nombre: "Bm7b5", tipo: 5 },
];

const displayNotas = document.getElementById("display");
const inputAcordes = document.getElementById("inputCant");
const inputIntervalo = document.getElementById("inputIntervalo");
const select = document.getElementById("selectTipo");
const boton = document.getElementById("enter");

boton.onclick = () =>{
  const seleccionAcordes = select.value == 0 ? acordes : filtrarAcordes(select.value);
  generarNotas(inputAcordes.value, inputIntervalo.value * 1000, seleccionAcordes);
}

function generarNotas(cantAcordes, intervalo, arrayAcordes) {
  for (let i = 0; i < cantAcordes; i++) {
    setTimeout(() => {
      const rdm = Math.floor(Math.random() * arrayAcordes.length);
      displayNotas.innerHTML = arrayAcordes[rdm].nombre;
    }, i * intervalo);
  }

  setTimeout(() => {
    displayNotas.innerHTML = "";
  }, cantAcordes * intervalo);
}

function filtrarAcordes(i){
  return acordes.filter(a=>a.tipo==i)
}
