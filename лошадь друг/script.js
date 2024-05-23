document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cloniryu1").addEventListener("click", () => cloneElement("horse-1"));
    document.getElementById("cloniryu2").addEventListener("click", () => cloneElement("horse-2"));
    document.getElementById("cloniryu3").addEventListener("click", () => cloneElement("horse-3"));
});

function cloneElement(elementId) {
    const element = document.getElementById(elementId);
    const clone = element.cloneNode(true);
    element.parentNode.appendChild(clone);
}