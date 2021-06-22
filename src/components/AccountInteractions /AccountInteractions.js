import React, { Component } from "react";
import { DropdownButton, Dropdown, ButtonGroup, Button } from "react-bootstrap";



class AccountInteractions extends Component {


  constructor(props) {
    super(props)

    this.state = {
      interactions: 0,
      interactiontype: "How can we help you",

    };

    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <React.Fragment>


        <DropdownButton id="interactiontype" title={this.state.interactiontype}>
          <Dropdown.Item id="interactiontype" as="button" value="Deposit" onClick={this.handleChange}>Deposit</Dropdown.Item>
          <Dropdown.Item id="interactiontype" as="button" value="Withdrawl" onClick={this.handleChange}>Withdrawl</Dropdown.Item>
          <Dropdown.Item id="interactiontype" as="button" value="Transfer" onClick={this.handleChange}>Transfer</Dropdown.Item>
          <Dropdown.Item id="interactiontype" as="button" value="4" onClick={this.handleChange}>Individual Retirement Account</Dropdown.Item>
        </DropdownButton>


        {this.state.interactiontype == 'Transfer' ?


          <form>
            <div className="form-group">
              <label for="select">Transfers</label>
              <div>
                <select id="select" name="select" required="required" className="custom-select">
                  <option value="Checking">Checking</option>
                  <option value="Savings ">Savings</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="select1">Transfer To Account</label>
              <div>
                <select id="select1" name="select1" className="custom-select">
                  <option value="Checking">Checking</option>
                  <option value="Savings">Savings</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="text">Amount</label>
              <input id="text" name="text" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <button name="submit" type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>



          : null}



        {this.state.interactiontype == 'Withdrawl' ?


          <form>
            <div className="form-group">
              <label for="select">Withdraw From Account</label>
              <div>
                <select id="select" name="select" required="required" className="custom-select">
                  <option value="Checking">Checking</option>
                  <option value="Savings ">Savings</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="text">Amount</label>
              <input id="text" name="text" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <button name="submit" type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>



          : null}


          {this.state.interactiontype == 'Deposit' ?


          <form>
            <div className="form-group">
              <label for="select">Deposit</label>
              <div>
                <select id="select" name="select" required="required" className="custom-select">
                  <option value="Checking">Checking</option>
                  <option value="Savings ">Savings</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label for="text">Amount</label>
              <input id="text" name="text" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <button name="submit" type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>



          : null}






      </React.Fragment>
    );
  }
}


export default AccountInteractions;
