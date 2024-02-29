function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};
document.addEventListener("DOMContentLoaded", function () {
  // Form submission logic
  const messageForm = document.getElementById("messageForm");
  const submittedMessages = document.getElementById("submittedMessages");

  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const gender = document.getElementById("gender").value;
    const messageText = document.getElementById("message").value;

    const messageItem = document.createElement("div");
    messageItem.classList.add("message-item");
    messageItem.innerHTML = `<p><strong>Name:</strong> ${name}</p>
                              <p><strong>Date:</strong> ${date}</p>
                              <p><strong>Gender:</strong> ${gender}</p>
                              <p><strong>Message:</strong> ${messageText}</p>`;

    submittedMessages.appendChild(messageItem);
    messageForm.reset();
  });
});
