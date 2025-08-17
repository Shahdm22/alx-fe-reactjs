import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/src/data.json")
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch((err) => console.error("Error loading recipes:", err));
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">
                🍲 Recipe Sharing Platform
            </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                            <p className="text-gray-600">{recipe.summary}</p>
                            <Link
                                to={`/recipe/${recipe.id}`}
                                className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                            >
                                View Recipe
                            </Link>
                            <Link
                                to="/add"
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                            >
                                Add New Recipe
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;


