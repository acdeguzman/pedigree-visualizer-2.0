const treeData = 
	{"name" : "#01", "info" : "Swine 1", "children" : [
		{"name" : "#02", "info" : "Swine 2", "children": [

			{"name": "#04", "info": "Swine 4"},
			{"name": "#05", "info": "Swine 5", "children": [

				{"name": "#08", "info": "Swine 6"},
				{"name": "#09", "info": "Swine 7"}
			]}
		]},

		{"name" : "#03", "info" : "Swine 3", "children": [
			
			{"name" : "#06", "info" : "Swine 6" }, 
			{"name" : "#07", "info" : "Swine 7" }
		]}
	]};

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
	.attr("r", 10);

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