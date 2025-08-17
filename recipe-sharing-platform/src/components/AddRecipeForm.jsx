import { useState } from "react";

export default function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");

    // 👇 add error state
    const [errors, setErrors] = useState({});

    // 👇 add validate function
    const validate = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = "Title is required";
        if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
        if (!steps.trim()) newErrors.steps = "Steps are required";

        setErrors(newErrors); // 👈 must be present
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return; // 👈 use validate function
        console.log({ title, ingredients, steps });
        alert("Recipe submitted successfully!");
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
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

                {/* Ingredients */}
                <textarea
                    placeholder="Ingredients (comma separated)"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>
                {errors.ingredients && (
                    <p className="text-red-500 text-sm">{errors.ingredients}</p>
                )}

                {/* Steps */}
                <textarea
                    placeholder="Preparation Steps"
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>
                {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}

                {/* Submit */}
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
