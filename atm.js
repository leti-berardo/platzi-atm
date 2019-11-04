var imagenes = [];
imagenes["100"] = "billete-100.png";
imagenes["50"] = "billete-50.png";
imagenes["20"] = "billete-20.png";
imagenes["10"] = "billete-10.png";
imagenes["5"] = "billete-5.png";

var caja = [];
caja.push(new Billete("100", 100, 10));
caja.push(new Billete("50", 50, 20));
caja.push(new Billete("20", 20, 30));
caja.push(new Billete("10", 10, 10));
caja.push(new Billete("5", 5, 10));
var entregado = [];

var dinero;
var div;
var papeles;

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(bi of caja)
  {
    if(dinero > 0)
    {

      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }

      else
      {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles));
      bi.cantidad = bi.cantidad - papeles;
      dinero = dinero - (bi.valor * papeles);
    }
  }

  if(dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero pobre";
  }
  else
  {
    for(var e of entregado)
    {
      for (var l = e.cantidad; l != 0; l = l-1 )
      {
        e.mostrar();
      }
    }
  }
  actualizacion.innerHTML = "";
  for(b of caja)
  {
    actualizacion.innerHTML += b.cantidad + " de billetes de $" + b.valor + "<br />";
  }
  entregado = [];
}

function borrarBilletes()
{
  resultado.innerHTML = "";
}


var resultado = document.getElementById("resultado");
var actualizacion = document.getElementById("actualizacion");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var limpiar = document.getElementById("limpiar")
limpiar.addEventListener("click", borrarBilletes)
