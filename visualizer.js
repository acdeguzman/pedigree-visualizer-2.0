/**

TO DO
	
	1. CREATE SVG DIMENSIONS DYNAMIC (DEPEND ON THE NUMBER OF NODES ON THE TREE)
	2. CREATE FILTER FUNCTIONALITY
	3. CHANGE SVG DEPENDING ON THE CONFIGURED FILTER

**/





//	registrationnumber -> name
//	parents -> children

let treeData = {"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}, "parents": [
	{"registrationnumber":"#20", "info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "weight_at_data_collection": 70, "age_at_data_collection": 5, "date_registered": "2008-07-20", "registered_by":"Netty", "average_daily_gain":4, "backfat_thickness": 7, "feed_efficiency": 3, "birth_weight":5, "total_when_born_male": 4, "total_when_born_female": 9, "littersize_born_alive": 5, "parity": 3}, "parents":[
		{"registrationnumber":"#411", "info":{"farm_name":"Jutrosin","breed":"Yorkshire", "sex":"Female","birthyear":"2004", "weight_at_data_collection": 50, "age_at_data_collection": 5, "date_registered": "2017-06-22", "registered_by":"Brose", "average_daily_gain":2, "backfat_thickness": 6, "feed_efficiency": 2, "birth_weight":6, "total_when_born_male": 8, "total_when_born_female": 4, "littersize_born_alive": 2, "parity": 1}, "parents":[
			{"registrationnumber":"#489", "info":{"farm_name":"Iwatsuki","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 4, "date_registered": "2015-10-01", "registered_by":"Dermot", "average_daily_gain":8, "backfat_thickness": 9, "feed_efficiency": 9, "birth_weight":5, "total_when_born_male": 8, "total_when_born_female": 10, "littersize_born_alive": 6, "parity": 1}, "parents":[
				{"registrationnumber":"#148", "info":{"farm_name":"Khairpur","breed":"Duroc", "sex":"Female","birthyear":"2004", "weight_at_data_collection": 57, "age_at_data_collection": 6, "date_registered": "2014-12-06", "registered_by":"Jo", "average_daily_gain":2, "backfat_thickness": 2, "feed_efficiency": 4, "birth_weight":10, "total_when_born_male": 5, "total_when_born_female": 5, "littersize_born_alive": 2, "parity": 1}},
				{"registrationnumber":"#277", "info":{"farm_name":"Tsyelyakhany","breed":"Duroc", "sex":"Male","birthyear":"2001", "weight_at_data_collection": 70, "age_at_data_collection": 4, "date_registered": "2004-07-02", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]},
			
			{"registrationnumber":"#102", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2003", "weight_at_data_collection": 50, "age_at_data_collection": 3, "date_registered": "2012-04-10", "registered_by":"Jo", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 2, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 2, "parity": 2}, "parents":[
				{"registrationnumber":"#445", "info":{"farm_name":"Khairpur","breed":"Yorkshire", "sex":"Female","birthyear":"2000", "weight_at_data_collection": 49, "age_at_data_collection": 1, "date_registered": "2014-11-11", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 5, "birth_weight": 5, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]}
		]},
		{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}, "parents":[
			{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}, "parents":[
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]},
			{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}, "parents":[
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]}
		]}	
	]},
	{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}, "parents":[
		{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}, "parents":[
			{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}, "parents":[
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]},
			{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}, "parents":[
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]}
		]},
		{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}, "parents":[
			{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}, "parents":[
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]},
			{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}, "parents":[
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
				{"registrationnumber":"#5", "info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "weight_at_data_collection": 58, "age_at_data_collection": 5, "date_registered": "2014-02-10", "registered_by":"Wendy", "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
			]}
		]}
	]}
]};

treeData = JSON.parse(JSON.stringify(treeData).split('"registrationnumber":').join('"name":'));
treeData = JSON.parse(JSON.stringify(treeData).split('"parents":').join('"children":'));

let keys = [];	//storage of keys;

// Set initial margins for SVG dimension initialization
let margin =	{
					top: 20,
					right: 120,
					left: 120,
					bottom: 20
				},

	width =		500,
	height =	500; 

// Set SVG size
let svg =	d3.select("#mainDiv").append("svg")
				.attr("width", 800)
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

					for(let key in d.data.info) if(!keys.includes(key)) keys.push(key);

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
				});

// Add circle to node

node.append("circle")
	.attr("r", 7)
	.style("stroke", function(d) {

		for(let key in d.data.info) {

			if(key == "sex") {
				if(d.data.info[key] == "Male") return "red";
				else return "yellow";
			}
		}
	})
	.on("mouseover", function(d) {

		let animalinfo = "<table>";

		tooltipdiv.transition()
			.duration(200)
			.style("opacity", 0.9);

		for(let key in d.data.info) {

			animalinfo = animalinfo + "<tr><td>" + key + "</td><td>" + d.data.info[key] + "</td></tr>";
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

	info = "";

// Add text(id) to node
node.append("text")
	.attr("dy", ".20em")
	.attr("x", function(d) { return d.children ? -10 : 10;})
	.style("text-anchor", function(d) { return d.children ? "end" : "start";})
	.text(function(d) {return d.data.name;});


// Adding filter features
let body = document.getElementsByTagName("body")[0];

let filterDiv = document.createElement('div');

let flag = 0, selectCounter = 0;	// for adding "Apply filter" button

const addButton = document.createElement('button');
addButton.type = "submit";
addButton.appendChild(document.createTextNode("Add Filters"));

let inputDiv = document.createElement('div');

addButton.addEventListener('click', function() {

	let select = document.createElement('select');
	let option;

	for(let i = 0; i < keys.length; i++) {

		option = document.createElement('option');
		option.value = keys[i];
		option.innerHTML = keys[i];
		select.appendChild(option);
	}

	inputDiv.appendChild(select);
	inputDiv.appendChild(document.createElement('br'));
});

body.appendChild(filterDiv);
filterDiv.appendChild(addButton);
filterDiv.appendChild(inputDiv);
// REFERENCES
// https://bl.ocks.org/d3noob/257c360b3650b9f0a52dd8257d7a2d73
// https://bl.ocks.org/d3noob/5537fe63086c4f100114f87f124850dd

// FOR IMPROVEMENTS
// https://bl.ocks.org/d3noob/43a860bc0024792f8803bba8ca0d5ecd
// https://codepen.io/marxtseng/pen/oBVjvB?editors=0010