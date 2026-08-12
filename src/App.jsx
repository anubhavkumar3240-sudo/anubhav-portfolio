function App() {
  return (
    <main>

      {/* ================= NAVBAR ================= */}

      <nav>
        <div className="logo">
          AK.
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="tag">
            CSE AI/ML • Data Analytics • Python
          </p>

          <h1>
            Hi, I'm <span>Anubhav Kumar</span>
          </h1>

          <h2>
            Building data-driven solutions with Python & AI.
          </h2>

          <p className="description">
            B.Tech CSE AI/ML student passionate about Data Analytics,
            Machine Learning and Python Backend Development. I build
            practical applications that turn data into meaningful solutions.
          </p>

          <div className="buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View My Projects
            </a>

            <a
              href="/resume.pdf"
              download="Anubhav_Kumar_Resume.pdf"
              className="secondary-btn"
            >
              Download Resume ↓
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/anubhavkumar3240-sudo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/anubhav-kumar-577b68269/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>


        {/* PROFILE CARD */}

        <div className="hero-card">

          <div className="profile-circle">
            AK
          </div>

          <h3>
            Anubhav Kumar
          </h3>

          <p>
            AI/ML • Data Analytics • Python
          </p>

          <div className="status">
            <span></span>
            Open to Opportunities
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section"
      >

        <div className="section-heading">

          <p>
            ABOUT ME
          </p>

          <h2>
            Turning ideas into practical solutions.
          </h2>

        </div>


        <div className="about-content">

          <div>

            <p>
              I'm a B.Tech CSE AI/ML student at Khwaja Moinuddin
              Chishti Language University, Lucknow, with a strong
              interest in Data Analytics, Machine Learning and
              Python development.
            </p>

            <p>
              I enjoy working with real-world datasets, building
              machine learning applications and developing backend
              APIs. My goal is to create practical, scalable and
              data-driven solutions.
            </p>

          </div>


          <div className="about-stats">

            <div>
              <strong>8.23</strong>
              <span>CGPA</span>
            </div>

            <div>
              <strong>2027</strong>
              <span>Graduation</span>
            </div>

            <div>
              <strong>2+</strong>
              <span>Major Projects</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section"
      >

        <div className="section-heading">

          <p>
            TECHNICAL SKILLS
          </p>

          <h2>
            Tools I work with.
          </h2>

        </div>


        <div className="skills-grid">


          {/* LANGUAGES */}

          <div className="skill-card">

            <h3>
              Languages
            </h3>

            <div className="skill-list">

              <span>Python</span>
              <span>SQL</span>
              <span>Java</span>

            </div>

          </div>


          {/* DATA ANALYTICS */}

          <div className="skill-card">

            <h3>
              Data Analytics
            </h3>

            <div className="skill-list">

              <span>Pandas</span>
              <span>NumPy</span>
              <span>Power BI</span>
              <span>Matplotlib</span>
              <span>Seaborn</span>

            </div>

          </div>


          {/* MACHINE LEARNING */}

          <div className="skill-card">

            <h3>
              Machine Learning
            </h3>

            <div className="skill-list">

              <span>Scikit-learn</span>
              <span>TF-IDF</span>
              <span>NLP</span>
              <span>Naive Bayes</span>

            </div>

          </div>


          {/* BACKEND */}

          <div className="skill-card">

            <h3>
              Backend & Tools
            </h3>

            <div className="skill-list">

              <span>FastAPI</span>
              <span>REST API</span>
              <span>Streamlit</span>
              <span>Git</span>
              <span>GitHub</span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-heading">

          <p>
            FEATURED PROJECTS
          </p>

          <h2>
            Things I've built.
          </h2>

        </div>


        <div className="projects-grid">


          {/* PROJECT 1 */}

          <article className="project-card featured-project">

            <div className="project-number">
              01
            </div>


            <div className="project-content">

              <div className="project-top">

                <span className="project-label">
                  MACHINE LEARNING
                </span>

                <span className="project-status">
                  Live
                </span>

              </div>


              <h3>
                SMS Spam Detection
              </h3>


              <p>
                An intelligent machine learning application that
                classifies SMS messages as Spam or Ham using Natural
                Language Processing. The system uses TF-IDF feature
                extraction and Multinomial Naive Bayes for prediction.
              </p>


              <div className="project-tech">

                <span>Python</span>
                <span>Machine Learning</span>
                <span>NLP</span>
                <span>TF-IDF</span>
                <span>Naive Bayes</span>
                <span>Streamlit</span>

              </div>


              <div className="project-buttons">

                <a
                  href="https://spamdetection-iew8kewlbaxwzvcz3bxunh.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-live"
                >
                  Live Demo ↗
                </a>


                <a
                  href="https://github.com/anubhavkumar3240-sudo/spam_detection"
                  target="_blank"
                  rel="noreferrer"
                  className="project-github"
                >
                  GitHub ↗
                </a>

              </div>

            </div>

          </article>


          {/* PROJECT 2 */}

          <article className="project-card">

            <div className="project-number">
              02
            </div>


            <div className="project-content">

              <div className="project-top">

                <span className="project-label">
                  BACKEND DEVELOPMENT
                </span>

              </div>


              <h3>
                Authentication REST API
              </h3>


              <p>
                A backend authentication system developed using
                Python and FastAPI with REST API architecture.
                The project focuses on user authentication,
                API development and backend fundamentals.
              </p>


              <div className="project-tech">

                <span>Python</span>
                <span>FastAPI</span>
                <span>REST API</span>
                <span>Backend</span>

              </div>


              <div className="project-buttons">

                <a
                  href="https://github.com/anubhavkumar3240-sudo"
                  target="_blank"
                  rel="noreferrer"
                  className="project-github"
                >
                  GitHub ↗
                </a>

              </div>

            </div>

          </article>


        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="section"
      >

        <div className="section-heading">

          <p>
            EXPERIENCE
          </p>

          <h2>
            Where I've learned and worked.
          </h2>

        </div>


        {/* HCLTECH */}

        <div className="experience-card">

          <div className="experience-header">

            <div>

              <h3>
                Data Analytics Intern
              </h3>

              <p>
                HCLTech
              </p>

            </div>

            <span>
              Internship
            </span>

          </div>


          <p className="experience-description">
            Worked on data analysis and visualization tasks using
            Python, SQL and Power BI. Gained practical experience
            in data cleaning, exploratory data analysis, reporting
            and creating business-focused dashboards.
          </p>


          <div className="experience-tech">

            <span>Python</span>
            <span>SQL</span>
            <span>Power BI</span>
            <span>Data Analytics</span>

          </div>

        </div>


        {/* TECHPILE */}

        <div className="experience-card">

          <div className="experience-header">

            <div>

              <h3>
                Python & Backend Development Trainee
              </h3>

              <p>
                Techpile Technology Pvt. Ltd.
              </p>

            </div>

            <span>
              2 Months
            </span>

          </div>


          <p className="experience-description">
            Completed practical training focused on Python,
            FastAPI and backend development. Built REST APIs
            and worked with authentication and backend application
            development.
          </p>


          <div className="experience-tech">

            <span>Python</span>
            <span>FastAPI</span>
            <span>REST API</span>
            <span>Backend Development</span>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section
        id="education"
        className="section"
      >

        <div className="section-heading">

          <p>
            EDUCATION
          </p>

          <h2>
            Academic background.
          </h2>

        </div>


        <div className="education-card">

          <div>

            <h3>
              B.Tech — Computer Science Engineering
            </h3>

            <p>
              AI/ML
            </p>

            <p>
              Khwaja Moinuddin Chishti Language University,
              Lucknow
            </p>

          </div>


          <div className="education-info">

            <strong>
              8.23
            </strong>

            <span>
              CGPA
            </span>

            <span>
              Graduation: 2027
            </span>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}

      <section
        id="certifications"
        className="section"
      >

        <div className="section-heading">

          <p>
            CERTIFICATIONS
          </p>

          <h2>
            Continuous learning.
          </h2>

        </div>


        <div className="certifications-grid">

          <div className="certificate-card">

            <div className="certificate-icon">
              DA
            </div>

            <div>

              <h3>
                Data Analytics Internship
              </h3>

              <p>
                HCLTech
              </p>

            </div>

          </div>


          <div className="certificate-card">

            <div className="certificate-icon">
              PY
            </div>

            <div>

              <h3>
                Python & Backend Development
              </h3>

              <p>
                Techpile Technology Pvt. Ltd.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="contact-card">

          <p className="contact-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's build something useful.
          </h2>

          <p>
            I'm currently open to internship and placement
            opportunities in Data Analytics, Python,
            Machine Learning and Software Development.
          </p>


          <div className="contact-buttons">

            <a
              href="mailto:anubhavkumar3240@gmail.com"
              className="primary-btn"
            >
              Email Me
            </a>


            <a
              href="https://www.linkedin.com/in/anubhav-kumar-577b68269/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              LinkedIn
            </a>


            <a
              href="/resume.pdf"
              download="Anubhav_Kumar_Resume.pdf"
              className="secondary-btn"
            >
              Download Resume ↓
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="logo">
          AK.
        </div>

        <p>
          © 2026 Anubhav Kumar. Built with React.
        </p>

        <div>

          <a
            href="https://github.com/anubhavkumar3240-sudo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anubhav-kumar-577b68269/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:anubhavkumar3240@gmail.com"
          >
            Email
          </a>

        </div>

      </footer>

    </main>
  );
}

export default App;