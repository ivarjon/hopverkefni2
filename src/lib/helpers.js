export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function createLectures(element){
  document.querySelector('.cards').appendChild(element);
  var content = document.createTextNode("<YOUR_CONTENT>");
  element.appendChild(content);
}

// fall sem býr til eitt lecture list item
export function createLectureListItem(title){
  // búa til div

  // búa til myndina
  // setja src = slóð á mynd
  //appenda myndina við div

  // búa til category og titil textann.
  // appenda við div

  // skila div
}