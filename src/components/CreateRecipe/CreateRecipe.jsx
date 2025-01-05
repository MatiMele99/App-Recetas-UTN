import React, { useState } from 'react'
import '../Styles/CreateRecipe.css'
import IngredientList from '../CreateRecipe/IngredientList.jsx'


const CreateRecipe = () => {

    // Estados de nombre e ingredientes seleccionados para cada nueva receta 
    const [recipeName, setRecipeName] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState({});

    const handleRecipeNameChange = (event) => {
        setRecipeName(event.target.value);
    };

    // Función para guardado de recetas, asignada al botón 'Guardar'
    const handleRecipeSave = () => {

        // Si el usuario no escribe ningún nombre, la receta no puede guardarse.
        if (recipeName.trim() === '') {
            alert('Por favor, ingrese un nombre para la receta.');
            return;
        }

        // Objeto con arreglo de propiedades para cada nueva receta creada.
        // El ID único de cada receta es creado con la fecha y hora al momento de guardarse,
        // gracias a los milisegundos.
        const newRecipe = {
            id: Date.now(),
            name: recipeName,
            ingredients: selectedIngredients
        }

        // Obtener recetas existentes desde localStorage
        // JSON.parse convierte la información, almacenada en localStorage como JSON, a un objeto JS.
        const existingRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');

        // Crear un nuevo array entre las recetas existentes (que son convertidas a array
        // gracias al spread operator) y la nueva receta que cree el usuario.
        const updatedRecipes = [...existingRecipes, newRecipe];

        // Funcionalidad de guardado de recetas con localStorage
        // Esta función convierte el arreglo updatedRecipes en un string JSON y almacena el valor
        // de las recetas con la key 'recipes'
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));


        // Guardar la lista completa de ingredientes en localStorage
        localStorage.setItem('ingredient_data_list', JSON.stringify(IngredientList.ingredient_data_list));

        // Confirmar guardado de receta y reseteo de formulario
        setRecipeName('')
        setSelectedIngredients({})
        alert(`¡La receta "${recipeName}" ha sido guardada!`);

        const event = new CustomEvent('recipeAdded', { detail: newRecipe });
        window.dispatchEvent(event);


    };

    return (
        <>
            <section id="create-recipe" className="create-recipe">
                <div className='create-container container'>
                    <h2 className='create-title'>Crear nueva receta</h2>
                    <div className="name-recipe">
                        <input
                            type="text"
                            name="New Recipe Name"
                            id="recipe-name-input"
                            placeholder='Nombre de receta'
                            className='name-input'
                            value={recipeName}
                            onChange={handleRecipeNameChange}
                        />

                    </div>

                    <div className="recipe-creator container">
                        <IngredientList onIngredientsChange={setSelectedIngredients} />
                    </div>

                    <button className='save-btn' onClick={handleRecipeSave}>Guardar receta</button>
                </div>
            </section>
        </>
    )
}

export default CreateRecipe

