import React from 'react'

function MySpace() {
  return (
    <div id='myspace' style={{width:"100%"}}>
      <div>
        <h3>Attendance Status</h3>
        <div>
          <span>Avg hrs / Day</span>
          <span>On Time Arrival</span>
        </div>
      </div>
      <div>
        <h3>Timings</h3>
        <div>
          <span>{"today (09:30AM - 06:30PM)"}</span>
          <br />
          <span>Duaration: 9h 0m Break: 0m</span>
        </div>
      </div>
      <div>
        <h3>Action</h3>
        <div>
          <span>04:04:39 PM <br />
          Wed 06, Dec 2023
          </span>
          <div>
          <span>Leave Request</span>
          <span>Work From Home</span>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default MySpace
