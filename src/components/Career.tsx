import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student</h4>
                <h5>Pokhara University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              graduated from Pokhara University in Bachelor in Computer Application
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship</h4>
                <h5>Nabil Bank ltd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed 2 months of internship in
               Nabil Bank ltd in system functional sector,
                CSD, Loan sector which increase my problem 
                solving skills and communication skill
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web and android application developer </h4>
                <h5>Self</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently i am focusing in web development and
              android application development and i have developed
              a application named BODYNEX which is also available
              in google play store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
