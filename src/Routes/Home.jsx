import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/ContextProvider'

const Home = () => {
  const {odontologos} = useContextGlobal()
  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
      {odontologos.map((od) => 
        <Card key ={od.id} od={od}  />
      )}
      </div>
    </main>
  )
}

export default Home