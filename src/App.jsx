import { useState } from 'react'


import './App.css'

function App() {


  return (
    <>
      <div class="container">

        <form className='mb-3'>
          <div className="mb-3">
            <label for="title" className="form-label">Titolo Articolo</label>
            <input type="text" className="form-control" id="title" placeholder="Titolo Articolo" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Corpo Articolo</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className="btn btn-primary">Post</button>
        </form>
      </div>
    </>
  )
}

export default App
