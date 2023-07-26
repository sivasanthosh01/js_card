let animal=[{
			id:1,
			image:"image/animal10.jpg",
			title:"Tiger",
			content:"The tiger is the largest living cat species and a member of the genus Panthera."
		},
		{
		id:2,
			image:"image/animal2.jpg",
			title:"Lion",
			content:"The lion is a large cat of the genus Panthera native to Africa and India.It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail."
		},
		{
		id:3,
			image:"image/animal3.jpg",
			title:"Zebra",
			content:"Zebras are African equines with distinctive black-and-white striped coats.There are three living species: the Grévy's zebra, plains zebra, and the mountain zebra."
		},
		{
		id:4,
			image:"image/animal4.jpg",
			title:"Giant panda",
			content:"The giant panda is a bear species endemic to China. It is characterised by its bold black-and-white coat and rotund body."
		},
		{
		id:5,
			image:"image/animal5.jpg",
			title:"Dog",
			content:"The dog is a domesticated descendant of the wolf. Also called the domestic dog"
		},
		{
		id:6,
			image:"image/animal6.jpg",
			title:"Cat",
			content:"The cat is a domestic species of small carnivorous mammal."
		 },
		 {id:7,
			image:"image/animal7.jpg",
			title:"Horse",
			content:"The horse is a domesticated, one-toed, hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus."
		},
		{
		id:8,
			image:"image/animal8.jpg",
			title:"Elephant",
			content:"Elephants are the largest existing land animals. Three living species are currently recognised."
		},
		{
		id:6,
			image:"image/animal9.jpg",
			title:"Rabbit",
			content:"Rabbits, also known as bunnies or bunny rabbits, are small mammals in the family Leporidae of the order Lagomorpha."
		},
		]
			
			

		//section
var cardsection=document.getElementById("cardSection")
		//container
var container=document.createElement("div");
	container.classList.add("card-container");
	cardsection.appendChild(container);

var tophead=document.createElement("h1");
	tophead.classList.add("tophead")
	container.appendChild(tophead);
	tophead.innerHTML="Animal";	
	
		//row
var row=document.createElement("div");
	row.classList.add("row-card");
	container.appendChild(row);
		//col
	
	animal.forEach(function(e){
	
var col=document.createElement("div");
	col.classList.add("col-card");
	row.appendChild(col);
		// card
var card=document.createElement("div");
	card.classList.add("animalcard");
	col.appendChild(card);
		//image
var picture=document.createElement("img");
	picture.classList.add("tiger");
	card.appendChild(picture);
	picture.setAttribute("src",e.image);
		//heading
var heading=document.createElement("h1");
	card.appendChild(heading);
	heading.innerHTML=e.title;
		//content
var para=document.createElement("p");
	card.appendChild(para);
	para.innerHTML=e.content;
	

	
	
	})	