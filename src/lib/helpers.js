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
  document.querySelector(".header").style.backgroundImage = 'url('+lecture.image+')';

  var i;
  for (i = 0; i < content.length; i++) {
    if(content[i].type.localeCompare("youtube") == 0){
      createYoutube(content[i].data);
    } else if(content[i].type.localeCompare('text') == 0){
      createText(content[i].data);
    } else if(content[i].type.localeCompare('quote') == 0){
      createQuote(content[i].data, content[i].attribute);
    } else if(content[i].type.localeCompare('image') == 0){
      createImage(content[i].data, content[i].caption);
    } else if(content[i].type.localeCompare('heading') == 0){
      createHeading(content[i].data);
    } else if(content[i].type.localeCompare('list') == 0){
      createList(content[i].data);
    } else if(content[i].type.localeCompare('code') == 0){
      createCode(content[i].data);
    }
  }
}

function createYoutube(url){
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", url);
  ifrm.setAttribute("frameborder", 0);
  ifrm.setAttribute("allowfullscreen", 0);
  ifrm.style.width = "800px";
  ifrm.style.height = "600px";
  document.querySelector('.alignboxCenter').appendChild(ifrm);
}

function createText(txt){
  txt = txt.split("\n");

  for (var i=0; i<txt.length; i++){
    var par = document.createElement("p");
    var node = document.createTextNode(txt[i]);
    par.className = 'textPar';
    par.appendChild(node);
    document.querySelector('.alignboxCenter').appendChild(par);
  }
}

function createQuote(quote, attribute){
  var par = document.createElement("p");
  var qnode = document.createElement("p");
  var anode = document.createElement("p");
  qnode.innerHTML = quote;
  anode.innerHTML = attribute;

  par.className = 'quotation';
  qnode.className = 'quote';
  anode.className = 'attribute';
  
  par.appendChild(qnode);
  par.appendChild(anode);

  document.querySelector('.alignboxCenter').appendChild(par);
}

function createImage(url, caption){
  var img = document.createElement('img');
  img.src = url;
  document.querySelector('.alignboxCenter').appendChild(img);

  var cap = document.createElement("p");
  var node = document.createTextNode(caption);
  cap.appendChild(node);
  document.querySelector('.alignboxCenter').appendChild(cap);
}

function createHeading(heading){
  var headingH1 = document.createElement("h1");
  var node = document.createTextNode(heading);
  headingH1.appendChild(node);
  document.querySelector('.alignboxCenter').appendChild(headingH1);
}

function createList(list){
  var ul=document.createElement('ul');

  for (var j=0; j<list.length; j++){
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = list[j];
  }

  document.querySelector('.alignboxCenter').appendChild(ul);
}

function createCode(code){
  code = code.split("\n");

  for (var i=0; i<code.length; i++){
    var par = document.createElement("p");
    var node = document.createTextNode(code[i]);
    par.appendChild(node);
    document.querySelector('.alignboxCenter').appendChild(par);
  }
}
