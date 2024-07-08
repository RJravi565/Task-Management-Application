# Task-Management-Application
Daily task updates and remainder application according to out status of priority.


Sure, here's a documentation for the provided HTML code:

---

### To-Do Task Management Application

#### HTML Structure Overview

1. **Document Type Declaration and HTML Setup**
   ```html![To-Do Task Management Application - Work](https://github.com/RJravi565/Task-Management-Application/assets/53607885/472516e7-d7fe-40e0-8f1b-0e2fc6668770)

   <!DOCTYPE html>
   <html lang="en">
   <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>To-Do Task Management Application</title>
   <link rel="stylesheet" href="styles.css">
   </head>
   ```

   - Declares the document type and sets up the basic HTML structure with necessary meta tags and a title.
   - Links an external stylesheet (`styles.css`) for styling the application.

2. **Body Content**
   ```html
   <body>
   <div class="container">
   <h1>To Do Task Management Application</h1>
   ```

   - Begins the body of the HTML document with a container (`<div class="container">`) for content organization.
   - Includes a main heading (`<h1>`) indicating the purpose of the application.

3. **Task Form**
   ```html
   <!-- Form to create a new task -->
   <form id="taskForm" class="task-form">
   <input type="text" id="titleInput" placeholder="Enter title" required>
   <textarea id="descriptionInput" placeholder="Enter description" required></textarea>
   <select id="statusSelect" required>
   <option value="To Do">To Do</option>
   <option value="In Progress">In Progress</option>
   <option value="Done">Done</option>
   </select>
   <button type="submit">Add Task</button>
   </form>
   ```

   - Provides a form (`<form>`) for users to input a new task.
   - Includes input fields for title (`<input type="text">`), description (`<textarea>`), and status (`<select>` dropdown).
   - Submission button (`<button type="submit">`) triggers task addition.

4. **Filter Dropdown**
   ```html
   <!-- Filter dropdown -->
   <div class="filter-container">
   <label for="statusFilter">Filter by Status:</label>
   <select id="statusFilter">
   <option value="all">All</option>
   <option value="To Do">To Do</option>
   <option value="In Progress">In Progress</option>
   <option value="Done">Done</option>
   </select>
   </div>
   ```

   - Provides a dropdown (`<select>`) for filtering tasks based on status.
   - Includes options for "All", "To Do", "In Progress", and "Done".

5. **Task List**
   ```html
   <!-- Task list -->
   <ul id="taskList" class="task-list">
   <!-- Tasks will be dynamically added here -->
   </ul>
   ```

   - Defines an unordered list (`<ul>`) where tasks will be dynamically populated.
   - Initially empty (`<!-- Tasks will be dynamically added here -->`).

6. **JavaScript and Firebase Integration**
   ```html
   <script src="firebase-config.js"></script>
   <script src="app.js"></script>
   ```

   - Imports necessary JavaScript files (`firebase-config.js` and `app.js`) for Firebase configuration and application logic.

7. **Firebase SDK**
   ```html
   <script src="https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"></script>
   <!-- Include other Firebase services as needed -->
   ```

   - Loads Firebase JavaScript SDK (`firebase-app.js` and `firebase-firestore.js`) for Firestore database integration.
   - Additional Firebase services can be included based on application requirements.

8. **Closing HTML Tags**
   ```html
   </body>
   </html>
   ```

   - Closes the `<body>` and `<html>` tags, completing the HTML document structure.

---

### Summary

This HTML file sets up a To-Do Task Management Application with:
- A form for creating new tasks.
- A filter dropdown for sorting tasks by status.
- An area for dynamically displaying tasks.
- Integration with Firebase for backend services like Firestore.

It provides a structured interface for managing tasks efficiently, allowing users to add, view, and filter tasks based on their status.
