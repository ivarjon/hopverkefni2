export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function createLectures(title, img){
  var newBox = document.createElement('div');
  var textField = document.createElement('div');
  var content = document.createTextNode(title);
  var thumbnail = document.createElement('img');
  newBox.className = 'card';
  textField.className = 'textField';
  thumbnail.src = img;

  document.querySelector('.cards').appendChild(newBox);
  newBox.appendChild(thumbnail);
  newBox.appendChild(textField).appendChild(content);
  // búa til div

  // búa til myndina
  // setja src = slóð á mynd
  //appenda myndina við div

  // búa til category og titil textann.
  // appenda við div

  // skila div
}
