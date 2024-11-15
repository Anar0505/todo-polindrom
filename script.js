document.getElementById('todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const task = input.value;
  
    if (task === '') return;
  
    // `li` yaradırıq
    const li = document.createElement('li');
    li.innerHTML = `
      ${task}
      <div class="btns">
        <button class="update-btn">Update</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;
  
    // Silme 
    li.querySelector('.delete-btn').addEventListener('click', function () {
      li.remove();
      updateLocalStorage(); // Silindikdən sonra localStorage-u yeniləyirik
    });
  
    // Güncəlləmə 
    li.querySelector('.update-btn').addEventListener('click', function () {
      input.value = task; // taski inputa atiriq
      input.focus();      
      li.remove();        // `li` siyahıdan silinir
      updateLocalStorage(); 
    });
  
    todoList.appendChild(li); // `li`-ni elave etmek
    input.value = '';         // Inputu bosaldieiq
    saveToLocalStorage();     
  });
  
  
  function saveToLocalStorage() {
    const todoList = document.getElementById('todo-list');
    const tasks = [];
  
    // arraya atiriq tasklari
    todoList.querySelectorAll('li').forEach((li) => {
      tasks.push(li.firstChild.textContent);
    });
  
    // Array-ı locala elave edirik
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  
  function loadFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const todoList = document.getElementById('todo-list');
  
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${task}
        <div class="btns">
          <button class="update-btn">Update</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
  
     
      li.querySelector('.delete-btn').addEventListener('click', function () {
        li.remove();
        updateLocalStorage();
      });
  
     
      li.querySelector('.update-btn').addEventListener('click', function () {
        input.value = task; 
        input.focus();     
        li.remove();      
        updateLocalStorage();
      });
  
      todoList.appendChild(li); 
    });
  }
  
  
  function updateLocalStorage() {
    const todoList = document.getElementById('todo-list');
    const tasks = [];
  
    // tasklari arraya elave edirik
    todoList.querySelectorAll('li').forEach((li) => {
      tasks.push(li.firstChild.textContent); 
    });
  
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  
  window.addEventListener('DOMContentLoaded', loadFromLocalStorage);
  