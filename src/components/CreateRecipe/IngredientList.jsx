import React, { useState } from 'react';
import '../Styles/IngredientList.css';
import QuantityInput from '../QuantityInput/QuantityInput'

// Importación de imagenes para tarjetas de ingredientes
import polloImage from './../../assets/ing-card-pollo.png'
import vacunaImage from './../../assets/ing-card-vacuna.png'
import pescadoImage from './../../assets/ing-card-pescado.png'
import cebollaImage from './../../assets/ing-card-cebolla.png'
import calabazaImage from './../../assets/ing-card-calabaza.png'
import lechugaImage from './../../assets/ing-card-lechuga.png'
import zanahoriaImage from './../../assets/ing-card-zanahoria.png'
import arvejasImage from './../../assets/ing-card-arvejas.png'
import garbanzosImage from './../../assets/ing-card-garbanzos.png'
import lentejasImage from './../../assets/ing-card-lentejas.png'
import porotosImage from './../../assets/ing-card-porotos.png'
import arrozImage from './../../assets/ing-card-arroz.png'
import fideosImage from './../../assets/ing-card-fideos.png'

// Objeto de lista de ingredientes. Arreglo de props.
// Las props son las categorías de ingredientes, las cuales también contienen props para definir titulo y subpropiedades para posteriormente poder
// asignarles nombre e imagen segun el ingrediente, y un id como identificador unico.
export const ingredient_data_list = {
    carnes: {
        title: "Carnes",
        items: [
            { id: "1", value: "Vacuna", image: vacunaImage },
            { id: "2", value: "Pollo", image: polloImage },
            { id: "3", value: "Pescado", image: pescadoImage },
        ]
    },
    vegetales: {
        title: "Vegetales",
        items: [
            { id: "4", value: "Cebolla", image: cebollaImage },
            { id: "5", value: "Zanahoria", image: zanahoriaImage },
            { id: "6", value: "Lechuga", image: lechugaImage },
            { id: "7", value: "Calabaza", image: calabazaImage },
        ]
    },
    legumbres: {
        title: "Legumbres",
        items: [
            { id: "8", value: "Lentejas", image: lentejasImage },
            { id: "9", value: "Arvejas", image: arvejasImage },
            { id: "10", value: "Porotos", image: porotosImage },
            { id: "11", value: "Garbanzos", image: garbanzosImage },
        ]
    },
    carbohidratos: {
        title: "Carbohidratos",
        items: [
            { id: "13", value: "Fideos", image: fideosImage },
            { id: "14", value: "Arroz", image: arrozImage },
        ]
    }
};

const IngredientList = ({ onIngredientsChange }) => {

    // Estado de los ingredientes seleccionados
    const [selectedIngredients, setSelectedIngredients] = useState({});


    // Funcionalidades para el método del estado (setSelectedIngredients).

    // Manejar el cambio de cantidades de cada ingrediente seleccionado.
    // Asignado al input de cantidad, que se vuelve visible a partir de
    // cualquier cantidad mayor a 0.
    const handleIngredientChange = (id, quantity) => {
        setSelectedIngredients(prev => {
            const newSelectedIngredients = quantity > 0 ? { ...prev, [id]: quantity } : { ...prev };
            if (quantity <= 0) {
                delete newSelectedIngredients[id];
            }
            onIngredientsChange(newSelectedIngredients);
            return newSelectedIngredients;
        });
    };

    // Selección y deselección de ingredientes
    // Cuando el usuario cliquea por primera vez un ingrediente, lo suma al estado con
    // la cantidad mínima e inicial de 1.
    const toggleIngredient = (id) => {
        setSelectedIngredients(prev => {
            const newSelectedIngredients = { ...prev };
            if (prev[id]) {
                delete newSelectedIngredients[id];
            } else {
                newSelectedIngredients[id] = 1;
            }
            onIngredientsChange(newSelectedIngredients);
            return newSelectedIngredients;
        });
    };

    return (
        <div className="list-container">
            <div className="checkbox-card">
                <div className="checkbox-card-header">
                    <p className="checkbox-title">Seleccionar ingredientes</p>
                </div>

                <div className="selected-ingredients-container">
                    <label className='selected-label'>Has seleccionado:</label>
                    <div className="selected-items">
                        {Object.entries(selectedIngredients).map(([id, quantity]) => {
                            const item = Object.values(ingredient_data_list)
                                .flatMap(category => category.items)
                                .find(item => item.id === id);
                            return item ? (
                                <div key={id} className="chip">
                                    <p className="chip-label">{item.value} x{quantity}</p>
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>

                <div className="checkbox-card-body">
                    <div className="categories-container">
                        {Object.values(ingredient_data_list).map((category) => (
                            <div key={category.title} className="category-section">
                                <h3 className="category-title">{category.title}</h3>
                                <div className="category-items">
                                    {category.items.map((item) => (
                                        <div key={item.id} className="ingredient-container">
                                            <div
                                                className={`ingredient-card ${selectedIngredients[item.id] ? 'selected' : ''}`}
                                                onClick={() => toggleIngredient(item.id)}
                                                style={{
                                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), 
                                                    url(${item.image})`
                                                }}
                                            >
                                                <p className='card-text'>{item.value}</p>
                                            </div>

                                            <QuantityInput
                                                value={selectedIngredients[item.id] || 1}
                                                onChange={(quantity) => handleIngredientChange(item.id, quantity)}
                                                visible={!!selectedIngredients[item.id]}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

IngredientList.ingredient_data_list = ingredient_data_list;

export default IngredientList;

