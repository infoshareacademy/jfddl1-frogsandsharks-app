import make from './_utlis/makeFetchDuch'

const {
  fetchItems: fetchProducts,
  reducer
} = make(
  'products',
  process.env.PUBLIC_URL + '/data/foods.json'
)

export { fetchProducts }
export default reducer