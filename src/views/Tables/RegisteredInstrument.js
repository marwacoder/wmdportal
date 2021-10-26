import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Box from '@material-ui/core/Box'
import {useDispatch, useSelector} from 'react-redux'
import {updateBreadcrumbs, getRegisteredInstrument} from '../../store/actions'



const columns = [
  { field: 'sn', headerName: 'S/N', width: 120 },
  {
    field: 'instrument',
    headerName: 'INSTRUMENT',
    width: 180,
    editable: true,
  },
  {
    field: 'instrumentModelName',
    headerName: 'MODEL NAME',
    width: 150,
    editable: true,
  },
  {
    field: 'modelNumber',
    headerName: 'MODEL N0.',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'serialNumber',
    headerName: 'SERIAL N0.',
    editable: true,
    width: 150
  },
    {
        field: 'tagNumber',
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
  //               {
  //                   field: 'pac',
  //                   headerName: 'PAC',
  //                   description: 'This column has a value getter and is not sortable.',
  //                   sortable: false,
  //                   width: 100,
  //               },
  //                   {
  //                       field: 'ivc',
  //                       headerName: 'IVC',
  //                       description: 'This column has a value getter and is not sortable.',
  //                       sortable: false,
  //                       width: 80
  // },
];



export default function DataTable() {

  const { data} = useSelector(state => state.isAuthenticated)
  const dispatch = useDispatch()

  React.useEffect(()=> {
    dispatch(updateBreadcrumbs({name: "Registered Instrument", link: '/defaultlayout/registeredinstrument'}))
    dispatch(getRegisteredInstrument())
  },[])
  const {isLoading, instrument} = useSelector(state => state.getInstrument)
  let sn = 1
  const rows = instrument?.length ? instrument?.map((row)=> {
    const {_id, ...rest} = row;
    return {id: _id, sn: sn ++, ...rest};
  }): null
 

  return (
    <Box  style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={ rows ? rows : [] }
        columns={columns}
        pageSize={5}
        loading={isLoading}
        checkboxSelection= {false}
      />
    </Box>
  );
}
