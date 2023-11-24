import React, { useState } from "react";
import Style from "./SignUp.module.css";
import CustomInput from "../../Atom/Input/CustomInput";
import CustomButton from "../../Atom/Button/CustomButton";
import Navbar from "../../Components/Navbar/Navbar";
import { nanoid } from "nanoid";
import { useNavigate, NavLink } from "react-router-dom";
import swal from "sweetalert";

function SignUp() {
  let nevigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!(name && email && mobile && password)) {
      setError('Please enter all fields');
      return;
    }
    if (mobile.length !== 10) {
      setError('Please enter correct phone no.');
      return;
    }
    if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setError('Please enter a valid email');
      return;
    }


    let data = {
      id: nanoid(3),
      name: name,
      email: email,
      password: password,
      mobile: mobile,
    };
    let localuser = JSON.parse(localStorage.getItem("userlist")) || [];
    localStorage.setItem("userlist", JSON.stringify([data, ...localuser]));
    swal({
      title: "Registration Successful!",
      text: "Congratulations! You are signed up!",
      icon: "success",
      buttons: {
        confirm: {
          text: "Okay",
          value: true,
          visible: true,
          className: Style["SweetAlertButton"],
          closeModal: true,
        },
      },
      dangerMode: false,
    }).then((value) => {
      if (value) {
        nevigate("/SingIn");
      }
    });
  }

  return (
    <>
      <Navbar />
      <div className={Style.picture}>
        <img  className={Style.pic}src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNCfkFzsMc71fi7nfHCE7uHoVVN92hKAHnw&usqp=CAU' width='15%' alt='signup.jpeg'/>
      
      <div className={Style.container}>
        <form onSubmit={handleSubmit} className={Style.Form}>
          <CustomInput
            className={Style.input}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            value={name}
            required
          />
          <CustomInput
            className={Style.input}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
            value={email}
            required
          />
          <CustomInput
            className={Style.input}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            value={password}
            required
          />
          <CustomInput
            className={Style.input}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile No"
            type="number"
            value={mobile}
            required
          />
          <CustomButton
            ButtonText="Register"
            className={Style.btn}
            type="submit"
          />
           <h6> {error && <p style={{ fontSize: '12px', color: 'red' }}>{error}</p>}</h6>
          <h5 style={{marginTop:'-3rem'}}>
            Already have an account?{" "}
            <NavLink style={{ color: "blue" }} to="/SingIn">
              Login Page
            </NavLink>
          </h5>
        </form>
      </div>
      </div>
    </>
  );
}

export default SignUp;
