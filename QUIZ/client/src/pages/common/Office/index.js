import { Analytics } from "../../../components/Footer/Analytics";

export const Office = () => {
  return (
    <>
      {/* Video background */}
      <div style={{ position: 'fixed', width: '100%', height: '100%', overflow: 'hidden', zIndex: '-1' }}>
        <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="/images/b18.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
   <div style={{ zIndex: '1' }}>
    <main>
      {/* //1st section */}
     <section className="section-hero">
<div className="container grid grid-two-cols">
  {/* 1  matter*/}
  <div className="hero-content">
     <p>check your knowledge here....</p>
    <h1>Online Exam Portal</h1>
   
    <p>Welcome to [SMS Online Exam Portal]

Are you ready to take your learning journey to the next level? Look no further! Our online exam portal offers a seamless experience for students, educators, and professionals alike. With user-friendly features and a vast array of exam options, achieving your goals has never been easier.</p>
<br />
<div className="btn btn-group">
  <a href="/office"><button className="btn">Login now</button></a>   <a href="/register"><button className="btn secondary-btn">Register Now</button></a>
  

</div>
  </div>
  {/* 2 hero image */}
  <div className="hero-image">
    <img 
    src="/images/home.jpg" 
    alt="home" 
    width="400"
    height="500"/>
  </div>

</div>
     </section>
    </main>
<Analytics/>
      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.jpg"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
"Ready to embark on the journey towards a streamlined and secure online exam platform? Reach out to us today for a complimentary consultation, and let's delve into how Thapa Technical can empower your institution to excel in the digital era."
            </p>
            <div className="btn btn-group">
              {/* <a href="/office">
                <button className="btn">connect now</button>
              </a> */}
              <a href="/contact">
                <button className="btn secondary-btn">Contact-Us</button> 
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    
</>
  );
};
export default Office;