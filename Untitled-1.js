// Sample data for the charts
const data1 = [12, 19, 3, 5, 2, 3];
const data2 = [7, 11, 5, 8, 3, 7];
const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

// Chart.js Bar Chart 1
const barChart1 = document.getElementById('chartjs-bar-chart-1');
new Chart(barChart1, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Bar Chart 1 Data',
            data: data1,
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
        }
    }
});

// Chart.js Pie Chart 1
const pieChart1 = document.getElementById('chartjs-pie-chart-1');
new Chart(pieChart1, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: 'Pie Chart 1 Data',
            data: data1,
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
    }
});

// Chart.js Bar Chart 2
const barChart2 = document.getElementById('chartjs-bar-chart-2');
new Chart(barChart2, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Bar Chart 2 Data',
            data: data2,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart.js Pie Chart 2
const pieChart2 = document.getElementById('chartjs-pie-chart-2');
new Chart(pieChart2, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: 'Pie Chart 2 Data',
            data: data2,
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
    }
});