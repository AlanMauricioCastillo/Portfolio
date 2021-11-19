import Layout from "../components/Layout";
import FetchError from "./_fetchError";
import { PinedRepos } from "../public/profile";

const card = (visibility, name, description, language, html_url, index) => {
  return (
    <div className="col-md-4 p-2" key={index}>
      <div className="card h-100 border-primary">
        <div className="card-body text-light">
          <h3>{name}</h3>
          <h4>{language}</h4>
          <p className="card-text">{description}</p>
          <a href={html_url} className="btn btn-light text-primary">
            Go to project
          </a>
        </div>
      </div>
    </div>
  );
};

const GitHub = ({ user, repo, statusCode }) => {
  if (user.message === "Not Found" || statusCode)
    return <FetchError statusCode={statusCode} />;
  return (
    <Layout title="My GitHub">
      <section className="row py-2">
        <div className="col-md-4">
          <div className="card card-body border-primary text-center">
            <h1 className="text-light">{user.name}</h1>
            <img className="round-img" src={user.avatar_url} alt="" />
            <p>{user.bio}</p>
            <a href={user.html_url} className="btn btn-light text-primary">
              Visit GitHub Profile
            </a>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card card-body bg-dark border-primary">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center">Pinned</h1>
              </div>
              {repo.map(
                (
                  { visibility, name, description, language, html_url },
                  index
                ) =>
                  visibility === "public" &&
                  PinedRepos.includes(name) &&
                  card(visibility, name, description, language, html_url, index)
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="col-md-12">
        <div className="card card-body bg-dark border-primary">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Repositories</h1>
            </div>
            {repo.map(
              ({ visibility, name, description, language, html_url }, index) =>
                visibility === "public" &&
                !PinedRepos.includes(name) &&
                card(visibility, name, description, language, html_url, index)
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/AlanMauricioCastillo`
    );
    const user = await response.json();
    const repos = await fetch(
      `https://api.github.com/users/AlanMauricioCastillo/repos`
    );
    const repo = await repos.json();
    const statusCode =
      response.status > 200 || repo.status ? response.status : false;

    return {
      props: {
        user,
        repo,
        statusCode,
      },
    };
  } catch (error) {
    return {
      props: {
        user: null,
        error: error,
      },
    };
  }
};

export default GitHub;
