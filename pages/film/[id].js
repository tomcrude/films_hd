import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react';
import { Contexto } from '../_app';
import { Contexto2 } from '../_app';

export default function Home({state}) {
 

 const active = useContext(Contexto2)


  const x = useContext(Contexto)
 

  active.setactive(false)
 
  return (
    
    <div>
    <Head>
      <title>{state.titulo}</title>
      <meta name="descripcion" content={state.descripcion} /> 
    </Head>

    <h1 className='h1 text-center mb-4 decoration'>{state.titulo}</h1>
    
    <div className="gain text-center">
    <h2> Calification: {state.calificacion}</h2>
    <h3>Director: {state.director}</h3>
    <p>Actors: {state.actores}</p>
    <p>Duration: {state.duracion}</p>
    <p>Date: {state.fecha}</p>
    <p>Description: {state.descripcion}</p>
    </div>
    <div className='container'>
    <div className='row'>
    <Link href="/"><a className='see col-12  mb-4 mt-5'>Return</a></Link>
    </div>
    </div>
    </div>

  )
}

export async function getStaticPaths(){
  try {
    const res = await fetch("https://film1server.herokuapp.com/")
    const state = await res.json()
    const paths = state.map((stat)=>{
      return ({
        params: {
          id: `${stat.id}`}})})
          return {
            paths,fallback: false
          }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticProps({params}){
  const res = await fetch("https://film1server.herokuapp.com/" + params.id)
  const state = await res.json()
  return {props:{state}}
}