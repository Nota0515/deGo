const toggle = document.getElementById("toggle");

chrome.storage.sync.get(["enabled"], (data) => {
  toggle.checked = data.enabled !== false;
});

toggle.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: toggle.checked });
});

document.getElementById("reviewBtn").addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://chromewebstore.google.com/detail/dego/dbkkfkjnlblblpjabdmfihdcelpajepf/reviews"
  });
});

