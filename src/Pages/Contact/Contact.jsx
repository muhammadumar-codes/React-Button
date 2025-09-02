import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Contact() {

const handleSubmit =(e)=>{
e.preventDefault();
const names=e.target.username.value
const fatherName=e.target.fatherName.value
const email=e.target.email.value;
const password=e.target.password.value;
const  users=JSON.parse(localStorage.getItem('users'))||[]

console.log(`The Name is ${names}  and FatherName ${fatherName} And Email ${email} And  password ${password}`)

const  user={
  names,fatherName,email,password
}
users.push(user)

localStorage.setItem("users", JSON.stringify(users))


alert("submited")
e.target.reset();

}





  return (
    <>
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <ContactForm>
          <form action="#" id="form" className="w-100 p-5 shadow rounded bg-style " onSubmit={handleSubmit}>
            
            <div className="mb-3 row">
              <label htmlFor="username" className="col-sm-2 col-form-label">
                User Name
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="username" required />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="fatherName" className="col-sm-2 col-form-label">
                FatherName
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="fatherName" required />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="email"  required/>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="password" required />
              </div>
            </div>

            <div className="text-center ">
              <button type="submit" className="btn btn-primary w-50 shadow">
                Submit
              </button>
            </div>

          </form>
        </ContactForm>
      </div>
    </>
  );
}
