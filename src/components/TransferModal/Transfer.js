import React, { Component } from "react";



class Transfer extends Component {







}

return (
  <div className="modal" tabindex="-1">
    <div className="modal-dialog" >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">

        <p>Transfer From...</p>

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown button </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Checking</a></li>
              <li><a className="dropdown-item" href="#">Savings</a></li>
              <li><a className="dropdown-item" href="#">IRA ish..</a></li>
            </ul>
          </div>

          <p>Transfer Too..</p>

          <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown button </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li><a className="dropdown-item" href="#">Checking</a></li>
          <li><a className="dropdown-item" href="#">Savings</a></li>
          <li><a className="dropdown-item" href="#">IRA ish..</a></li>
          </ul>
        </div>

        
        </div>
        <div class="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>



    <div class="btn-group">
      <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Action
            </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
  </div>



);



export default Transfer;
