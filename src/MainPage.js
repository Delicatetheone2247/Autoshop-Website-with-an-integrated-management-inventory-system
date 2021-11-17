import axios from "axios";
import react, { Component } from "react";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChanges = (event) => {
    console.log(
      "input changed, new value is: ",
      event.target.value,
      event.target.name
    );
    this.setState({ [event.target.name]: event.target.value });
    // event.target.name is reference to name property passed in html input element
    // this.setState({username: "value"});
    // this.setState({password: "value"});
  };

  // handleUserNameChanges = (event) => {
  //   console.log("username changed, new value is: ", event.target.value, event.target.name);
  //   this.setState({ username:  event.target.value })
  // }

  // handlePasswordChanges = (event) => {
  //   console.log("password changed, new value is: ", event.target.value, event.target.name);
  //   this.setState({ password:  event.target.value })
  //  }

  handleButtonClicked = (event) => {
    axios
      .get(
        "http://localhost:9000/Dashboard/helloWorld?username=" +
          this.state.username +
          "&password=" +
          this.state.password,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((result) => {
        console.log(result.data);
        if(result.data.Userfound === true){
          this.props.history.push("/Dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  render() {
    return (
      <div id="LoginForm">
        <form class="modal-content animate">
          <div class="imgcontainer">
            <img
              src="zn-autocenter-logo.png"
              alt="logo"
              class="logoForLoginform"
            ></img>
          </div>

          <div id="UsernameText"> 
          <label for="uname">
              <b>Username</b>
          </label>
          </div>

          <div id="loginUsername">
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              value={this.state.username}
              onChange={this.handleInputChanges}
            />
          </div>

        <div id="PasswordText"> 
          <label for="psw">
              <b>Password</b>
          </label>
        </div>
        
          <div id="loginPassword">
            
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              value={this.state.password}
              onChange={this.handleInputChanges}
            />
          </div>

          <div>
            <label>
              <input type="checkbox" checked="checked" name="remember" />
            </label>
          </div>

          <div id="ButtonLogin"><button onClick={this.handleButtonClicked}> Login</button></div>
        </form>
      </div>
    );
  }
}
export default MainPage;
