import { Link } from "react-router-dom"

const Home: React.FC = () => {
    return (
        <main className="container home">
            <h1 className="section-h3">Home</h1>
            <p>You're logged in!</p>
            <article className="home-links">
                <Link to="/editor">Go to Editor's page</Link>
                <Link to="/admin">Go to Admin's page</Link>
                <Link to="/lounge">Go to Lounge's page</Link>
                <Link to="/linkpage">Go to Link's page</Link>
            </article>
            <button>
                Sign out
            </button>
        </main>
    )
}

export default Home