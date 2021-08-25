
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {MenuItem, Button, Grid, Box, TextField, Paper } from '../../mui';


  
  
  const instrument = [
    {
      value: 'Instrument Report',
      label: 'Instrument Report',
    },
    {
      value: 'Invoices Report',
      label: 'Invoices Report',
    },
    {
      value: 'Instrument Service Report',
      label: 'Instrument Service Report',
    },
    
  ];

  const bills = [
    {
      value: 'Paid Bills',
      label: 'Paid Bills',
    },
    {
      value: 'Outstanding Bills',
      label: 'Outstanding Bills',
    },
    
  ];
  const services = [
    {
      value: 'Pattern of Approval',
      label: 'Pattern of Approval',
    },
    {
      value: 'Instrument Verification',
      label: 'Instrument Verification',
    },
    
  ];


export default function Reports() {

  const [instrumentReport, setInstrumentReport] = React.useState(null)
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
 

  return (
    
    <Box mx={3}>
        <Paper>
            <Box m={1}>
        <form>
      <Grid container spacing={1} justifyContent='center' alignItems='center'>
      <Grid item xs={12} sm={2}>
        <Box fontWeight='bold'>Report Filter</Box>
      </Grid>
          <Grid item xs={12} sm={2}>
          <Box mt={3}>
            <TextField id="filename" size="small"  variant='standard' select  fullWidth>
            {instrument.map((option) => (
            <MenuItem key={option.value} onClick={option.value === 'Instrument Report' ? 
            ()=>setInstrumentReport('Registered Instrument'): option.value === 'Invoices Report' ? 
            ()=>setInstrumentReport(bills): option.value === 'Instrument Service Report' ? 
            ()=>setInstrumentReport(services): null} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box mt={3}>
            <TextField id="filename" size="small"  variant='standard' select  fullWidth>
              {Array.isArray(instrumentReport) ? instrumentReport.map((option)=> (
                <MenuItem key={option.value}  value={option.value}>{option.label}</MenuItem>
              )):  <MenuItem value={instrumentReport}>{instrumentReport}</MenuItem>}
           
            </TextField>
            </Box>
          
          </Grid>

          <Grid item xs={12} sm={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin='normal'
          id="date-picker-inline"
          label="Start Date"
          value={selectedDate}
          
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End Date"
          value={selectedDate}
          
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
          </Grid>
          
          <Grid item xs={12} sm={2}>
          <Button variant="outlined" color="primary" component="span">
          GENERATE
        </Button>
          </Grid>
       
      </Grid>
      
      </form>
      </Box>
      </Paper>
      <Box mt={30} mx={'85%'}>
      <Button variant="outlined" color="primary" component="span">
          print
        </Button>
        </Box>
    </Box>
    
  );
}

