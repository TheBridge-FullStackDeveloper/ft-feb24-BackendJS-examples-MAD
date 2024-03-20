const getProduct = async (id = "") => {
  let response = await fetch(`https://fakestoreapi.com/products/${id}`); //{} o [{},{},{},{}]
  let products = await response.json(); //{} o [{},{},{},{}]

  if (Array.isArray(products)) return products;
  else return [products]; // Siempre sea un [{}]
};

const postProduct = async (newProduct) => {
  let response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  let answer = await response.json(); // objeto de vuelta de la petición
  //console.log("Este es el console.log de lo que devuelve la api", answer);
  answer.saved = true;
  return answer;
};

// Producto a enviar por POST a fakestoreapi

const data = {
  title:
    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  price: 695,
  description:
    "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  category: "jewelery",
  image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  rating: {
    rate: 4.6,
    count: 400,
  },
};

//READ
//getProduct(2)
//.then(products=>console.log(products));

// getProduct()
// .then(products=>console.log(products));

//CREATE
//postProduct(data)
//.then(answer => console.log(answer));

// const putProduct = () => {};
// const deleteProduct = () => {};

module.exports = {
  getProduct,
  postProduct,
  //putProduct,
  //deleteProduct
};
