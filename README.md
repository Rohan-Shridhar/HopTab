# HopTab 🚀 
**`v2.0.0`**

**Jump to your favorite websites and pages instantly from your browser.**

A lightweight Chrome extension that lets you save, organize, and quick-access your most-used websites with beautiful favicons—all just one click away.

## ✨ Features

- **One-Click Access** – Jump to your saved websites instantly from the extension popup
- **Smart Favicon Detection** – Automatically fetches favicons using:
  - Skill icons from [skillicons.dev](https://skillicons.dev) for popular tech stacks
  - Google's favicon service for other websites
- **Easy Management** – Add and remove shortcuts with an intuitive UI
- **Persistent Storage** – Your bookmarks are saved locally using Chrome's storage API
- **Bulk Delete** – Remove multiple shortcuts at once with checkboxes
- **Beautiful UI** – Gradient blue design with a clean grid layout

## 🛠️ Installation

### From Source

1. Clone or download this repository
   ```bash
   git clone https://github.com/Rohan-Shridhar/HopTab.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable **Developer mode** (toggle in top-right corner)

4. Click **Load unpacked** and select the HopTab folder

5. The extension is now ready to use! Click the HopTab icon in your toolbar


## 📖 How to Use

### Adding a Shortcut

1. Click the HopTab extension icon
2. Click the **+ ADD** button
3. Enter the URL and a title for your shortcut
4. Click **GO** to save
5. Your new shortcut appears in the grid

### Accessing Shortcuts

- Click any icon/tile in the HopTab popup to open that website in a new tab

### Deleting Shortcuts

1. Click the **- DEL** button
2. Check the boxes next to shortcuts you want to remove
3. Use **Select All** to remove all at once
4. Click **GO** to confirm deletion

## 📁 Project Structure

```
HopTab/
├── manifest.json          # Chrome extension configuration
├── popup.html             # Extension popup UI
├── popup.css              # Styling for the popup
├── popup.js               # Extension logic & event handlers
├── icons/                 # Extension icons (16px, 32px, 48px, 128px)
├── README.md              # This file
└── LICENSE                # Apache 2.0 License
```

## 🔧 Technical Details

- **Manifest Version:** 3 (Latest Chrome extension standard)
- **Permissions:** 
  - `storage` – Save bookmarks locally
  - `tabs` – Open URLs in new tabs
- **Storage:** Chrome Local Storage (no server needed)
- **Dependencies:** None – vanilla JavaScript only

## 🎨 UI Components

- **Gradient Background** – Beautiful blue gradient (darkblue → skyblue)
- **Grid Layout** – 4-column responsive grid for shortcuts
- **Icon Size** – 42×42px icons for clarity
- **Font Awesome Icons** – For add/delete/close buttons

## 🚀 Future Enhancements

- [ ] Categories/Tags for organizing shortcuts
- [ ] Sync across devices
- [ ] Custom colors & themes
- [ ] Keyboard shortcuts
- [ ] Import/export bookmarks
- [ ] Dark mode toggle
- [ ] Search/filter functionality

## 📝 License

Licensed under the [Apache License 2.0](LICENSE) – feel free to use, modify, and distribute.

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a PR!

## 💡 Tech Stack

- **HTML5** – Markup
- **CSS3** – Styling with gradients & flexbox
- **JavaScript (Vanilla)** – Event handling & DOM manipulation
- **Chrome API** – Storage & Tabs management
- **Font Awesome 6.7.2** – Icons

---

Made with ❤️ by [Rohan-Shridhar](https://github.com/Rohan-Shridhar)

Licensed under Apache 2.0
