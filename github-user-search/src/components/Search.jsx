// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData(null);
        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={username}
                    placeholder="Search GitHub username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {/* Conditional Rendering */}
            {loading && <p>Loading...</p>}
            {error && <p>Looks like we cant find the user</p>}
            {userData && (
                <div style={{ marginTop: "1rem" }}>
                    <img src={userData.avatar_url} alt="Avatar" width="100" />
                    <h2>{userData.name || userData.login}</h2>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
}

export default Search;

