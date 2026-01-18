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
        <h2 className="subheading">Development</h2>

        <div className="tool">Python</div>
        <div className="tool">Java</div>
        <div className="tool">JavaScript</div>
        <div className="tool">C</div>
        <div className="tool">HTML/CSS</div>
        <div className="tool">MySQL</div>
        <div className="tool">Git</div>
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
