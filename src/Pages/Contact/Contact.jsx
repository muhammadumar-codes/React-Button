import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <ContactForm>
          <form action="#" className="w-100 p-5 shadow rounded bg-style ">
            
            <div className="mb-3 row">
              <label htmlFor="username" className="col-sm-2 col-form-label">
                User Name
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="username" />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="fatherName" className="col-sm-2 col-form-label">
                FatherName
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="fatherName" />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="email" />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="password" />
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
