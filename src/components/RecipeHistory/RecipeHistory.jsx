import React, { useState, useEffect } from 'react'
import '../Styles/RecipeHistory.css'
import RecipeCard from './RecipeCard'


const RecipeHistory = () => {

    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        const loadRecipes = () => {
            const savedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
            setRecipes(savedRecipes);
        };

        loadRecipes();

        window.addEventListener('recipeAdded', loadRecipes);
        return () => {
            window.removeEventListener('recipeAdded', loadRecipes);
        };
    }, []);

    const deleteRecipe = (recipeId) => {
        const updatedRecipes = recipes.filter(recipe => recipe.id !== recipeId);
        setRecipes(updatedRecipes);
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    };

    return (
        <div id='my-recipes' className='history-container container'>
            <h2 className='history-title'>Mis recetas</h2>
            <div className="history-recipes">
                {recipes.map(recipe => (
                    <RecipeCard
                        className='history-cards'
                        key={recipe.id}
                        recipe={recipe}
                        onDelete={deleteRecipe}

                    />
                ))}

            </div>
        </div>
    )
}

export default RecipeHistory

