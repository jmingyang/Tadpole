var WaterParticle = function() {
	var wp = this;
	
	wp.x = 0;
	wp.y = 0;
	wp.z = Math.random() * 1 + 0.3;
	wp.size = 1.2;
	wp.opacity = Math.random() * 0.8 + 0.1;
	
	wp.update = function(bounds) {
		if(wp.x == 0 || wp.y == 0) {
			wp.x = Math.random() * (bounds[1].x - bounds[0].x) + bounds[0].x;
			wp.y = Math.random() * (bounds[1].y - bounds[0].y) + bounds[0].y;
		}
		
		// Wrap around screen
		wp.x = wp.x < bounds[0].x ? bounds[1].x : wp.x;
		wp.y = wp.y < bounds[0].y ? bounds[1].y : wp.y;
		wp.x = wp.x > bounds[1].x ? bounds[0].x : wp.x;
		wp.y = wp.y > bounds[1].y ? bounds[0].y : wp.y;
	};
	var getRandomColor = function(){var r = Math.floor(Math.random() * 150+100); //随机生成256以内r值
 		var g = Math.floor(Math.random() * 100+100); //随机生成256以内g值
		var b = Math.floor(Math.random() * 100+100); //随机生成256以内b值
 		
 		return `rgba(${r},${g},${b},`;
	}
	wp.draw = function(context) {
		// Draw circle
		// context.fillStyle = 'rgba(226,219,226,'+wp.opacity+')';
		context.fillStyle = getRandomColor()+wp.opacity+')';
		//context.fillStyle = '#fff';
		context.beginPath();
		context.arc(wp.x, wp.y, this.z * this.size, 0, Math.PI*2, true);
		context.closePath();
		context.fill();
	};
}
