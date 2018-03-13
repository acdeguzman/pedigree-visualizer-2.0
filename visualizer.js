//	registrationnumber -> name
//	parents -> children

// let treeData = 
// 	{"registrationnumber" : "#01", "info" : {"sex" : "Male", "breed" : "Duroc"}, "parents" : [
// 		{"registrationnumber" : "#02", "info" : {"sex" : "Female", "breed" : "Duroc"}, "parents": [

// 			{"registrationnumber": "#04", "info": {"sex" : "Female", "breed" : "Duroc"}, "parents": [

// 				{"registrationnumber" : "#06", "info" : "Swine 6" }, 
// 				{"registrationnumber" : "#07", "info" : "Swine 7" }
// 			]},
// 			{"registrationnumber": "#05", "info": {"sex" : "Male", "breed" : "Duroc"}, "parents": [

// 				{"registrationnumber": "#08", "info": {"sex" : "Female", "breed" : "Duroc"}},
// 				{"registrationnumber": "#09", "info": {"sex" : "Male", "breed" : "Duroc"}, "parents": [

// 					{"registrationnumber" : "#06", "info" : {"sex" : "Female", "breed" : "Duroc"} }, 
// 					{"registrationnumber" : "#07", "info" : {"sex" : "Male", "breed" : "Duroc"}, "parents": [

// 						{"registrationnumber" : "#06", "info" : {"sex" : "Female", "breed" : "Duroc"} }, 
// 						{"registrationnumber" : "#07", "info" : {"sex" : "Male", "breed" : "Duroc"} }
// 					]}
// 				]}
// 			]}
// 		]},

// 		{"registrationnumber" : "#03", "info" : {"sex" : "Male", "breed" : "Duroc"}, "parents": [
			
// 			{"registrationnumber" : "#06", "info" : {"sex" : "Female", "breed" : "Duroc"}, "parents": [

// 				{"registrationnumber" : "#06", "info" : {"sex" : "Female", "breed" : "Duroc"} }, 
// 				{"registrationnumber" : "#07", "info" : {"sex" : "Male", "breed" : "Duroc"} }
// 			]}, 
// 			{"registrationnumber" : "#07", "info" : {"sex" : "Male", "breed" : "Duroc"}, "parents": [

// 				{"registrationnumber" : "#06", "info" : {"sex" : "Female", "breed" : "Duroc"} }, 
// 				{"registrationnumber" : "#07", "info" : {"sex" : "Male", "breed" : "Duroc"} }
// 			]}
// 		]}
// 	]};

let treeData = {"registrationnumber":"#01", "info":{"breed":"Duroc", "sex":"Male"}, "parents": [
	{"registrationnumber":"#02", "info":{"breed":"Duroc", "sex":"Female"}, "parents":[
		{"registrationnumber":"#04","info":{"breed":"Duroc","sex":"Female"}},
		{"registrationnumber":"#05","info":{"breed":"Duroc","sex":"Male"}}
	]},
	{"registrationnumber":"#03", "info":{"breed":"Duroc", "sex":"Male"}, "parents":[
		{"registrationnumber":"#06","info":{"breed":"Duroc","sex":"Female"}},
		{"registrationnumber":"#07","info":{"breed":"Duroc","sex":"Male"}}
	]}
]};

treeData = JSON.parse(JSON.stringify(treeData).split('"registrationnumber":').join('"name":'));
treeData = JSON.parse(JSON.stringify(treeData).split('"parents":').join('"children":'));
console.log(treeData);

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
				.attr("width", width + margin.right + margin.left)
				.attr("height", height + margin.top + margin.bottom),
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

		let animalinfo = "";

		tooltipdiv.transition()
			.duration(200)
			.style("opacity", 0.9);

		for(let key in d.data.info) {

			animalinfo = animalinfo + key + ": " + d.data.info[key] + "</br>";
		}	

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


// REFERENCES
// https://bl.ocks.org/d3noob/257c360b3650b9f0a52dd8257d7a2d73
// https://bl.ocks.org/d3noob/5537fe63086c4f100114f87f124850dd

// FOR IMPROVEMENTS
// https://bl.ocks.org/d3noob/43a860bc0024792f8803bba8ca0d5ecd
// https://codepen.io/marxtseng/pen/oBVjvB?editors=0010