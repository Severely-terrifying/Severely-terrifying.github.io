function createNeuronChart(canvasId, data) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  
  // Generate bar colors based on date
  const barColors = data.labels.map(label => {
    const year = parseInt(label.split('-')[1]);
    const month = label.split('-')[0];
    
    if (year < 2021 || (year === 2021 && month !== 'Dec')) {
      return 'rgba(204, 153, 255, 0.7)'; // Light Purple with 70% transparency
    } else {
      return 'rgba(240, 128, 128, 0.7)'; // Light Red with 70% transparency
    }
  });

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [{
        label: 'Line Dataset',
        data: data.lineData,
        borderColor: 'black',
        fill: false,
        pointRadius: 6,
        pointBackgroundColor: 'white',
        type: 'line'
      }, {
        label: 'Bar Dataset',
        data: data.barData,
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

  return chart;
}