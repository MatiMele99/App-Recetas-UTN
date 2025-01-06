import React from 'react'


// El componente funciona en base a las propiedades de valor, cambio de cantidades por el usuario,
// y visibilidad si se cumplen las condiciones.
const QuantityInput = ({ value, onChange, visible }) => {

    // Función que maneja el cambio de valores
    // '10' le indica a parseInt que el valor que introduce el usuario debe ser convertido a un
    // numero entero del sistema decimal.
    const handleInputChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10) || 0;
        onChange(newQuantity);
    }

    // Si el valor de visible es false, no se muestra el input.
    // En el componente padre (IngredientList) se indican los elementos que harán funcionar esta condición.
    if (!visible) return null;

    return (
        <div className="quantity-input">
            <input
                type="number"
                className="form-control text-center"
                value={value || 0}
                onChange={handleInputChange}
                min="0"
                aria-label="Cantidad"
            />
        </div>
    )
}

export default QuantityInput

