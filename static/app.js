(() => {
  const city = document.getElementById("city");
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");

  if (!city || !btn || !output) {
    console.error("Missing elements:", { city, btn, output });
    return;
  }

  btn.addEventListener("click", async () => {
    const key = city.value;
    output.textContent = "Loading...";

    try {
      const url = `${window.BACKEND_URL}/weather/${encodeURIComponent(key)}`;
      const res = await fetch(url);
      const data = await res.json();
      output.textContent = JSON.stringify(data, null, 2);
    } catch (e) {
      console.error(e);
      output.textContent = "Failed to reach backend. Check BACKEND_URL and that backend is running.";
    }
  });

  console.log("Frontend loaded. BACKEND_URL =", window.BACKEND_URL);
})();
