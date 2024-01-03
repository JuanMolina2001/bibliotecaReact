const apiUrl = 'http://127.0.0.1:8000/'
const token = '4fd874da3f6471e19609a2fb1ea20c521db380d9'

export const getBooks = async () => {
   const options = {
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Token ${token}`,
      },
   }
   const data = await fetch(`${apiUrl}getLibros/`, options)
   const dataJson = await data.json()
   if (dataJson.detail) {
      throw dataJson.detail
   } else {
      return dataJson
   }
}

class Book {
   constructor({ isbn = null, titulo = null, autor = null, genero = null } = {}) {
      this.isbn = isbn
      this.titulo = titulo
      this.autor = autor
      this.genero = genero
   }
   get = async () => {
      const callApi = fetch(`${apiUrl}getLibro/${this.isbn}`)
      const response = await callApi.then(response => response.json())
      return response
   }
   delete = async () => {
   }
   create = async () => {
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
         },
         body: JSON.stringify(
            {
               'titulo': this.titulo,
               'autor': this.autor,
               'genero': this.genero,
            }
         )
      }
      const callApi = fetch(`${apiUrl}getLibro/${this.isbn}`, options)
      return callApi
   }
   update = async () => {
   }
}
export const book = new Book()