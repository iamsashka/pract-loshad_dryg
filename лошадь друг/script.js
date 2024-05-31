document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cloniryu1").addEventListener("click", () => cloneElement("horse-1"));
    document.getElementById("cloniryu2").addEventListener("click", () => cloneElement("horse-2"));
    document.getElementById("cloniryu3").addEventListener("click", () => cloneElement("horse-3"));
    
});

function cloneElement(elementId) {
    const element = document.getElementById(elementId);
    const clone = element.cloneNode(true);
    
    if (elementId === "horse-1") {
        document.querySelector(".perv").appendChild(clone);
    } else if (elementId === "horse-2") {
        document.querySelector(".vtor").appendChild(clone);
    } else if (elementId === "horse-3") {
        document.querySelector(".tret").appendChild(clone);
    }
}
function removeElement(elementId) {
    const element = document.getElementById(elementId);
    element.remove();
}
document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.querySelector(".dobavit");

    var toggle = true;

    addButton.addEventListener("click", function() {
        var originalElement;
        // Проверяем флаг, чтобы определить, какой элемент клонировать
        if (toggle) {
            originalElement = document.querySelector(".horse-4");
        } else {
            originalElement = document.querySelector(".horse-5");
        }

        // Проверяем, есть ли хотя бы один элемент для клонирования
        if (originalElement) {
            var clonedElement = originalElement.cloneNode(true);
            clonedElement.style.display = "block";
            originalElement.parentNode.insertBefore(clonedElement, originalElement.nextSibling);
        } else {
            // Если нет ни одного элемента, создаем новый элемент
            var newElement = document.createElement("div");
            newElement.className = toggle ? "horse-4" : "horse-5";
            newElement.style.display = "block";
            document.body.appendChild(newElement);
        }

        // Переключаем флаг
        toggle = !toggle;

        // Проверяем, нужно ли активировать кнопки "Добавить" и "Убрать"
        toggleButtons();
    });

    function toggleButtons() {
        var kar1 = document.querySelectorAll(".horse-4");
        var kar2 = document.querySelectorAll(".horse-5");
        var addButton = document.querySelector(".dobavit");
        var removeButton = document.querySelector(".ydalitt");

        // Кнопка "Добавить" всегда активна
        addButton.disabled = false;

        // Кнопка "Убрать" неактивна, если осталось два или менее элементов
        removeButton.disabled = (kar1.length + kar2.length) <= 2;
    }

    toggleButtons(); // Проверяем статус кнопок при загрузке страницы
});

document.addEventListener("DOMContentLoaded", function() {
    var removeButton = document.querySelector(".ydalitt");
    var isKarNext = true;

    removeButton.addEventListener("click", function() {
        if (isKarNext) {
            var kar = document.querySelector(".horse-4");
            if (kar) {
                kar.parentNode.removeChild(kar);
            }
        } else {
            var kar1 = document.querySelector(".horse-5");
            if (kar1) {
                kar1.parentNode.removeChild(kar1);
            }
        }

        // Переключаем флаг для следующего удаления
        isKarNext = !isKarNext;

        // Проверяем, нужно ли активировать кнопки "Добавить" и "Убрать"
        toggleButtons();
    });

    function toggleButtons() {
        var kar1 = document.querySelectorAll(".horse-4");
        var kar2 = document.querySelectorAll(".horse-5");
        var addButton = document.querySelector(".dobavit");
        var removeButton = document.querySelector(".ydalitt");

        // Кнопка "Добавить" всегда активна
        addButton.disabled = false;

        // Кнопка "Убрать" неактивна, если осталось два или менее элементов
        removeButton.disabled = (kar1.length + kar2.length) <= 2;
    }

    toggleButtons(); // Проверяем статус кнопок при загрузке страницы
});

 