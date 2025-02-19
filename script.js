function changeColor() {
    const light = document.querySelector('.light');
    const currentColor = light.style.backgroundColor;

    if (currentColor === 'rgb(255, 204, 0)') {
        light.style.backgroundColor = '#ff5733'; // Red
    } else if (currentColor === 'rgb(255, 87, 51)') {
        light.style.backgroundColor = '#33ff57'; // Green
    } else if (currentColor === 'rgb(51, 255, 87)') {
        light.style.backgroundColor = '#3399ff'; // Blue
    } else {
        light.style.backgroundColor = '#ffcc00'; // Back to Yellow
    }
}
