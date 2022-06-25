import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; 

import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


function App() {
  const [selectedDate, handleDateChange] = useState(new Date());
  console.log(selectedDate);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={selectedDate} onChange={handleDateChange} format="MM/dd/yyyy" textFieldStyle  style={{
        backgroundColor: "#dbdbdb"
      }}
      InputProps={{
          style: {
              color: "black"
        }
    }} />
      <TimePicker value={selectedDate} onChange={handleDateChange} textFieldStyle  style={{
        backgroundColor: "#dbdbdb"
    }}
    InputProps={{
        style: {
            color: "black"
        }
    }} />
      
      
    </MuiPickersUtilsProvider>
  
    
  );
  
}
export default App;