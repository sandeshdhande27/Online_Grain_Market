import AdminNavbar from "./AdminNavbar";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminFooter from "./AdminFooter";

export function UserDetails() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "ADMIN"
    ) {
      window.location.href = "/login";
    }
    async function abc() {}
    // let response =axios.get(`http://localhost:7070/admin/showUsers`)
    // setResult(response.data);
    // getAllUsers();
  }, []);

  const userList = () => {
    axios
      .get("http://localhost:7070/admin/showUsers")
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    userList();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(`http://localhost:7070/admin/showUsers`);
    setResult(response.data);
  };

  const myfun = async (userEmail) => {
    console.log(">>>>>" + userEmail);
    const user = { email: userEmail };
    const res = await axios.post("http://localhost:7070/user/getByEmail", user);
    console.log(res.data.firstName);
    const user1 = {
      firstName: res.data.firstName,
      lastName: res.data.lastName,
      email: res.data.email,
      phone: res.data.phone,
      //city: res.data.city,
      password: res.data.password,
      role: res.data.role,
      city: res.data.city,
      state: res.data.state,
      status: "InActive",
    };
    console.log(user1);
    if (res.data.status === "Active") {
      const user1 = {
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        phone: res.data.phone,
        city: res.data.city,
        password: res.data.password,
        role: res.data.role,
        //   city: res.data.city,
        state: res.data.state,
        status: "InActive",
      };

      const user2 = await axios.post(
        "http://localhost:7070/user/editUser",
        user1
      );
    } else {
      const user1 = {
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        phone: res.data.phone,
        city: res.data.city,
        password: res.data.password,
        role: res.data.role,
        //   city: res.data.city,
        state: res.data.state,
        status: "Active",
      };

      const user2 = await axios.post(
        "http://localhost:7070/user/editUser",
        user1
      );
    }

    getAllUsers();
  };
  return (
    <div>
      <AdminNavbar />
      <h1 className="text-center text-danger"></h1>
      <h1 className="text-center text-info"><b>List of Users Account</b></h1>

      <div className="container-fluid">
        <table className="table table-hover table-danger">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone No</th>
              <th scope="col">Email</th>
              {/* <th scope="col">Password</th> */}
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Role</th>
              <th scope="col">Status</th>
              <th scope="col">Button</th>
            </tr>
          </thead>
          <tbody>
            {result.map((list) => (
              <tr key="{list.id}">
                <td>{list.id}</td>
                <td>{list.firstName}</td>
                <td>{list.lastName}</td>
                <td>{list.phone}</td>
                <td>{list.email}</td>
                {/* <td>{list.password}</td> */}
                <td>{list.city}</td>
                <td>{list.state}</td>
                <td>{list.role}</td>
                <td>{list.status.toString()}</td>
                <td>
                  <input
                    type="button"
                    onClick={() => {
                      myfun(list.email);
                    }}
                    className="btn btn-success mb-4"
                    value={list.status}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AdminFooter />
    </div>
  );
}
