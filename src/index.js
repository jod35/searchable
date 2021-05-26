import React , {useState} from 'react'
import ReactDOM from 'react-dom'
import './main.css'




const notes = [
  {
    "title": "I am a developer",
    "description": "I develop software"
  },
  {
    "title":"Benefits of Using Django",
    "description": "I develop software"
  },
  {
    "title": "Cool skills",
    "description": "I develop software"
  },
  {
    "title": "Prop Types",
    "description": "I develop software"
  },
  {
    "title": "How to be a Ninja",
    "description": "I develop software"
  },
  {
    "title": "Elephant ways",
    "description": "I develop software"
  },
  {
    "title": "Jamaican Uganda",
    "description": "I develop software"
  },
  {
    "title": "Items in my bag",
    "description": "I develop software"
  },

];

const Search=(props)=>{

  return(
      <div className="search">
        
        <label htmlFor="search" />
        <input type="text" onChange={props.onSearch} value={props.search}/>
        <hr />
      </div>
  ) 
}

const List=(props)=>{
  return(
      <div className="notes">
        {
          props.list.map((item,index)=>{
            return(
            <div className="note" key={index}>
               <h1>{item.title}</h1>
               <p>{item.description}</p>
            </div>)
          })

        }
      </div>
  )
}


function App(){


  const title = "App Home"
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('search') || 'React'
  )

  const searchedStories=notes.filter(
    (note) =>{
      return note.title
      .toLowerCase()
      .includes(searchTerm)
    }
  )

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    localStorage.setItem('search', e.target.value)
    console.log(searchTerm)
  }

  return(
    <div className="app">

      <h1>{title}</h1>
      <Search onSearch={handleSearch} search={searchTerm}/>
      <p>Searching for: {searchTerm}</p>
      
      <List list={searchedStories}/>
      
    </div>
  )
}


ReactDOM.render(<App/>,document.getElementById('root'));