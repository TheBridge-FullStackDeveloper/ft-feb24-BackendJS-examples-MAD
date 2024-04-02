document.getElementById("send").addEventListener("click",() => {

    const product_name = document.getElementById("product_name").value;

    console.log(product_name);
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: product_name,
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(data=>{
                document.getElementById("message1").innerHTML = "Producto guardado con ID: "+data.id;
                console.log(data)
            })
})


document.getElementById("form_product").addEventListener("submit",(event) => {
    event.preventDefault();

    const title = event.target.product_name.value;
    const price = event.target.price.value;

    console.warn(title,price);
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title,
                    price,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(data=>{
                document.getElementById("message2").innerHTML = "Producto guardado con ID: "+data.id;
                console.log(data)

            })


})