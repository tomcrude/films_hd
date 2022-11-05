import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { Contexto } from './_app'
import { Contexto2 } from './_app'

export default function Home({state}) {
  
 

  const [mapeado, setmapeado] = useState(state.slice(0,5))
  
  const active = useContext(Contexto2)
  useEffect(()=>{
    active.setactive(true)
  },[])

  const x = useContext(Contexto)
  const setx = x.setx

  if (x.x == 1)
  {setTimeout(()=>{setmapeado(state.slice(0,5))}, 10)}

  if (x.x == 2)
  {setTimeout(()=>{setmapeado(state.slice(5,10))}, 10)}
  
  if (x.x == 3)
  {setTimeout(()=>{setmapeado(state.slice(10,15))}, 10)}

  return (
    <div>
      <div id='xd'>S</div>
      {mapeado.map((stat)=>{
        let image = require(`../public/${stat.img}`)
        return (
          <div key={stat.id} className="pages-pc">
          <h2>{stat.titulo}</h2>
          <div className='wow'>
          <Image title={stat.titulo} className='imag' src={image} width={350} height={500} alt={stat.titulo}/>
          </div>
          <div className='page'>
          <p className='h4'>{stat.descripcion}</p>
          <div className='container-fluid'>
            <div className='row'>
          <Link href={`film/${stat.id}`}><a  className='see col-sm-12 col-lg-12'>See more</a></Link>
          </div>
          </div>
          </div>
          </div>
          
        )
      })} 
       
    <div className='row pagea'>
      <a href='#xd' onClick={()=>{ setx(1)}} className={x.x == 1 ? 'col-4 col-lg-4 h2 number' : 'col-4 col-lg-4 h2 number-2' }> 1 </a>
      <a href='#xd' onClick={()=>{ setx(2)}} className={x.x == 2 ? 'col-4 col-lg-4 h2 number' : 'col-4 col-lg-4 h2 number-2' }> 2 </a>
      <a href='#xd' onClick={()=>{ setx(3)}} className={x.x == 3 ? 'col-4 col-lg-4 h2 number' : 'col-4 col-lg-4 h2 number-2' }> 3 </a>
      </div>
      
    </div>
  )
}

export async function getStaticProps(){
  const response = await fetch("https://film1server.herokuapp.com/")
  const state = await response.json()
  return {props:{state}}
}