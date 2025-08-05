# 📚 Virtual Library System

A simple Object-Oriented JavaScript application that simulates a digital library environment. It allows users to borrow and return books, while admins can manage the catalog and view borrowing history.
## 🧱 OOP Principles Demonstrated in `User` Class

| Pillar              | How It’s Implemented in `User`                   | 
|---------------------|--------------------------------------------------|
| ✅ Encapsulation     |Declared the catalog and historyLog private to the Library Class|
| ✅ Abstraction       | Methods like `borrow()`, `return()`, `history()` hide the complex logic of `Library` methods | 
| ✅ Inheritance       | `Admin` extends `User` to reuse user features    | 
| ✅ Polymorphism      | `history()` method behaves differently in `Admin` (shows all logs) and `User` (shows personal logs) |

## 🚀 Features
### 👤 User
- Borrow available books
- Return borrowed books
- View available books
- View personal borrow/return history

### 🛠️ Admin
- Add new books to the catalog
- Remove books from the catalog
- View full borrowing history (all users)
- Filter borrowing history by user ID

---

## 🏗️ Classes & Structure

- **Library**
  - Stores the catalog and borrowing history
  - Methods: `addBook`, `remove`, `borrow`, `return`, `history`, `availableBook`

- **User**
  - Each user has `name`, `email`, `id`, `role`, and a reference to the library
  - Methods: `borrow`, `return`, `viewAvailableBooks`, `history`

- **Admin (extends User)**
  - Inherits all User features
  - Extra Methods: `addBook`, `remove`, `history` (full or filtered view)
