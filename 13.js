

d3.csv('athletes_sochi.csv', function(err, the_data) {
    if(err){
        console.log(err)
        return
    }
    console.log(the_data)
    
    var maxWeight = d3.max(the_data, function(d){
        return d.weight
    })
    console.log(maxWeight)
    var mapX = d3.scaleLinear()
                    .domain([0,maxWeight]) //dominio iniziale
                    .range([0,500]) // dominio sul quale mappare
    
    var mapY = d3.scaleLinear()
                    .domain([0,2])
                    .range([0,500])
    
var my_groups = d3.select('svg')
        .selectAll('g')
        .data(the_data)
        .enter()
        .append('g')
        .attr('transform',function(d,i){
            return `translate(${mapX(d.weight)}, ${mapY(d.height)})`
        })

my_groups.append('circle')
        .attr('r',3)
        .style('opacity',.1)

my_groups.append('text')
        .text(function(d,i){
              return d.name
              })
        .style('opacity',0)
        .attr('text-anchor', 'middle')

my_groups.on('mouseenter', function(){
    d3.select(this)
        .select('text')
        .style('opacity', 1)
    
    d3.select(this)
        .select('circle')
        .style('fill','red')
        .style('opacity',1)
        .attr('r',6)
    

        
})
    
my_groups.on('mouseleave', function(){
    d3.select(this)
        .select('text')
        .style('opacity',0)
    d3.select(this)
        .select('circle')
        .style('fill','black')
        .style('opacity',.1)
        .attr('r', 3)
})
    


    
    
})
  
    