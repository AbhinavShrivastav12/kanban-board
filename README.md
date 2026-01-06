# Kanban Task Management App

A responsive **Kanban-style task management app** built with **React** and **Tailwind CSS**, featuring:

- **Drag-and-drop** tasks between columns
- **Editable tasks** with title, description, and status
- **Status dropdown** with dynamic background color
- **Real-time updates** using API calls
- Responsive design (mobile-first)

---

## Features
- You can Add Task
- You can drag and drop the task
- You can even change the status of the task by the dropdown

### Columns

- **To Do**
- **In Progress**
- **Done**

Each column displays tasks filtered by their status.

### Task Management

- **Add tasks** via Navbar
- **Edit tasks** (title, description)
- **Delete tasks**
- **Change status** via a dropdown with dynamic colors
- **Drag and drop** tasks between columns

### Responsive Layout

- On **small screens**: date and status stack vertically
- On **medium+ screens**: date and status are side by side

---

## Tech Stack

- **React.js** – Frontend library
- **Tailwind CSS** – Styling
- **React Icons** – Icons
- **Axios / API** – Task CRUD operations
- **Optional Backend** – Any REST API (example: Node.js / Express)

---

## Folder Structure
src/
├─ api/ # API functions for tasks
├─ components/
│ ├─ Buttons/ # Edit, Delete task buttons
│ ├─ Cards/ # TodoCard, InProgressCard, DoneCard
│ ├─ DropDown/ # StatusDropDown
│ ├─ Skeleton/ # Loading skeletons
│ ├─ Navbar.jsx
│ ├─ Footer.jsx
├─ utils/
│ └─ formatDate.js
├─ App.jsx
└─ index.jsx


---
<img width="1913" height="866" alt="image" src="https://github.com/user-attachments/assets/726655a9-483b-4a80-aacd-6b08a9b66779" />


