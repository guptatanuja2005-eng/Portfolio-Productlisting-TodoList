/* =========================
   PRODUCT DATA
========================= */

const products = [

    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2499,
        rating: 4.6,
        icon: "🎧",
        description:
            "Comfortable wireless headphones with clear sound and long battery life."
    },

    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 5999,
        rating: 4.5,
        icon: "⌚",
        description:
            "Track your fitness, notifications and daily activities with ease."
    },

    {
        id: 3,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 1499,
        rating: 4.3,
        icon: "🔊",
        description:
            "Portable speaker with powerful sound and compact design."
    },

    {
        id: 4,
        name: "Classic Sneakers",
        category: "Fashion",
        price: 2999,
        rating: 4.7,
        icon: "👟",
        description:
            "Comfortable everyday sneakers designed for casual wear."
    },

    {
        id: 5,
        name: "Denim Jacket",
        category: "Fashion",
        price: 2199,
        rating: 4.4,
        icon: "🧥",
        description:
            "Classic denim jacket with a modern fit and timeless style."
    },

    {
        id: 6,
        name: "Minimal Backpack",
        category: "Fashion",
        price: 1799,
        rating: 4.5,
        icon: "🎒",
        description:
            "Lightweight backpack suitable for college, work and travel."
    },

    {
        id: 7,
        name: "Table Lamp",
        category: "Home",
        price: 899,
        rating: 4.2,
        icon: "💡",
        description:
            "Simple modern lamp perfect for your desk or bedside table."
    },

    {
        id: 8,
        name: "Coffee Maker",
        category: "Home",
        price: 4499,
        rating: 4.6,
        icon: "☕",
        description:
            "Easy-to-use coffee maker for preparing delicious coffee at home."
    },

    {
        id: 9,
        name: "Ceramic Vase",
        category: "Home",
        price: 699,
        rating: 4.1,
        icon: "🏺",
        description:
            "Elegant ceramic vase that adds a simple touch to your space."
    },

    {
        id: 10,
        name: "Leather Wallet",
        category: "Accessories",
        price: 999,
        rating: 4.4,
        icon: "👛",
        description:
            "Compact wallet with multiple card slots and a premium finish."
    },

    {
        id: 11,
        name: "Sunglasses",
        category: "Accessories",
        price: 1299,
        rating: 4.3,
        icon: "🕶️",
        description:
            "Stylish sunglasses designed for everyday outdoor use."
    },

    {
        id: 12,
        name: "Premium Watch",
        category: "Accessories",
        price: 8999,
        rating: 4.8,
        icon: "⌚",
        description:
            "Elegant timepiece combining classic design with modern details."
    }

];


/* =========================
   DOM ELEMENTS
========================= */

const productGrid =
    document.getElementById("productGrid");

const productCount =
    document.getElementById("productCount");

const emptyState =
    document.getElementById("emptyState");

const categoryFilter =
    document.getElementById("categoryFilter");

const priceFilter =
    document.getElementById("priceFilter");

const sortFilter =
    document.getElementById("sortFilter");

const resetBtn =
    document.getElementById("resetBtn");


/* =========================
   DISPLAY PRODUCTS
========================= */

function displayProducts(productList) {

    productGrid.innerHTML = "";


    productCount.textContent =
        productList.length;


    if (productList.length === 0) {

        productGrid.style.display = "none";

        emptyState.style.display = "block";

        return;

    }


    productGrid.style.display = "grid";

    emptyState.style.display = "none";


    productList.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-icon">
                ${product.icon}
            </div>

            <span class="product-category">
                ${product.category}
            </span>

            <h2>
                ${product.name}
            </h2>

            <p class="product-description">
                ${product.description}
            </p>

            <div class="product-info">

                <span class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </span>

                <span class="rating">
                    ★ ${product.rating}
                </span>

            </div>

        `;


        productGrid.appendChild(card);

    });

}


/* =========================
   FILTER PRODUCTS
========================= */

function filterProducts() {

    let filteredProducts =
        [...products];


    /* CATEGORY */

    const category =
        categoryFilter.value;


    if (category !== "all") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.category === category
            );

    }


    /* PRICE */

    const price =
        priceFilter.value;


    if (price === "0-1000") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.price < 1000
            );

    }


    if (price === "1000-5000") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.price >= 1000 &&
                    product.price <= 5000
            );

    }


    if (price === "5000-10000") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.price > 5000 &&
                    product.price <= 10000
            );

    }


    if (price === "10000") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.price > 10000
            );

    }


    /* SORT */

    const sort =
        sortFilter.value;


    if (sort === "price-low") {

        filteredProducts.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (sort === "price-high") {

        filteredProducts.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (sort === "rating-high") {

        filteredProducts.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }


    if (sort === "name") {

        filteredProducts.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    displayProducts(
        filteredProducts
    );

}


/* =========================
   EVENT LISTENERS
========================= */

categoryFilter.addEventListener(
    "change",
    filterProducts
);

priceFilter.addEventListener(
    "change",
    filterProducts
);

sortFilter.addEventListener(
    "change",
    filterProducts
);


/* =========================
   RESET FILTERS
========================= */

resetBtn.addEventListener(
    "click",
    () => {

        categoryFilter.value = "all";

        priceFilter.value = "all";

        sortFilter.value = "default";

        filterProducts();

    }
);


/* =========================
   INITIAL DISPLAY
========================= */

displayProducts(products);