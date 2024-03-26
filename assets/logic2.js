window.onload = function () {

    var data1 = [82, 59, 112, 79, 45, 98, 82, 59, 112, 79, 45, 98]
    
    const ctx = document.getElementById('chart');

    var data2 = [(82-20), 59-20, 112-20, 79-20, 45-20, 98-20, 82-20, 59-20, 112-20, 79-20, 45-20, 98-20]

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Wesley',
                data: data1,
                borderWidth: 2,
                order: 1
            },
            {
                label: 'Média 1900',
                data: data2,
                type: 'line',
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Atingido Mensal (em %)'
                },
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            },
            aspectRatio: 0,
        },
    });


    const ctx2 = document.getElementById('chart2');
    var data3 = [82, 59, 112, 79, 45, 98];
    var data4 = [82-10, 59+2, 112-13, 79+50, 45-20, 98+10];

    new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
        label: 'Wesley',
        data: data3,
        borderWidth: 2,
        order: 1
        },
        {
          label: 'Média 1900',
          data: data4,
          type: 'line',
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Atingido Mensal (em %)'
            }
        },
        scales: {
        y: {
            beginAtZero: false
        }
        },
        aspectRatio: 0,
    }
    });
}