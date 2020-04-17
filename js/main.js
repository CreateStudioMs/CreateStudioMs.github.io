let textDescLevel = document.querySelectorAll('.text-level');
let list = document.querySelectorAll('.items-main li');
let dataMain;
let line;

let dots = document.querySelectorAll('.dots-main');
let horizontLine = document.getElementById('line');
let parent = document.getElementById('parent');

// Уровни

list.forEach(item => {
	item.addEventListener('mouseover', currentList);
});

function currentList(){
	list.forEach(item => {
		item.classList.remove('current-item');
	});
	this.classList.add('current-item');
	dataMain = this.getAttribute('data-list-hover');
	line = this.getAttribute('data-line');
	textShowResult(dataMain);
	lineHorizont(line);

}

function textShowResult(dataMain){
	textDescLevel.forEach(item => {
		item.classList.contains(dataMain) ? item.classList.add('main-show') :
		item.classList.remove('main-show');
	});
	dots.forEach(item => {
		item.classList.contains(dataMain) ? item.classList.add('current-dot') :
		item.classList.remove('current-dot');
	});
}

function lineHorizont(line){
	horizontLine.style.width = line * 110 + 'px';
}

// Учителя 

let teach = document.querySelectorAll('.ps');
let descTeacher = document.querySelectorAll('.desc-teacher');
let dataName;
teach.forEach(item => {
	item.addEventListener('click', hoverImg);
});

function hoverImg(){
	teach.forEach(item => {
		item.classList.remove('is-active');
	});
	this.classList.add('is-active');
	dataName = this.getAttribute('data-teacher-img');
	compareData(dataName);
}

function compareData(dataName){
	descTeacher.forEach(item => {
		item.classList.contains(dataName) ? item.classList.add('is-desc') : 
		item.classList.remove('is-desc');
	})
}





