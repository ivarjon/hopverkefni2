export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function createLectures(element, title){
  document.querySelector('.cards').appendChild(element);
  var content = document.createTextNode(title);
  element.appendChild(content);

  // búa til div

  // búa til myndina
  // setja src = slóð á mynd
  //appenda myndina við div

  // búa til category og titil textann.
  // appenda við div

  // skila div
}
