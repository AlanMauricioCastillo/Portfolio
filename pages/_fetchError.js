import Layout from "../components/Layout";

const FetchError = ({statusCode}) => (
  <Layout footer={false}>
  {
    statusCode === 404 ? ( 
      <div>
        <h1>Error: 404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    ) : (
      <div>
        <h1>Error: {statusCode}</h1>
        <p>Sorry, something went wrong.</p>
      </div>
    )
  }
  </Layout>
);

export default FetchError;