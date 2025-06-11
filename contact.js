document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "") {
    alert("Name and Email are required!");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Enter a valid email address");
    return;
  }

  // Redirect to success page
  window.location.href = "submitted.html";
});
