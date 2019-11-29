export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function createLectures(element){
  var newBox = document.createElement('div');
  var imageField = document.createElement('div');
  var tagField = document.createElement('div');
  var textField = document.createElement('div');
  var tag = document.createTextNode(element.category);
  var thumbnail = document.createElement('img');
  var link = document.createElement('a');
  newBox.className = 'card ' + element.category;
  imageField.className = 'imageField';
  tagField.className = 'tagField';
  textField.className = 'textField';
  thumbnail.src = element.thumbnail;

  link.textContent = element.title;
  link.href = 'fyrirlestur.html?slug=' + element.slug;

  document.querySelector('.cards').appendChild(newBox);
  newBox.appendChild(imageField).appendChild(thumbnail);
  newBox.appendChild(tagField).appendChild(tag);
  newBox.appendChild(textField).appendChild(link);
}

export function createLecture(data, n){
  var lecture = data.lectures[n];
  var content = lecture.content;
  document.getElementById("htitle").textContent = lecture.title;
  document.getElementById("hcat").textContent = lecture.category;
  //document.header.style.backgroundImage = 'url('+lecture.image+')'; //virkar ekki ???

  var i;
  for (i = 0; i < content.length; i++) {
    if(content[i].type.localeCompare("youtube") == 0){
      createYoutube();
    } else if(content[i].type.localeCompare('text') == 0){
      createText();
    } else if(content[i].type.localeCompare('quote') == 0){
      createQuote();
    } else if(content[i].type.localeCompare('image') == 0){
      createImage();
    } else if(content[i].type.localeCompare('heading') == 0){
      createHeading();
    } else if(content[i].type.localeCompare('list') == 0){
      createList();
    } else if(content[i].type.localeCompare('code') == 0){
      createCode();
    }
  }
}

function createYoutube(){
  alert('youtube');
}

function createText(){
  alert('text');
}

function createQuote(){
  alert('quote');
}

function createImage(){
  alert('image');
}

function createHeading(){
  alert('heading');
}

function createList(){
  alert('list');
}

function createCode(){
  alert('code');
}

/*
youtube
text
quote
image
heading
list
code
*/