import "./footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="kiri">
        <h3>matara</h3>
        <p>
          Hello World! We are the MATARA team, students from the Faculty of Informatics, Informatics Major, Class of 2023. We are currently taking Introduction to Internet Technology course, and this
          website is our final semester examination project. We use REACT JS to build this website.
        </p>
        <h4>copyright © 2023</h4>
      </div>
      <div className="kanan">
        <div className="AboutUS">
          <h2>AboutUs & Reach us in instagram </h2>
          <p></p>
        </div>
        <div className="socialMedia">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="../assets/search.png" alt="" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer"></a>
          <a href="" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </div>
    //   <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
    //     <div className="footer__content container">
    //       <div className="footer__content__logo">
    //         <div className="logo">
    //           <img src={logo} alt="" />
    //           <Link to="/">tMovies</Link>
    //         </div>
    //       </div>
    //       <div className="footer__content__menus">
    //         <div className="footer__content__menu">
    //           <Link to="/">Home</Link>
    //           <Link to="/">Contact us</Link>
    //           <Link to="/">Term of services</Link>
    //           <Link to="/">About us</Link>
    //         </div>
    //         <div className="footer__content__menu">
    //           <Link to="/">Live</Link>
    //           <Link to="/">FAQ</Link>
    //           <Link to="/">Premium</Link>
    //           <Link to="/">Privacy policy</Link>
    //         </div>
    //         <div className="footer__content__menu">
    //           <Link to="/">You must watch</Link>
    //           <Link to="/">Recent release</Link>
    //           <Link to="/">Top IMDB</Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
}

export default Footer;
