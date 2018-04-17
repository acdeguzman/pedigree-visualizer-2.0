/**

TO DO
	
	1. CREATE SVG DIMENSIONS DYNAMIC (DEPEND ON THE NUMBER OF NODES ON THE TREE)
	2. THEMES

**/

//	registrationnumber -> name
//	parents -> children

let treeData = {"registrationnumber":"#00001", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Duroc", "sex":"Female","birthyear":"1994", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents": [
	{"registrationnumber":"#20", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "date_registered": "2008-07-20", "registered_by":"Netty"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
		{"registrationnumber":"#411", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2004", "date_registered": "2017-06-22", "registered_by":"Brose"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
			{"registrationnumber":"#489", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "date_registered": "2015-10-01", "registered_by":"Dermot"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#148", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Duroc", "sex":"Female","birthyear":"2004", "date_registered": "2014-12-06", "registered_by":"Jo"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#277", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Duroc", "sex":"Male","birthyear":"2001", "date_registered": "2004-07-02", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]},
			
			{"registrationnumber":"#102", "qualitative_info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2003", "date_registered": "2012-04-10", "registered_by":"Jo"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#445", "qualitative_info":{"farm_name":"Nangkaruka","breed":"Yorkshire", "sex":"Female","birthyear":"2000", "date_registered": "2014-11-11", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]}
		]},
		{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Baguio","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Baguio","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Baguio","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Baguio","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]},
			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Laguna","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Laguna","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Laguna","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]}
		]}	
	]},
	{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
		{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]},
			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]}
		]},
		{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]},
			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]}
		]}
	]}
]};

treeData = JSON.parse(JSON.stringify(treeData).split('"registrationnumber":').join('"name":'));
treeData = JSON.parse(JSON.stringify(treeData).split('"parents":').join('"children":'));

let keysForSelect = [];		//storage of qualitative keys
let map = {};	// for values in input
let tree = [];
let nodecount = 0;

// Set initial margins for SVG dimension initialization
let margin =	{
					top: 20,
					right: 120,
					left: 120,
					bottom: 20
				},

	width =		600,
	height =	450; 

// Set SVG size
let svg =	d3.select("#mainDiv").append("svg")
				.attr("width", screen.width - 70)
				.attr("height", screen.height - 200),
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

					tree.push(d.data);
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


/********

DIFFERENT FEATURES:

1. FILTER
2. PERFORMANCE OF FAMILY
3. IN-BREEDING COEFFICIENT
4. ADDITIVE GENETIC RELATIONSHIP

********/
let body = document.getElementsByTagName("body")[0];

/***

1. FILTER FEATURE

Filter feature creates a filter that can be used to view the SVG differently.
The filter feature depends on the qualitative data of the JSON data

***/

let filterDiv = document.createElement('div');

// filter positioning
filterDiv.style.width = '35%';
filterDiv.style.padding = '10px';
filterDiv.style.border = '1px solid #c6b89e';
filterDiv.style.float = 'left';
filterDiv.style.borderRadius = '3px';
filterDiv.style.marginBottom = '10px';
// Add the filter div to the body as 3rd element after the theme div. Keep track for DOM manipulation
body.appendChild(filterDiv);

// Filter div has 2 divs (button div and input div). Keep track for DOM manipulation
let buttonDiv = document.createElement('div');
buttonDiv.style.width = '100%';
buttonDiv.style.paddingBottom = '5%';

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

let inputDivContainer = document.createElement("div");
inputDivContainer.style.height = '250px';
inputDivContainer.style.maxHeight = '250px';
inputDivContainer.style.width = '100%';
inputDivContainer.style.overflowY = 'auto';
inputDivContainer.style.paddingTop = '5px';

filterDiv.appendChild(inputDivContainer);

addButton.addEventListener('click', function() {
	
	flag++;

	let inputDiv = document.createElement('div');

	let selectKey = document.createElement('select');
	let selectValue = document.createElement('select');
	selectValue.style.width = '40%';
	selectValue.style.margin = '3px';
	let option;
	selectKey.style.margin = '3px';
	selectKey.style.width = '50%';

	for(let i = 0; i < keysForSelect.length; i++) {

		option = document.createElement('option');
		option.value = keysForSelect[i];
		option.innerHTML = keysForSelect[i];
		selectKey.appendChild(option);
	}

	for(let i = 0; i < map[selectKey.value].length; i++) {

		opt = document.createElement('option');
		opt.value = map[selectKey.value][i];
		opt.innerHTML = map[selectKey.value][i];
		selectValue.appendChild(opt)
	}

	selectKey.addEventListener('change', function() {

		let selectLength = selectValue.options.length;

		for(let i = selectValue.options.length - 1; i >= 0; i--) {

			selectValue.remove(i);
		}

		for(let i = 0; i < map[selectKey.value].length; i++) {

			opt = document.createElement('option');
			opt.value = map[selectKey.value][i];
			opt.innerHTML = map[selectKey.value][i];
			selectValue.appendChild(opt)
		}
	});

	let deleteButton = document.createElement('button');
	deleteButton.appendChild(document.createTextNode('x'));
	deleteButton.style.color = 'white';
	deleteButton.style.background = 'red';
	deleteButton.style.height = '20px';
	deleteButton.style.width = '5%';
	deleteButton.style.border = 'none';
	deleteButton.style.cursor = 'pointer';
	deleteButton.style.borderRadius = '3px';

	deleteButton.addEventListener('click', function() {

		if(this.parentNode.parentNode.childNodes.length == 1) {

			buttonDiv.removeChild(buttonDiv.childNodes[1]);
			flag = 0;
		}
		this.parentNode.parentNode.removeChild(this.parentNode);
	});

	inputDiv.appendChild(selectKey);
	inputDiv.appendChild(selectValue);
	inputDiv.appendChild(deleteButton);
	inputDivContainer.appendChild(inputDiv);
	// check if there is at least one filter
	
	if(flag == 1) buttonDiv.appendChild(goFilter);

});


goFilter.addEventListener('click', function() {

	// resets the tree to default (all nodes with white fill)
	node.append("circle")
	.attr("r", 5)
	.style("fill", function(d) {

		return "white";
	});

	let i = 0;

	let keysForFilter = [], valuesForFilter = [];	// will be used for traversing the tree

	while(i < inputDivContainer.childNodes.length) {

		keysForFilter.push(inputDivContainer.childNodes[i].childNodes[0].value);
		valuesForFilter.push(inputDivContainer.childNodes[i].childNodes[1].value);

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

/**

2. PERFORMANCE OF FAMILY

Performance of family basically tabularize the quantitative and qualitative traits of the entities in the tree.
The number/quantity/tally of each value of each traits are displayed.

**/

let performance_div = document.createElement("div");
performance_div.style.width = '62%';
performance_div.style.float = 'left';
performance_div.style.marginLeft = '5px';
performance_div.style.marginBottom = '10px';
performance_div.style.border = '1px solid #c6b89e';
performance_div.style.borderRadius = '5px';
performance_div.style.marginLeft = '14px';

body.appendChild(performance_div);

let qualitative_text = document.createElement("h2");
qualitative_text.innerHTML = "Qualitative Data"
qualitative_text.style.fontFamily = 'Arial, Helvetica, sans-serif';
qualitative_text.style.paddingLeft = '1%';
// qualitative_text.style.textAlign = 'center';

let table_container = document.createElement("div");
table_container.style.maxHeight = '307px';
table_container.style.overflow = 'auto';
table_container.style.width = '100%';

table_container.appendChild(qualitative_text);

performance_div.appendChild(table_container);

//	tables for qualitative data

for(let i = 0; i < keysForSelect.length; i++) {

	let trait_text = document.createElement("h4");
	trait_text.innerHTML = keysForSelect[i];
	trait_text.style.fontFamily = 'Arial, Helvetica, sans-serif';
	trait_text.style.paddingLeft = '1%';

	table_container.appendChild(trait_text);

	let trait_table = document.createElement("table");
	trait_table.cellPadding = '5';
	trait_table.style.marginLeft = '2%';
	trait_table.style.fontSize = '12px';
	trait_table.style.marginBottom = '2%';

	let trait_row = document.createElement("tr");
	
	trait_table.appendChild(trait_row);

	let traitword_text = document.createElement("th");
	traitword_text.innerHTML = 'Value';
	traitword_text.style.fontFamily = 'Arial, Helvetica, sans-serif';

	trait_row.appendChild(traitword_text);

	for(let j = 0; j < map[keysForSelect[i]].length; j++) {

		let trait_value = document.createElement("td");
		trait_value.innerHTML = map[keysForSelect[i]][j];
		trait_value.style.fontFamily = 'Arial, Helvetica, sans-serif';

		trait_row.appendChild(trait_value);
	}

	let count_row = document.createElement("tr");

	trait_table.appendChild(count_row);

	let count_text = document.createElement("th");
	count_text.innerHTML = 'Count';
	count_text.style.fontFamily = 'Arial, Helvetica, sans-serif';

	count_row.appendChild(count_text);

	let count = 0;

	for(let j = 0; j < map[keysForSelect[i]].length; j++) {

		for(let x = 0; x < tree.length; x++) {

			if(tree[x].qualitative_info[keysForSelect[i]] == map[keysForSelect[i]][j]) count++;
		}

		let trait_count = document.createElement("td");
		trait_count.innerHTML = count;
		trait_count.style.fontFamily = 'Arial. Helvetica, sans-serif';

		count_row.appendChild(trait_count);
		count = 0;
	}

	table_container.appendChild(trait_table);
}

const separator = document.createElement("hr");
separator.style.borderTop = '1px dotted #8c8b8b';

table_container.appendChild(separator);

let quantitative_text = document.createElement("h2");
quantitative_text.innerHTML = "Quantitative Data"
quantitative_text.style.fontFamily = 'Arial, Helvetica, sans-serif';
quantitative_text.style.paddingLeft = '1%';

table_container.appendChild(quantitative_text);

let quanti_table = document.createElement("table");

// REFERENCES
// https://bl.ocks.org/d3noob/257c360b3650b9f0a52dd8257d7a2d73
// https://bl.ocks.org/d3noob/5537fe63086c4f100114f87f124850dd

// FOR IMPROVEMENTS
// https://bl.ocks.org/d3noob/43a860bc0024792f8803bba8ca0d5ecd
// https://codepen.io/marxtseng/pen/oBVjvB?editors=0010		