const TIJERA = "tijera";

// afecta belleza
export function lazy(gameObject) {
    console.log("LAZY");
    if(gameObject.armas.indexOf(TIJERA)>=0){
        console.log("lazy fue eliminada usando una tijera");
        gameObject.armas.splice(gameObject.armas.indexOf(TIJERA),1);
        gameObject.belleza+=5;
        console.log(gameObject.armas);
    }else{
        console.log("Lazy hace daño");
        if(gameObject.belleza<=0){
            gameObject.fuerza-=2;
            gameObject.carisma-=2;
            gameObject.inteligencia-=2;
            gameObject.total-=6;
        }
        gameObject.belleza-=10;
        gameObject.total-=10;
    }
    return gameObject;
  }
  
  export function obtenerTijera(gameObject) {
    console.log("Ingreso a tijera");
    if(gameObject.belleza<=5){
      if(Math.floor(Math.random() * (10 - 1) + 1)>2){
          if(gameObject.armas.indexOf(TIJERA)===-1){
              gameObject.armas.push(TIJERA);
              console.log("Tijera obtenida");
          }
      }
    }else{
        if(Math.floor(Math.random() * (10 - 1) + 1)<=2){
            if(gameObject.armas.indexOf(TIJERA)===-1){
                gameObject.armas.push(TIJERA);
                console.log("Tijera obtenida");
            }
        }
    }
    return gameObject;
  }