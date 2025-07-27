import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);

    return (
        <div>
            <h2>Recipe List</h2>
            {recipes.map((recipe) => (
                <div key={recipe.id} style={{ marginBottom: '10px' }}>
                    <h3>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
