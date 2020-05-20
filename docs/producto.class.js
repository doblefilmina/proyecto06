// 1) los objetos se definen y se organizan en una estructura que se llama "class"	
class Producto {
    // 2) "constructor" están en el interior de las clases y se configuran: qué propiedades configuran al objeto y qué valor toma esa propiedad.
                constructor(n, s, p, i, m) {
                    this.nombre = n
                    this.stock = s
                    this.precio = p
                    this.imagen = i
                    this.marca = m
            }

            AgregarImagen() {
                 console.log(this)
                    this.foto = this.nombre.replace(/ /g, "-")
                    this.foto = this.foto.toLowerCase()
            }	

            AgregarFuente () {
                this.fuente = this.nombre.replace(/ /g, "-")
                this.fuente = this.fuente.toLowerCase()
                this.fuente = `https://source.unsplash.com/200x200/?${this.fuente}`
            }

            Mostrar() { //METODOS DE INSTANCIA (NECESITAS INSTANCIAR EL PRODUCTO)
	 
                
                let ficha = document.createElement("article")
                    ficha.classList.add("col-4")

                    ficha.innerHTML = `
                            <div class="card h-100">
                                <a href="#">
                                    <img class="card-img-top img-fluid" src="${this.imagen}"  alt="${this.nombre}">
                                </a>
                                <div class="card-body">
                                    <h4 class="card-title"><a href="#">${this.nombre}</a> <span class="badge badge-pill badge-success float-right">$${this.precio.toFixed(2)}</span></h4>
                                    <p class="card-text">${this.stock} unid.</p>
                                    <button class="btn btn-primary float-right">Comprar</button>
                                </div>
                            </div> `

                    document.querySelector("#productos-destacados").appendChild(ficha)		
                    
                }	

                Descuento(cupon) { //METODO DE INSTANCIA 
                    if (cupon == "AUH2020") {
                        this.precio = this.precio * (1-0.15)
                    }

                }	
                
            static armarCatalogo(objetos){ //METODOS DE CLASE O ESTÁTICOS
                let productos = objetos.map( ({Nombre, Stock, Precio, Imagen, Marca}) => new Producto (Nombre, Stock, Precio, Imagen, Marca))
				let resultado = productos.filter( producto => producto.precio < 300 )

				return resultado
            }
    }