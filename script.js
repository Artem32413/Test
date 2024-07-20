//Третье задание
(function() {
    const oldOnload = window.onload;  // Сохраняем старый onload

    window.onload = function(event) {
        if (typeof oldOnload === 'function') {
            oldOnload(event); 
        }
        console.log("DOM полностью загружен и готов к использованию!");
    };

    // Добавляем слушатель на событие DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOMContentLoaded сработал!");
    });
})();
