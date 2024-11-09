let carrito = [];
let totalCompra = 0;
let descuentoAplicado = false;

function agregarProducto() {
  let precio;
  do {
    precio = parseFloat(prompt("Ingrese el precio del producto (solo números positivos):"));
    if (isNaN(precio) || precio <= 0) {
      alert("Por favor, ingrese un número válido y positivo.");
    }
  } while (isNaN(precio) || precio <= 0);

  carrito.push(precio);
  totalCompra += precio;
  alert("Producto agregado. Total actual: $" + totalCompra.toFixed(2));
}

function aplicarDescuento() {
  if (descuentoAplicado) {
    alert("El descuento ya ha sido aplicado.");
  } else if (totalCompra > 100) {
    totalCompra *= 0.9;
    descuentoAplicado = true;
    alert("¡Descuento aplicado! Nuevo total: $" + totalCompra.toFixed(2));
  } else {
    alert("No aplica descuento. Total: $" + totalCompra.toFixed(2));
  }
}

function irAPagar() {
  alert("Subtotal con descuento aplicado: $" + totalCompra.toFixed(2));
  
  let continuar = prompt("¿Desea continuar comprando o finalizar?\n1. Continuar comprando\n2. Finalizar compra");

  if (continuar === "1") {
    alert("Puede seguir comprando.");
  } else if (continuar === "2") {
    alert("Gracias por su compra. Total a pagar: $" + totalCompra.toFixed(2) + "\n¡Vuelva pronto!");
    return true;
  } else {
    alert("Opción no válida, regresando al menú principal.");
  }
  return false;
}

function simuladorEcommerce() {
  let opcion;

  while (true) {
    opcion = prompt(
      "Seleccione una opción:\n1. Agregar producto\n2. Aplicar descuento\n3. Ir a pagar\n4. Salir"
    );

    if (opcion === "1") {
      agregarProducto();
    } else if (opcion === "2") {
      aplicarDescuento();
    } else if (opcion === "3") {
      let finalizarCompra = irAPagar();
      if (finalizarCompra) break;
    } else if (opcion === "4") {
      alert("Gracias por usar el sistema!");
      break;
    } else {
      alert("Opción no válida, intente nuevamente.");
    }
  }
}

simuladorEcommerce();