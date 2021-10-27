import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Button, Box, TextField, Grid} from '../../mui'

import {useDispatch} from 'react-redux'
import {updateBreadcrumbs, getBills} from '../../store/actions'

const columns = [
    { field: 'id', headerName: 'S/N', width: 120 },
    {
        field: 'date',
        headerName: 'Date',
        width: 150,
      },
      {
        field: 'amount',
        headerName: 'AMOUNT',
        width: 150,
      },
      {
        field: 'purpose',
        headerName: 'PURPOSE',
        type: 'number',
        width: 150,
      },
      {
        field: 'paystatus',
        headerName: 'PAYMENT STATUS',
        width: 220
      },
        {
            field: 'transactId',
            headerName: 'TRANSACTION ID',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 180
        },
            {
                field: 'action',
                headerName: 'ACTION',
                description: 'This column has a value getter and is not sortable.',
                sortable: false,
                width: 120,
                renderCell: () => (
                    <Button variant="outlined" color="primary" >
                    Pay
                  </Button>
                  ),
            },
];

const rows = [
    {id: 1, date: '03/04/2021', amount: '27,500.00', purpose: 'Instrument Annual Licencing Fee', paystatus: 'Pending', transactId: '56377256'
    }];

export default function DataTable() {

  const dispatch = useDispatch()
  
  React.useEffect(()=> {
    dispatch(updateBreadcrumbs({name: "Invoice(s)", child: 'Outstanding Bill', link: '/defaultlayout/outstandingbill'}))
    dispatch(getBills())
  })
const {isLoading, bills} = useSelector(state => state.getBills)
  let sn = 1
  const rows = bills?.length ? bills?.map((row)=> {
    const {_id, ...rest} = row;
    return {id: _id, sn: sn ++, ...rest};
  }): null
  return (
    <Box >
      <Box m={2}>
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
      <Grid item xs={12} sm={5}>
      <TextField id="rrr" size='small' label="Remita Retreival Reference (RRR) No."  variant="outlined" fullWidth/>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Button variant="outlined"
                    color="primary">Generate</Button>
                       </Grid>
      </Grid>
      </Box>
    <Box  style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
    </Box>
  );
}
