import Layout from "../components/Layout";

const Blog = () => (
  <Layout title="Blog" description="Notes and writing by Mauricio A. Castillo.">
    <section className="section">
      <div className="section-head">
        <span className="eyebrow">Writing</span>
        <h2>Blog</h2>
      </div>
      <p style={{ color: "var(--text-2)" }}>No posts yet — coming soon.</p>
    </section>
  </Layout>
);

export default Blog;
