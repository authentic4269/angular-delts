Raphael.fn.connection = function (obj1, obj2, lines) {
    if (obj1.lines && obj1.from && obj1.to) {
        lines = obj1;
        obj1 = lines.from;
        obj2 = lines.to;
    }
    var bb1 = obj1.getBBox(),
        bb2 = obj2.getBBox(),
		cp = [{x: bb1.cx, y: bb1.cy},
			  {x: bb2.cx, y: bb2.cy}],
         p = [{x: bb1.x + bb1.width / 2, y: bb1.y}, // 1st top [0]
        {x: bb1.x + bb1.width / 2, y: bb1.y + bb1.height}, // 1st bottom [1]
        {x: bb2.x + bb2.width / 2, y: bb2.y}, // 2nd top [2]
        {x: bb2.x + bb2.width / 2, y: bb2.y + bb2.height}, // 2nd bottom [3]
        {x: bb2.x, y: bb2.y + bb2.height / 2}, // 2nd left [4]
        {x: bb2.x + bb2.width, y: bb2.y + bb2.height / 2}], // 2nd right [5]
        d = {}, dis = [];
    for (var i = 0; i < 2; i++) {
        for (var j = 2; j < 6; j++) {
            var dx = Math.abs(p[i].x - p[j].x),
                dy = Math.abs(p[i].y - p[j].y);
            
			if ((i == j - 2) || 
				(((j != 4)) && // side1 isn't 'right' and side2 isn't 'left'
				((j != 5)) && // side1 isn't 'left' and side2 isn't 'right'
				((i != 0 && j != 3) || p[i].y > p[j].y) && // side1 isn't 'top' and side2 isn't 'bottom'
				((i != 1 && j != 2) || p[i].y < p[j].y)  // side1 isn't 'bottom' and side2 isn't 'top'
			))
			{
				dis.push(dx + dy);
				d[dis[dis.length - 1]] = [i, j];
            }
        }
    }
    if (dis.length == 0) {
        var res = [0, 2];
    } else {
        res = d[Math.min.apply(Math, dis)];
    }
    var x1 = p[res[0]].x,
        y1 = p[res[0]].y,
        x4 = p[res[1]].x,
        y4 = p[res[1]].y;
    
	var x2, y2, x3, y3;
	var dcy = cp[0].y - cp[1].y;
		
	if(dcy >= 0 && res[0] == 1 && res[1] == 3)
	{
		x2 = x1;
		y2 = y3 = Math.max(y1, y4) + 10;
		x3 = x4;
	}
	else if(dcy < 0 && res[0] == 0 && res[1] == 2)
	{
		x2 = x1;
		y2 = y3 = Math.min(y1, y4) - 10;
		x3 = x4;
	}
	else
	{
		dx = Math.abs(x1 - x4) / 2;
		dy = Math.abs(y1 - y4) / 2;
		x2 = [x1, x1][res[0]].toFixed(3);
		y2 = [y1 - dy, y1 + dy, y1, y1][res[0]].toFixed(3);
		x3 = [0, 0, x4, x4, x4 - dx, x4 + dx][res[1]].toFixed(3);
		y3 = [0, 0, y1 + dy, y1 - dy, y4, y4][res[1]].toFixed(3);
	}

	var path = ["M", x1.toFixed(3), y1.toFixed(3), "L", x2, y2, "L", x3, y3, "L", x4.toFixed(3), y4.toFixed(3)].join(",");

	if (lines && lines.lines) {
        for(var i = 0; i < lines.lines.length; i++)
			lines.lines[i].attr({path: path});
    } else {
        lines = lines instanceof Array == true ? lines : [lines];
        for(var i = 0; i < lines.length; i++)
		{
			var line = typeof lines[i] == "string" ? lines[i] : "#000";
			lines[i] = this.path(path).attr({stroke: line.split("|")[0] || "#000", fill: "none", "stroke-width": line.split("|")[1] || 1}).zIndex(2);
			lines[i].strokeWidth = line.split("|")[1] || 1;
		}
		return {
            lines: lines,
            from: obj1,
            to: obj2
        };
    }
};