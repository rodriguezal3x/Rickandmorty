import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table'

const columns = [ 
    { title:'Episodio',field: 'id'},
    { title:'Nombre', field: 'name'},
    { title:'Personajes', field: 'characters.length'}
]

const Table = () => {
    const [data, setData] = useState([])  

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/episode")
            .then(res => res.json())
            .then(res =>{
                setData(res.results)})
        })

    return(
        <div>
            <h4>Segunda parte</h4>
            <MaterialTable 
                title="Episode locations"
                data={data}
                columns={columns}
                options={{
                    search:true,
                    pageSize: 5,
                }}
            /> 
        </div>
    )

}

export default Table;