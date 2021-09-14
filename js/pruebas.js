function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos un caracter.",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "2222222222222222222222222222222222222222222222222222222222222222"
    ) === "Este campo debe tener menos de 50 caracteres.",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("Junior") === "",
    "La función validar nombre no funcionó con un nombre correcto."
  );

  console.assert(
    validarNombre("2121aaa") === "El campo nombre solo acepta letras.",
    "Validar nombre no valido que el nombre tenga solo letras"
  );
}
function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Este campo debe tener seleccionado una ciudad.",
    "Validar ciudad no validó que se haya seleccionado una ciudad."
  );

  console.assert(
    validarCiudad("Mendoza") === "",
    "Validar ciudad no funciomó con una ciudad correcta."
  );
}
function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") ===
      "Este campo debe tener al menos un caracter.",
    "Validar descripción regalo no valido que la descripción sea vacío"
  );

  console.assert(
    validarDescripcionRegalo(
      "asasasasassaaaaaasasasasasasasasasasasasasaassasssassasasasasaassasasaasassasasasassasasasasassasaaasasasasasa"
    ) === "Este campo debe tener menos de 100 caracteres.",
    "Validar descripción no valido que la descripción tenga menos de 100 caracteres."
  );

  console.assert(
    validarDescripcionRegalo("Quiero una bicicleta") === "",
    "Validar descripción no funcionó con una descripción valida."
  );

  console.assert(
    validarDescripcionRegalo(".,,.") ===
      "El campo descripción solo puede tener numeros y letras.",
    "Validar descripción no valido que descripción tenga solo letras y numeros"
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
