import Layout from "../components/Layout";
import { skillLogo, skillsStikers, projects } from "../public/profile";
import { experience, I_am, links } from "../public/profile";

const Index = () => (
  <Layout title={"Welcome"}>
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark border-light">
          <div className="row">
            <div className="col-md-5">
              <img src="DEV.gif" alt="Alan Castillo" className="img-fluid" />
            </div>
            <div className="col-md-7">
              <h1 className="text-light">{I_am.name}</h1>
              <h3>{I_am.profession}</h3>
              <p>{I_am.description}</p>
              <a href="hireMe" className="intermitente">
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <span className="span4"></span>
                Hire Me
              </a>
              <a href={links.linkedIn.urlink} className="intermitente">
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <span className="span4"></span>
                <img width = '32px' align= 'center' src={links.linkedIn.icon}/>
              </a>
              <a href={links.twetter.urlink} className="intermitente">
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <span className="span4"></span>
                <img width = '32px' align= 'center' src={links.twetter.icon}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="row py-2">
      <div className="col-md-5">
        <div className="p-2 bg-dark card border-light">
          <h3>
            Skills <img width="45px" src={skillLogo}></img>
          </h3>
          <ul className=" row row-cols-2">
            {skillsStikers.map(({ tec, url }, index) => (
              <li className="col" key={index}>
                <i className="fas fa-check"></i>
                {tec}
                <img
                  style={{ paddingLeft: "13px", paddingTop: "3px" }}
                  width="50px"
                  src={url}
                ></img>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center card bg-black pb-4">
          <a href="/DEVELOPER.gif" className="intermitenteReflex" download>
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
            <span className="span4"></span>
            ⮯Resume
          </a>
          <a href="KnowMore" className="intermitenteReflex">
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
            <span className="span4"></span>
            🎬 Watch me
          </a>
        </div>
      </div>

      <div className="col-md-7">
        <div className="card bg-dark border-light">
          <div className="card-body">
            <h1 className="text-light">Experience</h1>
            <ul>
              {experience.map((exp, index) => (
                <li key={index}>
                  <h3>
                    <i className="fas fa-briefcase"></i>
                    {exp.name}
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
    </section>

    <section className="row pt-2">
      <div className="col-md-12">
        <div className="card card-body bg-dark border-light">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            {projects.map(({ name, description, img, link }, index) => (
              <div className="col-md-4 p-2" key={index}>
                <div className="card h-100 border-light">
                  <div className="overFlow">
                    <img src={img} className="card-img-top" alt="..."></img>
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p className="card-text">{description}</p>
                    <a href={link} className="btn btn-primary">
                      Go to project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
