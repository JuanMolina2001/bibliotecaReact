import {useEffect, useState} from 'react'
import './auth.css'
import { LoginComponent } from './login/login'
import { RegistroComponent } from './registro/registro'
export const MainLogin = () => {
  const [login, setLogin] = useState(true)

  useEffect(() => {
    const form = document.querySelector('#form')
    const image = document.querySelector('#image')
    const arrow = document.querySelector('#arrow')

    if (!login) {

      form.classList.add('move-left')
      image.classList.add('move-right')
      setTimeout(() => {
        arrow.classList.remove('arrow-right')
        arrow.classList.add('arrow-left')
      }, 200)

    } else {
      form.classList.remove('move-left')
      image.classList.remove('move-right')
      arrow.classList.remove('move-right')
      setTimeout(() => {
        arrow.classList.add('arrow-right')
        arrow.classList.remove('arrow-left')
      }, 200)


    }
  }, [login])



  return (
    <div className='position-relative vh-100 vw-100'>
      <div className='position-absolute start-0 w-50 h-100' id='form'>
        <div className='h-100 position-relative'>
          {login ? <LoginComponent /> : <RegistroComponent />}
          <button onClick={() => { setLogin(!login) }} className='position-absolute arrow arrow-right' id='arrow' ></button>
        </div>
      </div>
      <div className='position-absolute end-0 w-50 h-100 image' id='image'>
      </div>
    </div>
  )
}
