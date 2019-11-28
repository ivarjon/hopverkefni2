import List from './lib/list';
import { createLectures } from './lib/helpers';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  var newBox = document.createElement('div');
  newBox.className = 'card';

  createLectures(newBox);

  if (isLecturePage) {
    
  } else {
    const list = new List();
    list.load();
  }
});
