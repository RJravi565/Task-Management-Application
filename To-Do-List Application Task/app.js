// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Firebase database
const db = firebase.firestore();

// DOM elements
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const statusFilter = document.getElementById('statusFilter');

// Function to render tasks
function renderTasks(tasks) {
    taskList.innerHTML = ''; // Clear current task list

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Status: ${task.status}</p>
            <button onclick="deleteTask('${task.id}')">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to fetch tasks based on filter
function fetchTasks(status) {
    let query = db.collection('tasks');

    if (status !== 'all') {
        query = query.where('status', '==', status);
    }

    query.get().then(snapshot => {
        const tasks = [];
        snapshot.forEach(doc => {
            tasks.push({ id: doc.id, ...doc.data() });
        });
        renderTasks(tasks);
    }).catch(error => {
        console.error('Error fetching tasks: ', error);
    });
}

// Event listener for task form submission
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('titleInput').value;
    const description = document.getElementById('descriptionInput').value;
    const status = document.getElementById('statusSelect').value;

    // Add task to Firebase
    db.collection('tasks').add({
        title: title,
        description: description,
        status: status
    }).then(() => {
        // Clear form inputs after adding task
        document.getElementById('titleInput').value = '';
        document.getElementById('descriptionInput').value = '';
        document.getElementById('statusSelect').value = 'To Do';
        fetchTasks(statusFilter.value); // Refresh task list based on current filter
    }).catch(error => {
        console.error('Error adding task: ', error);
    });
});

// Event listener for status filter change
statusFilter.addEventListener('change', function() {
    const selectedStatus = statusFilter.value;
    fetchTasks(selectedStatus);
});

// Initial fetch of tasks (default: All tasks)
fetchTasks('all');
