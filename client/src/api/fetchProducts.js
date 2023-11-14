const fetchProducts = async (query) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await response.json();
  return data.results;
};
const fetchByID = async(id)=>{
  const response = await fetch(`https://api.mercadolibre.com/items?ids=${id}`);
  const data = await response.json();
  console.log(data)
  return data[0].body;
}
export default fetchProducts;
export {fetchByID};
