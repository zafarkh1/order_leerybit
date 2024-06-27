import React, { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Footer, Button, Window } from '@iqueue/ui-kit'
import MyTable from './components/Table/table'

function App() {
  const [isAddOpen, setIsAddOpen] = useState(false)

  return (
    <div className="App">
      <Window
        title="IQ-Order"
        footer={
          <Footer>
            <div style={ { display: "flex", justifyContent: "space-between", alignItems: "center" } }>
              <p>Mobile solutions &copy; 2024</p>
              <Button
                title={ 'Add' }
                onClick={ () => setIsAddOpen(true) }
                secondary
              />
            </div>
          </Footer>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <MyTable
                addOpen={ isAddOpen }
                addClose={ setIsAddOpen }
              />
            }/>
          </Routes>
        </BrowserRouter>
      </Window>
    </div>
  )
}

export default App
