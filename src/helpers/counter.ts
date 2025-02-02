/**
 * Метод форматирует quantity.
 *
 * @param {string} quantity
 */
export const formatQuantity = (quantity: string) => {
    if (quantity.length <= 0) return '';

    const parsedQuantity: number = parseInt(quantity, 10);

    if (!isNaN(parsedQuantity)) {
        return parsedQuantity > 99 ? '99+' : parsedQuantity.toString();
    }

    return quantity.length > 3 ? quantity.slice(0, 3) : quantity;
};
