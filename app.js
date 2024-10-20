// cursor behavior
document.addEventListener('mousemove', function (e) {
    let cursor = document.querySelector('.custom-cursor');
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});