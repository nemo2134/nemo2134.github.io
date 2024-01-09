document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('programmingChart').getContext('2d');
        // Create a gradient from pink to violet
        let gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(143, 90, 150, 1)'); // Start with pink
        gradient.addColorStop(1, 'pink'); // End with violet (hexadecimal color)
    const programmingChart = new Chart(ctx, {
        type: 'bar', // Change to 'bar' type
        data: {
            labels: ['Java', 'Python', 'SQL', 'C', 'MIPS Assembly'],
            datasets: [{
                label: 'Years',
                data: [7, 3, 5, 2, 3], // Replace these numbers with your actual skill levels
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