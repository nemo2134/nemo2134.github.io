document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('miscChart').getContext('2d');

    // Create a gradient from pink to violet
    let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(143, 90, 150, 1)'); // Start with pink
    gradient.addColorStop(1, 'pink'); // End with violet (hexadecimal color)

    const miscChart = new Chart(ctx, {
        type: 'bar', // Bar chart type
        data: {
            labels: ['AWS', 'Snowflake', 'Spring', 'Git', 'Jira'],
            datasets: [{
                label: 'Years',
                data: [3, 1, 5, 5, 3], // Your data
                backgroundColor: gradient, // Use the gradient for bar color
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'x', // Horizontal bar chart
            scales: {
                y: { // Configure y-axis
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1 // Only integer values
                    }
                }
            },
            plugins: {
                legend: {
                    display: true // Display legend
                }
            }
        }
    });
});
