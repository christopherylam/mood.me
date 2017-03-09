function getChart(month)
{
	var ctx = document.getElementById('myChart').getContext('2d');
	if(month === "January")
	{
		var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [12, 19, 3, 17, 6, 3, 7, 5, 8],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
	}
	else if(month === "February")
	{
		var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [2, 10, 13, 7, 16, 23, 7, 15, 8],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
	}
	else if(month === "March")
	{
		var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [6, 7, 2, 0, 3, 1, 2, 6, 7],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
	}
	else if(month === "April")
	{
		var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [1, 4, 5, 3, 2, 3, 4, 15, 9],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
	}
	else if(month === "May")
	{
		var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [10, 9, 3, 0, 6, 15, 14, 2, 1],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
	}
	else if(month === "June")
	{
		var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [2, 9, 3, 4, 2, 1, 5, 9, 8],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
	}
	else if(month === "July")
	{
		var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [11, 13, 3, 3, 2, 5, 6, 1, 4],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
	}
	else if(month === "August")
	{
		var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [2, 1, 0, 0, 1, 5, 0, 0, 0],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
	}
	else if(month === "September")
	{
		var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [25, 2, 0, 0, 3, 5, 6, 11, 12],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
	}
	else if(month === "October")
	{
		var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [5, 1, 5, 10, 0, 20, 14, 3, 9],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
	}
	else if(month === "November")
	{
		var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [5, 10, 5, 7, 0, 0, 0, 5, 2],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
	}
	else
	{
		var myChart = new Chart(ctx, {
			  type: 'bar',
			  data: {
			    labels: ['Angry', 'Calm', 'Excited', 'Happy', 'Sad', 'Scared', 'Sick', 'Tired', 'Worried'],
			    datasets: [{
			      label: 'Mood Count',
			      data: [1, 10, 20, 11, 16, 0, 0, 0, 0],
			      backgroundColor: "rgb(35,175,82)",
			      borderColor: "black",
			      borderWidth: 1
			    }]
			  }
			});
	}
}