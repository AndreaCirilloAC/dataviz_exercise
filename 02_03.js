d3.csv('athletes_sochi.csv', function(err, data){
console.log(data)
    
    var byage = d3.nest()
                .key(function(d,i){
                    return d.age
                })
                .sortKeys(d3.ascending)
                .entries(data)
    
console.log(byage)
    
    var mapx = d3.scaleLinear()
        .domain([15,55])
        .range([0,300])
    
    var myarea = d3.area()
        .x(function(d,i){
            return mapx(d.key)
        })
        .y1(function(d,i){
            return 150 - d.values.length
        })
        .y0(function(d,i){
            return 150
        })
    
    d3.select('svg')
        .append('path')
        .attr('d', myarea(byage))
})