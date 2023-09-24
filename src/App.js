import React, { useState } from 'react'
import Data from './components/Data'
import List from './components/List'

const App = () => {
  const [People, setPeople] = useState(Data)
  return (
    <div className='flex items-center justify-center flex-col h-[100vh]'>
      <section className="container">
        <h3>{People.length} birthdays today</h3>
        <List People={People} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </div>
  )
}

export default App
