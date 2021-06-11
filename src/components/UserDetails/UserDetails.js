import React from 'react';


class UserDetails extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleAdmin = this.handleAdmin.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        // create handle click 
        // add fetch post to add account holder
    }









    render() {
        return (


            <div>
                <span className="form-group" data-toggle="modal" data-target="#UserDetails" data-backdrop="static"></span>

                <h3>Register</h3>


                <form>


                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>Social Security</label>
                        <input type="password" className="form-control" placeholder="Social Security" />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>


                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.handleSubmit} >Register </button>




                    <p className="forgot-password text-right">
                        Already registered <a href="#">log in?</a>
                    </p>





                </form>

            </div>

        );




    }


}




