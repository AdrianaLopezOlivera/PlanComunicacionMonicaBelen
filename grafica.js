// Obtener el canvas
const canvas = document.getElementById('graficaPastel');
canvas.style.width = '75%'; // Hace que el canvas ocupe el ancho disponible
canvas.style.height = 'auto'; // Mantiene proporción al ajustar ancho

// Configuración de Chart.js
const ctx = canvas.getContext('2d');
const data = {
    labels: ['Redes sociales', 'Radio', 'Impresos', 'Bardas y otros medios visuales'],
    datasets: [{
        data: [60, 25, 10, 5],
        backgroundColor: ['#4CAF50', '#FF9800', '#03A9F4', '#9C27B0'],
        hoverOffset: 4
    }]
};

const options = {
    responsive: true, // Ajusta automáticamente al tamaño del contenedor
    maintainAspectRatio: true, // Mantiene la proporción de aspecto
    plugins: {
        legend: {
            display: true,
            position: 'bottom'
        }
    }
};

// Crear la gráfica
new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});
