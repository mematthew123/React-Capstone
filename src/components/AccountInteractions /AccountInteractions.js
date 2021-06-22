import React, { Component } from "react";
import { DropdownButton, Dropdown, ButtonGroup, Button } from "react-bootstrap";
import './AccountInteractions.css';



class AccountInteractions extends Component {


  constructor(props) {
    super(props)

    this.state = {
      interactions: 0,
      interactiontype: "Account Actions",

    };

    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }



  // handleClick() {

  

  //   console.log(this.state);
    

  //   this.setState({ accountType: 'Choose a Type', startingBalance: 0, dba: false, CD_ID: 0, IRA_Type: '' });
  //   }

  render() {
    return (
      <React.Fragment>






      

        <DropdownButton id="interactiontype" title={this.state.interactiontype}>
          <Dropdown.Item id="interactiontype" as="button" value="Deposit" onClick={this.handleChange}>Deposit</Dropdown.Item>
          <Dropdown.Item id="interactiontype" as="button" value="Withdraw" onClick={this.handleChange}>Withdraw</Dropdown.Item>
          <Dropdown.Item id="interactiontype" as="button" value="Transfer" onClick={this.handleChange}>Transfer</Dropdown.Item>
        </DropdownButton>


        {this.state.interactiontype == 'Transfer' ?


          <form className ="transfer-form">
            <div className="transfer-form">
              <label for="select">Transfer From Account</label>
              <div>
                <select id="select" name="select" required="required" className="custom-select">
                  <option value="Checking">Checking</option>
                  <option value="Savings ">Savings</option>
                </select>
              </div>
            </div>
            <div className="transfer-form">
              <label for="select1">Transfer To Account</label>
              <div>
                <select id="select1" name="select1" className="custom-select">
                  <option value="Checking">Checking</option>
                  <option value="Savings">Savings</option>
                </select>
              </div>
            </div>
            <div className="transfer-form">
              <label for="text">Amount</label>
              <input id="text" name="text" type="text" className="form-control" />
            </div>
            <div className="transfer-form">
              <button name="submit" type="submit" className="btn btn-primary">Submit</button>
              <button name="submit" type="submit" className="btn btn-primary">Cancel</button>

            </div>
          </form>



          : null}



        {this.state.interactiontype == 'Withdraw' ?


          <form>
            <div className="withdraw-form">
              <label for="select">Withdraw From Account</label>
              <div>
                <select id="select" name="select" required="required" className="custom-select">
                  <option value="Checking">Checking</option>
                  <option value="Savings ">Savings</option>
                </select>
              </div>
            </div>
            <div className="withdraw-form">
              <label for="text">Amount</label>
              <input id="text" name="text" type="text" className="form-control" />
            </div>
            <div className="withdraw-form">
              <button name="submit" type="submit" className="btn btn-primary">Submit</button>
              <button name="submit" type="submit" className="btn btn-primary">Cancel</button>

            </div>
          </form>



          : null}


          {this.state.interactiontype == 'Deposit' ?


          <form>
            <div className="deposit-form">
              <label for="select">Deposit</label>
              <div>
                <select id="select" name="select" required="required" className="custom-select">
                  <option value="Checking">Checking</option>
                  <option value="Savings ">Savings</option>
                </select>
              </div>
            </div>
            <div className="deposit-form">
              <label for="text">Amount</label>
              <input id="text" name="text" type="text" className="form-control" />
            </div>
            <div className="deposit-form">
              <button name="submit" type="submit" className="btn btn-primary">Submit</button>
              <button name="submit" type="submit" className="btn btn-primary">Cancel</button>

            </div>
          </form>



          : null}






      </React.Fragment>
    );
  }
}


export default AccountInteractions;
