let enabledCache = false;
let observer;

// Load toggle once
chrome.storage.sync.get(["enabled"], ({ enabled }) => {
  enabledCache = enabled !== false;
  if (enabledCache) {
    run();
  }
  
  // Set up observer only after storage loads
  observer = new MutationObserver(() => {
    if (chrome.runtime?.id == null) return;
    if (!enabledCache) return;
    run();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    enabledCache = changes.enabled.newValue !== false;
  }
});

function isAIOverview(el) {
  if (!el) return false;

  const rect = el.getBoundingClientRect();
  if (!rect) return false;

  // AI Overview is large but not full-page
  if (rect.height < 160 || rect.height > 600) return false;

  // Must be near top
  if (rect.top > 500) return false;

  const text = (el.innerText || "").toLowerCase();

  // Strong text anchors (Google rarely removes these)
  if (
    text.includes("ai overview") ||
    text.includes("generating") ||
    text.includes("searching")
  ) {
    return true;
  }

  return false;
}

function removeAI() {
  if (!enabledCache) return;

  const blocks = document.querySelectorAll("div");

  for (const el of blocks) {
    try {
      if (!isAIOverview(el)) continue;

      // Remove only this block, not parents
      el.remove();
    } catch {}
  }
}

function run() {
  removeAI();
}
