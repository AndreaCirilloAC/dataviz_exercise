d3.json("countries.geo.json", function(err, data){
    console.log(data)


var projection = d3.geoMercator()
//    .scale((300+1)/2 /Math.PI)
    //.translate([250,250])


var genPath = d3.geoPath()
                .projection(projection)

d3.select('svg')
    .selectAll('path')
    .data(data.features)
    .enter()
    .append('path')
    .attr('d', function(d,i){
    return genPath(d)
})
    
    })