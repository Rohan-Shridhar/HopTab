# HopTab 🚀

**Jump to your favorite websites instantly from your browser.**

A lightweight Chrome extension that lets you save, organize, and quick-access your most-used websites with beautiful favicons—all just one click away.

## ✨ Features

- **One-Click Access** – Jump to your saved websites instantly from the extension popup
- **Smart Favicon Detection** – Automatically fetches favicons using skill icons and Google's service
- **Easy Management** – Add and remove shortcuts with an intuitive UI
- **Persistent Storage** – Your bookmarks are saved locally using Chrome's storage API
- **Bulk Delete** – Remove multiple shortcuts at once with checkboxes
- **Beautiful UI** – Clean grid layout with smooth interactions

## 🛠️ Installation

### From Source

1. Clone this repository
   ```bash
   git clone https://github.com/Rohan-Shridhar/HopTab.git
   cd HopTab
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable **Developer mode** (toggle in the top-right corner)

4. Click **Load unpacked** and select the HopTab folder

5. Done! Click the HopTab icon in your toolbar to start using it

## 📖 How to Use

### Add a Shortcut
1. Click the HopTab extension icon
2. Click **+ ADD**
3. Enter the URL and title
4. Click **GO**

### Access Shortcuts
- Click any icon/tile in the popup to open that website in a new tab

### Delete Shortcuts
1. Click **- DEL**
2. Check the boxes next to shortcuts you want to remove
3. Click **GO** to confirm

## 📁 Project Structure

```
HopTab/
├── manifest.json          # Extension config
├── popup.html             # Extension popup UI
├── popup.css              # Popup styling
├── popup.js               # Extension logic
├── toast.js               # Toast notifications
├── icons/                 # Extension icons
├── index.html             # Landing page
├── style.css              # Landing page styling
├── script.js              # Landing page scripts
├── README.md              # This file
└── LICENSE                # Apache 2.0 License
```

## 🔧 Technical Details

- **Manifest Version:** 3
- **Permissions:** `storage`, `tabs`
- **Storage:** Chrome Local Storage (no server needed)
- **Dependencies:** None – vanilla JavaScript

## 💡 Tech Stack

- **HTML5, CSS3, JavaScript (Vanilla)**
- **Chrome API** – Storage & Tabs
- **Font Awesome 6.7.2** – Icons

## 🚀 What's Coming

- [ ] Categories/Tags for organizing shortcuts
- [ ] Sync across devices
- [ ] Custom themes
- [ ] Keyboard shortcuts
- [ ] Import/export bookmarks
- [ ] Search/filter functionality

## 📝 License

Licensed under the [Apache License 2.0](LICENSE).

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a PR!

## 💬 Connect

- **GitHub:** [@Rohan-Shridhar](https://github.com/Rohan-Shridhar)
- **Twitter:** [@Rohan_Shridhar](https://twitter.com/Rohan_Shridhar)
- **LinkedIn:** [rohan-mirjankar](https://www.linkedin.com/in/rohan-mirjankar)
- **DEV.to:** [rohan_mirjankar](https://dev.to/rohan_mirjankar)

---

**Made with ❤️ by Rohan** | v2.0.0