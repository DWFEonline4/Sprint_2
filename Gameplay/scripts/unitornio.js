const GLOBO="globo";
// afecta inteligencia
export function unitornio(gameObject) {
    console.log("unitornio");
    if(gameObject.armas.indexOf(GLOBO)>=0){
        console.log("unitornio fue eliminado usando un globo");
        gameObject.armas.splice(gameObject.armas.indexOf(GLOBO),1);
        gameObject.inteligencia+=5;
        console.log(gameObject.armas);
    }else{
        console.log("Unitornio hace daño");
        if(gameObject.inteligencia<=0){
            gameObject.fuerza-=2;
            gameObject.carisma-=2;
            gameObject.belleza-=2;
            gameObject.total-=6;
        }
        gameObject.inteligencia-=10;
        gameObject.total-=10;
    }
    return gameObject;
  }
  
export function obtenerGlobo(gameObject) {
    console.log("Ingreso a globo");
    if(gameObject.inteligencia<=5){
      if(Math.floor(Math.random() * (10 - 1) + 1)>2){
          if(gameObject.armas.indexOf(GLOBO)===-1){
              gameObject.armas.push(GLOBO);
              console.log("Globo obtenida");
          }
      }
    }else{
        if(Math.floor(Math.random() * (10 - 1) + 1)<=2){
            if(gameObject.armas.indexOf(GLOBO)===-1){
                gameObject.armas.push(GLOBO);
                console.log("Globo obtenida");
            }
        }
    }
    return gameObject;
  }