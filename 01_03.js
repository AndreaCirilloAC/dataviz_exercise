var dataset = [3,6,3,21,7,8,9]
var max_point = d3.max(dataset,function(d){
                       return +d
                       })
var max_svg_height  = 150       
var max_svg_width  = 300
console.log(dataset)
console.log(max_point)
console.log(max_svg_height)
console.log(max_svg_width)
var mapx = d3.scaleLinear()
    .domain([0,dataset.length-1])
    .range([0,max_svg_width])

var mapy = d3.scaleLinear()
    .domain ([0, max_point])
    .range ([0,max_svg_height])


var myline = d3.area()
            .x(function(d,i){
               return mapx(i)
               })
            .y1(function(d,i){
               return max_svg_height -mapy(d)
              })
            .y0(function(d,i){
                return 500
            })
            .curve(d3.curveBasis)

/* versione con linea 
var myline = d3.line()
            .x(function(d,i){
               return mapx(i)
               })
            .y(function(d,i){
               return max_svg_height -mapy(d)
              })
            .curve(d3.curveBasis)
*/

d3.select('svg')
    .append('path')
    .attr('d', myline(dataset))
    .style('fill', 'lightblue')
    .style('stroke','blue')
    .on('mouseenter', function(){
    d3.select(this)
        .style('fill', 'red')
        
})
    .on('mouseleave', function(){
    d3.select(this)
        .style('fill', 'lightblue')
})