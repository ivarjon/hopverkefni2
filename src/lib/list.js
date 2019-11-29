import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  load() {
    empty(this.container);
    
    const lectures = fetch('../lectures.json')
    
    lectures.map(createLectures)
    
    function createLectures() {
      lectures.forEach(element => console.log(element));
    }
  }
  
}


