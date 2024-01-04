import React from 'react'
import { ArrowRightIcon,CheckIcon,InfoOutlineIcon } from '@chakra-ui/icons'
function Logs() {
  return (
    <div id='logs'>
    <div id='months'>
      <div><h3>December 2023</h3></div>
      
      <div style={{marginTop:"20px"}}>
        <span id='month'>30 Days |</span>
        <span id='month'> Nov</span>
        <span id='month'>  | Oct</span>
        <span id='month'>  | Sep</span>
        <span id='month'>  | Aug</span>
        <span id='month'>  | Jul</span>
        <span id='month'> | Jun</span>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div>
      <table style={{width:"100%", textAlign:"center"}}>
        <tr>
          <th>Date</th>
          <th>Attendance Visual</th>
          <th>Effective Hours</th>
          <th>Gross Hours</th>
          <th>Extra Hours</th>
          <th>Arrival</th>
          <th>Log</th>
        </tr>
        <tr>
          <td>Dec 04, Mon</td>
          <td><ArrowRightIcon/></td>
          <td>9h 15m</td>
          <td>9h 59m</td>
          <td>On Time</td>
          <td><CheckIcon/></td>
          <td><InfoOutlineIcon/></td>
        </tr>
        <tr>
          <td>Dec 04, Mon</td>
          <td><ArrowRightIcon/></td>
          <td>9h 15m</td>
          <td>9h 59m</td>
          <td>On Time</td>
          <td><CheckIcon/></td>
          <td><InfoOutlineIcon/></td>
        </tr>
        <tr>
          <td>Dec 04, Mon</td>
          <td><ArrowRightIcon/></td>
          <td>9h 15m</td>
          <td>9h 59m</td>
          <td>On Time</td>
          <td><CheckIcon/></td>
          <td><InfoOutlineIcon/></td>
        </tr>
        <tr>
          <td>Dec 04, Mon</td>
          <td><ArrowRightIcon/></td>
          <td>9h 15m</td>
          <td>9h 59m</td>
          <td>On Time</td>
          <td><CheckIcon/></td>
          <td><InfoOutlineIcon/></td>
        </tr>
        <tr>
          <td>Dec 04, Mon</td>
          <td><ArrowRightIcon/></td>
          <td>9h 15m</td>
          <td>9h 59m</td>
          <td>On Time</td>
          <td><CheckIcon/></td>
          <td><InfoOutlineIcon/></td>
        </tr>
        
      </table>
    </div>

    </div>
  )
}

export default Logs