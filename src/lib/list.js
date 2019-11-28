import { empty } from './helpers';

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
    .then(data => console.log(data))
    .catch(error => console.error(error));
    //lectures.map(createLecture)
  }
}
