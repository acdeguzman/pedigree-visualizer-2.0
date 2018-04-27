/**

VISUALIZER.JS

A Javascript library for displaying the following data:
	
	1. family tree of the JSON pedigree input,
	2. covariance table of the entities in the pedigree, and
	3. inbred entities in the tree

HOW TO USE

	1. Include the visualizer.js to the index.html file
	2. Call the visualize function with a JSON parameter in the script tag

FEATURES
	1. SVG for pedigree
	2. Covariance Table
	3. Inbreeding Coefficient
	4. Toggleable Checkboxes for DOM manipulation
	5. Qualitative Data Filters
	6. Performance Table

**/

const visualize = (json) => {

	// storage of qualitative and quantitative value keys
	let qualitative_value_keys = [];
	let quantitative_value_keys = [];

	// mapping of each qualitative keys to each possible values
	let qualitative_value_map = {};
	
	// storage of each entities in the pedigree (traversed from rootnode to last leaf node, top lefto to bottom right)
	let entities_tree = [];

	// stores the JSON input to treeData variable
	let treeData = json;

	// changes the string "registrationnumber" key to "name" and "parents" key to children
	treeData = JSON.parse(JSON.stringify(treeData).split('"registrationnumber":').join('"name":'));
	treeData = JSON.parse(JSON.stringify(treeData).split('"parents":').join('"children":'));

	/**	FEATURE #1. SVG for pedigree **/

	// Set initial margins for SVG dimension initialization
	let margin =	{
						top: 20,
						right: 120,
						left: 120,
						bottom: 20
					},

		width =		900,
		height =	620; 

	// Set SVG size
	const svg =	d3.select("#mainDiv").append("svg")
					.attr("width", '100%')
					.attr("height", screen.height - 120),
		g	=	svg.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// Set tree dimensions
	const treemap = d3.tree().size([height, width]);

	// Store the entities to nodes for tree UI creation
	const rootNode = d3.hierarchy(treeData, (d) => {return d.children;});
	const data = treemap(rootNode);
	const nodes = data.descendants();

	// Tooltip feature
	const tooltipdiv = d3.select("#mainDiv").append("div")
							.attr("class", "tooltip")
							.style("opacity", 0);

	// Add links to the nodes
	const link =	g.selectAll(".link")
					.data(nodes.slice(1))
				.enter().append("path")
					.attr("class", "link")
					.attr("d", (d) => {

						// keys in the qualitative info are pushed to qualitative_value_keys array 
						// for tooltip and filter purposes
						for(let key in d.data.qualitative_info) 
							if(!qualitative_value_keys.includes(key)) qualitative_value_keys.push(key);
						
						// keys in the quantitative info are pushed to quantitative_value_keys array
						// for tooltip and filter purposes
						for(let key in d.data.quantitative_info) 
							if(!quantitative_value_keys.includes(key)) quantitative_value_keys.push(key);

						// creates map keys for each keys in the qualitative traits of entities (for filter)
						for(let i = 0; i < qualitative_value_keys.length; i++) 
							qualitative_value_map[qualitative_value_keys[i]] = [];

						// generate straight line links to connect child entities to parent entities
						return "M" + d.y + "," + d.x + "H" + (d.y + (d.parent.y-d.y)/2) 
						+ "V" + d.parent.x + "H" + d.parent.y;
				});

	// Add nodes as group
	const node =	g.selectAll(".node")
					.data(nodes)
				.enter().append("g")
					.attr("class", (d) => {

						return "node" + (d.children ? " node--internal" : " node--leaf");
					})
					.attr("transform", (d) => {

						return "translate(" + d.y + "," + d.x + ")";
					})

					// stores possible trait value to the array value of the keys in qualitative_value_map
					.attr("d", (d) => {

						for(let i = 0; i < qualitative_value_keys.length; i++) {

							for(let value in d.data.qualitative_info) {
								
								if(qualitative_value_keys[i] == value) {
					
									if(!qualitative_value_map[qualitative_value_keys[i]].includes(d.data.qualitative_info[value])) 
										qualitative_value_map[qualitative_value_keys[i]].push(d.data.qualitative_info[value]);
								}
							}
						}

						// adds the current entity to the entities_data
						entities_tree.push(d.data);
					});

	// Add circle to node
	node.append("circle")
		.attr("r", 7)
		.style("stroke", (d) => {

			// colors the outline of the circle of the nodes depending on the sex of the entity
			for(let key in d.data.qualitative_info) {

				if(key == "sex") {
					if(d.data.qualitative_info[key] == "Male") return "#1b77b8";
					else return "#f5a905";
				}
			}
		})
		.on("mouseover", (d) => {

			// creates a table and  displays the ID of the node (for tooltip)
			let animal_info = "<h4 align = 'center'> ID: " + d.data.name + "</h4><table>";

			tooltipdiv.transition()
				.duration(200)
				.style("opacity", 0.9);

			// adds each pairs of qualitative trait and its value to the table
			for(let key in d.data.qualitative_info) {

				animal_info = animal_info + "<tr><td>" + key + "</td><td>" + d.data.qualitative_info[key] + "</td></tr>";
			}

			// adds each pairs of quantitative trait and its value to the table
			for(let key in d.data.quantitative_info) {

				animal_info = animal_info + "<tr><td>" + key + "</td><td>" + d.data.quantitative_info[key] + "</td></tr>";	
			}

			animal_info = animal_info + "</table>"

			tooltipdiv.html(animal_info)
				.style("left", (d3.event.pageX) + "px")
				.style("top", (d3.event.pageY - 28) + "px");
		})
		.on("mouseout", (d) => {

			tooltipdiv.transition()
				.duration(500)
				.style("opacity", 0);
		});

	// Add text(id) to node
	node.append("text")
		.attr("dy", ".20em")
		.attr("x", (d) => { return d.children ? -10 : 10;})
		.style("text-anchor", function(d) { return d.children ? "end" : "start";})
		.style("font-size", "13px")
		.style("font-weight", "bold")
		.text(function(d) {return d.data.name;});

	// assign the mainDiv to main_container variable for DOM manipulation
	const main_container = document.getElementById("mainDiv");
	main_container.style.height = '100%';
	/** FEATURE #2. Covariance Table **/

	// div for displaying covariance table
	const covariance_table_div = document.createElement("div");
	covariance_table_div.style.cssText =	"width:54%;height:50%;float:left;margin-bottom:5px;"+
											"border:1px solid #c6b89e; border-radius: 5px;";

	main_container.appendChild(covariance_table_div);

	const covariance_table_text = document.createElement("h2");
	covariance_table_text.innerHTML = "Covariance Table"
	covariance_table_text.style.cssText = "font-family: Arial, Helvetica, sans-serif; padding-left: 1%";

	covariance_table_div.appendChild(covariance_table_text);

	const covariance_table_desc = document.createElement("p");
	covariance_table_desc.innerHTML = 	"A covariance table can be used to calculate individual inbreeding values."+
										" The table contains covariance values between two individuals or the covariance"+
										" of each individual.";

	covariance_table_desc.style.cssText = "font-family: Arial, Helvetica, sans-serif; margin-left: 5%";
	
	covariance_table_div.appendChild(covariance_table_desc);

	const covariance_table_container = document.createElement("div");
	covariance_table_container.style.cssText = "width: 98%; overflow: auto; margin-top: 2%; max-height: 90%";

	covariance_table_div.appendChild(covariance_table_container);

	const covariance_table_ui = document.createElement('table');
	covariance_table_ui.cellPadding = '5';
	covariance_table_ui.style.cssText = "margin-left: 2%; font-size: 12px; margin-bottom: 2%";

	covariance_table_container.appendChild(covariance_table_ui);


	// function getCovarianceTableData() returns a 2D array of id names and their corresponding covariance value
	const getCovarianceTableData = () => {
		
		// store entities with unique names for determining covariance
		const unique_entities_array = [];

		// store unique entity names
		const unique_names_array = [];

		// push unique entities and names to unique_entities_array and unique_entity_names
		for(let i = entities_tree.length - 1; i >= 0; i--) 
			if(!unique_entities_array.some(e => e.name === entities_tree[i].name)) {

			unique_entities_array.push(entities_tree[i]);
			unique_names_array.push(entities_tree[i].name);
		}


		let covariance_row = [];
		const covariance_table = [];

		// the for loop will loop unique_names_array + 1 times to allot 1 row and column for the entity names
		// at topmost row and leftmost column
		// the loop will produce an initial 2d array for the covariance table with each covariance value initialized to -1
		for(let i = 0; i < unique_names_array.length+1; i++) {
			for(let j = 0; j < unique_names_array.length+1; j++) {

					if(i == 0 && j > 0) covariance_row.push(unique_entities_array[j-1].name);
					else if(i > 0 && j == 0) covariance_row.push(unique_entities_array[i-1].name);
					else covariance_row.push(-1);
			}

			covariance_table.push(covariance_row);
			covariance_row = [];
		}

		// loop for covariance values computation
		// the inner loop will just loop up to i times to produce the lower diagonal of the table.
		// the lower diagonal values are just the same as the upper diagonal values
		for(let i = 1; i < unique_entities_array.length + 1; i++) {
			for(let j = 1; j <= i; j++) {

				// gets the entity name of the current column
				const curr_individual_name = covariance_table[i][0];
				
				// gets the entity object of the current column 
				const curr_individual_object = unique_entities_array.filter((obj) => { return obj.name == curr_individual_name});	

				// checks if entity names of the current row and column are the same
				// the covariance value in covariance_table[current_row][current_column] will be the covariance value 
				// of parents of the current entity object
				if(i == j) {

					//one or two unkonwn parent
					if(curr_individual_object[0].children == undefined || curr_individual_object[0].children[0] == undefined || 
					curr_individual_object[0].children[1] == undefined) covariance_table[i][j] = 1;

					// both parents are known
					else {

						let father = curr_individual_object[0].children[0].name;
						let mother = curr_individual_object[0].children[1].name;
						let father_index, mother_index, covariance_parents;

						father_index = unique_names_array.indexOf(father);
						mother_index = unique_names_array.indexOf(mother);

						if(covariance_table[father_index+1][mother_index+1] != -1) 
							covariance_parents = covariance_table[father_index+1][mother_index+1];
						
						else if(covariance_table[mother_index+1][father_index+1] != -1)
							covariance_parents = covariance_table[mother_index+1][father_index+1];

						covariance_table[i][j] = covariance_parents/2;
						covariance_table[i][j] = covariance_table[i][j] + 1;
					}
				}

				// different entities (row name and column name are different, 3 cases) 
				// 1. both parents unknown, 2. father/mother unknown, 4. both parents known
				else {	

					// case 1. assign the covariance value to 0 if both parents are unknown
					if(curr_individual_object[0].children == undefined) covariance_table[i][j] = 0;

					// case 2. get the covariance value of the current column entity and the sole parent of the current row
					else if(curr_individual_object[0].children[1] == undefined) {

						const parent_name = curr_individual_object[0].children[0].name;
						const parent_index = unique_names_array.indexOf(parent_name);

						if(covariance_table[parent_index+1][j] != -1) 
							covariance_table[i][j] = covariance_table[parent_index+1][j]/2;
						else if(covariance_table[j][parent_index+1] != -1) 
							covariance_table[i][j] = covariance_table[j][parent_index+1]/2;
					}

					// case 3. get the covariance value of the current column entity to both parent entities of the current row
					else if(curr_individual_object[0].children[1] != undefined && 
						curr_individual_object[0].children[0] != undefined){

						const mother_name = curr_individual_object[0].children[0].name;
						const father_name = curr_individual_object[0].children[1].name;

						const mother_index = unique_names_array.indexOf(mother_name);
						const father_index = unique_names_array.indexOf(father_name);

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

	// assign the result of the getCovarianceTableData() to variable covariance_table for display
	const covariance_table = getCovarianceTableData();

	// create UI for covariance_table
	for(let i = 0; i < covariance_table.length; i++) {

		const covariance_row = document.createElement('tr');

		for(let j = 0; j < covariance_table[i].length; j++) {

			if(i == 0 || j == 0) {

				let covariance_header

				if(i == 0)  covariance_header = document.createElement('td');

				else if(j == 0) covariance_header = document.createElement('th');

				covariance_header.style.fontFamily = 'Arial, Helvetica, sans-serif';

				// for each -1 value in the covariance_table, display an empty string in the table
				if(covariance_table[i][j] == -1) covariance_header.innerHTML = "";
				else covariance_header.innerHTML = covariance_table[i][j];

				covariance_row.appendChild(covariance_header);
			}

			else {

				const covariance_col = document.createElement('td');
				covariance_col.style.fontFamily = 'Arial, Helvetica, sans-serif';

				if(covariance_table[i][j] == -1) covariance_col.innerHTML = "";
				else covariance_col.innerHTML = covariance_table[i][j];

				covariance_row.appendChild(covariance_col);	
			}
		}

		covariance_table_ui.appendChild(covariance_row);
	}

	/** FEATURE #3. Inbreeding Coefficient **/

	const show_inbreeding_div = document.createElement("div");
	show_inbreeding_div.style.cssText = 	"width:25%;float:left;border:1px solid #c6b89e;"+
											"border-radius:5px;margin-bottom:5px;margin-left:0.5%;height:50%;";

	main_container.appendChild(show_inbreeding_div);

	const show_inbreeding_text = document.createElement("h2");
	show_inbreeding_text.innerHTML = "Inbreeding Table"
	show_inbreeding_text.style.cssText = "font-family:Arial, Helvetica, sans-serif;padding-left:1%";

	const inbreeding_table_desc = document.createElement("p");
	inbreeding_table_desc.innerHTML =	"Inbreeding results from the mating of two organisms that are closely-related genetically."+
										" Their offsprings are considered inbred organisms.";
	inbreeding_table_desc.style.cssText = "font-family:Arial, Helvetica, sans-serif;margin-left:5%";

	const show_inbreeding_table_container = document.createElement("div");
	show_inbreeding_table_container.style.cssText = "overflow-y:auto;max-height:90%;";

	show_inbreeding_div.appendChild(show_inbreeding_text);
	show_inbreeding_div.appendChild(inbreeding_table_desc);
	show_inbreeding_div.appendChild(show_inbreeding_table_container);

	const inbreeding_table = document.createElement('table');
	inbreeding_table.cellPadding = '5';
	inbreeding_table.style.cssText = "margin-left:2%;font-size:12px;margin-bottom:2%"

	show_inbreeding_table_container.appendChild(inbreeding_table);

	const inbreeding_table_header = document.createElement("tr");

	inbreeding_table.appendChild(inbreeding_table_header);

	const inbred_header = document.createElement("td");
	inbred_header.innerHTML = 'Inbred Entity';
	inbred_header.style.fontFamily = 'Arial, Helvetica, sans-serif';

	const inbreeding_coefficient = document.createElement("td");
	inbreeding_coefficient.innerHTML = 'Inbreeding Coefficient';
	inbreeding_coefficient.style.fontFamily = 'Arial, Helvetica, sans-serif';

	inbreeding_table_header.appendChild(inbred_header);
	inbreeding_table_header.appendChild(inbreeding_coefficient);

	// return a 2D array of entity names and their inbreeding coefficient
	// gets the value in covariance_table[index][index] then subtracts 1. an entity is inbred if the difference > 0
	const getInbreedingTableData = () => {

		const inbred_entities = [];
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

	// assign result of getInbreedingTableData() to variable inbred_entities
	const inbred_entities = getInbreedingTableData();

	for(let i = 0; i < inbred_entities.length; i++) {

		const inbred_row = document.createElement("tr");

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

	/** FEATURE #4 Toggleable Checkboxes **/

	const checkbox_div = document.createElement("div");
	checkbox_div.style.cssText = "width:19.5%;margin-left:0.5%;height:50%;border:1px solid #c6b89e;float:left;" +
	"border-radius:3px;margin-bottom:5px;";

	const checkbox_form = document.createElement("form");

	// when filter_input is checked, the filter_div will appear, unchecking will make the filter_div disappear
	const filter_input = document.createElement("input");
	filter_input.type = 'checkbox';
	filter_input.id = "filterCheckBox";

	const filter_label = document.createElement("label");
	filter_label.for = filter_input.id;
	filter_label.innerHTML = 'Show filters';
	filter_label.style.fontFamily = 'Arial, Helvetica, sans-serif';

	// when filter_input is checked, the performance_div will appear, unchecking will make the performance_div disappear
	const performance_input = document.createElement("input");
	performance_input.type = 'checkbox';
	performance_input.id = "performanceCheckBox";

	const performance_label = document.createElement("label");
	performance_label.for = performance_input.id;
	performance_label.innerHTML = 'Show Performance Table';
	performance_label.style.fontFamily = 'Arial, Helvetica, sans-serif';

	// when inbreeding_input is checked, the inbred entities in the SVG pedigree will be filled with red, unchecking will unfill
	const inbreeding_input = document.createElement("input");
	inbreeding_input.type = 'checkbox';
	inbreeding_input.id = "inbreedingCheckBox";

	const inbreeding_label = document.createElement("label");
	inbreeding_label.for = inbreeding_input.id;
	inbreeding_label.innerHTML = 'Show Inbred Entities';
	inbreeding_label.style.fontFamily = 'Arial, Helvetica, sans-serif';

	const inbred_legend = document.createElement("p");
	inbred_legend.innerHTML = '* The inbred entities will appear RED in the pedigree.';
	inbred_legend.style.cssText = "font-family:Arial, Helvetica, sans-serif;font-size:10px;color:red;display:none";

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

	main_container.appendChild(checkbox_div);

	/** FEATURE #5 Qualitative Data Filters **/

	const filter_div = document.createElement('div');
	filter_div.style.cssText = 	"width:48%;padding:10px;border:1px solid #c6b89e;float:left;border-radius:3px;" +
								"margin-bottom:1%;display:none;height:50%;";

	main_container.appendChild(filter_div);

	const filter_buttons_div = document.createElement('div');
	filter_buttons_div.style.cssText = "width:100%;paddingBottom:5%";

	// flag is used to monitor if there is already at least 1 filter (for displaying "Go Filter" button)
	let flag = false;

	const add_button = document.createElement('button');
	add_button.appendChild(document.createTextNode("Add Filters"));
	add_button.type = "submit";
	add_button.style.cssText =	"color:white;background:#0865ab;padding:1%;float:left;width:30%;"+
								"border:none;cursor:pointer;border-radius:3px;";
	
	const filter_button = document.createElement('button');
	filter_button.appendChild(document.createTextNode("Go Filter!"));
	filter_button.type = 'submit';
	filter_button.style.cssText =	"color:white;background:green;padding:1%;float:right;width:30%;"+
									"border:none;cursor:pointer;border-radius:3px;";

	filter_buttons_div.appendChild(add_button);
	filter_div.appendChild(filter_buttons_div);

	const input_div_container = document.createElement("div");
	input_div_container.style.cssText = "max-height:90%;height:95%;width:100%;overflow-y:auto;padding-top:5px;";
	
	filter_div.appendChild(input_div_container);

	add_button.addEventListener('click', function() {
		
		flag = true;

		const filter_input_div = document.createElement('div');
		
		const select_key = document.createElement('select');
		select_key.style.cssText = "margin:3px;width:50%";

		const select_value = document.createElement('select');
		select_value.style.cssText = "width:40%;margin:3px;"

		for(let i = 0; i < qualitative_value_keys.length; i++) {

			const key_option = document.createElement('option');
			key_option.value = qualitative_value_keys[i];
			key_option.innerHTML = qualitative_value_keys[i];
			select_key.appendChild(key_option);
		}

		for(let i = 0; i < qualitative_value_map[select_key.value].length; i++) {

			const value_option = document.createElement('option');
			value_option.value = qualitative_value_map[select_key.value][i];
			value_option.innerHTML = qualitative_value_map[select_key.value][i];
			select_value.appendChild(value_option)
		}

		select_key.addEventListener('change', function() {

			const selectLength = select_value.options.length;

			for(let i = select_value.options.length - 1; i >= 0; i--) select_value.remove(i);

			for(let i = 0; i < qualitative_value_map[select_key.value].length; i++) {

				opt = document.createElement('option');
				opt.value = qualitative_value_map[select_key.value][i];
				opt.innerHTML = qualitative_value_map[select_key.value][i];
				select_value.appendChild(opt)
			}
		});

		let delete_button = document.createElement('button');
		delete_button.appendChild(document.createTextNode('x'));
		delete_button.style.cssText =	"color:white;background:red;height:20px;width:5%;border:none;cursor:pointer;" + 
										"border-radius:3px;"

		delete_button.addEventListener('click', function() {

			if(this.parentNode.parentNode.childNodes.length == 1) {

				filter_buttons_div.removeChild(filter_buttons_div.childNodes[1]);
				flag = false;
			}
			this.parentNode.parentNode.removeChild(this.parentNode);
		});

		filter_input_div.appendChild(select_key);
		filter_input_div.appendChild(select_value);
		filter_input_div.appendChild(delete_button);
		input_div_container.appendChild(filter_input_div);
		
		// check if there is at least one filter
		if(flag) filter_buttons_div.appendChild(filter_button);
	});

	filter_button.addEventListener('click', function() {

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

		while(i < input_div_container.childNodes.length) {

			keysForFilter.push(input_div_container.childNodes[i].childNodes[0].value);
			valuesForFilter.push(input_div_container.childNodes[i].childNodes[1].value);

			i++;
		}

		// fill nodes according to filter
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

	/** FEATURE #6 Performance Table **/


	const getQualitativeDataCount = () => {	// return JSON of the qualitative data of the pedigree

		let qualitative_data_object = {};
		let count = 0;

		for(let i = 0; i < qualitative_value_keys.length; i++) {

			qualitative_data_object[qualitative_value_keys[i]] = [];

			for(let j = 0; j < qualitative_value_map[qualitative_value_keys[i]].length; j++) {

				let trait_count_pair = {};

				for(let x = 0; x < entities_tree.length; x++) {

					if(entities_tree[x].qualitative_info[qualitative_value_keys[i]] == qualitative_value_map[qualitative_value_keys[i]][j]) count++;
				}

				trait_count_pair[qualitative_value_map[qualitative_value_keys[i]][j]] = count;
				qualitative_data_object[qualitative_value_keys[i]].push(trait_count_pair);
				count = 0;
			}
		}

		return qualitative_data_object;
	}

	let qualitative_data_object = getQualitativeDataCount();

	let performance_div = document.createElement("div");
	performance_div.style.width = '49.5%';
	performance_div.style.height = '53%';
	performance_div.style.float = 'left';
	performance_div.style.marginBottom = '5px';
	performance_div.style.marginLeft = '0.5%';
	performance_div.style.border = '1px solid #c6b89e';
	performance_div.style.borderRadius = '5px';
	performance_div.style.display = 'none';

	main_container.appendChild(performance_div);

	let qualitative_text = document.createElement("h2");
	qualitative_text.innerHTML = "Qualitative Data"
	qualitative_text.style.fontFamily = 'Arial, Helvetica, sans-serif';
	qualitative_text.style.paddingLeft = '1%';

	let table_container = document.createElement("div");
	table_container.style.maxHeight = '90%';
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
		let count = entities_tree.length;

		for(let i = 0; i < quantitative_value_keys.length; i++) {

			let quantitative_data_object = {};

			quantitative_data_object['data'] = quantitative_value_keys[i];

			for(let j = 0; j < entities_tree.length; j++) {

				total += entities_tree[j].quantitative_info[quantitative_value_keys[i]];

				if(entities_tree[j].quantitative_info[quantitative_value_keys[i]] > max) max = entities_tree[j].quantitative_info[quantitative_value_keys[i]];
				if(entities_tree[j].quantitative_info[quantitative_value_keys[i]] < min) min = entities_tree[j].quantitative_info[quantitative_value_keys[i]];
			}

			quantitative_data_object['minimum'] = min;
			quantitative_data_object['maximum'] = max;

			mean = total/count;

			quantitative_data_object['ave'] = mean;

			for(let j = 0; j < entities_tree.length; j++) {

				std += Math.pow((entities_tree[j].quantitative_info[quantitative_value_keys[i]] - mean), 2);
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
	let count = entities_tree.length;

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

		if(filter_input.checked == true) filter_div.style.display = 'block';
		else filter_div.style.display = 'none';
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

/**** SAMPLE JSON INPUTS *****

let treeData = {"registrationnumber":"#00001", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Duroc", "sex":"Female","birthyear":"1994", "date_registered": "2014-02-10", "registered_by":"Wendy"}, "quantitative_info": {"weight_at_data_collection": 57, "age_at_data_collection": 4, "average_daily_gain":7, "backfat_thickness": 3, "feed_efficiency": 3, "birth_weight":8, "total_when_born_male": 7, "total_when_born_female": 6, "littersize_born_alive": 5, "parity": 1},"parents": [
	{"registrationnumber":"#20", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "date_registered": "2008-07-20", "registered_by":"Netty"}, "quantitative_info": {"weight_at_data_collection": 59, "age_at_data_collection": 6, "average_daily_gain":9, "backfat_thickness": 5, "feed_efficiency": 5, "birth_weight":10, "total_when_born_male": 9, "total_when_born_female": 8, "littersize_born_alive": 7, "parity": 3},"parents":[
		{"registrationnumber":"#411", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2004", "date_registered": "2017-06-22", "registered_by":"Brose"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 5, "average_daily_gain":8, "backfat_thickness": 4, "feed_efficiency": 4, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 6, "parity": 2},"parents":[
			{"registrationnumber":"#489", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Yorkshire", "sex":"Female","birthyear":"2005", "date_registered": "2015-10-01", "registered_by":"Dermot"}, "quantitative_info": {"weight_at_data_collection": 58, "age_at_data_collection": 4, "average_daily_gain":9, "backfat_thickness": 5, "feed_efficiency": 3, "birth_weight":10, "total_when_born_male": 9, "total_when_born_female": 5, "littersize_born_alive": 3, "parity": 9},"parents":[
				{"registrationnumber":"#148", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Duroc", "sex":"Female","birthyear":"2004", "date_registered": "2014-12-06", "registered_by":"Jo"},"quantitative_info": {"weight_at_data_collection": 42, "age_at_data_collection": 3, "average_daily_gain":4, "backfat_thickness": 5, "feed_efficiency": 1, "birth_weight":5, "total_when_born_male": 1, "total_when_born_female": 4, "littersize_born_alive": 6, "parity": 9}},
				{"registrationnumber":"#277", "qualitative_info":{"farm_name":"Mapusagafou","breed":"Duroc", "sex":"Male","birthyear":"2001", "date_registered": "2004-07-02", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 66, "age_at_data_collection": 7, "average_daily_gain":11, "backfat_thickness": 8, "feed_efficiency": 2, "birth_weight":9, "total_when_born_male": 2, "total_when_born_female": 3, "littersize_born_alive": 2, "parity": 5}}
			]},
			
			{"registrationnumber":"#102", "qualitative_info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2003", "date_registered": "2012-04-10", "registered_by":"Jo"}, "quantitative_info": {"weight_at_data_collection": 60, "age_at_data_collection": 2, "average_daily_gain": 8, "backfat_thickness": 11, "feed_efficiency": 2, "birth_weight":9, "total_when_born_male": 8, "total_when_born_female": 7, "littersize_born_alive": 8, "parity": 2},"parents":[
				{"registrationnumber":"#445", "qualitative_info":{"farm_name":"Nangkaruka","breed":"Yorkshire", "sex":"Female","birthyear":"2000", "date_registered": "2014-11-11", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 55, "age_at_data_collection": 6, "average_daily_gain":9, "backfat_thickness": 12, "feed_efficiency": 6, "birth_weight": 12, "total_when_born_male": 3, "total_when_born_female": 5, "littersize_born_alive": 2, "parity": 10}},
				{"registrationnumber":"#1412221234", "qualitative_info":{"farm_name":"Nangkaruka","breed":"Duroc", "sex":"Male","birthyear":"2005", "date_registered": "2014-02-10", "registered_by":"Wendy"},"quantitative_info": {"weight_at_data_collection": 48, "age_at_data_collection": 5, "average_daily_gain":5, "backfat_thickness": 13, "feed_efficiency": 13, "birth_weight": 11, "total_when_born_male": 4, "total_when_born_female": 8, "littersize_born_alive": 1, "parity": 12}}
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
****************************/