import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
    recipes: [],
    filteredRecipes: [],
    searchTerm: '',
    favorites: [],
    recommendations: [],

    setSearchTerm: (term) =>
        set((state) => ({
            searchTerm: term,
            filteredRecipes: state.recipes.filter((r) =>
                r.title.toLowerCase().includes(term.toLowerCase())
            ),
        })),

    addRecipe: (newRecipe) =>
        set((state) => {
            const updatedRecipes = [...state.recipes, newRecipe];
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((r) =>
                    r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        }),

    deleteRecipe: (id) =>
        set((state) => {
            const updatedRecipes = state.recipes.filter((r) => r.id !== id);
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((r) =>
                    r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
                favorites: state.favorites.filter((favId) => favId !== id),
            };
        }),

    updateRecipe: (updatedRecipe) =>
        set((state) => {
            const updatedRecipes = state.recipes.map((r) =>
                r.id === updatedRecipe.id ? updatedRecipe : r
            );
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((r) =>
                    r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        }),

    setRecipes: (recipes) =>
        set({
            recipes,
            filteredRecipes: recipes,
        }),

    addFavorite: (id) =>
        set((state) => ({
            favorites: [...new Set([...state.favorites, id])],
        })),

    removeFavorite: (id) =>
        set((state) => ({
            favorites: state.favorites.filter((favId) => favId !== id),
        })),

    generateRecommendations:
