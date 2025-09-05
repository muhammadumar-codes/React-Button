import "./Header.css"

export default function Header ({SetPage}){
    return (
        <>
   <header prop={SetPage}>
  <div className="logo-link-container">
    <div className="logo">MyBrand</div>

  <div>
    <nav>
    <a href="#" onClick={()=>SetPage("home")}>Count</a>
    <a href="#" onClick={()=>SetPage("services")}>Api Data</a>
    <a href="#" onClick={()=>SetPage("contact")}>Registration Form</a>
    <a href="#" onClick={()=>SetPage("about")}>Login </a>
    
  </nav>
  </div>
  </div>


    <div className="search-box">
      <input type="text" placeholder="Search..."/>
      <i className="fas fa-search"></i>
    </div>

  

</header>
        </>
    )
}