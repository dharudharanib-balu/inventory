```javascript
/* ==========================================
   Inventory Management System
   CRUD using JavaScript + LocalStorage
========================================== */


/* ==========================================
   Get HTML Elements
========================================== */

const productForm = document.getElementById("productForm");

const productId = document.getElementById("productId");
const productName = document.getElementById("productName");
const category = document.getElementById("category");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const supplierName = document.getElementById("supplierName");

const productTableBody = document.getElementById("productTableBody");
const emptyMessage = document.getElementById("emptyMessage");

const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");

const formTitle = document.getElementById("formTitle");
const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");


/* ==========================================
   Load Products
========================================== */

let products = JSON.parse(localStorage.getItem("products")) || [];


/* ==========================================
   Display Products
========================================== */

function displayProducts() {

    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = filterCategory.value;

    productTableBody.innerHTML = "";

    const filteredProducts = products.filter(function(product) {

        const matchesSearch =
            product.productName.toLowerCase().includes(searchText) ||
            product.supplierName.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });


    if (filteredProducts.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }


    filteredProducts.forEach(function(product) {

        const row = document.createElement("tr");

        let status = "";
        let statusClass = "";

        if (product.quantity === 0) {

            status = "Out of Stock";
            statusClass = "status-out";

        } else if (product.quantity <= 5) {

            status = "Low Stock";
            statusClass = "status-low";

        } else {

            status = "Available";
            statusClass = "status-available";

        }


        row.innerHTML = `

            <td>${product.id}</td>

            <td>${product.productName}</td>

            <td>${product.category}</td>

            <td>${product.quantity}</td>

            <td>₹${Number(product.price).toFixed(2)}</td>

            <td>${product.supplierName}</td>

            <td>
                <span class="status ${statusClass}">
                    ${status}
                </span>
            </td>

            <td>

                <button
                    class="action-btn edit-btn"
                    onclick="editProduct(${product.id})">
                    Edit
                </button>

                <button
                    class="action-btn delete-btn"
                    onclick="deleteProduct(${product.id})">
                    Delete
                </button>

            </td>
        `;


        productTableBody.appendChild(row);

    });


    updateDashboard();

}


/* ==========================================
   CREATE
========================================== */

productForm.addEventListener("submit", function(event) {

    event.preventDefault();


    if (!validateForm()) {
        return;
    }


    const name = productName.value.trim();
    const selectedCategory = category.value;
    const qty = Number(quantity.value);
    const productPrice = Number(price.value);
    const supplier = supplierName.value.trim();


    /* UPDATE */

    if (productId.value !== "") {

        const id = Number(productId.value);

        const productIndex = products.findIndex(function(product) {
            return product.id === id;
        });


        if (productIndex !== -1) {

            products[productIndex] = {

                id: id,
                productName: name,
                category: selectedCategory,
                quantity: qty,
                price: productPrice,
                supplierName: supplier

            };

        }


        alert("Product updated successfully!");

    }


    /* CREATE */

    else {

        const newProduct = {

            id: Date.now(),

            productName: name,
            category: selectedCategory,
            quantity: qty,
            price: productPrice,
            supplierName: supplier

        };


        products.push(newProduct);

        alert("Product added successfully!");

    }


    saveProducts();

    displayProducts();

    resetForm();

});


/* ==========================================
   READ
========================================== */

function loadProducts() {

    displayProducts();

}


/* ==========================================
   UPDATE
========================================== */

function editProduct(id) {

    const product = products.find(function(product) {

        return product.id === id;

    });


    if (!product) {
        return;
    }


    productId.value = product.id;

    productName.value = product.productName;

    category.value = product.category;

    quantity.value = product.quantity;

    price.value = product.price;

    supplierName.value = product.supplierName;


    formTitle.textContent = "Edit Product";

    submitButton.textContent = "Update Product";

    cancelButton.style.display = "inline-block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==========================================
   DELETE
========================================== */

function deleteProduct(id) {

    const product = products.find(function(product) {

        return product.id === id;

    });


    if (!product) {
        return;
    }


    const confirmDelete = confirm(
        `Are you sure you want to delete "${product.productName}"?`
    );


    if (!confirmDelete) {
        return;
    }


    products = products.filter(function(product) {

        return product.id !== id;

    });


    saveProducts();

    displayProducts();


    alert("Product deleted successfully!");

}


/* ==========================================
   Cancel Edit
========================================== */

function cancelEdit() {

    resetForm();

}


/* ==========================================
   Reset Form
========================================== */

function resetForm() {

    productForm.reset();

    productId.value = "";

    formTitle.textContent = "Add Product";

    submitButton.textContent = "Add Product";

    cancelButton.style.display = "none";


    clearErrors();

}


/* ==========================================
   Form Validation
========================================== */

function validateForm() {

    clearErrors();

    let valid = true;


    /* Product Name */

    if (productName.value.trim() === "") {

        document.getElementById("productNameError").textContent =
            "Product name is required.";

        valid = false;

    }


    /* Category */

    if (category.value === "") {

        document.getElementById("categoryError").textContent =
            "Please select a category.";

        valid = false;

    }


    /* Quantity */

    if (
        quantity.value === "" ||
        Number(quantity.value) < 0
    ) {

        document.getElementById("quantityError").textContent =
            "Quantity must be 0 or greater.";

        valid = false;

    }


    /* Price */

    if (
        price.value === "" ||
        Number(price.value) < 0
    ) {

        document.getElementById("priceError").textContent =
            "Price must be 0 or greater.";

        valid = false;

    }


    /* Supplier */

    if (supplierName.value.trim() === "") {

        document.getElementById("supplierError").textContent =
            "Supplier name is required.";

        valid = false;

    }


    return valid;

}


/* ==========================================
   Clear Validation Errors
========================================== */

function clearErrors() {

    document.getElementById("productNameError").textContent = "";

    document.getElementById("categoryError").textContent = "";

    document.getElementById("quantityError").textContent = "";

    document.getElementById("priceError").textContent = "";

    document.getElementById("supplierError").textContent = "";

}


/* ==========================================
   Save Products
========================================== */

function saveProducts() {

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

}


/* ==========================================
   Dashboard Statistics
========================================== */

function updateDashboard() {

    const totalProducts = products.length;


    const totalQuantity = products.reduce(
        function(total, product) {

            return total + product.quantity;

        },
        0
    );


    const totalValue = products.reduce(
        function(total, product) {

            return total +
                (product.quantity * product.price);

        },
        0
    );


    const lowStock = products.filter(
        function(product) {

            return product.quantity <= 5;

        }
    ).length;


    document.getElementById("totalProducts").textContent =
        totalProducts;

    document.getElementById("totalQuantity").textContent =
        totalQuantity;

    document.getElementById("totalValue").textContent =
        "₹" + totalValue.toFixed(2);

    document.getElementById("lowStock").textContent =
        lowStock;

}


/* ==========================================
   Search
========================================== */

searchInput.addEventListener("input", function() {

    displayProducts();

});


/* ==========================================
   Category Filter
========================================== */

filterCategory.addEventListener("change", function() {

    displayProducts();

});


/* ==========================================
   Start Application
========================================== */

loadProducts();
```
