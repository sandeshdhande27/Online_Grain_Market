import React, { useState } from "react";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import axios from "axios";

import swal from "sweetalert2";

import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");

  const registerUser = (data) => {
    axios.post(`http://localhost:7070/user/register`, data).then(
      (response) => {
        clearFields();
        swal
          .fire({
            icon: "Success",
            title: "Hurreh!!!",
            text: "You have Registered Succesfully",
            timer: 7000,
            showConfirmButton: true,
          })
          .then(function () {
            window.location.href = "./login";
          });
      },
      (error) => {
        console.log(error);

        alert(
          " ERROR : Failed to Register or Email Already Registered with us!!!"
        );
      }
    );
  };

  let user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: PhoneNo,
    city: City,
    state: State,
    password: password,
    role: role,
  };

//clear button clear the field
  function clearFields() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNo("");
    setCity("");
    setState("");
    setPassword("");
    setRole("");
  }

  

  let validate = () => {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      PhoneNo.trim() === "" ||
      City.trim() === "" ||
      State.trim === "" ||
      password.trim() === ""
    ) {
      swal.fire("All fields are  required");
    } else if (
      firstName.search(/^[a-zA-Z ]*$/) < 0 ||
      firstName.length < 2 ||
      firstName.length > 20
    ) {
      document.getElementById("firstname").classList.add("is-invalid");
      swal.fire(
        "First Name must have length of minimum 2 and maximum 20 Characters"
      );
    } else if (
      lastName.search(/^[a-zA-Z ]*$/) < 0 ||
      lastName.length < 2 ||
      lastName.length > 20
    ) {
      document.getElementById("lastname").classList.add("is-invalid");
      swal.fire(
        "Last Name must have length of minimum 2 and maximum 20 Characters"
      );
    } else if (
      email === "" ||
      email.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("Email").classList.add("is-invalid");
      setEmail("Enter valid Email ID");
    } else if (PhoneNo === "" || PhoneNo.search(/^[789][0-9]{9}$/) < 0) {
      document.getElementById("PhoneNo").classList.add("is-invalid");
      swal.fire(
        "Enter valid Mobile Number of 10 digit and Remember Should Start with '7'or'8'or'9'"
      );
    } else if (City === "") {
      document.getElementById("City").classList.add("is-invalid");
      setCity("Enter City");
    } else if (State === "") {
      document.getElementById("State").classList.add("is-invalid");
      setState("Enter State");
    } else if (
      password === "" ||
      password.search(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      ) < 0 ||
      password.length < 6
    ) {
      document.getElementById("Password").classList.add("is-invalid");
      swal.fire(
        "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
      );
    } else registerUser(user);
  };

  return (
    <>
     
      <div className="vh-100 d-flex reg  p-1">
        <div className="m-auto w-50 pt-2 ps-5 pe-5 pb-2  align-self-center border border-dark text-white reg-form">
          <h2 className="text-center fw-bold mb-3" style={{ color: "#ba8b00" }}>
            Grain-Market
          </h2>
          <h3 className="text-center text-dark">Register</h3>

          <Form className="row g-3">
            <div className="col-md-6">
              <label for="name" className="form-label fs-6">
                First Name
              </label>
              <Input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="Enter First Name "
                name="firstname"
                id="firstname"
                
                value={firstName}
                required
              />
            </div>
            <div className="col-md-6">
              <label for="name" className="form-label fs-6">
                Last Name
              </label>
              <Input
                className="form-control"
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Enter Last Name"
                name="lastname"
                id="lastname"
                
                value={lastName}
              />
            </div>

            <div className="col-md-6">
              <label for="name" className="form-label fs-6">
                Email
              </label>
              <Input
                className="form-control"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Email"
                name="Email"
                id="Email"
                
                value={email}
                title="example:abc@gmail.com"
                required
                style={{ heigh: 200 }}
              />
            </div>

            <div className="col-md-6">
              <label for="name" className="form-label fs-6">
                Phone No
              </label>
              <Input
                className="form-control"
                type="text"
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
                placeholder="Enter Phone No"
                name="PhoneNo"
                id="PhoneNo"
                
                value={PhoneNo}
                title="8446644082"
                required
                style={{ heigh: 200 }}
              />
            </div>

            <div className="col-md-6">
              <label for="name" className="form-label fs-6">
                Address
              </label>
              <Input
                className="form-control"
                type="text"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                placeholder="Enter Your Address"
                name="City"
                id="City"
                maxLength="20"
                title="mumbai"
                required
                style={{ heigh: 200 }}
                
                value={City}
              />
            </div>

            <div className="col-md-6">
              <label for="name" className="form-label fs-6">
                State
              </label>
              <Input
                className="form-control"
                type="text"
                onChange={(e) => {
                  setState(e.target.value);
                }}
                placeholder="Enter Your State"
                name="State"
                id="State"
                maxLength="20"
                title="Maharashtra"
                required
                style={{ heigh: 200 }}
                
                value={State}
              />
            </div>
            <div className="col-md-6">
              <label for="name" className="form-label fs-6">
                Password
              </label>
              <Input
                className="form-control"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Password"
                name="Password"
                id="Password"
               
                value={password}
                required
                style={{ heigh: 200 }}
              />
            </div>

            <div className="col-md-6">
              <label for="name" className="form-label fs-6">
                Select Role
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                required
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="" selected>
                  Please select one of them
                </option>
                <option value="CONSUMER">CONSUMER</option>
                <option value="FARMER">FARMER</option>
              </select>
            </div>

            <Container className="text-center my-3">
              <Button color="success " outline onClick={validate}>
                Register
              </Button>
              <Button type="reset" color="warning ml-3 " outline onClick={clearFields}>
                Clear
              </Button>
            </Container>
            <div className="col-md-12 text-center">
              <h4 className="fs-6">
                Already Registered?=
                <Link to="/login" href="#" className="text-decoration-none">
                  Login here
                </Link>
              </h4>
            </div>
          </Form>
        </div>
      </div>
      
    </>
  );
};

export default Register;








{/** 
import { Form , Input,Button} from "reactstrap";
import axios from "axios";
import { useState } from "react";
const Register = () => {

    const [inputs, setInputs ] = useState({});

 const handleChange = evnt =>{
  let paramName = evnt.target.name;
  let paramValue = evnt.target.value;

  setInputs(
   values => ({...values,[paramName]:paramValue })
  );
 };

 const handleSubmit = evnt => {
    evnt.preventDefault();
    alert(JSON.stringify(inputs));
  
    axios.post('http://localhost:7070/user/register',inputs)
    .then(response => {
     alert(response.data);
    })
    .catch(error => {
     alert(error);
    });
  
  
   }; 


    return (
        <div>
            <h1>Register</h1>
            <Form action="" onSubmit={handleSubmit}>
                <label>First Name</label>
                <Input type="text" name="firstName" value={inputs.firstName} onChange={handleChange}/>
                <label>Last Name</label>
                <Input type="text" name="lastName" value={inputs.lastName} onChange={handleChange}/>
                <label>Email</label>
                <Input type="text" name="email" value={inputs.email} onChange={handleChange}/>
                <label>Phone No</label>
                <Input type="text" name="PhoneNo" value={inputs.PhoneNo} onChange={handleChange}/>
                <label>City</label>
                <Input type="text" name="city" value={inputs.city} onChange={handleChange}/>
                <label>State</label>
                <Input type="text" name="state" value={inputs.state} onChange={handleChange}/>
                <label>Password</label>
                <Input type="text" name="password" value={inputs.password} onChange={handleChange}/>
                <label>status</label>
                <Input type="text" name="status" value={inputs.status} onChange={handleChange}/>
                <label>Select Role</label>
                <select  name="role" value={inputs.role} onChange={handleChange}>
                    <option value=""selected>Please select one of them</option>
                    <option value="CONSUMER">CONSUMER</option>
                    <option value="FARMER">FARMER</option>
                </select>

                <Button type="submit">
                Register
              </Button>

            </Form>   
              
          
        </div>
    );
};
export default Register;

*/}