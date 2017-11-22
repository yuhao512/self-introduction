// 圆形进度条
$(function(){

	$('#JAVA').radialIndicator({
				radius:70,
				barColor: '#00F5FF',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj1 = $('#JAVA').data('radialIndicator');
			radialObj1.animate(85);

			$('#css').radialIndicator({
				radius:70,
				barColor: '#00F5FF',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj2 = $('#css').data('radialIndicator');
			radialObj2.animate(80);
			$('#javascript').radialIndicator({
				radius:70,
				barColor: '#00F5FF',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj3 = $('#javascript').data('radialIndicator');
			radialObj3.animate(85);
			$('#jquery').radialIndicator({
				radius:70,
				barColor: '#00F5FF',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj4 = $('#jquery').data('radialIndicator');
			radialObj4.animate(85);
			$('#bootstrap').radialIndicator({
				radius:70,
				barColor: '#00F5FF',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj5 = $('#bootstrap').data('radialIndicator');
			radialObj5.animate(70);
			$('#html').radialIndicator({
				radius:70,
				barColor: '#00F5FF',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj6 = $('#html').data('radialIndicator');
			radialObj6.animate(80);
			$('#oracle').radialIndicator({
				radius:70,
				barColor: '#00F5FF',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj7 = $('#oracle').data('radialIndicator');
			radialObj7.animate(85);
			$('#mysql').radialIndicator({
				radius:70,
				barColor: '#00F5FF',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj8 = $('#mysql').data('radialIndicator');
			radialObj8.animate(80);

	
})