
var group = d3.select('svg')
    .append('g')


group.append('rect')
    .attr('x', 200)
    .attr('width',100)
    .attr('height',200)
    .attr('fill','lightblue')
    
group.append('text')
    .attr('x', 20)
    .attr('y',10)
    .text('home')
    .attr('fill','darkblue')