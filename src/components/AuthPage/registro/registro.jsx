import { useState, useEffect } from 'react'
import { Steps } from './components/steps'


export const RegistroComponent = () => {
  const stepID = {
    userData: 1,
    rut: 2,
    password: 3,
    login: 4
  }
  const [step, setStep] = useState(stepID.userData)
  const [mensaje, setMensaje] = useState(null)
  const error = document.getElementById('error')
  useEffect(() => {
    if(mensaje === null){
      if (error) {
        error.style.display = 'none';
      }
    }
  }, [mensaje, error])
  return (
    <div className='d-flex justify-content-center align-items-center h-100' >
      <div className='w-75' >
        {
          step > stepID.userData ?
            <button className='arrow-left arrow' onClick={() => { setStep(step - 1) }}></button>
            : null
        }
        <Steps step={step} stepID={stepID} setMensaje={setMensaje} />
        <p style={{ display: 'none' }} id='error' className='text-center text-danger'>{mensaje}</p>

        <div className='d-flex justify-content-center'>
          <button onClick={() => {
            if (mensaje === null) {
              error.style.display = 'none'
              setStep(step + 1)

            } else {
              error.style.display = 'block'

            }
          }}
            className="boton btn-black"> Continuar </button>
        </div>

      </div>
    </div>
  )
}
