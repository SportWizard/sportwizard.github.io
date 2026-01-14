export default function About() {
  return (
    <>
      <div className="card">
        <h2 className="subheading">Introduction</h2>
        <p>
          Hey, I'm Henry Ye Cao, a Computer Science graduate.
        </p>
      </div>

      <div className="card">
        <h2 className="subheading">Skills</h2>

        <div className="skill">Python</div>
        <div className="skill">Java</div>
        <div className="skill">JavaScript</div>
        <div className="skill">C</div>
        <div className="skill">HTML/CSS</div>
        <div className="skill">MySQL</div>
        <div className="skill">OOP</div>
        <div className="skill">DSA</div>
        <div className="skill">Git</div>
      </div>

      <div className="card">
        <h2 className="subheading">Volunteer Experiences</h2>

        <h3 className="job-title">Web Developer</h3>
        <div className="job-content">
          White Haven Community Club - Toronto, ON
          <br />
          Oct 2025 to Now
          <br />
          Some of the tasks I performed:
          <ul className="list-disc pl-5">
            <li>
              Improve backend API endpoint (error checking and validation) and database connection
              (connection pool instead of standard connection).
            </li>
            <li>
              Implement Google reCAPTCHA for form submission to prevent spam.
            </li>
            <li>
              Improve backend security to prevent attacks such as SQL injection with parameter placeholder,
              “?”, XSS with sanitized inputs, and CSRF using CORS.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
