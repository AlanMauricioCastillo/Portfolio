import Layout from "../components/layout";
import { skillLogo, skillsStikers } from "../public/profile";
import { experience } from "../public/profile";
import { I_am } from "../public/profile";

const Index = () => (
  <Layout>
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="img1.jpg" alt="Alan Castillo" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1 className="text-light">{I_am.name}</h1>
              <h3>{I_am.title}</h3>
              <p>{I_am.description}</p>
              <a href="hireMe" className="intermitente">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="row py-2">
      <div className="col-md-5">
        <div className="p-2 bg-dark">
          <h3>
            Skills <img width="45px" src={skillLogo}></img>
          </h3>
          <ul className=" row row-cols-2">
            {skillsStikers.map(({ tec, url }) => (
              <li className="col" key={tec}>
                <i className="fas fa-check"></i>
                {tec}
                <img
                  style={{ paddingLeft: "12px" }}
                  width="50px"
                  src={url}
                ></img>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="col-md-7">
        <div className="card bg-dark">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experience.map((exp, index) => (
                <li key={index}>
                  <h3>
                    <i className="fas fa-briefcase"></i>
                    {exp.title}
                  </h3>
                  <p>
                    <i className="fas fa-calendar-alt"></i>
                    {exp.since} - {exp.to}
                  </p>
                  <p>{exp.description}</p>
                  <p>
                    <i className="fas fa-globe"></i>
                    <a href={exp.link}>{exp.webSiteName}</a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
