import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  load() {
    empty(this.container);
    const lectures = fetch('../lectures.json')

    lectures.map(createLecture)
  }
}
