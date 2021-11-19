import Layout from "../components/Layout";

const GitHub = ({user}) => {

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
  const result = await fetch('https://api.github.com/users/AlanMauricioCastillo');
  const data = await result.json();
  return {
    props: {
      user: data
    },
  };
};

export default GitHub;
