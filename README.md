# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 🧾 Budget App

A simple and interactive budget management web application that helps users track their income, expenses, and spending progress — all with a clean user experience.

---

## 🚀 Features

- 🧑‍💼 **User Greeting**

  - Start by entering your name and clicking **Create Account**
  - A friendly popup welcomes you: `"Welcome [Your Name]!"`

- 🧾 **Create Budget**

  - Fill in the budget details:
    - Budget Name
    - Amount
    - Currency (USD or Rupees)
  - Click **Create Budget** to generate a budget card

- 📊 **Budget Overview**

  - Each budget card displays:
    - Budget Name
    - Total Budget Amount
    - A progress bar that fills as you spend
    - **View Detail** button to see associated expenses

- ➕ **Add Expenses**

  - Select the related budget
  - Enter Expense Name and Amount
  - Click **Add Expense** — budget updates instantly with a growing progress bar

- ⚡ **Real-Time Feedback**
  - Smooth and dynamic updates to budgets and progress
  - Popup notifications for better user interaction

---

## 🛠️ Built With

- HTML
- CSS
- JavaScript

---

## Acknowledgements

This project was built by following a tutorial by [The Net Ninja](https://www.youtube.com/@NetNinja) on YouTube,  
which was originally inspired by a project from [Coding in Public (Chris)](https://www.youtube.com/c/codinginpublic).

I followed the tutorial to strengthen my understanding of JavaScript and DOM manipulation.  
I made a small customization by adding **Rupees (₹)** as a currency option in the budget creation form.
