import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';

const Data = () => {

    const columns = [
        {field:"id", headerName:"ID", width: 90},
        {field:"firstName", headerName: "First name", width: 140 , editable:true},
        {field:"lastName" , headerName: "Last name" , width: 150, editable: true},
        {field:"age", headerName: "Age" , width: 100 , editable: true}
      ]
      const rows = [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 30 }
      ];
      return(
        <Box style={{ display:'block' , width: "60%" , margin: "auto"}}>
          <h3>Data</h3>
          <Box  style={{height:400 , width: "100%"}}>
            <DataGrid rows={rows} columns={columns} />
          </Box>
        </Box>
        
    )
}
export default Data;