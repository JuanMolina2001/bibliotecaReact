const validPassword = (pass1, pass2) => {
  if (pass1 !== undefined && pass2 !== undefined && pass1 !== '' && pass2 !== '') {
    if (pass1 === pass2) {
      if (pass1.length > 8) {
        return true;
      } else {
        throw new Error('La contraseña debe tener más de 8 caracteres');
      }
    } else {
      throw new Error('Las contraseñas no coinciden');
    }
  } else {
    throw new Error('Las contraseñas no pueden estar vacías');
  }
};

//esto es un ejemplo de como se puede hacer una validacion de un rut no es la mejor forma.
//no verifica el numero verificador  00.000.000-0 <- este, solo verifica la longitud y formatea el rut
const validRut = (rut) => {
  if (rut !== '' && rut !== undefined) {

    if (rut.length === 11 || rut.length === 12) {
      return true
    } else {
      const validError = new Error('Ingrese un rut valido')
      throw validError
    }
  } else {
    const validError = new Error('El rut no puede estar vacio')
    throw validError
  }
}

const validNames = (first_name, last_name) => {
  if (first_name && last_name) {
    return true
  } else {
    const validError = new Error('Completa los campos')
    throw validError
  }
}

const formatRut = (rut) => {
  if (rut === undefined || rut === '') {
    return ''
  }
  rut = rut.replace(/[^0-9kK]+/g, '');
  rut = rut.split('');
  rut.splice(rut.length - 7, 0, '.');
  rut.splice(rut.length - 4, 0, '.');
  rut.splice(rut.length - 1, 0, '-');
  rut = rut.join('');
  return rut;
}

export { validPassword, validRut, validNames, formatRut }

