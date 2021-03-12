const player = {
  status: {
    carisma: 25,
    fuerza: 25,
    belleza: 25,
    inteligencia: 25
  },
  items: {
    linternas: 0,
    estacas: 0,
    tijeras: 0,
    globos: 0,
    espejo: false
  }
};
let level = 1;
let content = document.getElementById("score");
let result = document.getElementById("result");
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function defineElement() {
    const comparador = Math.floor(Math.random() * 10);
    if (comparador <= 5) {
      return "items";
    } else {
      return "jefe";
    }
    //return comparador <= 5 ? "items" : "jefe";
}
function defineItem() {
    const nombreItems = ["linternas", "estacas", "tijeras", "globos", "espejo"];
    return nombreItems[getRandomInt(5)];
}
function defineBoss() {
  const nameBosses = ["megastofeles","burlonOscuro","lazyViolenta","unitornio","zombieElectrico"];
  return nameBosses[getRandomInt(5)];
}

function init() {
    let title="";
    const elemento = defineElement();
    console.log(elemento);
    if (elemento === "items") {
        const item = defineItem();
        console.log(item);
        title+=`<span>Nivel: ${level} - Elemento: ${elemento} <b>${item}</b></span><br>`;
        if (item !== "espejo") {
            player.items[item]++;
        } else {
            player.items[item] = true;
        }
    } else {
        const boss = defineBoss();
        console.log(boss);
        title+=`<span>Nivel: ${level} - Elemento: ${elemento} <b>${boss}</b></span><br>`;
        switch (boss) {
            case "megastofeles":
                if (player.items.espejo) {
                    player.items.espejo = false;
                } else {
                    player.status.carisma -= 10;
                    player.status.fuerza -= 10;
                    player.status.belleza -= 10;
                    player.status.inteligencia -= 10;
                }
                break;
            case "burlonOscuro":
                //burlonOscuro(player);
                if (player.items.linternas > 0) {
                    player.items.linternas--;
                    player.status.carisma += 5;
                } else {
                    player.status.carisma -= 10;
                }
                break;
            case "lazyViolenta":
                //lazyViolenta(player);
                if (player.items.tijeras > 0) {
                    player.items.tijeras--;
                    player.status.belleza += 5;
                } else {
                    player.status.belleza -= 10;
                }
                break;
            case "unitornio":
                if (player.items.globos > 0) {
                    player.items.globos--;
                    player.status.fuerza += 5;
                } else {
                    player.status.inteligencia -= 10;
                }
                break;
            case "zombieElectrico":
                if (player.items.estacas > 0) {
                    player.items.estacas--;
                    player.status.fuerza += 5;
                } else {
                    player.status.fuerza -= 10;
                }
                break;
            default:
                break;
        }
    }
    imprimirObjeto(title);
    nextLevel();
}

function nextLevel() {
  
  let vida = player.status.carisma + player.status.fuerza + player.status.belleza + player.status.inteligencia;

  if (vida > 0) {
    level++;
    if (level === 11) {
        result.innerText="GANASTE";
    }
    else init();
  }
  else{
    result.innerText="PERDISTE";
  }
}

let imprimirObjeto = (html)=>{
    html = "<div>"+html;
    html+=`<span>Carisma: ${player.status.carisma}</span><span>Fuerza: ${player.status.fuerza}</span><span>Belleza: ${player.status.belleza}</span><span>Inteligencia: ${player.status.inteligencia}</span><br>`;
    html+=`<span>Linternas: ${player.items.linternas}</span><span>Estacas: ${player.items.estacas}</span><span>Tijeras: ${player.items.tijeras}</span><span>Globos: ${player.items.globos}</span><span>Espejo: ${player.items.espejo}</span><br>`;
    html+="</div>";
    content.innerHTML+=html;
}
init();