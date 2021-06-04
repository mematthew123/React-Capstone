import React from 'react';

//not sure if needed create account or just sign in??

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    this.props.loginMethod('admin', this.state.password);

    this.setState({
      email: '',
      password: ''
    });

    event.preventDefault();

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
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
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default Login;