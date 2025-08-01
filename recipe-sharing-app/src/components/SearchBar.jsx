import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: '20px', width: '100%', padding: '8px' }}
        />
    );
};

export default SearchBar;
