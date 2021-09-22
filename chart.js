let data = [
	{
		label: 'T',
		data: 400,
		subData: [
			{
				label: 'TT',
				data: 40,
			},
			{
				label: 'AA',
				data: 100,
			},
			{
				label: 'DD',
				data: 140,
			},
			{
				label: 'BB',
				data: 120,
			},
		],
	},
	{
		label: 'C',
		data: 200,
		subData: [
			{
				label: 'TT',
				data: 40,
			},
			{
				label: 'AA',
				data: 10,
			},
			{
				label: 'DD',
				data: 30,
			},
			{
				label: 'BB',
				data: 120,
			},
		],
	},
	{
		label: 'TD',
		data: 300,
		subData: [
			{
				label: 'TT',
				data: 40,
			},
			{
				label: 'AA',
				data: 100,
			},
			{
				label: 'DD',
				data: 140,
			},
			{
				label: 'BB',
				data: 20,
			},
		],
	},
	{
		label: 'TN',
		data: 100,
		subData: [
			{
				label: 'TT',
				data: 40,
			},
			{
				label: 'AA',
				data: 10,
			},
			{
				label: 'DD',
				data: 30,
			},
			{
				label: 'BB',
				data: 20,
			},
		],
	},
]

let mainLabelSet = data.map((item) => item.label)
let mainDataSet = data.map((item) => item.data)

let dataa = {
	labels: mainLabelSet,
	datasets: [
		{
			label: '# of Votes',
			data: mainDataSet,
			backgroundColor: [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()],
			// borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
			borderWidth: 1,
		},
	],
}

var ctx = document.getElementById('myChart').getContext('2d')
// var fillPattern = ctx.createPattern(img, 'repeat')
var myChartsss = new Chart(ctx, {
	type: 'pie',
	data: dataa,
})

let canvas = document.getElementById('myChart')

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('')
	var color = '#'
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	let randomNum1 = Math.random() * 255
	let randomNum2 = Math.random() * 255
	let colorRGBA = `rgba(255,${randomNum1},${randomNum2},.6)`
	return colorRGBA
}

canvas.onclick = function (evt) {
	let pt = myChartsss.getActiveElements(evt)

	const [{ index }] = pt

	let subMainLabel = data[index].subData.map((item) => item.label)
	let subMainData = data[index].subData.map((item) => item.data)

	var ctxx = document.getElementById('mySubChart').getContext('2d')

	if (window.mySubChart instanceof Chart) {
		window.mySubChart.destroy()
	}
	if (!document.querySelector('.subtype')) {
		let d = document.getElementById('mySubChart')
		let div = document.createElement('div')
		div.className = 'subtype'
		div.innerHTML = '子類別占比'
		d.before(div)
	}
	var mySubChart = new Chart(ctxx, {
		type: 'pie',
		data: {
			labels: subMainLabel,
			datasets: [
				{
					label: '# of Votes',
					data: subMainData,
					backgroundColor: [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()],
					// borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
					borderWidth: 1,
				},
			],
		},
	})
	window.mySubChart = mySubChart
}
