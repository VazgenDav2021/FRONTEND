const container = document.querySelector(".container");

// // insertAdjacentHTML
// const renderProducts = (products) => {
//   let html = "";

//   products.forEach((eachProduct) => {
//     const {
//       title,
//       image,
//       rating: { rate, count },
//     } = eachProduct;
//     html += `
//     <div>
//     <img src='${image}' alt="${title}"/>
//     <p>${title}</p>
//     <p>${rate}</p>
//     <p>${count}</p>
//     </div>
//     `;
//   });

//   container.insertAdjacentHTML("afterbegin", html);
// };

const renderProducts = (products) => {
  products.forEach((eachProducts) => {
    const {
      title,
      image,
      rating: { rate, count },
    } = eachProducts;

    const img = document.createElement("img");
    const titleElement = document.createElement("p");
    const rateElement = document.createElement("p");
    const countElement = document.createElement("p");
    const eachProductsContainer = document.createElement("div");

    titleElement.textContent = title;
    rateElement.textContent = rate;
    countElement.textContent = count;
    img.src = image;

    eachProductsContainer.append(img, titleElement, countElement, rateElement);

    container.append(eachProductsContainer);
  });
};

const getProducts = async () => {
  await fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((data) => {
      renderProducts(data);
    });
};

document.addEventListener("DOMContentLoaded", getProducts);
