document.addEventListener("DOMContentLoaded", () => {
    const task = document.querySelector(".task");
    new_form = new Form(task, "main", () => {
        return new_form.pin.code === new_form.pin.element.value; 
    });
});