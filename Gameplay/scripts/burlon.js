const LINTERNA = "linterna";
// afecta carisma
export function burlon(gameObject) {
    console.log("burlon");
    if(gameObject.armas.indexOf(LINTERNA)>=0){
        console.log("burlon fue eliminado usando una linterna");
        gameObject.armas.splice(gameObject.armas.indexOf(LINTERNA),1);
        gameObject.carisma+=5;
        console.log(gameObject.armas);
    }else{
        console.log("burlon hace daño");
        if(gameObject.carisma<=0){
            gameObject.fuerza-=2;
            gameObject.inteligencia-=2;
            gameObject.belleza-=2;
            gameObject.total-=6;
        }
        gameObject.carisma-=10;
        gameObject.total-=10;
    }
    return gameObject;
  }
  
  export function obtenerLinterna(gameObject) {
    console.log("Ingreso a Linterna");
    if(gameObject.carisma<=5){
      if(Math.floor(Math.random() * (10 - 1) + 1)>2){
          if(gameObject.armas.indexOf(LINTERNA)===-1){
              gameObject.armas.push(LINTERNA);
              console.log("Linterna obtenida");
          }
      }
    }else{
        if(Math.floor(Math.random() * (10 - 1) + 1)<=2){
            if(gameObject.armas.indexOf(LINTERNA)===-1){
                gameObject.armas.push(LINTERNA);
                console.log("Linterna obtenida");
            }
        }
    }
    return gameObject;
  }