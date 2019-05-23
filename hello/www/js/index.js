/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const ul = document.getElementById("myUL");
const checkedul = document.getElementById("myCheckedUL");

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
let checkedArray = localStorage.getItem('checked') ? JSON.parse(localStorage.getItem('checked')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
localStorage.setItem('checked', JSON.stringify(checkedArray));


const data = JSON.parse(localStorage.getItem('items'));
const checkeddata = JSON.parse(localStorage.getItem('checked'));

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        data.forEach(item => {
            console.log('items', item);
            if (item != "")
                app.createListElement(item);
        })

        checkeddata.forEach(item => {
            console.log('checked', item);
            if (item != "")
                app.createListCheckedElement(item);
        })

        // Create a "close" button and append it to each list item
        var myNodelist = document.getElementsByTagName("LI");
        var i;
        for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }

        // Click on a close button to hide the current list item
        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
            const n = i;
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
                itemsArray.splice(n, 1);
                localStorage.setItem('items', JSON.stringify(itemsArray));
            }
        }

        // Add a "checked" symbol when clicking on a list item
        var list = document.querySelector('ul');
        list.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, false);

        // Add add button click listener
        $("#addBtn").click(this.newElementEvent);
    },


    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    newElementEvent: function (e) {


        e.preventDefault();


        var close = document.getElementsByClassName("close");
        var n = close.length;


        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);

        if (inputValue === '') {
            alert("You must write something!");
        } else {
            itemsArray.push(inputValue);
            localStorage.setItem('items', JSON.stringify(itemsArray));
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        li.addEventListener('click', function () {
            li.classList.toggle('done');

            //get item's index
            const node = this.value;

            //get item's value
            value = JSON.parse(localStorage.getItem('items', node));

            //remove item from localstorage
            itemsArray.splice(node, 1);
            localStorage.setItem('items', JSON.stringify(itemsArray));

            //push value to checked storage
            checkedArray.push(value);
            localStorage.setItem('checked', JSON.stringify(checkedArray));

        })
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";


        span.addEventListener('click', function () {
            var div = this.parentElement;
            div.style.display = "none";


            itemsArray.splice(n, 1);
            localStorage.setItem('items', JSON.stringify(itemsArray));
        })

        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

    },

    createListElement: text => {
        const li = document.createElement('li');
        li.textContent = text;

        li.classList.add("myUL");
        ul.appendChild(li);


        li.addEventListener('click', function () {
            li.classList.toggle('done');

            //get item's index
            const node = this.value;

            //get item's value
            value = JSON.parse(localStorage.getItem('items', node));

            //remove item from localstorage
            itemsArray.splice(node, 1);
            localStorage.setItem('items', JSON.stringify(itemsArray));

            //push value to checked storage
            checkedArray.push(value);
            localStorage.setItem('checked', JSON.stringify(checkedArray));
        });
    },

    createListCheckedElement: text => {
        const li = document.createElement('li');
        li.textContent = text;

        li.classList.add("myCheckedUL");
        checkedul.appendChild(li);

        li.classList.toggle('checked');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log('Received Event: ');
    }

};

app.initialize();
