//function sumar(x, y) {
    let sumar = (x, y) => {
        console.log(x + y);
        return x + y;
      };
      function restar(x, y) {
        console.log(x - y);
      }
      function multiplicar(x, y) {
        console.log(x * y);
      }
      function dividir(x, y) {
        console.log(x / y);
      }
      
      restar(14, 6);
      multiplicar(2, 90);
      dividir(10, 2);
      
      let divs = document.getElementsByClassName("elementos");
      console.log(divs);
      console.log(divs[1]);
      divs[1].textContent += " FUE MODIFICADO DESDE EL JS";
      
      let resultado = document.createElement("span");
      resultado.id = "spanRes";
      resultado.className = "clase pointer";
      resultado.textContent = sumar(40, 3);
      resultado.onclick = comoYoQuiera;
      
      let divContentPpal = document.getElementById("contet");
      console.log(divContentPpal);
      divContentPpal.innerHTML =
        "<div>la suma de 40 + 3 es: <span id='result'></span></div>";
      let spanResult = document.getElementById("result");
      spanResult.appendChild(resultado);
      
      //divContentPpal.style = "cursor:pointer";
      //divContentPpal.classList.add("pointer");
      
      // transforma las funciones de arriba a arrow
      
      function comoYoQuiera() {
        alert("Hizo Click");
      }
      //divContentPpal.onclick = click;
      //divContentPpal.onclick=()=>{}
      
      let divCuadro = document.getElementById("divClick");
      divCuadro.addEventListener("click", (elemento) => {
          console.log(elemento);
        if (divCuadro.style.backgroundColor === "blue") {
          divCuadro.style = "background-color:crimson";
          divCuadro.classList.add('crimson');
          divCuadro.classList.remove('blue');
        } else {
          divCuadro.style = "background-color:blue";
          divCuadro.classList.add('blue');
          divCuadro.classList.remove('crimson');
        }
        divCuadro.classList.toggle('togglePersonalizado');
      });
      