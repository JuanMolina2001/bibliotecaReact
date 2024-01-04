import { useEffect, useState } from 'react'
import { User } from '../../../services/user'
import { validRut, validPassword, formatRut } from '../valid'
export const LoginComponent = () => {
  const [password, setPassword] = useState()
  const [rut, setRut] = useState()
  const error = document.getElementById('error')
  const [mensaje, setMensaje] = useState(null)
  useEffect(() => {
    setRut(formatRut(rut))
    if (mensaje === null) {
      if (error) {
        error.style.display = 'none';
      }
    }
    try {
      validRut(rut)
      setMensaje(null)
    } catch (error) {
      setMensaje(error.message)
    }
   if(password === '' || password === undefined){
      setMensaje('Ingrese una contraseña')
   }else{
     setMensaje(null)
   }
  }, [rut, mensaje, error])
  const login = () => {

      new User({ rut: rut, password: password }).signIn()
        .then(data => {
          localStorage.setItem('user', JSON.stringify(data))
        })
        .catch(err => {
          console.log(err)
        })

  }



  return (
    <form action='' className='d-flex justify-content-center align-items-center h-100' >
      <div className='w-75' >
        <div className='my-5' >
          <h5 className='text-center mb-4'>Rut</h5>
          <input type='text' value={rut} onChange={(e) => { setRut(e.target.value) }} className='form-control py-2' placeholder='00.000.000-0' />
        </div>
        <div className='my-5'>
          <h5 className='text-center mb-4'>Contraseña</h5>
          <input type='password' onChange={(e) => { setPassword(e.target.value) }} className='form-control py-2' placeholder='**********' />
        </div>
        <p style={{ display: 'none' }} id='error' className='text-center text-danger'>{mensaje}</p>
        <div className='d-flex justify-content-center'>
          
          <button type='button' onClick={() => {
            if (mensaje === null) {
              login()
            }else{
              error.style.display = 'block'
            }
             }} className="boton btn-red"> Iniciar Sesion </button>
        </div>
      </div>
    </form>
  )
}
