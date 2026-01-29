const ctx = document.getElementById('growthChart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 0, 220);
gradient.addColorStop(0, 'rgba(37, 99, 235, 0.35)');
gradient.addColorStop(1, 'rgba(37, 99, 235, 0.05)');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [2021, 2022, 2023, 2024, 2025, 2026],
    datasets: [
      {
        data: [320, 480, 610, 860, 1200, 1650],
        fill: true,
        backgroundColor: gradient,
        borderColor: '#2563EB',
        borderWidth: 2,
        tension: 0.45,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      y: { display: false },
    },
  },
});
