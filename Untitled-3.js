// Sample data for ApexCharts
const data1 = [12, 19, 3, 5, 2, 3];
const data2 = [7, 11, 5, 8, 3, 7];
const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

// ApexCharts Bar Chart 1
const barChartOptions1 = {
    series: [{
        data: data1
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: labels,
    }
};

const barChart1 = new ApexCharts(document.querySelector("#other-bar-chart-1"), barChartOptions1);
barChart1.render();

// ApexCharts Pie Chart 1
const pieChartOptions1 = {
    series: data1,
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: labels,
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

const pieChart1 = new ApexCharts(document.querySelector("#other-pie-chart-1"), pieChartOptions1);
pieChart1.render();

// ApexCharts Bar Chart 2
const barChartOptions2 = {
    series: [{
        data: data2
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: labels,
    }
};

const barChart2 = new ApexCharts(document.querySelector("#other-bar-chart-2"), barChartOptions2);
barChart2.render();

// ApexCharts Pie Chart 2
const pieChartOptions2 = {
    series: data2,
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: labels,
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

const pieChart2 = new ApexCharts(document.querySelector("#other-pie-chart-2"), pieChartOptions2);
pieChart2.render();