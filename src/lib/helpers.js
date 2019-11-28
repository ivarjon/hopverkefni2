export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function createLectures(title){
  var newBox = document.createElement('div');
  newBox.className = 'card';
  document.querySelector('.cards').appendChild(newBox);
  var content = document.createTextNode(title);
  newBox.appendChild(content);

  // búa til div

  // búa til myndina
  // setja src = slóð á mynd
  //appenda myndina við div

  // búa til category og titil textann.
  // appenda við div

  // skila div
}
