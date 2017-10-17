var dataset = [
    {age:20},
    {age:12},
    {age:-35},
    {age:-35}
]

var baseline = 100

function buildMyChart(){
    
  var myrects = d3.select('svg')
    .selectAll('rect')
    .data(dataset)
    
    
myrects.enter()
    .append('rect')
    .attr('width', 30)
    .attr('height', function(d,i){
    return Math.abs(d.age)
})
    .attr('x', function(d,i){
    return i*32
})
    .attr('y', function(d,i){
    if (d.age >0){  
        return baseline - d.age}else{return baseline}

})  
    
    myrects.exit()
        .remove()
    
    myrects.
} 



d3.select("#clickme")
    .on('click',function() {
    dataset.push( {age:Math.random()*100}   )
    buildMyChart()
} )


