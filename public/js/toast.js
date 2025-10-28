export function showToast(message, type = "success") {
  const root =
    document.getElementById("toast-root") ||
    (() => {
      const d = document.createElement("div");
      d.id = "toast-root";
      d.className = "fixed top-4 right-4 z-50 space-y-2";
      document.body.appendChild(d);
      return d;
    })();

  const el = document.createElement("div");
  el.className =
    "flex items-center gap-2 px-4 py-2 rounded shadow text-sm transition-all duration-300 " +
    (type === "error"
      ? "bg-red-400 text-white"
      : "bg-white text-gray-800 border border-gray-200");

  // Add icon for success
  if (type === "success") {
    const img = document.createElement("img");
    img.src = "./public/assets/success.png";
    img.alt = "Success";
    img.className = "w-5 h-5";
    el.appendChild(img);
  }

  const text = document.createElement("span");
  text.textContent = message;
  el.appendChild(text);

  root.appendChild(el);

  setTimeout(() => {
    el.classList.add("opacity-0", "translate-x-2");
    setTimeout(() => el.remove(), 300);
  }, 3000);
}
