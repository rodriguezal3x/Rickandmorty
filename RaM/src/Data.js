import React from 'react'
import MaterialTable from 'material-table'

export const Table= () => {
    const data = [
        { id: 1, name: 'ramesh', age: 12, status:0 },
        { id: 2, name: 'viki', age: 15, status:1},
        { id: 3, name: 'julia', age: 18, status:0},
        { id: 4, name: 'margarita', age: 22, status:1}
    
    ]
    const columns = [
        { title:'ID',field: 'id'},
        { title:'Nombre', field: 'name'},
        { title:'Edad', field: 'age'},
        { title:'Estatus', field: 'status', lookup:{0: "Desaptivado", 1: "Activo"}}
    ]
    return(<div>
        <MaterialTable title="Material Table"
        data={data}
        columns={columns}
        options={{
            search:true,
            paging:true
        }}
        />     
        </div>)
}

// export default Table;