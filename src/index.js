import List from './lib/list';
import { createLectures } from './lib/helpers';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');


  var newBox = document.createElement('div');
  newBox.className = 'card';
  document.querySelector(".header").style.backgroundColor = "#999";
  if (isLecturePage) {
    var url = window.location.search;
    var param = url.substring(6, url.length);
    var params = param.split("-");
    var catParam = params[0];
    var titleParam = params[1];
    const list = new List();
    list.loadLecture(catParam, titleParam, param);

  } else {
    const list = new List();
    list.load();
  }
});

//filter
$(".btn").click(function() {
  var value = $(this).attr('data-filter');
  if(value === "css") {
    $('.card').show('1000');
  } else {
    $(".card").not('.'+value).hide('3000');
    $('.card').filter('.'+value).show('3000');
  }
});
$('.btn').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
});
