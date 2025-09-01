import "./Header.css"

export default function Header ({SetPage}){
    return (
        <>
   <header prop={SetPage}>
  <div className="logo-link-container">
    <div className="logo">MyBrand</div>

  <div>
    <nav>
    <a href="#" onClick={()=>SetPage("home")}>Home</a>
    <a href="#" onClick={()=>SetPage("about")}>About</a>
    <a href="#" onClick={()=>SetPage("services")}>Services</a>
    <a href="#" onClick={()=>SetPage("contact")}>Contact</a>
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