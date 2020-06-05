// 1) los objetos se definen y se organizan en una estructura que se llama "class"	
class Producto {
    // 2) "constructor" están en el interior de las clases y se configuran: qué propiedades configuran al objeto y qué valor toma esa propiedad.
                constructor(id, n, s, p, i, m) {
                    this.id = id
                    this.nombre = n
                    this.stock = s
                    this.precio = p
                    this.imagen = i
                    this.marca = m
                    this.estado = false
                    this.vDOM = document.createElement("article")  //abreviatura de Virtual DOM
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
                    this.vDOM.classList.add("col-4")

                    this.vDOM.innerHTML = `
                            <div class="card h-100">
                                <a href="#">
                                    <img class="card-img-top img-fluid" src="${this.imagen}"  alt="${this.nombre}">
                                </a>
                                <div class="card-body">
                                    <h4 class="card-title"><a href="#">${this.nombre}</a> <span class="badge badge-pill badge-success float-right">$${ parseFloat(this.precio).toFixed(2) }</span></h4>
                                    <p class="card-text">${ parseInt(this.stock) } unid.</p>
                                    <button  class="btn btn-warning btn-editar float-left ${ ( auth2 && auth2.isSignedIn.get()) ? "d-block" : "d-none" }">Editar</button>
                                    <button  class="btn btn-primary btn-ver float-right">ver +</button>
                                </div>
                            </div> ` // si existe la variable, y si estoy logueado
                        if (this.estado == false) {                // La interfaz no está anexada al dom
                        document.querySelector("#productos-destacados").appendChild(this.vDOM)
                        this.estado = true
                        }

                        this.vDOM.querySelector(".btn-editar").onclick = () => {

                            console.log("Está logueado?")
                            console.log( auth2.isSignedIn.get() )

                            if( auth2.isSignedIn.get() ) {
                        this.marca = prompt("ingrese nueva marca:", this.marca )
                        this.nombre = prompt("Ingrese nuevo nombre:", this.nombre)
                        this.stock = prompt("ingrese nuevo Stock:", this.stock)
                        this.precio = prompt("ingrese nuevo precio:", this.precio)
                        this.imagen = prompt("ingrese nueva imagen:", this.imagen)
                        // Re renderizar la interfaz
                        this.Mostrar()

                        //Aca voy a enviar los nuevos datos al servidor
                        let datos = new FormData()
                        datos.append("marca", this.marca)
                        datos.append("nombre", this.nombre)
                        datos.append("stock", this.stock)
                        datos.append("precio", this.precio)
                        datos.append("imagen", this.imagen)

                        let config = {
                            method : "POST" ,
                            headers: {
                                "Content-Type" : "application/x-www-form-urlencoded"    //forma en la que los formularios envian la información (por default)
                  //              "Content-Type" : "application/multipart-form-data"    //para mandar archivos (gralmente imagenes)
                  //              "Content-Type" : "application/json"                    //para mandar json    
                            } ,
                            body : datos

                        }

                        fetch("https://webhook.site/6ee394cf-3b0d-4472-8550-52ee64ebd1df", config)
                        console.log(this)

                    }else {
                        alert("Acceso denegado")
                    }
                    }

                    this.vDOM.querySelector(".btn-ver").onclick = () => {
                        
                       const path = (`/MT-${this.id}-${this.nombre.split(" ").join("-")}`).toLowerCase()

                       console.log(path)

                       
                       
                        


                        const HTML = document.querySelector("#producto")

                        HTML.querySelector("#producto-imagen").src = this.imagen
                        HTML.querySelector("#producto-nombre").innerText = this.nombre
                        HTML.querySelector("#producto-precio").innerText = "$" + this.precio
                        HTML.querySelector("#producto-detalle").innerText = "Lorem ipsum dolor sit amet..."
                        HTML.classList.remove("d-none")

                        document.querySelector("#productos-destacados").classList.add("d-none")
                       
                        window.history.pushState({}, path, window.location.origin + path)
                    
                    }
                    		
                    
                }	



                Descuento(cupon) { //METODO DE INSTANCIA 
                    if (cupon == "AUH2020") {
                        this.precio = this.precio * (1-0.15)
                    }

                }	
                
            static armarCatalogo(objetos, rango){ //METODOS DE CLASE O ESTÁTICOS
                let productos = objetos.map( ({idProducto, Nombre, Stock, Precio, Imagen, Marca}) => new Producto (idProducto, Nombre, Stock, Precio, Imagen, Marca))
				let resultado = ( rango ) ? productos.filter( producto => producto.precio < rango.max && producto.precio > rango.min ) : productos
                //si se cumple "rango" (en este caso si existe "rango") hacer lo primero, si no hace lo otro
				return resultado
            }
        }

                