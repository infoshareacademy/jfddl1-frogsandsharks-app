export const foods = {
  phrase: (food, searchPhrase) =>
    food.name.toLowerCase().includes(searchPhrase.toLowerCase()),
  category_all: foods => true,
  category_none: foods => false,
    category_warzywa: food => food.category === 'warzywa',
  category_owoce: food => food.category === 'owoce',
  category_mieso: food => food.category === 'mieso',
  category_ryby: food => food.category === 'ryby',
  category_nabial: food => food.category === 'nabiał',
  category_dodatki: food => food.category === 'dodatki',
  category_produktySniadaniowe: food => food.category === 'produkty-sniadaniowe',
  category_fastFood: food => food.category === 'fast-food'
}

