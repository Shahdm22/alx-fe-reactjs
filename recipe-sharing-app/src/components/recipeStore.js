import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
    setSearchTerm: (term) =>
        set((state) => {
            const filtered = state.recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(term.toLowerCase())
            );
            return {
                searchTerm: term,
                filteredRecipes: filtered,
            };
        }),
    filterRecipes: () =>
        set((state) => ({
            filteredRecipes: state.recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
        })),
    addRecipe: (newRecipe) =>
        set((state) => {
            const updatedRecipes = [...state.recipes, newRecipe];
            const filtered = updatedRecipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            );
            return {
                recipes: updatedRecipes,
                filteredRecipes: filtered,
            };
        }),
    deleteRecipe: (id) =>
        set((state) => {
            const updatedRecipes = state.recipes.filter((r) => r.id !== id);
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((recipe) =>
                    recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        }),
    updateRecipe: (updatedRecipe) =>
        set((state) => {
            const updatedRecipes = state.recipes.map((r) =>
                r.id === updatedRecipe.id ? updatedRecipe : r
            );
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((recipe) =>
                    recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        }),
    setRecipes: (recipes) =>
        set({
            recipes,
            filteredRecipes: recipes,
        }),
}));
