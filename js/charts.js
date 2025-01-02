// Initialize all charts when the document is ready
document.addEventListener('DOMContentLoaded', () => {
  // Neuron Type Distribution Chart
  const neuronTypeCtx = document.getElementById('neuron-type-chart').getContext('2d');
  const labels = [
    'Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19', 'Jul-19', 'Aug-19', 'Sep-19', 'Oct-19', 'Nov-19', 'Dec-19',
    'Jan-20', 'Feb-20', 'Mar-20', 'Apr-20', 'May-20', 'Jun-20', 'Jul-20', 'Aug-20', 'Sep-20', 'Oct-20', 'Nov-20', 'Dec-20',
    'Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21', 'Oct-21', 'Nov-21', 'Dec-21',
    'Jan-22', 'Feb-22', 'Mar-22', 'Apr-22', 'May-22', 'Jun-22', 'Jul-22', 'Aug-22', 'Sep-22', 'Oct-22', 'Nov-22', 'Dec-22',
    'Jan-23', 'Feb-23', 'Mar-23', 'Mar-23', 'Apr-23', 'May-23', 'Jun-23', 'Jul-23', 'Aug-23', 'Sep-23', 'Oct-23', 'Nov-23', 'Dec-23',
    'Jan-24', 'Feb-24', 'Mar-24', 'Apr-24', 'May-24', 'Jun-24', 'Jul-24', 'Aug-24', 'Sep-24', 'Oct-24', 'Nov-24', 'Dec-24'
  ];

  const data = [156, 252, 239, 287, 358, 545, 849, 672, 941, 1983, 2490, 3324, 4428, 4063, 5381, 6174, 7324, 8579, 10189, 11948, 12432, 12225, 19740, 25587, 26026, 20945, 35773, 44732, 19783, 16744, 18672, 17926, 19891, 18832, 18572, 19870, 20565, 13661, 14854, 21121, 21594, 19524, 25547, 16025, 18984, 21267, 18064, 41195, 18459, 18293, 17943, 18012, 14130, 13114, 15287, 14710, 12512, 16848, 20945, 13253, 18206, 12174, 12596, 14884, 12371, 12156, 14470, 12590, 16841, 14287, 11106, 14232, 14870];

  const barColors = labels.map(label => {
    const year = parseInt(label.split('-')[1]);
    const month = label.split('-')[0];
    return year < 2021 || (year === 2021 && month !== 'Dec') 
      ? 'rgba(204, 153, 255, 0.7)' 
      : 'rgba(240, 128, 128, 0.7)';
  });

  new Chart(neuronTypeCtx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Line Dataset',
        data: data,
        borderColor: 'black',
        fill: false,
        pointRadius: 6,
        pointBackgroundColor: 'white',
        type: 'line'
      }, {
        label: 'Bar Dataset',
        data: data,
        backgroundColor: barColors,
        type: 'bar'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: true,
          ticks: {
            autoSkip: false,
            callback: function(value, index, ticks) {
              const label = this.getLabelForValue(value);
              const parts = label.split('-');
              return [parts[0], parts[1]];
            },
            fontSize: 4,
            maxRotation: 0,
            minRotation: 0
          }
        },
        y: {
          display: true,
          beginAtZero: true
        }
      }
    }
  });

  // Other charts initialization remains the same...
});