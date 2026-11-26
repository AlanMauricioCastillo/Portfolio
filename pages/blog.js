import Layout from "../components/Layout";

const Blog = () => (
  <Layout title="Blog" description="Notes and writing by Mauricio A. Castillo.">
    <section className="section">
      <div className="section-head">
        <h2>Blog</h2>
        <p className="section-sub">Notes on backend engineering, AI and the work in between.</p>
      </div>
      <p style={{ color: "var(--text-2)" }}>No posts yet. Coming soon.</p>
    </section>
  </Layout>
);

export default Blog;
