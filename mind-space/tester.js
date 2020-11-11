var keyData = {
		q: {
			sound: new Howl({
	  		src: ['assets/sounds/c2.ogg']
			}),
			color: '#1abc9c'
		},
		w: {
			sound: new Howl({
	  		src: ['assets/sounds/e2.ogg']
			}),
			color: '#2ecc71'
		},
		e: {
			sound: new Howl({
	  			src: ['assets/sounds/g2.ogg']
			}),
			color: '#3498db'
		},
		r: {
			sound: new Howl({
	  			src: ['assets/sounds/c3.ogg']
			}),
			color: '#9b59b6'
		},
			t: {
			sound: new Howl({
	  			src: ['assets/sounds/e3.ogg']
			}),
			color: '#34495e'
		},
		y: {
			sound: new Howl({
	  			src: ['assets/sounds/g3.ogg']
			}),
			color: '#16a085'
		},
		u: {
			sound: new Howl({
	  			src: ['assets/sounds/c4.ogg']
			}),
			color: '#27ae60'
		},
		i: {
			sound: new Howl({
	  			src: ['assets/sounds/e4.ogg']
			}),
			color: '#2980b9'
		},
		o: {
			sound: new Howl({
				src: ['assets/sounds/g4.ogg']
			}),
			color: '#8e44ad'
		},
		p: {
			sound: new Howl({
	  			src: ['assets/sounds/c5.ogg']
			}),
			color: '#2c3e50'
		},
		a: {
			sound: new Howl({
	  			src: ['assets/sounds/e5.ogg']
			}),
			color: '#f1c40f'
		},
		s: {
			sound: new Howl({
	  			src: ['assets/sounds/g5.ogg']
			}),
			color: '#e67e22'
		},
			d: {
			sound: new Howl({
	  			src: ['assets/sounds/c6.ogg']
			}),
			color: '#e74c3c'
		},
		f: {
			sound: new Howl({
	  			src: ['assets/sounds/e6.ogg']
			}),
			color: '#95a5a6'
		},
		g: {
			sound: new Howl({
	  			src: ['assets/sounds/g6.ogg']
			}),
			color: '#f39c12'
		},
		h: {
			sound: new Howl({
	  			src: ['assets/sounds/c2.ogg']
			}),
			color: '#d35400'
		},
		j: {
			sound: new Howl({
	  			src: ['assets/sounds/e2.ogg']
			}),
			color: '#1abc9c'
		},
		
		k: {
			sound: new Howl({
	  			src: ['assets/sounds/g2.ogg']
			}),
			color: '#2ecc71'
		},
		l: {
			sound: new Howl({
	  			src: ['assets/sounds/c3.ogg']
			}),
			color: '#3498db'
		},
		z: {
			sound: new Howl({
	  			src: ['assets/sounds/e3.ogg']
			}),
			color: '#9b59b6'
		},
		x: {
			sound: new Howl({
	  			src: ['assets/sounds/g3.ogg']
			}),
			color: '#34495e'
		},
		c: {
			sound: new Howl({
	  			src: ['assets/sounds/c4.ogg']
			}),
			color: '#16a085'
		},
		v: {
			sound: new Howl({
	  			src: ['assets/sounds/e4.ogg']
			}),
			color: '#27ae60'
		},
		b: {
			sound: new Howl({
	  			src: ['assets/sounds/g4.ogg']
			}),
			color: '#2980b9'
		},
		n: {
			sound: new Howl({
				src: ['assets/sounds/c5.ogg']
			}),
			color: '#8e44ad'
		},
		m: {
			sound: new Howl({
	  			src: ['assets/sounds/e5.ogg']
			}),
			color: '#2c3e50'
		}
	};

	var circles = [];

	function onKeyDown(event) {

		<!-- If truthy (if keyData exists do this else dont do anything) -->
		if(keyData[event.key]) {
			var maxPoint = new Point(view.size.width, view.size.height);

			<!-- Basically it is doing this: new Point(Math.random(), Math.random()) -->
			var randomPoint = Point.random();

			<!-- Pretty much doing Math.random() * maxPoint -->
			var point = maxPoint * randomPoint;

			var newCircle = new Path.Circle(point, 100);
			newCircle.fillColor = keyData[event.key].color;
			keyData[event.key].sound.play();
			circles.push(newCircle);
		}
	}

	<!-- On each frame perform animate - change hue color and circle opacity -->
	function onFrame(event) {
		<!-- Loop through all circles and perform animate -->
		<!-- Optimization: need to remove circle once done -->
		for(var i = 0; i < circles.length; i++) {
			circles[i].fillColor.hue += 1;

			<!-- reduces opacity to 90% -->
			circles[i].opacity = (circles[i].opacity)*(0.95);

			<!-- Remove circle from array if area is less than 1 -->
			if(circles[i].opacity < 0.1) {
				circles[i].remove();

				<!-- splice(index, amound to remove) -->
				circles.splice(i, 1);

				<!-- Console array shrinks till it is empty -->
				console.log(circles);
			}
		}
	}

