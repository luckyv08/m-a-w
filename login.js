document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.querySelector("input[type=email]").value;
  const phone = document.querySelector("input[type=tel]").value;
  const service = document.querySelector("select").value;

  try {
    const response = await fetch(
      "https://maw-backend.onrender.com/login",   // ✅ Render URL
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, phone, service })
      }
    );

    if (response.ok) {
      window.location.href = "thankyou.html";
    } else {
      const err = await response.json();
      alert(err.message || "Error saving data");
    }

  } catch (error) {
    console.error(error);
    alert("❌ Backend server not reachable");
  }
});
