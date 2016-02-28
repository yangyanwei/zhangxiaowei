window.onload=function(){
    function shuffle(o){ //v1.0
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    var colors = [
        ['#f9eeee', '#FFA200'], ['#f9eeee', '#FFA200'], ['#f9eeee', '#FFA200'], ['#f9eeee', '#FFA200'], ['#f9eeee', '#FFA200'],['#f9eeee', '#FFA200'], ['#f9eeee', '#FFA200'], ['#f9eeee', '#FFA200'], ['#f9eeee', '#FFA200'], ['#f9eeee', '#FFA200'], ['#f9eeee', '#FFA200'],['#f9eeee', '#FFA200']
    ], circles = [];

    for (var i = 1; i <= 12; i++) {
        var child = document.getElementById('circles-' + i),
            percentage = 0 + (i+85);
        circles.push(Circles.create({
            id:         child.id,
            value:		percentage,
            radius:     80,
            width:      10,
            colors:     colors[i - 1]
        }));
}
}