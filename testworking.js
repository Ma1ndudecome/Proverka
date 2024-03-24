window.addEventListener('mousemove', function(e) {
    const y = e.clientY / window.innerHeight;
    const translateY = -y * 10 + 'px';
    document.body.style.backgroundPosition = '0 ' + translateY;
});
