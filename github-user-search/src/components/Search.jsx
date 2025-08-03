// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";
function Search() {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {

            const results = await fetchUserData(username, location, minRepos);
            setUsers(results);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <form onSubmit={handleSearch} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-bold mb-4">Advanced GitHub User Search</h2>

                <input
                    type="text"
                    placeholder="Username"
                    className="mb-2 p-2 border rounded w-full"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Location"
                    className="mb-2 p-2 border rounded w-full"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Min Repositories"
                    className="mb-2 p-2 border rounded w-full"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Search
                </button>
            </form>

            {/* Status Messages */}
            {loading && <p className="text-blue-600">Loading...</p>}
            {error && <p className="text-red-600">Looks like we cant find the user</p>}

            {/* Results */}
            {users.length > 0 && (
                <div className="space-y-4">
                    {users.map((user) => (
                        <div key={user.id} className="p-4 border rounded shadow">
                            <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
                            <h3 className="font-bold">{user.login}</h3>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                View Profile
                            </a>
                            {/* Placeholder: you can extend user data later */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
