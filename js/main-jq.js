$(document).ready(function(){

//check input

let input = $('input');
let outInp = $('.outer-input');

$('.bt-send').click(function(){ 
    if(input.val() == ''){
        input.css({"backgroundColor" : "#ff3333"});
        outInp.css({"backgroundColor" : "#ff3333"});
        return false;
      }
}); 

// answers

let square =  $('.square');
let topAns = $('.answer-top');
let bottomAns = $('.answer-bottom');

$('.first-answer').click(function(){
  square.text('1');
  topAns.text('Тестирую ответы.');
  bottomAns.text('Отвечаю, проверка');
});

$('.second-answer').click(function(){
  square.text('2');
  topAns.text('Доброго вечора. Чи видається документ (сертифікат, диплом...) після проходження навчання?');
  bottomAns.text('Доброго вечора. Так ми можемо вам видати сертифікат про проходження наших курсів. Але нагадаю вам, що усі організації, які не в юрисдикції Міністерства Освіти України, видають свої сертифікати, котрі не мають юридичної сили. Якщо глибше дивитись на ситуацію то навіть Диплом будь якого державного університету нашої країни не дає вам ніяких гарантій при працевлашутванні. Тому що головний критерій - це ваші навички та знання, які ви можете продемонструвати потенційному роботодавцію. А наші курси як раз про спражвню практику та знання, за допомогою яких ви зможете зробити взуття самостійно, викноючи усі процеси. Якщо бажаєте більш предметно дізнатися про курси, то залиште ваш контактний телефон, я з вами зв\'яжусь та дам більш розгорнуту інформацію і відповіді на ваші питання. З повагою, школа взуттєвої справи Біварді.');
});

$('.third-answer').click(function(){
  square.text('3');
  topAns.text('Добрый день. Прошу Вас указать стоимость обучения. Стоимость курсов зависит от времени их проведения (утро-день-вечер). Спасибо!');
  bottomAns.text('Добрый день, Александр. Курсы индивидуальные, по времени оговариваете с мастером. По этому вопросу и другим позвоните пожалуйста по номеру 0972925719, Владимир Михайлович.');
});

$('.fourth-answer').click(function(){
  square.text('4');
  topAns.text('Можно ли договориться об индивидуальном и плавающем графике занятий - дни и время?');
  bottomAns.text('Да, конечно. Мы очень лояльны в этом отношении. Обращайтесь!');
});

$('.fifth-answer').click(function(){
  square.text('5');
  topAns.text('Можно ли пройти у Вас обучение, если я нахожусь в другом городе?');
  bottomAns.text('Наша программа обучения предусматривает совмещение теоретических и практических занятий, потому для максимально аффективного результата Вы должны проходить обучение у нас в школе в Киеве. С радостью поможем с поиском жилья на период обучения.');
});

$('.sixth-answer').click(function(){
  square.text('6');
  topAns.text('Можно ли забронировать место на обучение через месяц?');
  bottomAns.text('Да, все жалеющие могут забронировать себе место на курсах на будущее, предварительно подписав договор');
});

$('.seventh-answer').click(function(){
  square.text('7');
  topAns.text('Можно обучаться по выходным?');
  bottomAns.text('Да, по выходным предусмотрены учебные смены. Так же, у каждого ученика есть доступ к производственным цехам для выполнение домашних заданий и практики в целом.');
});

//mask

 $('input[name="phone"]').mask("+38 (999) 999-99-99");

// slick

  $('.slick-tool').slick({
   	asNavFor: '.slick-tool-small',
   	slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    speed: 300,
    accessibility: true,
      responsive: [
      {
       breakpoint: 760,
        settings: {
        autoplay: true,
        autoplaySpeed: 5000
        }
      }
    ]
  });

  $('.slick-tool-small').slick({
 	  slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    centerMode: false,
   	asNavFor: '.slick-tool',
    
  });

  $('.slick-reviews').slick({
    slidesToShow: 1,
    arrows: true,
    draggable: false,
    fade: true,
    asNavFor: '.slick-reviews-small, .slick-comments'
  })

  $('.slick-reviews-small').slick({
    slidesToShow: 5,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.slick-reviews, .slick-comments',
    responsive: [
     {
       breakpoint: 1190,
        settings: {
        slidesToShow: 4
        }
      },
      {
       breakpoint: 760,
        settings: {
        slidesToShow: 3
        }
      }
    ]
  });


  $('.slick-comments').slick({
       slidesToShow: 1,
       arrows: false,
       draggable: false,
       fade: true,
       asNavFor: '.slick-reviews, .slick-reviews-small',
        responsive: [
      {
       breakpoint: 480,
        settings: {
        autoplay: true,
        autoplaySpeed: 5000,
        fade: false
        }
      }
    ]
  });

});