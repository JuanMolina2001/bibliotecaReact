import { useState, useEffect } from 'react'
import { validNames, validPassword, validRut, formatRut } from '../../valid'
import { User } from '../../../../services/user'

export const Steps = ({ step, setMensaje , stepID}) => {

    const [rut, setRut] = useState('')
    const [pass1, setPass1] = useState()
    const [pass2, setPass2] = useState()
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')

    useEffect(() => {
        setRut(formatRut(rut))
        if (step === stepID.userData) {
            try {
                validNames(first_name, last_name)
                setMensaje(null)
            } catch (error) {
                setMensaje(error.message)
            }
        }
        if (step === stepID.rut) {
            try {
                validRut(rut)
                setMensaje(null)
            } catch (error) {
                setMensaje(error.message)
            }
        }  
        if (step === stepID.password) {
          try {
            validPassword(pass1, pass2)
            setMensaje(null)
          } catch (error) { 
            setMensaje(error.message)
          }
        }
        if (step === stepID.login) {
            console.log(rut, pass1, first_name, last_name)
            const user = new User({ rut: rut, password: pass1, first_name: first_name, last_name: last_name }).add()
                .then(user => {
                    localStorage.setItem('user', JSON.stringify(user))
                    window.location.href = '/'
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [step, rut, pass1, first_name, last_name])

    if (step === stepID.userData) {
        return (
            <div>
                <div className='my-5' >
                    <h5 className='text-center mb-4'>Nombre</h5>
                    <input onChange={(e) => { setFirstName(e.target.value) }} value={first_name} type='text' className='form-control py-2' placeholder='Nombre' />
                </div>
                <div className='my-5'>
                    <h5 className='text-center mb-4'>Apellido</h5>
                    <input onChange={(e) => { setLastName(e.target.value) }} value={last_name} type='text' className='form-control py-2' placeholder='Apellido' />
                </div>
            </div>
        )
    }
    if (step === stepID.rut) {

        return (
            <div>
                <div className='my-5' >
                    <h5 className='text-center mb-4'>Rut</h5>
                    <input onChange={(e) => { setRut(e.target.value) }} value={rut} type='text' className='form-control py-2' placeholder='00.000.000-0' />
                </div>
            </div>
        )
    }
    if (step === stepID.password) {
        return (
            <div>
                <div className='my-5' >
                    <h5 className='text-center mb-4'>Contraseña</h5>
                    <input onChange={(e) => { setPass1(e.target.value) }} value={pass1} type='password' className='form-control py-2' placeholder='**********' />
                </div>
                <div className='my-5'>
                    <h5 className='text-center mb-4'>Repite la Contraseña</h5>
                    <input onChange={(e) => { setPass2(e.target.value) }} value={pass2} type='password' className='form-control py-2' placeholder='**********' />
                </div>
            </div>
        )
    }
}