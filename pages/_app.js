import Head from 'next/head'
import Link from 'next/link'
import "../styles/module.css"
import { createContext, useEffect, useState } from 'react'

export const Contexto2 = createContext({})

export const Contexto = createContext({})

function MyApp({ Component, pageProps }) {
  
  const [x, setx] = useState(1)

  const [active, setactive] = useState(true)

  
  return (
   <Contexto2.Provider value={{active,setactive}}>
  <Contexto.Provider value={{x,setx}}>
   <Head>
        <title>Film-HD</title>
        <meta name="keywords" content="film, films, wiki, infor,filminfo," /> 
        <meta name="descripcion" content="movie information website" />   


        <meta name="author" content="angelo smorlesi" /> 
        <meta name="copyright" content="none" /> 
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
  </Head>

  <header className={active ? 'container-fluid house' : 'container-fluid'}>
    <div className='row '>
     <div className='col-12 bg-dark '>
      <div className='row'>   
      <Link href='/'><a onClick={()=>{setx(1)}} className="col-5 col-xl-5 display-4 home">HOME</a></Link>
      
      </div>
     </div>
    </div>
  </header>
  <div className='container'>
  <Component {...pageProps} />
  </div>
  <footer className={active ? "active" : "inactive"}>
    <div className='container-fluid'>
  <div className='row foote '>
        <div className='col-12 bg-dark'>
      <p className='p-3 copy'>© 2022 Film-hd online-films, All rights reserved</p>
     </div>
     </div>
    </div>
  </footer>

  </Contexto.Provider>
  </Contexto2.Provider>
  )
}

export default MyApp
