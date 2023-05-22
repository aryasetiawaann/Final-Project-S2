import "./footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="kiri">
        <h3>matara</h3>
        <p>
          ©2023 MATARA. Seluruh hak cipta. Semua video dan acara di platform ini adalah merek dagang dari, dan semua gambar dan konten terkait adalah milik dari, Matara Inc. Duplikasi dan salinannya
          sangat dilarang. Seluruh hak cipta{" "}
        </p>
      </div>
      <div className="kanan">
        <div className="AboutUS">
            <h2>AboutUs</h2>
        </div>
        <div className="socialMedia">
          <a href="" target="_blank" rel="noopener noreferrer"><img src="facebook.png" alt="" /></a>
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
