import  "./About.css"
import ContactForm from  "../../components/ContactForm/ContactForm"
import Button from "../../components/Button/Button"
export default function About (){
    return  (
        <>
        <h1 className="text-center text-success card  w-100">Secound  Method</h1>

   <div className="d-flex justify-content-center align-item-center mt-5">

      <ContactForm>
          <form action="#" id="form" className="w-100 p-5 shadow rounded bg-style ">
            
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
             <Button className="btn-increase">Submit</Button>
            </div>

          </form>
     </ContactForm>
   </div>
    
                </>
    )
}