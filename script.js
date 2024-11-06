// Function to validate email format
function validateForm() {
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Show popup on successful form submission
    document.getElementById("popup").style.display = "block";
    return false;  // Prevent form submission (you can handle form submission to a server here)
  }
  
  // Close popup function
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  // Image upload and display function
  function removeImage() {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "";
  }
  
  document.getElementById("imageUpload").addEventListener("change", function(event) {
    const imageContainer = document.getElementById("imageContainer");
    const file = event.target.files[0];
    
    if (file) {
      const imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(file);
      imgElement.alt = "Bakery Image";
      imgElement.style.maxWidth = "100%";
      imageContainer.innerHTML = "";  // Clear previous image
      imageContainer.appendChild(imgElement);
    }
  });
  
  // To-Do list functionality
  function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");
  
    if (todoInput.value.trim() !== "") {
      const newTodo = document.createElement("li");
      newTodo.innerHTML = `<input type="checkbox"> ${todoInput.value}`;
      todoList.appendChild(newTodo);
      todoInput.value = "";  // Clear input field
    }
  }
  