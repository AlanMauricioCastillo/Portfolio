import Layout from "../components/Layout";
import FetchError from "./_fetchError";

const GitHub = ({user, statusCode}) => {
  if (user.message === "Not Found" || statusCode) return <FetchError />;
  return (
  <Layout>
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card card-body text-center">
          <h1>{user.name}</h1>
          <img className="round-img" src={user.avatar_url} alt=""/>
          <p className="text-muted">{user.bio}</p>
          <a href={user.blog} target="_blank" className="btn btn-dark my-2">Visit my Blog</a>
          <a href={user.html_url} className="btn btn-dark">Visit GitHub Profile</a>
        </div>
      </div>
    </div>
  </Layout>
)};

export const getServerSideProps = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/AlanMauricioCastillo`);
    const user = await response.json();
    const statusCode = response.status > 200 ? response.status : false;
    return {
      props: {
        user,
        statusCode
      }
    };
  } catch (error) {
    return {
      props: {
        user: null,
        error: error
      }
    };
  };
};

export default GitHub;
