/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your scatterplot in this file 
const widthScp = 1000;
const heightScp = 900;
const marginScp = {top: 50, bottom: 50, left: 50, right: 50}; 
const tooltip = 15;

const csvSCP = d3
.select("#csv-scatter")
.append("svg")
.attr("height", heightScp - marginScp.top - marginScp.bottom)
.attr("width", widthScp-marginScp.left-marginScp.right)
.attr("viewBox", [0, 0, widthScp, heightScp]);






