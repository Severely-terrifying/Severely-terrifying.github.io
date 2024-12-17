// Sample data for D3.js charts
const data1 = [
    { label: 'Red', value: 12 },
    { label: 'Blue', value: 19 },
    { label: 'Yellow', value: 3 },
    { label: 'Green', value: 5 },
    { label: 'Purple', value: 2 },
    { label: 'Orange', value: 3 }
];

const data2 = [
    { label: 'Red', value: 7 },
    { label: 'Blue', value: 11 },
    { label: 'Yellow', value: 5 },
    { label: 'Green', value: 8 },
    { label: 'Purple', value: 3 },
    { label: 'Orange', value: 7 }
];

// D3.js Bar Chart 1
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const width = 400 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

const svgBar1 = d3.select("#d3-bar-chart-1")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const xBar1 = d3.scaleBand()
    .range([0, width])
    .domain(data1.map(d => d.label))
    .padding(0.2);

const yBar1 = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data1, d => d.value)]);

svgBar1.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xBar1));

svgBar1.append("g")
    .call(d3.axisLeft(yBar1));

svgBar1.selectAll("mybar")
    .data(data1)
    .enter()
    .append("rect")
    .attr("x", d => xBar1(d.label))
    .attr("y", d => yBar1(d.value))
    .attr("width", xBar1.bandwidth())
    .attr("height", d => height - yBar1(d.value))
    .attr("fill", "#69b3a2");

// D3.js Pie Chart 1
const svgPie1 = d3.select("#d3-pie-chart-1")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

const colorPie1 = d3.scaleOrdinal()
    .domain(data1.map(d => d.label))
    .range(d3.schemeCategory10);

const pie = d3.pie()
    .value(d => d.value);

const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2 - 1);

const arcs = svgPie1.selectAll("arc")
    .data(pie(data1))
    .enter()
    .append("g")
    .attr("class", "arc");

arcs.append("path")
    .attr("d", arc)
    .attr("fill", d => colorPie1(d.data.label));

// D3.js Bar Chart 2
const svgBar2 = d3.select("#d3-bar-chart-2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const xBar2 = d3.scaleBand()
    .range([0, width])
    .domain(data2.map(d => d.label))
    .padding(0.2);

const yBar2 = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data2, d => d.value)]);

svgBar2.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xBar2));

svgBar2.append("g")
    .call(d3.axisLeft(yBar2));

svgBar2.selectAll("mybar")
    .data(data2)
    .enter()
    .append("rect")
    .attr("x", d => xBar2(d.label))
    .attr("y", d => yBar2(d.value))
    .attr("width", xBar2.bandwidth())
    .attr("height", d => height - yBar2(d.value))
    .attr("fill", "#fc8d62");

// D3.js Pie Chart 2
const svgPie2 = d3.select("#d3-pie-chart-2")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

const colorPie2 = d3.scaleOrdinal()
    .domain(data2.map(d => d.label))
    .range(d3.schemeSet3);

const pie2 = d3.pie()
    .value(d => d.value);

const arc2 = d3.arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2 - 1);

const arcs2 = svgPie2.selectAll("arc")
    .data(pie2(data2))
    .enter()
    .append("g")
    .attr("class", "arc");

arcs2.append("path")
    .attr("d", arc2)
    .attr("fill", d => colorPie2(d.data.label));