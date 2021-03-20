const ESTACA = "estaca";
// afecta fuerza
export function zombie(gameObject) {
    console.log("zombie");
    if (gameObject.armas.indexOf(ESTACA) >= 0) {
        console.log("zombie fue eliminado usando una estaca");
        gameObject.armas.splice(gameObject.armas.indexOf(ESTACA), 1);
        gameObject.fuerza += 5;
        console.log(gameObject.armas);
    } else {
        console.log("zombie hace daño");
        if (gameObject.fuerza <= 0) {
            gameObject.carisma -= 2;
            gameObject.inteligencia -= 2;
            gameObject.belleza -= 2;
            gameObject.total -= 6;
        }
        gameObject.fuerza -= 10;
        gameObject.total -= 10;
    }
    return gameObject;
}

export function obtenerEstaca(gameObject) {
    console.log("Ingreso a Estaca");
    if(gameObject.fuerza<=5){
      if(Math.floor(Math.random() * (10 - 1) + 1)>2){
          if(gameObject.armas.indexOf(ESTACA)===-1){
              gameObject.armas.push(ESTACA);
              console.log("Estaca obtenida");
          }
      }
    }else{
        if(Math.floor(Math.random() * (10 - 1) + 1)<=2){
            if(gameObject.armas.indexOf(ESTACA)===-1){
                gameObject.armas.push(ESTACA);
                console.log("Estaca obtenida");
            }
        }
    }
    return gameObject;
}