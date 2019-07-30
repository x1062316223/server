
const form = document.querySelector(".js-form");
const addButton = document.getElementById("submit");
const list = document.querySelector('.js-todo-list');

let todoItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(todoItems))
const data = JSON.parse(localStorage.getItem('items'));


var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    document.addEventListener('resume', this.onResume.bind(this), false);

    // Add add button click listener

    /*list.insertAdjacentHTML('beforeend', `
    <li class="todo-item" data-key="${data.id}">
      <input id="${data.id}" type="checkbox"/>
      <label for="${data.id}" class="tick js-tick"></label>
      <span>${data.text}</span>
      <button class="delete-todo js-delete-todo">
        <svg><use href="#delete-icon"></use></svg>
      </button>
    </li>
  `);*/

    let THIS = this;
    addButton.addEventListener('click', function () {
      event.preventDefault();
      const input = document.querySelector('.js-todo-input');
      const text = input.value.trim();
      if (text !== '') {
        THIS.addTodo(text);
        input.value = '';
        input.focus();
      }
    }, false);

    //add event listener on checked toggle
    list.addEventListener('click', event => {
      if (event.target.classList.contains('js-tick')) {
        const itemKey = event.target.parentElement.dataset.key;
        THIS.toggleDone();
      }
      if (event.target.classList.contains('js-delete-todo')) {
        const itemKey = event.target.parentElement.dataset.key;
        THIS.deleteTodo(itemKey);
      }
    });
  },


  addTodo: function (text) {
    const todo = {
      text,
      checked: false,
      id: Date.now(),
    };

    todoItems.push(todo);
    //localStorage.setItem('items', JSON.stringify(todoItems));

    const list = document.querySelector('.js-todo-list');
    list.insertAdjacentHTML('beforeend', `
    <li class="todo-item" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick js-tick"></label>
      <span>${todo.text}</span>
      <button class="delete-todo js-delete-todo">
        <svg><use href="#delete-icon"></use></svg>
      </button>
    </li>
    `);



  },
  reason: function(){},
  successCallback: function(){},
  errorCallback: function(){},

  onResume: function() {
    // Handle the resume event
    CID.checkAuth(reason, successCallback, errorCallback);
    setTimeout(function() {
      // TODO: do your thing!
    message = "Let's get our tasks done!";
    navigator.notification.confirm(message, ["Welcome Back!"], ["Let's Go"]);

  }, 0);
},

  toggleDone: function (key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;

    const item = document.querySelector(`[data-key='${key}']`);
    if (todoItems[index].checked) {
      item.classList.add('done');
    } else {
      item.classList.remove('done');
    }
  },

  deleteTodo: function (key) {
    todoItems = todoItems.filter(item => item.id !== Number(key));
  const item = document.querySelector(`[data-key='${key}']`);
  item.remove();

  // select the list element and trim all whitespace once there are no todo items left
  const list = document.querySelector('.js-todo-list');
  if (todoItems.length === 0) list.innerHTML = '';
  },
  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event



  // Update DOM on a Received Event
  receivedEvent: function (id) {
    console.log('Received Event: ');
  }

};

app.initialize();
