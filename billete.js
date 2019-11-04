class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }

  mostrar()
  {
    var imagen = new Image();
    imagen.src = imagenes[this.valor];
    resultado.appendChild(imagen);
  }

}
