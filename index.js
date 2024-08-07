document.addEventListener('deviceready', function() {
    console.log('Device is ready');

    document.getElementById('btnCalculator').addEventListener('touchend', function() {
        window.location.href = 'calculator.html';
    });

    document.getElementById('btnTips').addEventListener('touchend', function() {
        window.location.href = 'tips.html';
    });

    document.getElementById('btnMonthly').addEventListener('touchend', function() {
        window.location.href = 'monthly.html';
    });

    document.getElementById('btnAbout').addEventListener('touchend', function() {
        window.location.href = 'info.html';
    });
}, false);

document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const usage = parseFloat(document.getElementById('usage').value);
    const co2PerM3 = 0.18; // kg de CO₂ por m³ de agua
    const co2Emitted = usage * co2PerM3;

    document.getElementById('result').innerText = `Tu consumo es de ${usage} m³ y produces aproximadamente ${co2Emitted.toFixed(2)} kg de CO₂.`;
});

document.getElementById('monthly-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const usage = document.getElementById('monthly-usage').value;
    let message;
    if (usage < 15) {
        message = 'Muy bien, sigue así!';
    } else if (usage < 30) {
        message = 'Vas bien, pero puede mejorar';
    } else {
        message = 'Oh no! El consumo es muy alto';
    }
    document.getElementById('feedback').innerText = message;
});