import Layout from "../components/Layout";
import { PinedRepos } from "../public/profile";

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6M10 14L21 3" />
  </svg>
);

const RepoCard = ({ name, description, language, html_url, index }) => (
  <article className="repo-card" key={index}>
    <h3>{name}</h3>
    {language && <span className="lang">{language}</span>}
    {description && <p>{description}</p>}
    <a href={html_url} target="_blank" rel="noopener noreferrer">
      View repository <ExternalIcon />
    </a>
  </article>
);

const GitHub = ({ user, repo, error }) => {
  if (error || !user || user.message === "Not Found") {
    return (
      <Layout title="My GitHub">
        <div className="centered">
          <p className="error-code">…</p>
          <h1>Couldn&apos;t load GitHub</h1>
          <p>
            The GitHub API is unavailable right now (rate limit or network).
            Visit{" "}
            <a href="https://github.com/AlanMauricioCastillo" target="_blank" rel="noopener noreferrer">
              github.com/AlanMauricioCastillo
            </a>{" "}
            directly.
          </p>
        </div>
      </Layout>
    );
  }

  const pinned = repo.filter((r) => r.visibility === "public" && PinedRepos.includes(r.name));
  const others = repo.filter((r) => r.visibility === "public" && !PinedRepos.includes(r.name));

  return (
    <Layout title="My GitHub" description="Repositories and open-source work by Mauricio A. Castillo.">
      <section className="section">
        <div className="github-grid">
          <aside className="profile-card">
            <img className="avatar" src={user.avatar_url} alt={`${user.name} avatar`} />
            <h2 style={{ margin: 0 }}>{user.name}</h2>
            {user.bio && <p className="bio">{user.bio}</p>}
            <a href={user.html_url} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">
              Visit profile <ExternalIcon />
            </a>
          </aside>

          <div>
            <div className="section-head">
              <h2>Pinned repositories</h2>
              <p className="section-sub">What I build and maintain in the open.</p>
            </div>
            <div className="repo-grid">
              {pinned.map((r, i) => (
                <RepoCard key={r.id} index={i} {...r} />
              ))}
            </div>

            <div className="section-head" style={{ marginTop: 40 }}>
              <h2>All repositories</h2>
            </div>
            <div className="repo-grid">
              {others.map((r, i) => (
                <RepoCard key={r.id} index={i} {...r} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  try {
    const [userRes, repoRes] = await Promise.all([
      fetch(`https://api.github.com/users/AlanMauricioCastillo`),
      fetch(`https://api.github.com/users/AlanMauricioCastillo/repos?per_page=100`),
    ]);

    if (!userRes.ok) {
      return {
        props: { user: null, repo: [], error: userRes.status },
      };
    }

    const user = await userRes.json();
    const repo = await repoRes.json();

    return {
      props: {
        user,
        repo: Array.isArray(repo) ? repo : [],
        error: null,
      },
    };
  } catch (e) {
    return {
      props: { user: null, repo: [], error: e.message },
    };
  }
};

export default GitHub;
