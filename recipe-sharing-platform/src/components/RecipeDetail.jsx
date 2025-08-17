import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch("/src/data.json")
            .then((res) => res.json())
            .then((data) => {
                const foundRecipe = data.find((r) => r.id === parseInt(id));
                setRecipe(foundRecipe);
            })
            .catch((err) => console.error("Error loading recipe:", err));
    }, [id]);

    if (!recipe) {
        return <p className="text-center mt-10">Loading recipe...</p>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <Link
                to="/"
                className="inline-block mb-6 text-blue-500 hover:underline"
            >
                ← Back to Home
            </Link>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
                    <p className="text-gray-700 mb-6">{recipe.summary}</p>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">📝 Ingredients</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Ingredient 1</li>
                            <li>Ingredient 2</li>
                            <li>Ingredient 3</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">👩‍🍳 Instructions</h2>
                        <ol className="list-decimal list-inside space-y-2 text-gray-600">
                            <li>Step 1: Do something</li>
                            <li>Step 2: Do something else</li>
                            <li>Step 3: Finish cooking</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetail;
