let myArr = ["Bnana", "Orange", "Mango"];
let myArr2 = ["Potato", "Lady Finger", "Bringel"];
let myCatalog = document.querySelector("#my-catalog");


let myArr3 = myArr.concat(myArr2);

const products = [

    {
        id: 1,
        name: "Washing Machine",
        des: "This is very good machine for your hands",
        price: 12000,
        img: "https://img.freepik.com/premium-vector/vector-realistic-washing-machine-white-3d-mockup_208581-782.jpg"
    },
    {
        id: 2,
        name: "Sewing Machine",
        des: "This is very good machine for your clothes",
        price: 5000,
        img : "https://media.istockphoto.com/id/959213240/photo/household-sewing-machine-accessories-fabric-under-presser-foot.jpg?s=612x612&w=0&k=20&c=SVWZmhRk1GmPncFtTdJvfxa1JwWUUFoUzWanIsdmK7c="
    },

]

products.forEach((product, index) => {
    myCatalog.innerHTML +=`
    <div style="display: flex; flex-direction: column; row-gap: 8px; width: 35%; border-radius: 8px; height: 380px; align-items: center; background-color: whitesmoke;">
    <img height="50%" width="100%" src=${product.img} alt="">
    <h2>${product.name}</h2>
    <p>${product.des}</p>
    <p>${product.price}</p>

</div>`


})



