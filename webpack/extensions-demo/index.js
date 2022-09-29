// import './index'; // not work
// import './index.css'; // work
import './test'; // work
// import './test.css'; // work

window.onload = function() {
    const root = document.getElementById('root');
    const div = document.createElement('div');
    div.className = "container";
    div.innerHTML = "Hi, world";
    root.appendChild(div);
};