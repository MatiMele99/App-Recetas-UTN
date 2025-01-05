import React, { useState } from 'react'
import '../Styles/RecipeCard.css'
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete'


//                   
const RecipeCard = ({ recipe, onDelete }) => {

    const [ingredientList, setIngredientList] = useState({});

    useEffect(() => {
        const storedIngredientList = JSON.parse(localStorage.getItem('ingredient_data_list') || '{}');
        setIngredientList(storedIngredientList);
    }, []);

    const getIngredientName = (id) => {
        for (let category in ingredientList) {
            const ingredient = ingredientList[category].items.find(item => item.id === id);
            if (ingredient) {
                return ingredient.value;
            }
        }
        return 'Ingrediente desconocido';
    };



    // Función para asignar la funcionalidad al botón Delete.
    const handleDelete = () => {
        onDelete(recipe.id);
        alert(`La recete ${recipe.name} ha sido eliminada con éxito.`)
    }

    return (
        <div className='card-container'>
            <div className="recipe-card">
                <div className="recipe-card-header">
                    <p className="recipe-card-title">Receta guardada</p>
                </div>

                <div className="saved-recipe-container">
                    <p className="saved-recipe-name">{recipe.name}</p>
                </div>

                <div className="recipe-card-body">
                    <div className="saved-selected-ingredients">
                        <p>Ingredientes:</p>
                        <ul className='saved-ingredients'>
                            {Object.entries(recipe.ingredients).map(([id, quantity]) => (
                                <li key={id}>{getIngredientName(id)}: {quantity}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="recipe-card-buttons">
                        <button
                            className="delete-btn"
                            onClick={handleDelete}
                        ><DeleteIcon className='delete-icon' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard

