(function(d){	const l = d['lt'] = d['lt'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"","Align center":"Centruoti","Align left":"Lygiuoti į kairę","Align right":"Lygiuoti į dešinę",Aquamarine:"Aquamarine",Black:"Juoda","Block quote":"Citata",Blue:"Mėlyna",Bold:"Paryškintas","Bulleted List":"Sąrašas",Cancel:"Atšaukti","Centered image":"Vaizdas centre","Change image text alternative":"Pakeisti vaizdo alternatyvųjį tekstą","Choose heading":"Pasirinkite antraštę","Decrease indent":"Sumažinti atitraukimą","Dim grey":"Pilkšva",Downloadable:"","Dropdown toolbar":"","Edit block":"Redaguoti bloką","Edit link":"Keisti nuorodą","Editor toolbar":"","Enter image caption":"Įveskite vaizdo antraštę","Full size image":"Pilno dydžio vaizdas",Green:"Žalia",Grey:"Pilka",Heading:"Antraštė","Heading 1":"Antraštė 1","Heading 2":"Antraštė 2","Heading 3":"Antraštė 3","Heading 4":"Antraštė 4","Heading 5":"Antraštė 5","Heading 6":"Antraštė 6","Image resize list":"","Image toolbar":"","image widget":"vaizdų valdiklis","Increase indent":"Padidinti atitraukimą",Insert:"","Insert image":"Įterpti vaizdą","Insert image via URL":"",Italic:"Kursyvas",Justify:"Lygiuoti per visą plotį","Left aligned image":"Vaizdas kairėje","Light blue":"Šviesiai mėlyna","Light green":"Šviesiai žalia","Light grey":"Šviesiai pilka",Link:"Pridėti nuorodą","Link image":"","Link URL":"Nuorodos URL",Next:"","Numbered List":"Numeruotas rąrašas","Open in a new tab":"","Open link in new tab":"Atidaryti nuorodą naujame skirtuke",Orange:"Oranžinė",Original:"",Paragraph:"Paragrafas",Previous:"",Purple:"Violetinė",Red:"Raudona",Redo:"Pirmyn","Resize image":"","Resize image to %0":"","Resize image to the original size":"","Rich Text Editor":"Raiškiojo teksto redaktorius","Rich Text Editor, %0":"Raiškiojo teksto redaktorius, %0","Right aligned image":"Vaizdas dešinėje",Save:"Išsaugoti","Show more items":"","Side image":"Vaizdas šone","Text alignment":"Teksto lygiavimas","Text alignment toolbar":"","Text alternative":"Alternatyvusis tekstas","This link has no URL":"Ši nuorda neturi URL",Turquoise:"Turkio",Underline:"Pabrauktas",Undo:"Atgal",Unlink:"Pašalinti nuorodą",White:"Balta",Yellow:"Geltona"}	);l.getPluralForm=function(n){return (n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));