document.addEventListener('DOMContentLoaded', () => {
  // Create the neuron chart with the new data
  createNeuronChart('barChart', neuronChartData);
  
  // Create other charts
  createLineChart('lineChart', chartData.lineData);
  createPieChart('pieChart', chartData.pieData);
});