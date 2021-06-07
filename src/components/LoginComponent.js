import React from 'react';

class Login extends React.Component {

  constructor(props) {
    super(props);

    

  }

  handleChange(event) {

    switch (event.target.type) {
      case 'email':
        this.setState({ email: event.target.value });
        break;
      case 'password':
        this.setState({ password: event.target.value });
        break;
    }

  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.parent.login('admin', this.state.password);

    this.props.parent.history.push('/user');

    this.setState({
      email: '',
      password: ''
    });

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit} >
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label className="sr-only">Email address</label>
                <input type="email" className="form-control" placeholder="Email address" value={this.state.email} onChange={this.handleChange} required />
              </div>
              <div className="form-group">
                <label className="sr-only">Password</label>
                <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
              </div>
              <input className="btn btn-primary" type="submit" value="Sign in" />
              <button className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;