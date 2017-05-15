export const foods = {
  phrase: (food, searchPhrase) =>
    food.name.toLowerCase().includes(searchPhrase.toLowerCase()),
  category_warzywa: food => food.city === 'warzywa',
  category_owoce: food => food.city === 'owoce',
  category_mieso: food => food.city === 'mieso',
  category_ryby: food => food.gender === 'ryby',
  category_nabial: food => food.gender === 'nabial',
  category_dodatki: food => food.gender === 'dodatki',
  category_produktySniadaniowe: food => food.gender === 'produktySniadaniowe',
  category_fastFood: food => food.gender === 'fastFood'
}