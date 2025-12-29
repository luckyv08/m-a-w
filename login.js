document.querySelector("form").addEventListener("submit", async function(e){
  e.preventDefault();

  const email = document.querySelector("input[type=email]").value;
  const phone = document.querySelector("input[type=tel]").value;
  const service = document.querySelector("select").value;

  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, phone, service })
  });

  if (response.ok) {
    window.location.href = "thankyou.html";
  } else {
    alert("Error saving data");
  }
});
