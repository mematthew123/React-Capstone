import React, { Component } from "react";



class Transfer extends Component {







}

return (
  <div class="modal" tabindex="-1">
    <div class="modal-dialog" >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

        <p>Transfer From...</p>

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown button </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Checking</a></li>
              <li><a class="dropdown-item" href="#">Savings</a></li>
              <li><a class="dropdown-item" href="#">IRA ish..</a></li>
            </ul>
          </div>

          <p>Transfer Too..</p>

          <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown button </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li><a class="dropdown-item" href="#">Checking</a></li>
          <li><a class="dropdown-item" href="#">Savings</a></li>
          <li><a class="dropdown-item" href="#">IRA ish..</a></li>
          </ul>
        </div>

        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>



    <div class="btn-group">
      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Action
            </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
  </div>



);



export default Transfer;
