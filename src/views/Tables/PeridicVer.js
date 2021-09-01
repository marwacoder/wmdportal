import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Button,Grid, TextField, Box} from '../../mui'

const columns = [
    { field: 'id', headerName: 'S/N', width: 120 },
    {
      field: 'instrument',
      headerName: 'INSTRUMENT',
      width: 180,
      editable: true,
    },
    {
      field: 'modelname',
      headerName: 'MODEL NAME',
      width: 150,
      editable: true,
    },
    {
      field: 'modelnumber',
      headerName: 'MODEL N0.',
      type: 'number',
      width: 120,
      editable: true,
    },
    {
      field: 'serialnumber',
      headerName: 'SERIAL N0.',
      editable: true,
      width: 150
    },
      {
          field: 'tagno',
          headerName: 'TAG. N0.',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 120
      },
          {
              field: 'state',
              headerName: 'STATE',
              description: 'This column has a value getter and is not sortable.',
              sortable: false,
              width: 160,
          },
              {
                  field: 'sector',
                  headerName: 'SECTOR',
                  description: 'This column has a value getter and is not sortable.',
                  sortable: false,
                  width: 120,
              },
                  
                      {
                          field: 'pvc',
                          headerName: 'PVC',
                          description: 'This column has a value getter and is not sortable.',
                          sortable: false,
                          width: 120,
                          renderCell: () => (
                            <Button variant="outlined" color="primary" >
                            Apply
                          </Button>
                          ),
    },
];


const rows = [
    {id: 1, instrument: 'ATM Machine', modelnumber: 'NH 2700',modelname: 'hyosu',  serialnumber: '7647939', tagno:'33',sector: 'Banking', state:'Gombe' },
    {id: 2, instrument: 'ATM Machine', modelnumber: 'NH 2700',modelname: 'hyosu', serialnumber: '7227939', tagno: '22',sector: 'Banking', state: 'Adamawa'}];

export default function DataTable() {


  return (
    <Box mt={{xs: '-6%', sm: '-5%', md: '2%'}} style={{ height: 400, width: '100%' }}>
            <Box mt={{xs: 1, sm: 2}} fontWeight='bold' fontSize={{xs: 14, sm: 16, md: 16}}>Periodic Instrument Verification</Box>

       <Box my={3}>
           <Grid container justifyContent='center' alignItems='center' spacing={2}>
            <Grid item xs={12} sm={12}>
            <Box fontWeight='bold'>Instrument Filter</Box>
            </Grid>
            <Grid item xs={8} sm={4}>
            <TextField id="filename" size="small"  variant='outlined' label='Serial Number'  fullWidth/>
            </Grid>
            
            <Grid item xs={4} sm={8}>
            <Button variant="outlined" color="primary" >
                            Search
                          </Button>
            </Grid>
           </Grid>
       </Box>
      <DataGrid
        rows={rows}
        columns={columns}
       
          loading
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}