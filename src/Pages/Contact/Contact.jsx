import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Button from  "../../components/Button/Button"

export default function Contact() {

const handleSubmit =(e)=>{
e.preventDefault();
const names=e.target.username.value
const fatherName=e.target.fatherName.value
const email=e.target.email.value;
const password=e.target.password.value;
const  users=JSON.parse(localStorage.getItem('users'))||[]

// conditions
if(!names || !fatherName || !email || !password || !users){
  alert("Please Fill Out all Field Properly ! 🤞")
  return;
  
}

// showing users Exist
const  isExist=users.find (item=>item.email===email)

if (isExist){
  alert("Users is Exist Already Please Login ! 😉")
  return
}
else{

const  user={
  names,fatherName,email,password
}
users.push(user)


localStorage.setItem("users", JSON.stringify(users))


alert("submited ✅")
e.target.reset();

}
}







  return (
    <>
<h1 className="card w-100 text-success">Registration Page. </h1>

      <div className="d-flex align-items-center justify-content-center mt-5">
        <ContactForm>
          <form action="#" id="form" className="w-100 p-5 shadow rounded bg-style " onSubmit={handleSubmit}>
            
            <div className="mb-3 row">
              <label htmlFor="username" className="col-sm-2 col-form-label">
                User Name
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="username"  />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="fatherName" className="col-sm-2 col-form-label">
                FatherName
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="fatherName"  />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="email"  />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="password"  />
              </div>
            </div>

            <div className="text-center ">
             <Button className="btn-increase">Submit</Button>
            </div>

          </form>
        </ContactForm>
      </div>
    </>
  );
}
