
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {FormControlLabel, Button,makeStyles, Grid, Box, TextField, Paper } from '../../mui';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));

export default function Reports() {
 
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
 

  return (
    
    <Box >
        <Paper>
            <Box m={1}>
        <form>
      <Grid container spacing={1} justifyContent='center' alignItems='center'>
      <Grid item xs={12} sm={1}>
        <Box>Report Filter</Box>
      </Grid>
          <Grid item xs={12} sm={2}>
          <Box mt={3}>
            <TextField id="filename" size="small"  variant='standard' select  fullWidth/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box mt={3}>
            <TextField id="filename" size="small"  variant='standard' select  fullWidth/>
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

