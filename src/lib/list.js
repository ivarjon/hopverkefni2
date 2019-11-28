import { createLectures } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  load() {
    console.log('load');
    //empty(this.container);
    return fetch('lectures.json')
    .then((result) => {
      console.log(result);
      if (!result.ok) {
        throw new Error('Non 200 status');
      }
      return result.json();
    })
    .then(data => {
      console.log(data);
      //iterate here
      //createLectureListItem(data.lectures[0].title);
      var i;
      for (i = 0; i < data.lectures.length; i++) {
        var newBox = document.createElement('div');
        newBox.className = 'card';
        createLectures(newBox, data.lectures[i].title);
      }
    })
    .catch(error => console.error(error));
    //lectures.map(createLecture)
  }

  
}
