import "./Login.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Button from "../../components/Button/Button";
import { useState } from "react";

export default function About() {
const [Form, SetForm]=useState({email:"", password:""})

const  handleChange=(e)=>{
  const {name ,value}= e.target;
  SetForm({
    ...Form,
    [name]:value,

  })

}

const  handleSubmit=(e)=>{
  e.preventDefault();
  console.log(Form)

}
  
  

  return (
    <>
      <h1 className="text-center text-success card w-100">Login Form</h1>

      <div className="d-flex justify-content-center align-item-center mt-5 mb-5">
        <ContactForm>
          <form
            action="#"
            id="form"
            className="w-100 p-5 shadow rounded bg-style"
            onSubmit={handleSubmit} // ✅ Corrected
          >
            <div className="mb-3 row">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email" // ✅ add name
                  value={Form.email} // ✅ bind state
                  onChange={handleChange} // ✅ Corrected
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password" // ✅ add name
                  value={Form.password} // ✅ bind state
                  onChange={handleChange} // ✅ Corrected
                />
              </div>
            </div>

            <div className="text-center">
              <Button className="btn-increase">Login</Button>
            </div>
          </form>
        </ContactForm>
      </div>
    </>
  );
}
