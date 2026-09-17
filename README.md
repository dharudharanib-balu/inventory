# 📦 Inventory Management System

A simple and responsive **Inventory Management System** developed using **HTML, CSS, and JavaScript**. The application allows users to manage product records through basic **CRUD operations** such as Create, Read, Update, and Delete.

The project also includes product search, category filtering, form validation, stock status tracking, dashboard statistics, and browser-based data storage using LocalStorage.

---

## 📌 Project Overview

The Inventory Management System is designed to help users manage product information in an organized way.

Instead of maintaining product details manually, users can add, view, update, and delete inventory records through a simple web interface.

### Main Features

* Add new products
* View all products
* Edit existing products
* Delete products
* Search products
* Filter products by category
* Form validation
* Low-stock detection
* Stock status display
* Dashboard statistics
* Responsive design
* LocalStorage-based data persistence

---

## 🎯 Objectives

The main objectives of this project are:

1. To develop a simple inventory management application.
2. To implement Create, Read, Update, and Delete operations.
3. To provide an easy-to-use user interface.
4. To implement client-side form validation.
5. To provide product search and category filtering.
6. To display inventory statistics.
7. To create a responsive application for desktop and mobile devices.
8. To understand frontend development and CRUD concepts.

---

## 🛠️ Technologies Used

| Technology   | Purpose                               |
| ------------ | ------------------------------------- |
| HTML5        | Structure of the web application      |
| CSS3         | Styling and responsive design         |
| JavaScript   | Application logic and CRUD operations |
| LocalStorage | Browser-based data storage            |
| Git          | Version control                       |
| GitHub       | Source-code repository                |

---

## 🏗️ Project Architecture

```text
User
  ↓
HTML
  ↓
CSS
  ↓
JavaScript
  ↓
LocalStorage
```

### Application Flow

```text
User enters product details
          ↓
     Form Validation
          ↓
      JavaScript
          ↓
      LocalStorage
          ↓
   Product List Updated
          ↓
 Dashboard Statistics Updated
```

---

## 📂 Project Structure

```text
InventoryManagementSystem/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Description

**index.html**

Contains the structure of the application, including:

* Header
* Dashboard
* Product form
* Product table
* Search and filter controls
* Edit and Delete buttons

**style.css**

Contains:

* Page styling
* Dashboard card design
* Form styling
* Table styling
* Button styling
* Status indicators
* Responsive design

**script.js**

Contains:

* Create operation
* Read operation
* Update operation
* Delete operation
* Search
* Category filtering
* Form validation
* LocalStorage operations
* Dashboard calculations

---

## 🔄 CRUD Operations

### 1. Create

Users can enter product details and add a new product.

**Product fields:**

* Product Name
* Category
* Quantity
* Price
* Supplier Name

---

### 2. Read

All saved products are displayed in a table.

The table displays:

```text
ID
Product Name
Category
Quantity
Price
Supplier
Status
Actions
```

---

### 3. Update

Users can click the **Edit** button to modify an existing product.

After editing, the updated information is saved and displayed in the product table.

---

### 4. Delete

Users can click the **Delete** button to remove a product.

A confirmation message is displayed before deletion.

---

## 🔍 Search and Filter

The application provides:

### Product Search

Users can search products using:

* Product name
* Supplier name

### Category Filter

Products can be filtered based on categories such as:

* Electronics
* Clothing
* Food
* Stationery
* Furniture
* Other

---

## 📊 Dashboard

The dashboard displays four important inventory statistics:

```text
Total Products
Total Quantity
Total Value
Low Stock
```

### Low Stock

Products with quantity **5 or below** are identified as low-stock products.

### Stock Status

| Quantity | Status       |
| -------: | ------------ |
|        0 | Out of Stock |
|      1–5 | Low Stock    |
|  Above 5 | Available    |

---

## ✅ Validation

The application validates the following fields:

* Product name cannot be empty.
* Category must be selected.
* Quantity must be a valid number.
* Quantity cannot be negative.
* Price must be a valid number.
* Price cannot be negative.
* Supplier name cannot be empty.

Validation messages are displayed below the corresponding fields.

---

## 💾 Data Storage

This frontend version uses **Browser LocalStorage** to store product information.

Example:

```javascript
localStorage.setItem(
    "products",
    JSON.stringify(products)
);
```

The stored data remains available when the browser page is refreshed.

> Note: LocalStorage is used only for this frontend version. It is not a replacement for a production database.

---

## 📱 Responsive Design

The application is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile

CSS media queries are used to adjust the layout for smaller screens.

---

## ▶️ How to Run the Project

### Step 1: Download or Clone the Repository

Clone the GitHub repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Open the Project

Open the project folder:

```text
InventoryManagementSystem
```

### Step 3: Run the Application

Open:

```text
index.html
```

in a web browser.

No server or database installation is required for this frontend version.

---

## 🧪 Testing

The following operations can be tested manually:

| Test Case               | Expected Result                          |
| ----------------------- | ---------------------------------------- |
| Add valid product       | Product should be added                  |
| Submit empty form       | Validation message should appear         |
| Enter negative quantity | Validation message should appear         |
| Enter negative price    | Validation message should appear         |
| Search product          | Matching products should appear          |
| Filter category         | Selected category products should appear |
| Edit product            | Product details should be updated        |
| Delete product          | Product should be removed                |
| Refresh browser         | Stored products should remain            |
| Mobile screen           | Layout should adjust responsively        |

---

## 🔐 Security and Quality

The current frontend version follows basic development practices:

* Input validation is implemented.
* Meaningful variable and function names are used.
* HTML, CSS, and JavaScript are separated.
* No passwords or API keys are stored in the project.
* Application responsibilities are separated into different files.

For a production version, backend validation, authentication, authorization, secure database access, and environment-based configuration should be implemented.

---

## 🚀 Future Enhancements

The project can be extended with:

* Spring Boot backend
* REST API integration
* MySQL database
* User authentication
* Admin dashboard
* Supplier management
* Customer management
* Sales management
* Stock-in and stock-out tracking
* PDF invoice generation
* Email notifications
* Advanced reports
* Cloud deployment

### Planned Full-Stack Architecture

```text
HTML / CSS / JavaScript
          ↓
     REST API
          ↓
     Spring Boot
          ↓
   JPA / Hibernate
          ↓
        MySQL
```

---

## 📚 Learning Outcomes

Through this project, the following concepts are practiced:

* HTML page structure
* CSS styling
* Responsive web design
* JavaScript DOM manipulation
* JavaScript events
* Form validation
* CRUD operations
* LocalStorage
* Search and filtering
* Basic software architecture
* Git and GitHub

---

## 👨‍💻 Author

**Dharani B**

B.E. Computer and Communication Engineering

---

## 📄 Project Status

**Current Version:** Frontend CRUD Version

**Status:** Completed

The current version implements the core inventory CRUD functionality using HTML, CSS, JavaScript, and LocalStorage.

---

## ⭐ Acknowledgement

This project was developed as part of a practical learning exercise for understanding **CRUD-based web application development** and full-stack application architecture.

WEB APPLICATION LINK:
https://dharudharanib-balu.github.io/inventory/
