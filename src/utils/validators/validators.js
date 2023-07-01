
export const requiredField = (value) => {
    if (value) return undefined
    return "field is required"
}

//ф-я которая возвращает другую ф-ю с данными из замыкания
//возвращаемую ф-ю вызывает сам redux-form
//creator выносим за пределы формы и сохраненный результат в переменной передаем в validate где он вызывается redux-form
export const fieldMaxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}