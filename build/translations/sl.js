(function(d){	const l = d['sl'] = d['sl'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"","Align center":"Sredinska poravnava","Align left":"Poravnava levo","Align right":"Poravnava desno","Block quote":"Blokiraj citat",Bold:"Krepko",Cancel:"Prekliči","Choose heading":"Izberi naslov","Dropdown toolbar":"","Editor toolbar":"",Heading:"Naslov","Heading 1":"Naslov 1","Heading 2":"Naslov 2","Heading 3":"Naslov 3","Heading 4":"Naslov 4","Heading 5":"Naslov 5","Heading 6":"Naslov 6",Italic:"Poševno",Justify:"Postavi na sredino",Next:"",Paragraph:"Odstavek",Previous:"","Rich Text Editor":"","Rich Text Editor, %0":"",Save:"Shrani","Show more items":"","Text alignment":"Poravnava besedila","Text alignment toolbar":"Orodna vrstica besedila",Underline:"Podčrtaj"}	);l.getPluralForm=function(n){return (n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));