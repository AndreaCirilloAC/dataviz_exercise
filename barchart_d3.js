var canvas_height = 300
var set_width = 30
var first_group = d3.select('svg')
    .append('g')
                        

var first_rect = first_group.append('rect')
    .attr('height', 80)
    .attr('width', set_width)
    .attr('fill', 'darkblue')
var height = first_rect.attr('height')
first_rect.attr('y',canvas_height- height)
var rect_y = first_rect.attr('y')
var rect_x = first_rect.attr('x')+set_width
var text_y = +rect_y +height +10

var first_text = first_group.append('text')
    .text('A')
    .attr('x',rect_x/2)
    .attr('y',+210)
var catched = 0
first_rect.on('click', function(){
    catched = catched +1
    var me = d3.select(this)
    
    if (me.attr('fill')==='red'){
        me.attr('fill', 'green')
        me.attr('y',Math.floor(Math.random() * height) + 1)
        me.attr('x',Math.floor(Math.random() * height) + 1)

         console.log(catched)
    }else{
        me.attr('fill','red')
        me.transition()
            .attr('y',Math.floor(Math.random() * height) + 1)
        me.transition()
            .attr('x',Math.floor(Math.random() * height) + 1)
    }
})

first_group.append('text')
    .text('number of catched rectangles')
    .attr('x',1)
    .attr('y',10)
    .on('click', function(){
    var me = d3.select(this)
    me.text('number of catched rectangles: '+ catched)    })



