'use strict'


function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key);
    return JSON.parse(val);
}


function SaveDataToLocalStorage(newData) {
    var x = JSON.parse(localStorage.getItem("songsDB") || []);
    x.push(newData);
    localStorage.setItem('songsDB', JSON.stringify(x));
}
