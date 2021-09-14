function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos un caracter.";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres.";
  }
  if (!/^[a-z]+$/i.test(nombre)) {
    return "El campo nombre solo acepta letras.";
  }
  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Este campo debe tener seleccionado una ciudad.";
  }
  return "";
}

function validarDescripcionRegalo(descripcion) {
  if (descripcion.length === 0) {
    return "Este campo debe tener al menos un caracter.";
  }

  if (descripcion.length >= 100) {
    return "Este campo debe tener menos de 100 caracteres.";
  }

  if (!/^[a-z0-9\s]+$/i.test(descripcion)) {
    return "El campo descripción solo puede tener numeros y letras.";
  }

  return "";
}

function validarFormulario(event) {
  const $form = document.formulario;

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcion = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcion);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo,
  };

  const esExito = manejarErrores(errores) === 0;

  if (esExito) {
    $form.className = "oculto";
    document.querySelector("#exito").className = "";
  }

  event.preventDefault();
}

function manejarErrores(errores) {
  const llaves = Object.keys(errores);
  let contadorErrores = 0;

  llaves.forEach(function (llave) {
    const error = errores[llave];
    const $errores = document.querySelector("#errores");

    if (error) {
      contadorErrores++;
      document.formulario[llave].className = "error";

      const $error = document.createElement("li");
      $error.textContent = error;
      $errores.appendChild($error);
    } else {
      //borrar campo adecuado
      document.formulario[llave].className = "";
    }
  });
  console.log(contadorErrores);
  return contadorErrores;
  // errorNombre = errores.nombre;
  // errorCiudad = errores.ciudad;
  // errorDescripcionRegalo = errores.descripcionRegalo;
  // if (errorNombre) {
  //   document.formulario.nombre.className = "error";
  // } else {
  //   document.formulario.nombre.className = "";
  // }
  // if (errorCiudad) {
  //   document.formulario.ciudad.className = "error";
  // } else {
  //   document.formulario.ciudad.className = "";
  // }
  // if (errorDescripcionRegalo) {
  //   document.formulario["descripcion-regalo"].className = "error";
  // } else {
  //   document.formulario["descripcion-regalo"].className = "";
  // }
}

function main() {
  const $form = document.formulario;
  $form.onsubmit = validarFormulario;
}
main();
