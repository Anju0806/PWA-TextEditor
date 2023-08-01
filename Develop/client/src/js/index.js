import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (editor.initialized) {
  // The editor was properly initialized, do your editor-related logic here
  console.log('Editor is initialized. You can perform your editor-related logic here.');
  const content = "This is the initial content of the editor.";
  editor.setContent(content);
} else {
  // The editor was not properly initialized, show the spinner
  console.log('Editor is not yet initialized. Showing the spinner...');
  loadSpinner();
}


// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox("./src-sw.js");
  
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
