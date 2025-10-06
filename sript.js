const products = [
  {
    id: 1,
    name: "Smartphone",
    category: "electronics",
    price: 199,
    image: "https://via.placeholder.com/250x180?text=Smartphone"
  },
  {
    id: 2,
    name: "Laptop",
    category: "electronics",
    price: 799,
    image: "https://via.placeholder.com/250x180?text=Laptop"
  },
  {
    id: 3,
    name: "T-Shirt",
    category: "clothing",
    price: 25,
    image: "https://via.placeholder.com/250x180?text=T-Shirt"
  },
  {
    id: 4,
    name: "Sneakers",
    category: "clothing",
    price: 120,
    image: "https://via.placeholder.com/250x180?text=Sneakers"
  },
  {
    id: 5,
    name: "Wrist Watch",
    category: "accessories",
    price: 300,
    image: "https://via.placeholder.com/250x180?text=Wrist+Watch"
  },
  {
    id: 6,
    name: "Headphones",
    category: "electronics",
    price: 99,
    image: "https://via.placeholder.com/250x180?text=Headphones"
  }
];

const container = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");

function displayProducts(items) {
  container.innerHTML = "";
  if (items.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }
  items.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
    `;
    container.appendChild(card);
  });
}

function filterProducts() {
  let filtered = products;

  const selectedCategory = categoryFilter.value;
  const selectedPrice = priceFilter.value;

  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (selectedPrice !== "all") {
    filtered = filtered.filter(p => {
      if (selectedPrice === "low") return p.price < 100;
      if (selectedPrice === "medium") return p.price >= 100 && p.price <= 500;
      if (selectedPrice === "high") return p.price > 500;
    });
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

displayProducts(products);
