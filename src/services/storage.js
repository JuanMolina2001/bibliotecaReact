// import { getStorage } from "firebase/storage";
// import { initializeApp } from "firebase/app";
// import { createClient } from '@supabase/supabase-js'


// ////////////////////////////////firebase/////////////////////////////////////
// const firebaseConfig = {
//   apiKey: "AIzaSyCta8A___zdMoaLAj3-EW5wY8Au0QwWpE4",
//   authDomain: "porfolio-56541.firebaseapp.com",
//   databaseURL: "https://porfolio-56541-default-rtdb.firebaseio.com",
//   projectId: "porfolio-56541",
//   storageBucket: "porfolio-56541.appspot.com",
//   messagingSenderId: "178375222589",
//   appId: "1:178375222589:web:3cfa89d6f30735a8615154"
// };


// const app = initializeApp(firebaseConfig);
// const storageFB = getStorage(app);
// ////////////////////////////////supabase/////////////////////////////////////

// const supabaseUrl = 'https://zpuhyadjcbihxpxljbsu.supabase.co'
// const supabaseKey = import.meta.env.SUPABASE_KEY

// const supabase = createClient(supabaseUrl, supabaseKey)
// const storageSB = supabase.storage

// class fileSB {
//   bucket = 'books'


//   create(filename,file) {
//     supabase.storage.from(this.bucket).upload(filename, file)
//   }
//   getUrl(filename) {
//     const {data} = supabase.storage
//     .from(this.bucket)
//     .getPublicUrl(filename)
//     return data

//   }
// }


// const fileStorage  = new fileSB()

// export {fileStorage }