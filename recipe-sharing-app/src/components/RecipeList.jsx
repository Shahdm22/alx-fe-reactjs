import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    return (
        <div>
            <h2>Recipe List</h2>
            {filteredRecipes.length === 0 ? (
                <p>No recipes found.</p>
            ) : (
                filteredRecipes.map((recipe) => (
                    <div key={recipe.id} style={{ marginBottom: '10px' }}>
                        <h3>
                            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                        </h3>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecipeList;
