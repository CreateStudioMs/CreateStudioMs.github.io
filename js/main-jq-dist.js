$(document).ready((function(){let e=$("input"),s=$(".outer-input");$(".bt-send").click((function(){if(""==e.val())return e.css({backgroundColor:"#ff3333"}),s.css({backgroundColor:"#ff3333"}),!1}));let t=$(".square"),o=$(".answer-top"),i=$(".answer-bottom");$(".first-answer").click((function(){t.text("1"),o.text("Тестирую ответы."),i.text("Отвечаю, проверка")})),$(".second-answer").click((function(){t.text("2"),o.text("Доброго вечора. Чи видається документ (сертифікат, диплом...) після проходження навчання?"),i.text("Доброго вечора. Так ми можемо вам видати сертифікат про проходження наших курсів. Але нагадаю вам, що усі організації, які не в юрисдикції Міністерства Освіти України, видають свої сертифікати, котрі не мають юридичної сили. Якщо глибше дивитись на ситуацію то навіть Диплом будь якого державного університету нашої країни не дає вам ніяких гарантій при працевлашутванні. Тому що головний критерій - це ваші навички та знання, які ви можете продемонструвати потенційному роботодавцію. А наші курси як раз про спражвню практику та знання, за допомогою яких ви зможете зробити взуття самостійно, викноючи усі процеси. Якщо бажаєте більш предметно дізнатися про курси, то залиште ваш контактний телефон, я з вами зв'яжусь та дам більш розгорнуту інформацію і відповіді на ваші питання. З повагою, школа взуттєвої справи Біварді.")})),$(".third-answer").click((function(){t.text("3"),o.text("Добрый день. Прошу Вас указать стоимость обучения. Стоимость курсов зависит от времени их проведения (утро-день-вечер). Спасибо!"),i.text("Добрый день, Александр. Курсы индивидуальные, по времени оговариваете с мастером. По этому вопросу и другим позвоните пожалуйста по номеру 0972925719, Владимир Михайлович.")})),$(".fourth-answer").click((function(){t.text("4"),o.text("Можно ли договориться об индивидуальном и плавающем графике занятий - дни и время?"),i.text("Да, конечно. Мы очень лояльны в этом отношении. Обращайтесь!")})),$(".fifth-answer").click((function(){t.text("5"),o.text("Можно ли пройти у Вас обучение, если я нахожусь в другом городе?"),i.text("Наша программа обучения предусматривает совмещение теоретических и практических занятий, потому для максимально аффективного результата Вы должны проходить обучение у нас в школе в Киеве. С радостью поможем с поиском жилья на период обучения.")})),$(".sixth-answer").click((function(){t.text("6"),o.text("Можно ли забронировать место на обучение через месяц?"),i.text("Да, все жалеющие могут забронировать себе место на курсах на будущее, предварительно подписав договор")})),$(".seventh-answer").click((function(){t.text("7"),o.text("Можно обучаться по выходным?"),i.text("Да, по выходным предусмотрены учебные смены. Так же, у каждого ученика есть доступ к производственным цехам для выполнение домашних заданий и практики в целом.")})),$('input[name="phone"]').mask("+38 (999) 999-99-99"),$(".slick-tool").slick({asNavFor:".slick-tool-small",slidesToShow:1,slidesToScroll:1,arrows:!1,draggable:!1,speed:300,accessibility:!0,responsive:[{breakpoint:760,settings:{autoplay:!0,autoplaySpeed:5e3}}]}),$(".slick-tool-small").slick({slidesToShow:6,slidesToScroll:1,asNavFor:".slider-for",dots:!1,focusOnSelect:!0,centerMode:!1,asNavFor:".slick-tool"}),$(".slick-reviews").slick({slidesToShow:1,arrows:!0,draggable:!1,fade:!0,asNavFor:".slick-reviews-small, .slick-comments"}),$(".slick-reviews-small").slick({slidesToShow:5,infinite:!1,focusOnSelect:!0,asNavFor:".slick-reviews, .slick-comments",responsive:[{breakpoint:1190,settings:{slidesToShow:4}},{breakpoint:760,settings:{slidesToShow:3}}]}),$(".slick-comments").slick({slidesToShow:1,arrows:!1,draggable:!1,fade:!0,asNavFor:".slick-reviews, .slick-reviews-small",responsive:[{breakpoint:480,settings:{autoplay:!0,autoplaySpeed:5e3,fade:!1}}]})}));