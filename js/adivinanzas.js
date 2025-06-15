const adivinanzas = [{ //0
    acertijo: "Tiene cuello, pero no cabeza y ayuda en la mesa.",
    solucion: "la botella",
    emoji: "🍾"
  },
  { //1
    acertijo: "Es una planta con una flor, que gira y gira buscando el sol",
    solucion: "el girasol",
    emoji: "🌻"
  },
  { //2
    acertijo: "Es pequeño como una pera, pero alumbra la casa entera.",
    solucion: "el foco",
    emoji: "💡"
  },
  { //3
    acertijo: "Es larga y de lana, y cuando hace frío se la pone mi hermana.",
    solucion: "la bufanda",
    emoji: "🧣"
  },
  { //4
    acertijo: "Soy bonito por delante y algo feo por detrás,<br>me transformo a cada instante ya que imito a los demás.",
    solucion: "el espejo",
    emoji: "🪞"
  },
  { //5
    acertijo: "Ya ves, ya ves, tan claro que es y no adivinas de aquí a un mes.",
    solucion: "las llaves",
    emoji: "🔑"
  },
  { //6
    acertijo: "Te la digo y no me entiendes, te la repito y no me comprendes.",
    solucion: "la tela",
    emoji: "👕"
  },
  { //7
    acertijo: "No es cama ni es león y desaparece en cualquier rincón.",
    solucion: "el camaleon",
    emoji: "🦎"
  },
  { //8
    acertijo: "Blanca por dentro, verde por fuera,<br>si quieres que te lo diga, espera.",
    solucion: "la pera",
    emoji: "🍐"
  },
  { //9
    acertijo: "Si tú me quieres comer, me verás marrón y peludo,<br>y no me podrás romper porque por fuera soy duro.",
    solucion: "el coco",
    emoji: "🥥"
  },
  { //10
    acertijo: "Soy redonda como el mundo, al abrirme me desgajan,<br> me reducen a pellejo y todo el jugo me sacan.",
    solucion: "naranja",
    emoji: "🍊"
  },
  { //11
    acertijo: "La han sacado del mar, es blanca y también salada.<br>La encuentras en la ensalada.",
    solucion: "la sal",
    emoji: "🧂"
  },
  { //12
    acertijo: "Tiene dientes, pero no puede comer.",
    solucion: "el peine",
    emoji: "🪮"
  },
  { //13
    acertijo: "Cuando me caliento hasta los talones, aliso camisas y pantalones.",
    solucion: "la plancha",
    emoji: "🥌"
  },
  { //14
    acertijo: "Sube llena y baja vacía. Si no se da prisa, la sopa se enfría.",
    solucion: "la cuchara",
    emoji: "🥄"
  },
  { //15
    acertijo: "Me hago más pequeño cada vez que me baño.",
    solucion: "el jabón",
    emoji: "🧴"
  },
  { //16
    acertijo: "El papá de Marta tiene 4 hijas.<br>Sus nombres son: Nana, Nena y Nina. ¿Cómo se llama la otra hija?",
    solucion: "Marta",
    emoji: "🧏🏽‍♀️"
  },
  { //17
    acertijo: "Sin ser árbol tiene hojas. Tiene tapa sin ser olla.",
    solucion: "el libro",
    emoji: "📕"
  },
  { //18
    acertijo: "Si no lo sabes no importa.<br>Pero ¿qué cosa será que cuanto más larga, más corta?",
    solucion: "las tijeras",
    emoji: "✂️"
  },
  { //19
    acertijo: "A veces blanquitas, a veces negritas y siempre bolitas.",
    solucion: "las uvas",
    emoji: "🍇"
  },
  { //20
    acertijo: "Sin ojos y puede llorar. Sin alas, y puede volar. ",
    solucion: "la nube",
    emoji: "☁️"
  },
]

let nRandom = 0; // importante en caso de que en C hagamos un contador, lo inciamos en 0, luego con el bucle dentro del programa modificamos su valor, aqui es lo mismo, generamos el numero random fuera y modificamos su valor despues en la primera funcion. para que la generacion del numero este declarada la ponemos como variante global y podemos usarla tal cual en las funciones

function seleccionar() {

  //creacion de variables para poner margenes de creacion de numero al azar

  let min = 0;
  console.log(min);
  let max = adivinanzas.length; // nombre del array.length para que tome como valor maximo automaticamente el tamaño del array
  console.log(max);



  nRandom = Math.floor(Math.random() * (max - min + 1)) + min; //Math.floor para que redonde a la baja y no haga numero random al azar
  console.log(nRandom);

  document.getElementById("adivinanza").innerHTML = adivinanzas[nRandom].acertijo; //3 cosas a mostrar 3 sentencias, recordar que imprimimos un atributo de un objeto, de ahi que necesitamos el [] y el .NombreDelObjeto

}                                                                                   // el let solo lo usamos para crear la variable por consiguiente solo aparecera cuando declaremos la variable globalmente

function solucionar() {

  document.getElementById("solucion").innerHTML = adivinanzas[nRandom].solucion;
  document.getElementById("emoji").innerHTML = adivinanzas[nRandom].emoji;

}