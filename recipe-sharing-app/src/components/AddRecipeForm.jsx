import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;
        addRecipe({ id: Date.now(), title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <h2>Add Recipe</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
                style={{ display: 'block', width: '100%', marginBottom: '10px' }}
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
                style={{ display: 'block', width: '100%', marginBottom: '10px' }}
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;
