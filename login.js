document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.querySelector("input[type=email]").value;
  const phone = document.querySelector("input[type=tel]").value;
  const service = document.querySelector("select").value;

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, phone, service })
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = "thankyou.html";
    } else {
      alert(data.message || "Server error");
    }
  } catch (error) {
    console.error(error);
    alert("Backend server not reachable");
  }
});
