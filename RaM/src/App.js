import React, {useEffect, useState} from 'react'
import './asset/css/App.css';
import Table from './components/Table';
import Navbar from './components/Navbar';
import Character from './components/Character';
import Pagination from './components/Pagination';

function App() {
  const [characters, setcharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";
 
  const fetcharacter =(url) => {
    fetch(url)
      .then(Response => Response.json())
      .then(data => {
        setcharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error));
  };
  
  const onPrevius= () =>{
    fetcharacter(info.prev);
  }

  const onNext= () =>{
    fetcharacter(info.next);
  }

  useEffect(() => {
    fetcharacter(initialUrl)
  },[])

  return (
    <body>
      <Navbar brand ="Rick and Morty Challenge" /> 
      <div className="container mt-5">
        <Table/> 
      </div> 
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevius={onPrevius}
          onNext={onNext}
          />  
        <Character  characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevius={onPrevius}
          onNext={onNext}
          />  
      </div>    
    </body>
  );
}

export default App;
