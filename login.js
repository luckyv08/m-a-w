document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.querySelector("input[type=email]").value;
  const phone = document.querySelector("input[type=tel]").value;
  const service = document.querySelector("select").value;

  try {
    const response = await fetch("https://maw-backend.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, phone, service })
    });

    const data = await response.json();
    console.log("Server response:", data);

    if (response.ok) {
      window.location.href = "thankyou.html";
    } else {
      alert(data.message || "Server error");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    alert("Backend not reachable");
  }
});
