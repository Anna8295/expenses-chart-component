const ctx = document.getElementById('myChart');

function argMax(array) {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}

const data = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
const labels = data.map((x, i) => i.toString()); 

// other data color
const color = data.map(x => 'hsl(10, 79%, 65%)');
const hoverColor = data.map(x => 'hsl(10, 79%, 65%, 0.5)')

// change max color
color[argMax(data)] = 'hsl(186, 34%, 60%)';
hoverColor[argMax(data)] = 'hsl(186, 34%, 60%, 0.5)';

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [{
      data: data,
      backgroundColor: color,
      hoverBackgroundColor: hoverColor,
      borderRadius: 8,
      borderSkipped: false,
    }]
  },
  options: {
    scales: {
      y: {
        display: false,
      },
      x:{ 
        border: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        yAlign: 'bottom',
        caretSize: 0,
        displayColors: false,
        backgroundColor: 'hsl(25, 47%, 15%)',
        bodyColor: 'hsl(33, 100%, 98%)',
        callbacks: {
          title: () => null
        }
      }
    },
  }
});

