import React from "react";
import "../styles/about.css";
import Footer from "../components/Footer/footer";
import Navbar from "../components/navbar";
import Arya from "../img/arya.png";
import Alvi from "../img/alvi.jpg";
import Marcel from "../img/marcel.jpg";
import Karsteen from "../img/karsteen.jpg";
import Instagram from "../img/instagram.png";

const AboutUs = () => {
  const members = [
    {
      name: "Alvianda Chairofta",
      position: "00000082435",
      quote:
        "Barang siapa yang memberi kemudaratan kepada seorang muslim, maka Allah akan memberi kemudaratan kepadanya, barang siapa yang merepotkan (menyusahkan) seorang muslim maka Allah akan menyusahkan dia",
      image: Alvi,
      social: {
        twitter: "johndoe",
        instagram: "chairoftalvi",
      },
    },
    {
      name: "Arya Setiawan",
      position: "00000083123",
      quote: "Dan janganlah kamu mendekati zina sesungguhnya zina itu adalah suatu perbuatan yang keji. Dan suatu jalan yang buruk",

      image: Arya,
      social: {
        twitter: "johndoe",
        instagram: "aryasetiawaann",
      },
    },
    {
      name: "Marcellino Melkianus Reda",
      position: "00000082284",
      quote: "Roma 8:10 “Tetapi jika Kristus ada di dalam kamu, maka tubuh memang mati karena dosa, tetapi roh adalah kehidupan oleh karena kebenaran.”",
      image: Marcel,
      social: {
        twitter: "johndoe",
        instagram: "marcel__reda",
      },
    },
    {
      name: "Karsteen Pambudi Wicaksono",
      position: "00000083253",
      quote: "Dan hukum yang kedua, yang sama dengan itu, ialah: Kasihilah sesamamu manusia seperti dirimu sendiri.",
      image: Karsteen,
      social: {
        twitter: "johndoe",
        instagram: "karsteen_",
      },
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="about-us">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h2>{member.name}</h2>
              <p>{member.position}</p>
              <p className="quote">{member.quote}</p>
              <div className="social-icons">
                {member.social.twitter && (
                  <a href={`https://twitter.com/${member.social.twitter}`}>
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
                {member.social.instagram && (
                  <a href={`https://instagram.com/${member.social.instagram}`} target="blank">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>"Cinema nusantara yang tiada tara"</h1>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
