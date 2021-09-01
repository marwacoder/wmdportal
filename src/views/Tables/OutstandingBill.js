import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Button, Box} from '../../mui'

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
  return (
    <Box  style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
