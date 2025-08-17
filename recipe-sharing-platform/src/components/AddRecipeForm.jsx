import React, { useState } from "react";

const AddRecipeForm = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let formErrors = {};
        if (!title.trim()) formErrors.title = "Title is required";
        if (!ingredients.trim() || ingredients.split("\n").length < 2)
            formErrors.ingredients = "At least 2 ingredients required";
        if (!instructions.trim())
            formErrors.instructions = "Instructions are required";

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            // Normally you would send this data to a backend
            const newRecipe = {
                id: Date.now(),
                title,
                ingredients: ingredients.split("\n"),
                instructions: instructions.split("\n"),
            };
            console.log("New recipe submitted:", newRecipe);

            // Reset form after submit
            setTitle("");
            setIngredients("");
            setInstructions("");
            alert("Recipe submitted successfully!");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Recipe Title</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter recipe title"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>

                {/* Ingredients */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Ingredients</label>
                    <textarea
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="Enter each ingredient on a new line"
                        rows="4"
                    ></textarea>
                    {errors.ingredients && (
                        <p className="text-red-500 text-sm">{errors.ingredients}</p>
                    )}
                </div>

                {/* Instructions */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">Preparation Steps</label>
                    <textarea
                        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="Enter each step on a new line"
                        rows="5"
                    ></textarea>
                    {errors.instructions && (
                        <p className="text-red-500 text-sm">{errors.instructions}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                    Submit Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
