document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
        // Create a gradient from pink to violet
        let gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(143, 90, 150, 1)'); // Start with pink
        gradient.addColorStop(1, 'pink'); // End with violet (hexadecimal color)
    const skillsChart = new Chart(ctx, {
        type: 'bar', // Change to 'bar' type
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React'],
            datasets: [{
                label: 'Years',
                data: [8, 7, 5, 4, 4, 5], // Replace these numbers with your actual skill levels
                backgroundColor: gradient, // Light purple color
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'x', // Add this to make the bar chart horizontal
            scales: {
                x: { // Update for Chart.js 3.x
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true // Set to true to display the legend
                }
            }
        }
    });
});