// Event listener for when the window is fully loaded
window.addEventListener('load', () => {
    // Selecting form, input, and list elements by their IDs
    const form = document.querySelector("#new-task-form"); 
    const input = document.querySelector("#new-task-input"); 
    const list_element = document.querySelector("#tasks"); 

    // Event listener for the form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const task = input.value;  // Get the task input from the user  
        
        // Check if the task input is empty
        if (!task) {
            alert("Fill out the task window.");
            return; // Display an alert and exit if the form is submitted with an empty task
        }
        
        // Create a div element for the task
        const task_element = document.createElement("div");
        task_element.classList.add("task");

        // Create a div element for the content within the task
        const task_content_element = document.createElement("div");
        task_content_element.classList.add("content");

        // Nest the content element within the task element
        task_element.appendChild(task_content_element);

        // Create an input element for displaying the task text
        const task_input_element = document.createElement("input");
        task_input_element.classList.add("text");
        task_input_element.type = "text";
        task_input_element.value = task;
        task_input_element.setAttribute("readonly", "readonly");

        // Nest the input element within the content element
        task_content_element.appendChild(task_input_element);

        // Create a div element for the task actions (Edit and Delete buttons)
        const task_actions_element = document.createElement("div");
        task_actions_element.classList.add("actions");

        // Create an Edit button
        const task_edit_element = document.createElement("button");
        task_edit_element.classList.add("edit");
        task_edit_element.innerHTML = "Edit";

        // Create a Delete button
        const task_delete_element = document.createElement("button");
        task_delete_element.classList.add("delete");
        task_delete_element.innerHTML = "Delete";

        // Nest the Edit and Delete buttons within the actions element
        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);

        // Nest the actions element within the task element
        task_element.appendChild(task_actions_element);

        // Add the task element to the list
        list_element.appendChild(task_element);

        // Clear the input field
        input.value = "";

        // Event listener for the Edit button
        task_edit_element.addEventListener("click", () => {
            // Toggle between Edit and Save functionality
            if (task_edit_element.innerText.toLowerCase() == "edit") {
                task_input_element.removeAttribute("readonly");
                task_input_element.focus();
                task_edit_element.innerText = "Save";
            } else {
                task_input_element.setAttribute("readonly", "readonly");
                task_edit_element.innerText = "Edit";
            }
        });

        // Event listener for the Delete button
        task_delete_element.addEventListener("click", () => {
            // Remove the task element from the list
            list_element.removeChild(task_element);
        });
    });
});
