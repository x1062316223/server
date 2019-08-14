
const form = document.querySelector(".js-form");
const addButton = document.getElementById("submit");
const list = document.querySelector('.js-todo-list');

var storedValues = window.localStorage.getItem("myitems");

var app = {
  // Application Constructor
  initialize: function () {
    list.innerHTML = storedValues;
    if (storedValues === 0) list.innerHTML = '';
    //add onDeviceready event 
    document.addEventListener('deviceready', this.onDeviceReady, true);
    //add Resume event
    document.addEventListener('resume', this.onResume, false);


    let THIS = this;

    //add input event listener
    form.addEventListener('submit', function () {
      event.preventDefault();
      const input = document.querySelector('.js-todo-input');
      const text = input.value.trim();
      const id = Date.now();
      if (text !== '') {
        //create li elements for to do item
        list.insertAdjacentHTML('beforeend',`<li class="todo-item" data-key="${id}">
          <input id="${id}" type="checkbox"/>
          <label for="${id}" class="tick js-tick"></label>
          <span>${text}</span>
          <button class="delete-todo js-delete-todo">
            <svg><use href="#delete-icon"></use></svg>
          </button>
        </li>`);  
        THIS.store();
        input.value = '';
        input.focus();
      }
    }, false);

    //add event listener on checked and delete
    list.addEventListener('click', function(e){
      var t = e.target;

      if (t.classList.contains('js-tick')) {
        const itemKey = event.target.parentElement.dataset.key;
        THIS.toggleDone(itemKey);
        THIS.store();

      }
      if (t.classList.contains('js-delete-todo')) {
        const itemKey = event.target.parentElement.dataset.key;
        THIS.deleteTodo(itemKey);
        t.parentNode.removeChild(t);
        THIS.store();

        //const itemKey = event.target.parentElement.dataset.key;
        //THIS.deleteTodo(itemKey);
        
      }
    });
  },

  store: function(){
    window.localStorage.myitems = list.innerHTML;
  },

  getValues: function(){

    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
    }
    else {
      list.innerHTML = storedValues;
    }
  

  },

  onResume: function () {
    // Handle the resume event
    setTimeout(function () {
      // TODO: do your thing!
      message = "Let's get our tasks done!";
      navigator.notification.confirm(message, ["Welcome Back!"], ["Let's Go"]);

    }, 0);
  },

  //toggle class 'done' hide or visible
  toggleDone: function (key) {
    const item = document.querySelector(`[data-key='${key}']`);
  
    item.classList.toggle('done');
    this.store();

  },
//remove item from list
  deleteTodo: function (key) {
    const item = document.querySelector(`[data-key='${key}']`);
    item.remove();
    this.store();

    // select the list element and trim all whitespace once there are no todo items left
    if (storedValues === 0) list.innerHTML = '';
  },
  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
  },




  // Update DOM on a Received Event
  receivedEvent: function (id) {
    console.log('Received Event: ');
  }

};

app.initialize();
