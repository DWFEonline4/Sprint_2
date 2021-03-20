const ESPEJO="espejo";

export function megastofeles(gameObject) {
    console.log("MEGATOSFELES");
    if(gameObject.armas.indexOf(ESPEJO)>=0){
        console.log("Heroina usa el espejo");
        gameObject.armas.splice(gameObject.armas.indexOf(ESPEJO),1);
        console.log(gameObject.armas);
    }else{
        console.log("Megastofeles hace daño");
        gameObject.belleza=gameObject.belleza-10;
        gameObject.fuerza-=10;
        gameObject.carisma-=10;
        gameObject.inteligencia-=10;
        gameObject.total-=40;
    }
    return gameObject;
  }
  
  export function obtenerEscudo(gameObject) {
      console.log("Ingreso a escudo");
      if(gameObject.total<=10){
        if(Math.floor(Math.random() * (10 - 1) + 1)>2){
            if(gameObject.armas.indexOf(ESPEJO)===-1){
                gameObject.armas.push(ESPEJO);
                console.log("Escudo obtenido");
            }
        }
      }else{
          if(gameObject.inteligencia>25){
            if(Math.floor(Math.random() * (10 - 1) + 1)<=2){
                if(gameObject.armas.indexOf(ESPEJO)===-1){
                    gameObject.armas.push(ESPEJO);
                    console.log("Escudo obtenido");
                }
            }
          }
      }
      return gameObject;
  }