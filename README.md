# deGo

![deGo Logo](images/dego128.png)

**deGo** is a Chrome browser extension that helps beginners research and learn independently by hiding AI summaries from Google search results.

## 🎯 Purpose

In an age where AI-generated summaries are increasingly prevalent in search results, deGo empowers learners to:
- Develop critical research skills by exploring original sources
- Build independent learning habits
- Avoid over-reliance on AI-generated content
- Engage more deeply with information through active discovery

## ✨ Features

- **Toggle Control**: Easily enable or disable AI summary hiding with a simple switch
- **Automatic Detection**: Intelligently identifies and removes Google AI Overview sections
- **Persistent Settings**: Your preferences are saved across browser sessions
- **Lightweight**: Minimal performance impact on your browsing experience
- **Privacy-Focused**: No data collection or external tracking

## 🚀 Installation

### From Chrome Web Store
1. Visit the [deGo Chrome Web Store page](https://chromewebstore.google.com/detail/dego/dbkkfkjnlblblpjabdmfihdcelpajepf)
2. Click "Add to Chrome"
3. Confirm the installation

### Manual Installation (Development)
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd dego
   ```
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right corner)
4. Click "Load unpacked"
5. Select the project directory

## 📖 Usage

1. **Install the extension** following the installation instructions above
2. **Click the deGo icon** in your Chrome toolbar to open the popup
3. **Toggle the switch** to enable or disable AI summary hiding
4. **Search on Google** as you normally would - AI Overviews will be automatically hidden when enabled

## 🛠️ Technical Details

### Project Structure
```
dego/
├── manifest.json           # Extension configuration
├── images/                 # Extension icons and logos
├── popup/                  # Extension popup UI
│   ├── index.html         # Popup interface
│   ├── index.css          # Popup styling
│   └── popup.js           # Popup logic
└── scripts/
    └── content.js         # Content script for hiding AI summaries
```

### How It Works

deGo uses a content script that:
1. Monitors Google search result pages for AI Overview sections
2. Detects AI content based on positioning, size, and text patterns
3. Removes matching elements from the page when the extension is enabled
4. Uses a MutationObserver to handle dynamically loaded content

### Permissions

- `storage`: To save your enable/disable preferences

### Browser Compatibility

- Chrome (Manifest V3)
- Other Chromium-based browsers (Edge, Brave, etc.)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💖 Support

If you find deGo helpful, consider:
- ⭐ Rating it on the [Chrome Web Store](https://chromewebstore.google.com/detail/dego/dbkkfkjnlblblpjabdmfihdcelpajepf/reviews)
- 💝 Supporting development through the extension's "Support" link

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔮 Version History

- **1.0.1** - Current version
- Improved AI detection algorithm
- Enhanced performance and stability

## 📧 Contact & Feedback

Found a bug or have a suggestion? Please open an issue in this repository.

---

**Made with ❤️ to promote independent learning**
