import make from './selections'

const {
  fetchItems: fetchProducts,
  reducer
} = make(
  'products',
  process.env.PUBLIC_URL + '/data/foods.json'
)

export { fetchProducts }
export default reducer