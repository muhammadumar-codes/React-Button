import "./ContactForm.css"
export default function ContactForm ({children}){
    return (
        <>
       <div className="form-container shadow">{children}</div> 
        </>
    )
}