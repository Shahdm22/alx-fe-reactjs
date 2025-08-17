import { useState } from "react";

export default function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState(""); // 👈 notice: steps

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !ingredients || !steps) {
            alert("All fields are required!");
            return;
        }
        console.log({ title, ingredients, steps });
        // You could also send this to backend later
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
            <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <input
                    type="text"
                    placeholder="Recipe Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />

                {/* Ingredients */}
                <textarea
                    placeholder="Ingredients (comma separated)"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>

                {/* Steps 👈 required */}
                <textarea
                    placeholder="Preparation Steps"
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                >
                    Submit Recipe
                </button>
            </form>
        </div>
    );
}
