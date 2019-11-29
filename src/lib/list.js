import { createLectures, createLecture } from './helpers';

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
      //console.log(data);
      var i;
      for (i = 0; i < data.lectures.length; i++) {
        createLectures(data.lectures[i]);
      }
    })
    .catch(error => console.error(error));
    //lectures.map(createLecture)
  }

  loadLecture(type, title, Slug){
    //empty(this.container);
    return fetch('lectures.json')
    .then((result) => {
      //console.log(result);
      if (!result.ok) {
        throw new Error('Non 200 status');
      }
      return result.json();
    })
    .then(data => {
      var i;
      for (i = 0; i < data.lectures.length; i++) {
        if(data.lectures[i].slug.localeCompare(Slug) == 0){
          createLecture(data,i);
        }
      }
    })
    .catch(error => console.error(error));
    //lectures.map(createLecture)
  }
}
