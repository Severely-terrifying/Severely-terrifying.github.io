// Generate random data
const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
const data = {
    barData: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
    pieData: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100))
};

// Bar Chart
const barChartCanvas = document.getElementById('my-bar-chart');
const barChart = new Chart(barChartCanvas, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Random Bar Chart Data',
            data: data.barData,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false,
        responsive: true
    }
});

// Pie Chart
const pieChartCanvas = document.getElementById('my-pie-chart');
const pieChart = new Chart(pieChartCanvas, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: 'Random Pie Chart Data',
            data: data.pieData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true
    }
});
