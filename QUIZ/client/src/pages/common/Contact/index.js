import { NavLink } from "react-router-dom";


export const Contact = () => {
  return (
    <>
    <div style={{ position: 'fixed', width: '100%', height: '100%', overflow: 'hidden', zIndex: '-1' }}>
        <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="/images/b19.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={{ zIndex: '1' }}>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <h1>Welcome to Our Online Exam Portal</h1>
              <p>
                Expertise: Our team of educators and developers is dedicated to providing a state-of-the-art online exam experience.
              </p>
              <p>
                Customization: Every learner is unique. That's why we provide customizable exam solutions tailored to individual needs and preferences.
              </p>
              <p>
                Student-Centric Approach: We prioritize student success and satisfaction, offering comprehensive support to address any exam-related queries.
              </p>
              <p>
                Affordability: Access quality education without financial barriers. Our competitive pricing ensures affordability for all learners.
              </p>
              <p>
                Reliability: Trust in our platform for secure and reliable exams. We guarantee a seamless experience, available 24/7.
              </p>
              <div className="btn btn-group">
               
                
              </div>
            </div>
            
            <div className="hero-image">
              <img
                src="/images/about.jpg"
                alt="online exam portal"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
        <section className="mb-3">
    <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.0255512443564!2d83.2325056!3d17.7434352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3969a6c36c66bd%3A0xcaf1ee421676d3c7!2sOnline%20Examination%20Centres!5e0!3m2!1sen!2sin!4v1709915139724!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>

      </div>
    </>
  );
};
export default Contact