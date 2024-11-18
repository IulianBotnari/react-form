import { useState } from 'react'


import './App.css'
const aritcleTitle = [

]

function App() {

  const [title, setTitle] = useState(aritcleTitle)
  const [newTitle, setNewTitle] = useState()
  const [body, setBody] = useState('')
  // const [newBody, setNewBody] = useState('')


  function getTitle(e) {
    e.preventDefault()

    console.log(title);


    setTitle(

      [
        ...title,
        {
          title: newTitle,
          body: body
        }

      ]
    )




    console.log(title);
    e.target.reset()
  }

  return (
    <>
      <div className="container">

        <form onSubmit={getTitle} className='mb-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titolo Articolo</label>
            <input type="text" className="form-control" id="title" placeholder="Titolo Articolo" onChange={e => setNewTitle(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">Corpo Articolo</label>
            <textarea className="form-control" id="body" rows="3" onChange={e => setBody(e.target.value)} />
          </div>
          <button type='submit' className="btn btn-primary">Post</button>
        </form>

        <div className='article'>
          {title.map((articleTitle, index) => <div key={index} data-index={index}><h2>{articleTitle.title}</h2><p>{articleTitle.body}</p></div>)}



        </div>
      </div>
    </>
  )
}

export default App
