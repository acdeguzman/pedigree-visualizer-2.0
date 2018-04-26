/**

TO DO
	
	1. MODULARIZE EVERYTHING. USE FUNCTIONS

**/

//	registrationnumber -> name
//	parents -> children

// let treeData = {"registrationnumber":"#00001", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Duroc", "sex":"Female","birthyear":"1994", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 57, "age_at_data_collection": 4, "average_daily_gain":7, "backfat_thickness": 3, "feed_efficiency": 3, "birth_weight":8, "total_when_born_male": 7, "total_when_born_female": 6, "littersize_born_alive": 5, "parity": 1},"parents": [
// 	{"registrationnumber":"#20", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "date_registered": "2008-07-20", "registered_by":"Netty"}, "quantitative_info": {"weight_at_data_collection": 59, "age_at_data_collection": 6, "average_daily_gain":9, "backfat_thickness": 5, "feed_efficiency": 5, "birth_weight":10, "total_when_born_male": 9, "total_when_born_female": 8, "littersize_born_alive": 7, "parity": 3},"parents":[
// 		{"registrationnumber":"#411", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2004", "date_registered": "2017-06-22", "registered_by":"Brose"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
// 			{"registrationnumber":"#489", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "date_registered": "2015-10-01", "registered_by":"Dermot"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 4, "average_daily_gain":9, "backfat_thickness": 5, "feed_efficiency": 3, "birth_weight":10, "total_when_born_male": 9, "total_when_born_female": 5, "littersize_born_alive": 3, "parity": 9},"parents":[
// 				{"registrationnumber":"#148", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Duroc", "sex":"Female","birthyear":"2004", "date_registered": "2014-12-06", "registered_by":"Jo"},"quantitative_info": {"weight_at_data_collection": 42, "age_at_data_collection": 3, "average_daily_gain":4, "backfat_thickness": 5, "feed_efficiency": 1, "birth_weight":5, "total_when_born_male": 1, "total_when_born_female": 4, "littersize_born_alive": 6, "parity": 9}},
// 				{"registrationnumber":"#277", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Duroc", "sex":"Male","birthyear":"2001", "date_registered": "2004-07-02", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 66, "age_at_data_collection": 7, "average_daily_gain":11, "backfat_thickness": 8, "feed_efficiency": 2, "birth_weight":9, "total_when_born_male": 2, "total_when_born_female": 3, "littersize_born_alive": 2, "parity": 5}}
// 			]},
			
// 			{"registrationnumber":"#102", "qualitative_info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2003", "date_registered": "2012-04-10", "registered_by":"Jo"}, "quantitative_info": {"weight_at_data_collection": 60, "age_at_data_collection": 2, "average_daily_gain": 8, "backfat_thickness": 11, "feed_efficiency": 2, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 8, "parity": 2},"parents":[
// 				{"registrationnumber":"#445", "qualitative_info":{"farm_name":"Nangkaruka","breed":"Yorkshire", "sex":"Female","birthyear":"2000", "date_registered": "2014-11-11", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 55, "age_at_data_collection": 6, "average_daily_gain":9, "backfat_thickness": 12, "feed_efficiency": 6, "birth_weight": 12, "total_when_born_male": 3, "total_when_born_female": 5, "littersize_born_alive": 2, "parity": 10}},
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 48, "age_at_data_collection": 5, "average_daily_gain":5, "backfat_thickness": 13, "feed_efficiency": 13, "birth_weight": 11, "total_when_born_male": 4, "total_when_born_female": 8, "littersize_born_alive": 1, "parity": 12}}
// 			]}
// 		]},
// 		{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Baguio","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
// 			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Baguio","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Baguio","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Baguio","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
// 			]},
// 			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Laguna","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Laguna","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Laguna","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
// 			]}
// 		]}	
// 	]},
// 	{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
// 		{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
// 			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
// 			]},
// 			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
// 			]}
// 		]},
// 		{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
// 			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
// 			]},
// 			{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Female","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}},
// 				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Antipolo","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2}}
// 			]}
// 		]}
// 	]}
// ]};
let treeData;
let qualiKeys = [];		//storage of qualitative keys
let quantiKeys = [];
let map = {};	// for values in input
let tree = [];
let nodecount = 0;

const visualize = (json) => {

	treeData = json;

	treeData = JSON.parse(JSON.stringify(treeData).split('"registrationnumber":').join('"name":'));
	treeData = JSON.parse(JSON.stringify(treeData).split('"parents":').join('"children":'));

	// Set initial margins for SVG dimension initialization
	let margin =	{
						top: 20,
						right: 120,
						left: 120,
						bottom: 20
					},

		width =		800,
		height =	550; 

	// Set SVG size
	let svg =	d3.select("#mainDiv").append("svg")
					.attr("width", '100%')
					.attr("height", screen.height - 150),
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

						for(let key in d.data.qualitative_info) if(!qualiKeys.includes(key)) qualiKeys.push(key);
						for(let key in d.data.quantitative_info) if(!quantiKeys.includes(key)) quantiKeys.push(key);


						for(let i = 0; i < qualiKeys.length; i++) map[qualiKeys[i]] = [];

						// return	"M" + d.y + "," + d.x
						// 		+ "C" + (d.y + d.parent.y) / 2 + "," + d.x
						// 		+ " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
						// 		+ " " + d.parent.y + "," + d.parent.x;

						  return "M" + d.y + "," + d.x
						    + "H" + (d.y + (d.parent.y-d.y)/2)
						    + "V" + d.parent.x 
						    + "H" + d.parent.y;
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

						for(let i = 0; i < qualiKeys.length; i++) {

							for(let value in d.data.qualitative_info) {
								
								if(qualiKeys[i] == value) {
					
									if(!map[qualiKeys[i]].includes(d.data.qualitative_info[value])) map[qualiKeys[i]].push(d.data.qualitative_info[value]);
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

			let animal_info = "<h4 align = 'center'> ID: " + d.data.name + "</h4><table>";

			tooltipdiv.transition()
				.duration(200)
				.style("opacity", 0.9);

			for(let key in d.data.qualitative_info) {

				animal_info = animal_info + "<tr><td>" + key + "</td><td>" + d.data.qualitative_info[key] + "</td></tr>";
			}

			for(let key in d.data.quantitative_info) {

				animal_info = animal_info + "<tr><td>" + key + "</td><td>" + d.data.quantitative_info[key] + "</td></tr>";	
			}

			animal_info = animal_info + "</table>"

			tooltipdiv.html(animal_info)
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


	let body = document.getElementById("mainDiv");

	let covariance_table_div = document.createElement("div");
	covariance_table_div.style.width = '55%';
	covariance_table_div.style.height = '350px';
	covariance_table_div.style.float = 'left';
	covariance_table_div.style.marginBottom = '5px';
	covariance_table_div.style.border = '1px solid #c6b89e';
	covariance_table_div.style.borderRadius = '5px';

	body.appendChild(covariance_table_div);

	let covariance_table_text = document.createElement("h2");
	covariance_table_text.innerHTML = "Covariance Table"
	covariance_table_text.style.fontFamily = 'Arial, Helvetica, sans-serif';
	covariance_table_text.style.paddingLeft = '1%';

	covariance_table_div.appendChild(covariance_table_text);

	let covariance_table_desc = document.createElement("p");
	covariance_table_desc.innerHTML = "A covariance table can be used to calculate individual inbreeding values. The table contains covariance values between two individuals or the covariance of each individual.";
	covariance_table_desc.style.fontFamily = 'Arial, Helvetica, sans-serif';
	covariance_table_desc.style.marginLeft = '5%';

	covariance_table_div.appendChild(covariance_table_desc);

	let covariance_table_container = document.createElement("div");
	covariance_table_container.style.width = '98%';
	covariance_table_container.style.overflow = 'auto';
	covariance_table_container.style.marginTop = '2%';
	covariance_table_container.style.maxHeight = '200px';

	covariance_table_div.appendChild(covariance_table_container);

	let covariance_table_ui = document.createElement('table');
	covariance_table_ui.cellPadding = '5';
	covariance_table_ui.style.marginLeft = '2%';
	covariance_table_ui.style.fontSize = '12px';
	covariance_table_ui.style.marginBottom = '2%';

	covariance_table_container.appendChild(covariance_table_ui);

	const getCovarianceTableData = () => {	//return a 2D array of id names and their corresponding covariance value
	
		let arr = [];
		let names_array = [];

		for(let i = tree.length - 1; i >= 0; i--) if(!arr.some(e => e.name === tree[i].name)) {

			arr.push(tree[i]);
			names_array.push(tree[i].name);
		}

		let row = [];
		let covariance_table = [];

		for(let i = 0; i < arr.length+1; i++) {
			for(let j = 0; j < arr.length+1; j++) {

					if(i == 0 && j > 0) row.push(arr[j-1].name);
					else if(i > 0 && j == 0) row.push(arr[i-1].name);
					else row.push(-1);
			}

			covariance_table.push(row);
			row = [];
		}

		// loop for computation
		for(let i = 1; i < arr.length + 1; i++) {
			for(let j = 1; j <= i; j++) {

				let curr_individual_name = covariance_table[i][0];
				let curr_individual_object = arr.filter(function(obj) { return obj.name == curr_individual_name});	

				if(i == j) {	// covariance of same name

					if(curr_individual_object[0].children == undefined ||
					curr_individual_object[0].children[0] == undefined || 
					curr_individual_object[0].children[1] == undefined) {	//one or two unkonwn parent

						covariance_table[i][j] = 1;
					}

					else {	// both parents are known

						let father = curr_individual_object[0].children[0].name;
						let mother = curr_individual_object[0].children[1].name;
						let father_index, mother_index, covariance_parents;

						father_index = names_array.indexOf(father);
						mother_index = names_array.indexOf(mother);

						if(covariance_table[father_index+1][mother_index+1] != -1) covariance_parents = covariance_table[father_index+1][mother_index+1];
						else if(covariance_table[mother_index+1][father_index+1] != -1) covariance_parents = covariance_table[mother_index+1][father_index+1];

						covariance_table[i][j] = covariance_parents/2;
						covariance_table[i][j] = covariance_table[i][j] + 1;
					}
				}

				// different individuals
				// 4 cases(?) 
				// 1. both parents unknown, 2. father/mother unknown, 3. mother unknown, 4. both parents known

				else {	

					// curr_individual2_name = covariance_table[]

					if(curr_individual_object[0].children == undefined)	// case 1.
						covariance_table[i][j] = 0;

					else if(curr_individual_object[0].children[1] == undefined) {	// case 2

						let parent_name = curr_individual_object[0].children[0].name;

						let parent_index = names_array.indexOf(parent_name);

						if(covariance_table[parent_index+1][j] != -1) covariance_table[i][j] = covariance_table[parent_index+1][j]/2;
						else if(covariance_table[j][parent_index+1] != -1) covariance_table[i][j] = covariance_table[j][parent_index+1]/2;
					}

					else if(curr_individual_object[0].children[1] != undefined && curr_individual_object[0].children[0] != undefined){

						let mother_name = curr_individual_object[0].children[0].name;
						let father_name = curr_individual_object[0].children[1].name;

						let mother_index = names_array.indexOf(mother_name);
						let father_index = names_array.indexOf(father_name);

						let covariance = 0;

						if(covariance_table[father_index+1][j] != -1) covariance += covariance_table[father_index+1][j];
						else if(covariance_table[j][father_index+1] != -1) covariance += covariance_table[j][father_index+1];

						if(covariance_table[mother_index+1][j] != -1) covariance += covariance_table[mother_index+1][j];
						else if(covariance_table[j][mother_index+1] != -1) covariance += covariance_table[j][mother_index+1];				
					
						covariance_table[i][j] = covariance/2;
					}
				}
			}
		}

		return covariance_table;
	}

	const covariance_table = getCovarianceTableData();

	for(let i = 0; i < covariance_table.length; i++) {

		let covariance_row = document.createElement('tr');

		for(let j = 0; j < covariance_table[i].length; j++) {

			if(i == 0 || j == 0) {

				let covariance_header

				if(i == 0)  covariance_header = document.createElement('td');

				else if(j == 0) covariance_header = document.createElement('th');

				covariance_header.style.fontFamily = 'Arial, Helvetica, sans-serif';
				if(covariance_table[i][j] == -1) covariance_header.innerHTML = " ";
				else covariance_header.innerHTML = covariance_table[i][j];

				covariance_row.appendChild(covariance_header);
			}

			else {

				let covariance_col = document.createElement('td');
				covariance_col.style.fontFamily = 'Arial, Helvetica, sans-serif';

				if(covariance_table[i][j] == -1) covariance_col.innerHTML = " ";
				else covariance_col.innerHTML = covariance_table[i][j];

				covariance_row.appendChild(covariance_col);	
			}
		}

		covariance_table_ui.appendChild(covariance_row);
	}


	let show_inbreeding_div = document.createElement("div");
	show_inbreeding_div.style.width = '25%';
	show_inbreeding_div.style.float = 'left';
	show_inbreeding_div.style.border = '1px solid #c6b89e';
	show_inbreeding_div.style.borderRadius = '5px';
	show_inbreeding_div.style.marginBottom = '5px';
	show_inbreeding_div.style.marginLeft = '6px';
	show_inbreeding_div.style.height = '350px';

	body.appendChild(show_inbreeding_div);

	let show_inbreeding_text = document.createElement("h2");
	show_inbreeding_text.innerHTML = "Inbreeding Table"
	show_inbreeding_text.style.fontFamily = 'Arial, Helvetica, sans-serif';
	show_inbreeding_text.style.paddingLeft = '1%';

	let inbreeding_table_desc = document.createElement("p");
	inbreeding_table_desc.innerHTML = "Inbreeding results from the mating of two organisms that are closely-related genetically. Their offsprings are considered inbred organisms.";
	inbreeding_table_desc.style.fontFamily = 'Arial, Helvetica, sans-serif';
	inbreeding_table_desc.style.marginLeft = '5%';

	let show_inbreeding_table_container = document.createElement("div");
	show_inbreeding_table_container.style.overflowY = 'auto';
	show_inbreeding_table_container.style.maxHeight = '200px';

	show_inbreeding_div.appendChild(show_inbreeding_text);
	show_inbreeding_div.appendChild(inbreeding_table_desc);
	show_inbreeding_div.appendChild(show_inbreeding_table_container);

	let inbreeding_table = document.createElement('table');
	inbreeding_table.cellPadding = '5';
	inbreeding_table.style.marginLeft = '2%';
	inbreeding_table.style.fontSize = '12px';
	inbreeding_table.style.marginBottom = '2%';

	show_inbreeding_table_container.appendChild(inbreeding_table);

	let inbreeding_table_header = document.createElement("tr");

	inbreeding_table.appendChild(inbreeding_table_header);

	let inbred_header = document.createElement("td");
	inbred_header.innerHTML = 'Inbred Entity';
	inbred_header.style.fontFamily = 'Arial, Helvetica, sans-serif';

	let inbreeding_coefficient = document.createElement("td");
	inbreeding_coefficient.innerHTML = 'Inbreeding Coefficient';
	inbreeding_coefficient.style.fontFamily = 'Arial, Helvetica, sans-serif';

	inbreeding_table_header.appendChild(inbred_header);
	inbreeding_table_header.appendChild(inbreeding_coefficient);

	const getInbreedingTableData = () => {	// return a 2D array of entity names and their inbreeding coefficient

		let inbred_entities = [];	
		let inbreed_rows = [];

		for(let i = 1; i < covariance_table.length; i++) {
			for(let j = 1; j < covariance_table[i].length; j++) {

				if(i == j) {

					if(covariance_table[i][j] - 1 >  0) {

						let entity_name = covariance_table[0][j];
						let coeff = covariance_table[i][j] - 1;

						inbreed_rows.push(entity_name);

						inbreed_rows.push((covariance_table[i][j] - 1).toFixed(4));

						inbred_entities.push(inbreed_rows);
					}
				}

				inbreed_rows = [];
			}
		}

		return inbred_entities;
	}

	let inbred_entities = getInbreedingTableData();

	console.log(inbred_entities);

	for(let i = 0; i < inbred_entities.length; i++) {


		let inbred_row = document.createElement("tr");

		let entity_name_cell = document.createElement("td");
		entity_name_cell.innerHTML = inbred_entities[i][0];
		entity_name_cell.style.fontFamily = 'Arial, Helvetica, sans-serif';

		let coeff_cell = document.createElement("td");
		coeff_cell.innerHTML = inbred_entities[i][1];
		coeff_cell.style.fontFamily = 'Arial, Helvetica, sans-serif';

		inbred_row.appendChild(entity_name_cell);
		inbred_row.appendChild(coeff_cell);

		inbreeding_table.appendChild(inbred_row);
	}

	/*

	CHECKBOX DIV

	Used to toggle different divs

	*/

	let checkbox_div = document.createElement("div");
	checkbox_div.style.width = '17%';
	checkbox_div.style.marginLeft = '6px';
	checkbox_div.style.height = '330px';
	checkbox_div.style.padding = '10px';
	checkbox_div.style.border = '1px solid #c6b89e';
	checkbox_div.style.float = 'left';
	checkbox_div.style.borderRadius = '3px';
	checkbox_div.style.marginBottom = '10px';

	let checkbox_form = document.createElement("form");

	let filter_input = document.createElement("input");
	filter_input.type = 'checkbox';
	filter_input.id = "filterCheckBox";

	let filter_label = document.createElement("label");
	filter_label.for = filter_input.id;
	filter_label.innerHTML = 'Show filters';
	filter_label.style.fontFamily = 'Arial, Helvetica, sans-serif';

	let performance_input = document.createElement("input");
	performance_input.type = 'checkbox';
	performance_input.id = "performanceCheckBox";

	let performance_label = document.createElement("label");
	performance_label.for = performance_input.id;
	performance_label.innerHTML = 'Show Performance Table';
	performance_label.style.fontFamily = 'Arial, Helvetica, sans-serif';

	let inbreeding_input = document.createElement("input");
	inbreeding_input.type = 'checkbox';
	inbreeding_input.id = "inbreedingCheckBox";

	let inbreeding_label = document.createElement("label");
	inbreeding_label.for = inbreeding_input.id;
	inbreeding_label.innerHTML = 'Show Inbred Entities';
	inbreeding_label.style.fontFamily = 'Arial, Helvetica, sans-serif';

	let inbred_legend = document.createElement("p");
	inbred_legend.style.fontFamily = 'Arial, Helvetica, sans-serif';
	inbred_legend.style.fontSize = '10px';
	inbred_legend.innerHTML = '* The inbred entities will appear RED in the pedigree.';
	inbred_legend.style.color = 'red';
	inbred_legend.style.display = 'none';

	checkbox_form.appendChild(filter_input);
	checkbox_form.appendChild(filter_label);
	checkbox_form.appendChild(document.createElement("br"));
	checkbox_form.appendChild(performance_input);
	checkbox_form.appendChild(performance_label);
	checkbox_form.appendChild(document.createElement("br"));
	checkbox_form.appendChild(inbreeding_input);
	checkbox_form.appendChild(inbreeding_label);
	checkbox_form.appendChild(inbred_legend);

	checkbox_div.appendChild(checkbox_form);

	body.appendChild(checkbox_div);
	/***

	1. FILTER FEATURE

	Filter feature creates a filter that can be used to view the SVG differently.
	The filter feature depends on the qualitative data of the JSON data

	***/

	let filterDiv = document.createElement('div');

	// filter positioning
	filterDiv.style.width = '48%';
	filterDiv.style.padding = '10px';
	filterDiv.style.border = '1px solid #c6b89e';
	filterDiv.style.float = 'left';
	filterDiv.style.borderRadius = '3px';
	filterDiv.style.marginBottom = '10px';
	filterDiv.style.display = 'none';
	filterDiv.style.marginRight = '10px';
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
	inputDivContainer.style.maxHeight = '250px';
	inputDivContainer.style.height = '300px';
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

		for(let i = 0; i < qualiKeys.length; i++) {

			option = document.createElement('option');
			option.value = qualiKeys[i];
			option.innerHTML = qualiKeys[i];
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

		if(inbreeding_input.checked == true) inbreeding_input.checked = false;

		node.append("circle")
		.attr("r", 7)
		.style("stroke", function(d) {

			for(let key in d.data.qualitative_info) {

				if(key == "sex") {
					if(d.data.qualitative_info[key] == "Male") return "#1b77b8";
					else return "#f5a905";
				}
			}
		})
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

			let animal_info = "<table>";

			tooltipdiv.transition()
				.duration(200)
				.style("opacity", 0.9);

			for(let key in d.data.qualitative_info) {

				animal_info = animal_info + "<tr><td>" + key + "</td><td>" + d.data.qualitative_info[key] + "</td></tr>";
			}

			for(let key in d.data.quantitative_info) {

				animal_info = animal_info + "<tr><td>" + key + "</td><td>" + d.data.quantitative_info[key] + "</td></tr>";	
			}

			animal_info = animal_info + "</table>"

			tooltipdiv.html(animal_info)
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

	const getQualitativeDataCount = () => {	// return JSON of the qualitative data of the pedigree

		let qualitative_data_object = {};
		let count = 0;

		for(let i = 0; i < qualiKeys.length; i++) {

			qualitative_data_object[qualiKeys[i]] = [];

			for(let j = 0; j < map[qualiKeys[i]].length; j++) {

				let trait_count_pair = {};

				for(let x = 0; x < tree.length; x++) {

					if(tree[x].qualitative_info[qualiKeys[i]] == map[qualiKeys[i]][j]) count++;
				}

				trait_count_pair[map[qualiKeys[i]][j]] = count;
				qualitative_data_object[qualiKeys[i]].push(trait_count_pair);
				count = 0;
			}
		}

		return qualitative_data_object;
	}

	let qualitative_data_object = getQualitativeDataCount();

	let performance_div = document.createElement("div");
	performance_div.style.width = '49%';
	performance_div.style.float = 'left';
	performance_div.style.marginBottom = '5px';
	performance_div.style.border = '1px solid #c6b89e';
	performance_div.style.borderRadius = '5px';
	performance_div.style.display = 'none';
	performance_div.style.height = '308px';

	body.appendChild(performance_div);

	let qualitative_text = document.createElement("h2");
	qualitative_text.innerHTML = "Qualitative Data"
	qualitative_text.style.fontFamily = 'Arial, Helvetica, sans-serif';
	qualitative_text.style.paddingLeft = '1%';

	let table_container = document.createElement("div");
	table_container.style.maxHeight = '300px';
	table_container.style.overflow = 'auto';
	table_container.style.width = '100%';

	table_container.appendChild(qualitative_text);

	performance_div.appendChild(table_container);

	//	tables for qualitative data

	for(let i = 0; i < Object.keys(qualitative_data_object).length; i++) {

		let curr_trait = Object.keys(qualitative_data_object)[i];

		let trait_text = document.createElement("h4");
		trait_text.innerHTML = curr_trait;
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
		traitword_text.innerHTML = 'Data';
		traitword_text.style.fontFamily = 'Arial, Helvetica, sans-serif';

		trait_row.appendChild(traitword_text);

		for(let j = 0; j < qualitative_data_object[curr_trait].length; j++) {

			let trait_value = document.createElement("td");
			trait_value.innerHTML = Object.keys(qualitative_data_object[curr_trait][j])[0];
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

		for(let j = 0; j < qualitative_data_object[curr_trait].length; j++) {

			let trait_count = document.createElement("td");
			trait_count.innerHTML = qualitative_data_object[curr_trait][j][Object.keys(qualitative_data_object[curr_trait][j])[0]];
			trait_count.style.fontFamily = 'Arial. Helvetica, sans-serif';

			count_row.appendChild(trait_count);
		}

		table_container.appendChild(trait_table);
	}

	const getQuantitativeDataCount = () => {	// returns array of quantitative data

		let quantitative_data_array = [];
		let mean = 0, max = 0, min = 9999, std = 0, total = 0;
		let count = tree.length;

		for(let i = 0; i < quantiKeys.length; i++) {

			let quantitative_data_object = {};

			quantitative_data_object['data'] = quantiKeys[i];

			for(let j = 0; j < tree.length; j++) {

				total += tree[j].quantitative_info[quantiKeys[i]];

				if(tree[j].quantitative_info[quantiKeys[i]] > max) max = tree[j].quantitative_info[quantiKeys[i]];
				if(tree[j].quantitative_info[quantiKeys[i]] < min) min = tree[j].quantitative_info[quantiKeys[i]];
			}

			quantitative_data_object['minimum'] = min;
			quantitative_data_object['maximum'] = max;

			mean = total/count;

			quantitative_data_object['ave'] = mean;

			for(let j = 0; j < tree.length; j++) {

				std += Math.pow((tree[j].quantitative_info[quantiKeys[i]] - mean), 2);
			}

			std = Math.sqrt(std/(count-1));

			quantitative_data_object['stdev'] = std;

			min = 9999; max = 0; mean = 0; std = 0; total = 0;

			quantitative_data_array.push(quantitative_data_object);
		}

		return quantitative_data_array;
	}

	const quantitative_data_array = getQuantitativeDataCount();

	const separator = document.createElement("hr");
	separator.style.borderTop = '1px dotted #8c8b8b';

	table_container.appendChild(separator);

	let quantitative_text = document.createElement("h2");
	quantitative_text.innerHTML = "Quantitative Data"
	quantitative_text.style.fontFamily = 'Arial, Helvetica, sans-serif';
	quantitative_text.style.paddingLeft = '1%';

	table_container.appendChild(quantitative_text);

	let quanti_table = document.createElement("table");
	quanti_table.cellPadding = '5';
	quanti_table.style.marginLeft = '2%';
	quanti_table.style.fontSize = '12px';
	quanti_table.style.marginBottom = '2%';

	let quanti_head = document.createElement("thead");

	let headings_row = document.createElement("tr");

	quanti_table.appendChild(quanti_head);

	let trait_col = document.createElement("th");
	trait_col.innerHTML = 'Data';
	trait_col.style.fontFamily = 'Arial, Helvetica, sans-serif';

	let min_col = document.createElement("td");
	min_col.innerHTML = 'Minimum';
	min_col.style.fontFamily = 'Arial, Helvetica, sans-serif';

	let max_col = document.createElement("td");
	max_col.innerHTML = 'Maximum';
	max_col.style.fontFamily = 'Arial, Helvetica, sans-serif';

	let ave_col = document.createElement("td");
	ave_col.innerHTML = 'Average';
	ave_col.style.fontFamily = 'Arial, Helvetica, sans-serif';

	let std_col = document.createElement("td");
	std_col.innerHTML = 'Standard Deviation';
	std_col.style.fontFamily = 'Arial, Helvetica, sans-serif';

	quanti_head.appendChild(headings_row);

	headings_row.appendChild(trait_col);
	headings_row.appendChild(min_col);
	headings_row.appendChild(max_col);
	headings_row.appendChild(ave_col);
	headings_row.appendChild(std_col);

	let mean = 0, max = 0, min = 9999, std = 0, total = 0;
	let count = tree.length;

	for(let i = 0; i < quantitative_data_array.length; i++) {

		let quanti_row = document.createElement("tr");

		let quanti_trait = document.createElement("th");
		quanti_trait.innerHTML = quantitative_data_array[i]['data'];
		quanti_trait.style.fontFamily = 'Arial, Helvetica, sans-serif';


		quanti_row.appendChild(quanti_trait);

		let min_cell = document.createElement("td");
		min_cell.innerHTML = quantitative_data_array[i]['minimum'];
		min_cell.style.fontFamily = 'Arial, Helvetica, sans-serif';

		let max_cell = document.createElement("td");
		max_cell.innerHTML = quantitative_data_array[i]['maximum'];
		max_cell.style.fontFamily = 'Arial, Helvetica, sans-serif';

		let mean_cell = document.createElement("td");
		mean_cell.innerHTML = quantitative_data_array[i]['ave'].toFixed(4);
		mean_cell.style.fontFamily = 'Arial, Helvetica, sans-serif';

		let std_cell = document.createElement("td");
		std_cell.innerHTML = quantitative_data_array[i]['stdev'].toFixed(4);
		std_cell.style.fontFamily = 'Arial, Helvetica, sans-serif';

		quanti_row.appendChild(min_cell);
		quanti_row.appendChild(max_cell);
		quanti_row.appendChild(mean_cell);
		quanti_row.appendChild(std_cell);

		quanti_table.appendChild(quanti_row);
	}

	table_container.appendChild(quanti_table);

	filter_input.addEventListener('change', function() {

		if(filter_input.checked == true) filterDiv.style.display = 'block';
		else filterDiv.style.display = 'none';
	});

	performance_input.addEventListener('change', function() {

		if(performance_input.checked == true) performance_div.style.display = 'block';
		else performance_div.style.display = 'none';
	});

	inbreeding_input.addEventListener('change', function() {

		if(inbreeding_input.checked == true) {

			inbred_legend.style.display = 'block';

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
			.style("fill", function(d) {

				for(let i = 0; i < inbred_entities.length; i++) {

					if(d.data.name == inbred_entities[i][0]) return 'red'; 
				}	
			})
			.on("mouseover", function(d) {

				let animal_info = "<table>";

				tooltipdiv.transition()
					.duration(200)
					.style("opacity", 0.9);

				for(let key in d.data.qualitative_info) {

					animal_info = animal_info + "<tr><td>" + key + "</td><td>" + d.data.qualitative_info[key] + "</td></tr>";
				}

				for(let key in d.data.quantitative_info) {

					animal_info = animal_info + "<tr><td>" + key + "</td><td>" + d.data.quantitative_info[key] + "</td></tr>";	
				}

				animal_info = animal_info + "</table>"

				tooltipdiv.html(animal_info)
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {

				tooltipdiv.transition()
					.duration(500)
					.style("opacity", 0);
			});

		}

		else {

			inbred_legend.style.display = 'none';

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
			.style("fill", function(d) {

				return "white";
			})
			.on("mouseover", function(d) {

				let animal_info = "<table>";

				tooltipdiv.transition()
					.duration(200)
					.style("opacity", 0.9);

				for(let key in d.data.qualitative_info) {

					animal_info = animal_info + "<tr><td>" + key + "</td><td>" + d.data.qualitative_info[key] + "</td></tr>";
				}

				for(let key in d.data.quantitative_info) {

					animal_info = animal_info + "<tr><td>" + key + "</td><td>" + d.data.quantitative_info[key] + "</td></tr>";	
				}

				animal_info = animal_info + "</table>"

				tooltipdiv.html(animal_info)
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY - 28) + "px");
			})
			.on("mouseout", function(d) {

				tooltipdiv.transition()
					.duration(500)
					.style("opacity", 0);
			});
		}
	});
}

// treeData = getJSONPedigree(json);

// let treeData = {"registrationnumber":"G", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Duroc", "sex":"Male","birthyear":"1994", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 57, "age_at_data_collection": 4, "average_daily_gain":7, "backfat_thickness": 3, "feed_efficiency": 3, "birth_weight":8, "total_when_born_male": 7, "total_when_born_female": 6, "littersize_born_alive": 5, "parity": 1},"parents": [
	
// 	{"registrationnumber":"D", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Male","birthyear":"2005", "date_registered": "2008-07-20", "registered_by":"Netty"}, "quantitative_info": {"weight_at_data_collection": 59, "age_at_data_collection": 6, "average_daily_gain":9, "backfat_thickness": 5, "feed_efficiency": 5, "birth_weight":10, "total_when_born_male": 9, "total_when_born_female": 8, "littersize_born_alive": 7, "parity": 3},"parents":[

// 		{"registrationnumber":"A", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Male","birthyear":"2005", "date_registered": "2008-07-20", "registered_by":"Netty"}, "quantitative_info": {"weight_at_data_collection": 59, "age_at_data_collection": 6, "average_daily_gain":9, "backfat_thickness": 5, "feed_efficiency": 5, "birth_weight":10, "total_when_born_male": 9, "total_when_born_female": 8, "littersize_born_alive": 7, "parity": 3}},
// 		{"registrationnumber":"B", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "date_registered": "2008-07-20", "registered_by":"Netty"}, "quantitative_info": {"weight_at_data_collection": 59, "age_at_data_collection": 6, "average_daily_gain":9, "backfat_thickness": 5, "feed_efficiency": 5, "birth_weight":10, "total_when_born_male": 9, "total_when_born_female": 8, "littersize_born_alive": 7, "parity": 3}}
// 	]},
// 	{"registrationnumber":"E", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "date_registered": "2008-07-20", "registered_by":"Netty"}, "quantitative_info": {"weight_at_data_collection": 59, "age_at_data_collection": 6, "average_daily_gain":9, "backfat_thickness": 5, "feed_efficiency": 5, "birth_weight":10, "total_when_born_male": 9, "total_when_born_female": 8, "littersize_born_alive": 7, "parity": 3},"parents":[

// 		{"registrationnumber":"C", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Male","birthyear":"2005", "date_registered": "2008-07-20", "registered_by":"Netty"}, "quantitative_info": {"weight_at_data_collection": 59, "age_at_data_collection": 6, "average_daily_gain":9, "backfat_thickness": 5, "feed_efficiency": 5, "birth_weight":10, "total_when_born_male": 9, "total_when_born_female": 8, "littersize_born_alive": 7, "parity": 3}},
// 		{"registrationnumber":"B", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "date_registered": "2008-07-20", "registered_by":"Netty"}, "quantitative_info": {"weight_at_data_collection": 59, "age_at_data_collection": 6, "average_daily_gain":9, "backfat_thickness": 5, "feed_efficiency": 5, "birth_weight":10, "total_when_born_male": 9, "total_when_born_female": 8, "littersize_born_alive": 7, "parity": 3}}
// 	]}
// ]};

/********

DIFFERENT FEATURES:

1. FILTER
2. PERFORMANCE OF FAMILY
3. IN-BREEDING COEFFICIENT
4. ADDITIVE GENETIC RELATIONSHIP

********/
/*

3. SHOW IN-BREEDING AND COVARIANCE TABLE
The inbred entities will be highlighted in the tree and the covariance tree of the pedigree will be shown

*/

// DISPLAYING COVARIANCE TABLE


// REFERENCES
// https://bl.ocks.org/d3noob/257c360b3650b9f0a52dd8257d7a2d73
// https://bl.ocks.org/d3noob/5537fe63086c4f100114f87f124850dd

// FOR IMPROVEMENTS
// https://bl.ocks.org/d3noob/43a860bc0024792f8803bba8ca0d5ecd
// https://codepen.io/marxtseng/pen/oBVjvB?editors=0010