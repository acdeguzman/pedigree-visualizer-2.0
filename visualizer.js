/**

TO DO
	
	1. CREATE SVG DIMENSIONS DYNAMIC (DEPEND ON THE NUMBER OF NODES ON THE TREE)
	2. CREATE FILTER FUNCTIONALITY

	3. CHANGE SVG DEPENDING ON THE CONFIGURED FILTER

**/


// "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},

//	registrationnumber -> name
//	parents -> children

let treeData = {"registrationnumber":"#00001", "qualitative_info":{"farm_name":"St. Peter","breed":"Duroc", "sex":"Female","birthyear":"1994", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents": [
	{"registrationnumber":"#20", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "date_registered": "2008-07-20", "registered_by":"Netty"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
		{"registrationnumber":"#411", "qualitative_info":{"farm_name":"Jutrosin","breed":"Yorkshire", "sex":"Female","birthyear":"2004", "date_registered": "2017-06-22", "registered_by":"Brose"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
			{"registrationnumber":"#489", "qualitative_info":{"farm_name":"Iwatsuki","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "date_registered": "2015-10-01", "registered_by":"Dermot"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#148", "qualitative_info":{"farm_name":"Sierra","breed":"Duroc", "sex":"Female","birthyear":"2004", "date_registered": "2014-12-06", "registered_by":"Jo"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#277", "qualitative_info":{"farm_name":"Tsyelyakhany","breed":"Duroc", "sex":"Male","birthyear":"2001", "date_registered": "2004-07-02", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]},
			
			{"registrationnumber":"#102", "qualitative_info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2003", "date_registered": "2012-04-10", "registered_by":"Jo"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#445", "qualitative_info":{"farm_name":"Malolos","breed":"Yorkshire", "sex":"Female","birthyear":"2000", "date_registered": "2014-11-11", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"St. Lukes","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]}
		]},
		{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Baguio","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Los Banos","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Calamba","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Rizal","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]},
			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Laguna","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Pansol","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"San Pedro","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]}
		]}	
	]},
	{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
		{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Nagcarlan","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Liliw","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Sta. Cruz","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Santisimo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]},
			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Sta. Maria","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"San Jose","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"San Gabriel","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]}
		]},
		{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Puerto","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Boracay","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Anilao","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Bataan","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]},
			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Quezon","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Siquijor","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"San Diego","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]}
		]}
	]}
]};

treeData = JSON.parse(JSON.stringify(treeData).split('"registrationnumber":').join('"name":'));
treeData = JSON.parse(JSON.stringify(treeData).split('"parents":').join('"children":'));

let keysForSelect = [];		//storage of qualitative keys
let keysForCheckbox = [];	//storage of quantitative keys
let map = {};	// for values in input
let nodecount = 0;

// Set initial margins for SVG dimension initialization
let margin =	{
					top: 20,
					right: 120,
					left: 120,
					bottom: 20
				},

	width =		450,
	height =	450; 

// Set SVG size
let svg =	d3.select("#mainDiv").append("svg")
				.attr("width", 1200)
				.attr("height", 600),
	g	=	svg.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Set tree dimensions
let treemap = d3.tree().size([height, width]);

// Count node count (to be used for dynamic SVG sizing)
let rootNode = d3.hierarchy(treeData, function(d) {return d.children;});
let data = treemap(rootNode);
let nodes = data.descendants();

// Tooltip feature (experiment)
let tooltipdiv =	d3.select("#mainDiv").append("div")
						.attr("class", "tooltip")
						.style("opacity", 0);

// Add links to the nodes (aaralin ko pa)
let link =	g.selectAll(".link")
				.data(nodes.slice(1))
			.enter().append("path")
				.attr("class", "link")
				.attr("d", function(d) {

					for(let key in d.data.qualitative_info) if(!keysForSelect.includes(key)) keysForSelect.push(key);
					for(let key in d.data.quantitative_info) if(!keysForCheckbox.includes(key)) keysForCheckbox.push(key);

					for(let i = 0; i < keysForSelect.length; i++) map[keysForSelect[i]] = [];

					return	"M" + d.y + "," + d.x
							+ "C" + (d.y + d.parent.y) / 2 + "," + d.x
							+ " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
							+ " " + d.parent.y + "," + d.parent.x;
				});

// Add nodes as group (aaralin ko pa)
let node =	g.selectAll(".node")
				.data(nodes)
			.enter().append("g")
				.attr("class", function(d) {

					return "node" + (d.children ? " node--internal" : " node--leaf");
				})
				.attr("transform", function(d) {

					return "translate(" + d.y + "," + d.x + ")";
				})
				// for storing different values to dropdown of values (depending on keys)
				.attr("d", function(d) {

					for(let i = 0; i < keysForSelect.length; i++) {

						for(let value in d.data.qualitative_info) {
							
							if(keysForSelect[i] == value) {
				
								if(!map[keysForSelect[i]].includes(d.data.qualitative_info[value])) map[keysForSelect[i]].push(d.data.qualitative_info[value]);
							}
						}
					}
				});

// Add circle to node

node.append("circle")
	.attr("r", 7)
	.style("stroke", function(d) {

		nodecount++;

		for(let key in d.data.qualitative_info) {

			if(key == "sex") {
				if(d.data.qualitative_info[key] == "Male") return "#1b77b8";
				else return "#f5a905";
			}
		}
	})
	.on("mouseover", function(d) {

		let animalinfo = "<table>";

		tooltipdiv.transition()
			.duration(200)
			.style("opacity", 0.9);

		for(let key in d.data.qualitative_info) {

			animalinfo = animalinfo + "<tr><td>" + key + "</td><td>" + d.data.qualitative_info[key] + "</td></tr>";
		}

		for(let key in d.data.quantitative_info) {

			animalinfo = animalinfo + "<tr><td>" + key + "</td><td>" + d.data.quantitative_info[key] + "</td></tr>";	
		}

		animalinfo = animalinfo + "</table>"

		tooltipdiv.html(animalinfo)
			.style("left", (d3.event.pageX) + "px")
			.style("top", (d3.event.pageY - 28) + "px");
	})
	.on("mouseout", function(d) {

		tooltipdiv.transition()
			.duration(500)
			.style("opacity", 0);
	});

// Add text(id) to node
node.append("text")
	.attr("dy", ".20em")
	.attr("x", function(d) { return d.children ? -10 : 10;})
	.style("text-anchor", function(d) { return d.children ? "end" : "start";})
	.text(function(d) {return d.data.name;});


// Adding filter features
let body = document.getElementsByTagName("body")[0];

let filterDiv = document.createElement('div');

// filter positioning
filterDiv.style.width = '50%';
filterDiv.style.padding = '10px';
filterDiv.style.border = '1px solid #c6b89e';
filterDiv.style.borderRadius = '5px';
filterDiv.style.float = 'left';
filterDiv.style.marginBottom = '3%';

body.appendChild(filterDiv);

let buttonDiv = document.createElement('div');
buttonDiv.style.width = '100%';
buttonDiv.style.paddingBottom = '7%';

let flag = 0, selectCounter = 0;	// for adding "Apply filter" button

const addButton = document.createElement('button');
addButton.type = "submit";
addButton.appendChild(document.createTextNode("Add Filters"));
addButton.style.color = 'white';
addButton.style.background = '#0865ab';
addButton.style.padding = '8px';
addButton.style.float = 'left';
addButton.style.width = '30%';
addButton.style.border = 'none';
addButton.style.cursor = 'pointer';
addButton.style.borderRadius = '3px';

const goFilter = document.createElement('button');
goFilter.type = 'submit';
goFilter.appendChild(document.createTextNode("Go Filter!"));
goFilter.style.color = 'white';
goFilter.style.background = 'green';
goFilter.style.padding = '8px';
goFilter.style.float = 'right';
goFilter.style.width = '30%';
goFilter.style.border = 'none';
goFilter.style.cursor = 'pointer';
goFilter.style.borderRadius = '3px';

buttonDiv.appendChild(addButton);

filterDiv.appendChild(buttonDiv);

addButton.addEventListener('click', function() {
	
	flag++;

	let inputDiv = document.createElement('div');

	let select = document.createElement('select');
	let textField = document.createElement('input');
	textField.type = 'text';
	textField.style.width = '41%';
	textField.style.margin = '3px';
	let option;
	select.style.margin = '3px';
	select.style.width = '50%';

	for(let i = 0; i < keysForSelect.length; i++) {

		option = document.createElement('option');
		option.value = keysForSelect[i];
		option.innerHTML = keysForSelect[i];
		select.appendChild(option);
	}

	let deleteButton = document.createElement('button');
	deleteButton.appendChild(document.createTextNode('x'));
	deleteButton.style.color = 'white';
	deleteButton.style.background = 'red';
	deleteButton.style.height = '27px';
	deleteButton.style.width = '5%';
	deleteButton.style.border = 'none';
	deleteButton.style.cursor = 'pointer';
	deleteButton.style.borderRadius = '3px';

	deleteButton.addEventListener('click', function() {

		if(this.parentNode.parentNode.childNodes.length == 2) {

			buttonDiv.removeChild(buttonDiv.childNodes[1]);
			flag = 0;
		}
		this.parentNode.parentNode.removeChild(this.parentNode);
	});

	inputDiv.appendChild(select);
	inputDiv.appendChild(textField);
	inputDiv.appendChild(deleteButton);
	filterDiv.appendChild(inputDiv);
	// check if there is at least one filter
	
	if(flag == 1) buttonDiv.appendChild(goFilter);

});

console.log(map);

goFilter.addEventListener('click', function() {

	// resets the tree to default (all nodes with white fill)
	node.append("circle")
	.attr("r", 5)
	.style("fill", function(d) {

		return "white";
	});

	let i = 1;

	let keysForFilter = [], valuesForFilter = [];	// will be used for traversing the tree

	while(i < filterDiv.childNodes.length) {

		// keysForFilter.push(inputDiv.childNodes[i].value);
		// valuesForFilter.push(inputDiv.childNodes[i+1].value);

		keysForFilter.push(filterDiv.childNodes[i].childNodes[0].value);
		valuesForFilter.push(filterDiv.childNodes[i].childNodes[1].value);

		i++;
	}

	// fill nodes according to filter
	node.append("circle")
	.attr("r", 6)
	.style("fill", function(d) {

		for(let i = 0; i < keysForFilter.length; i++) {

			for(let key in d.data.qualitative_info) {

				if(key == keysForFilter[i]) {

					if(d.data.qualitative_info[key].toLowerCase() == valuesForFilter[i].toLowerCase()) {

						if(d.data.qualitative_info.sex == "Male") return "#1b77b8";
						else if(d.data.qualitative_info.sex == "Female") return "#f5a905";
					}
				}
			}
		}
	})
	.on("mouseover", function(d) {

		let animalinfo = "<table>";

		tooltipdiv.transition()
			.duration(200)
			.style("opacity", 0.9);

		for(let key in d.data.qualitative_info) {

			animalinfo = animalinfo + "<tr><td>" + key + "</td><td>" + d.data.qualitative_info[key] + "</td></tr>";
		}

		for(let key in d.data.quantitative_info) {

			animalinfo = animalinfo + "<tr><td>" + key + "</td><td>" + d.data.quantitative_info[key] + "</td></tr>";	
		}

		animalinfo = animalinfo + "</table>"

		tooltipdiv.html(animalinfo)
			.style("left", (d3.event.pageX) + "px")
			.style("top", (d3.event.pageY - 28) + "px");
	})
	.on("mouseout", function(d) {

		tooltipdiv.transition()
			.duration(500)
			.style("opacity", 0);
	});

});

// Section for checkboxes div (for quantitative data)

let quanti_div = document.createElement('div');
quanti_div.style.width = '47%';
quanti_div.style.float = 'left';
quanti_div.style.marginLeft = '10px';
quanti_div.style.marginBottom = '3%';
quanti_div.style.border = '1px solid #c6b89e';
quanti_div.style.borderRadius = '5px';

// div for checkboxes
let quanti_form_div = document.createElement('div');

// create form for checkboxes
let quanti_form = document.createElement('form');
quanti_form.action = "";

for(let i = 0; i < keysForCheckbox.length; i++) {

	let quanti_input = document.createElement('input');

	quanti_input.type = 'checkbox';
	quanti_input.name = 'quanti_info';
	quanti_input.id = keysForCheckbox[i];

	quanti_input.value = keysForCheckbox[i];

	quanti_form.appendChild(quanti_input);
	
	let label = document.createElement('label');

	label.htmlFor = keysForCheckbox[i];
	label.appendChild(document.createTextNode(keysForCheckbox[i]));
	label.style.fontSize = '15px';
	label.style.fontFamily = 'Arial, Helvetica, sans-serif';

	quanti_form.appendChild(label);
	quanti_form.appendChild(document.createElement('br'));
}

quanti_form_div.appendChild(quanti_form)
quanti_div.appendChild(quanti_form_div);
body.appendChild(quanti_div);

// REFERENCES
// https://bl.ocks.org/d3noob/257c360b3650b9f0a52dd8257d7a2d73
// https://bl.ocks.org/d3noob/5537fe63086c4f100114f87f124850dd

// FOR IMPROVEMENTS
// https://bl.ocks.org/d3noob/43a860bc0024792f8803bba8ca0d5ecd
// https://codepen.io/marxtseng/pen/oBVjvB?editors=0010