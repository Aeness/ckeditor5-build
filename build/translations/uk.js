(function(d){	const l = d['uk'] = d['uk'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 із %1","Align center":"По центру","Align left":"По лівому краю","Align right":"По правому краю","Block quote":"Цитата",Bold:"Жирний","Bulleted List":"Маркерний список",Cancel:"Відміна","Centered image":"Зображення по центру","Change image text alternative":"Змінити текстову альтернативу зображення","Choose heading":"Оберіть заголовок","Decrease indent":"Зменшити відступ",Downloadable:"Завантажувальне","Dropdown toolbar":"Випадаюча панель інструментів","Edit link":"Редагувати посилання","Editor toolbar":"Панель інструментів редактора","Full size image":"Повний розмір зображення",Heading:"Заголовок","Heading 1":"Заголовок 1","Heading 2":"Заголовок 2","Heading 3":"Заголовок 3","Heading 4":"Заголовок 4","Heading 5":"Заголовок 5","Heading 6":"Заголовок 6","Image resize list":"","Image toolbar":"Панелі інструментів зображення","image widget":"Віджет зображення","Increase indent":"Збільшити відступ","Insert image":"Вставити зображення","Insert paragraph after block":"","Insert paragraph before block":"",Italic:"Курсив",Justify:"По ширині","Left aligned image":"Зображення ліворуч",Link:"Посилання","Link image":"","Link URL":"URL посилання",Next:"Наступний","Numbered List":"Нумерований список","Open in a new tab":"Вікрити у новій вкладці","Open link in new tab":"Відкрити посилання у новій вкладці",Original:"",Paragraph:"Параграф",Previous:"Попередній",Redo:"Повтор","Resize image":"","Resize image to %0":"","Resize image to the original size":"","Rich Text Editor":"Розширений текстовий редактор","Rich Text Editor, %0":"Розширений текстовий редактор, %0","Right aligned image":"Зображення праворуч",Save:"Зберегти","Select all":"Вибрати все","Show more items":"Показати більше","Side image":"Бокове зображення","Text alignment":"Вирівнювання тексту","Text alignment toolbar":"Панель інструментів вирівнювання тексту","Text alternative":"Текстова альтернатива","This link has no URL":"Це посилання не має URL",Underline:"Підкреслений",Undo:"Відміна",Unlink:"Видалити посилання","Upload failed":"Завантаження не вдалось","Upload in progress":"Виконується завантаження","Widget toolbar":"Панель інструментів віджетів"}	);l.getPluralForm=function(n){return (n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));