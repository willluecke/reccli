# 🎬 RecCli

**The dead-simple GUI terminal text recorder with a floating button**

Finally, a record button for your terminal. One click to start, one click to stop. That's it.

## Why RecCli?

Every developer has lost that perfect debugging session. The one where everything magically worked. The command you can't remember. The output that vanished.

**RecCli fixes that.**

- 🔴 **One-click recording** - Floating button that appears on every terminal
- 🪟 **Per-terminal tracking** - Each Terminal window gets its own popup
- 🤖 **Auto-launch** - Background watcher automatically detects new terminals
- 💾 **Smart minimize behavior** - Popup hides during recording, preserves state
- 🚀 **Zero config** - Works immediately after install
- 🆓 **100% Free & Open Source** - MIT Licensed

## Quick Start

```bash
# Clone and install
git clone https://github.com/willluecke/reccli.git
cd reccli
./install.sh

# The watcher starts automatically!
# Open any Terminal window and you'll see the RecCli button
```

## Features

### The Floating Button
- **Circle (●)** = Ready to record
- **Square (■)** = Recording in progress
- **"Rec"** label appears while recording
- **"Stopped"** shows briefly after stopping
- Right-click for menu: Settings, Stats, Recordings folder, Quit

### Auto-Launch Watcher
- Background service monitors for new Terminal windows
- Automatically launches popup for each terminal
- Starts on system login via LaunchAgent
- One popup per terminal window

### Smart Behavior
- **During recording + minimize**: Popup hides, recording continues
- **During recording + restore**: Popup reappears with correct state
- **Not recording + minimize/close**: Popup quits cleanly
- **Claude/Codex detection**: Warns if you try to record with tools already running

### Recording
- Captures everything: input, output, colors, timing
- Powered by asciinema (high-quality terminal recording)
- Sessions saved to `~/.reccli/recordings/`
- Format: `session_YYYYMMDD_HHMMSS.cast`
- **Important**: To start a recorded terminal session, click record as soon as the terminal opens. Recordings can't be started mid-session.

## Installation

### Automatic (Recommended)
```bash
git clone https://github.com/willluecke/reccli.git
cd reccli
./install.sh
```

The installer will:
1. Set up the LaunchAgent for background watching
2. Start the watcher immediately
3. Auto-launch popups on new Terminal windows

### Manual
```bash
# Install asciinema
pip3 install asciinema

# Make scripts executable
chmod +x reccli.py install.sh uninstall.sh

# Run watcher manually
python3 reccli.py watch
```

## Requirements

- **macOS** (Terminal.app support)
- **Python 3.6+**
- **tkinter** (usually included with Python on macOS)
- **asciinema** (installed automatically by install.sh)

## CLI Commands

**This is a GUI tool (on-screen buttons), so if you're here, either you or I messed up big time. Nevertheless,**

```bash
# Start background watcher (auto-starts on login after install.sh)
python3 reccli.py watch

# Launch popup for current terminals only (no background watching)
python3 reccli.py launch

# Kill all reccli popups
python3 reccli.py killall

# View recording statistics
python3 reccli.py status

# Manual GUI mode (single popup for current terminal)
python3 reccli.py gui
```

## Uninstall

```bash
./uninstall.sh
```

This will:
- Stop and remove the LaunchAgent
- Kill all running instances
- Clean up temp files
- Keep your recordings (delete manually if desired: `rm -rf ~/.reccli`)

## Use Cases

### Debugging
Record your entire debugging session. When you finally fix that bug, you'll have the exact steps captured.

### Teaching
Share terminal sessions with juniors. They can replay exactly what you did, at their own pace.

### Documentation
Better than screenshots. Better than screen recordings. Just the terminal, perfectly captured.

### AI Coding Sessions
Recording Claude Code, Cursor, or Copilot sessions? RecCli captures everything without losing context.

### Pair Programming
Share your session recordings with remote teammates. Perfect for async code reviews.

## FAQ

**Q: Why not just use the script command?**
A: Same reason you don't use Print Screen for screenshots. Reducing friction changes behavior. You'll never remember to type 'script' before that debugging session. You will click a red button that's always visible.

**Q: What about asciinema?**
A: asciinema is great! We actually use it under the hood. But it's still command-line based. RecCli is about the UI/UX layer - the floating button that makes you actually USE recording instead of forgetting about it.

**Q: Where are recordings stored?**
A: Locally on your machine in `~/.reccli/recordings/`. Your data, your control.

**Q: Can I use this with tmux/screen?**
A: Yes! RecCli works with any terminal setup.

**Q: Does it work on multiple monitors?**
A: Yes! The popup follows the terminal window position.

**Q: What if I have multiple Terminal windows open?**
A: Each window gets its own RecCli popup, tracking its own recording state independently.

## Contributing

Contributions are welcome! Feel free to:
- Report bugs via [GitHub Issues](https://github.com/willluecke/reccli/issues)
- Suggest features
- Submit pull requests
- Improve documentation

## Roadmap

### Phase 1 (Current)
- ✅ Floating GUI button
- ✅ Per-terminal recording
- ✅ Auto-launch watcher
- ✅ Background LaunchAgent

### Phase 2 (Coming Soon)
- [ ] Intelligent context management - no more "compact & pray"
- [ ] Export dialog with multiple formats (txt, md, json, html, proprietary R&D format)
- [ ] Settings dialog (default format, save location)
- [ ] Playback in browser

## Tech Stack

- **Frontend**: Python + Tkinter (cross-platform GUI)
- **Recording**: asciinema
- **Background Service**: macOS LaunchAgent
- **Storage**: Local filesystem

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with love by developers, for developers.**

[GitHub](https://github.com/willluecke/reccli) | [Issues](https://github.com/willluecke/reccli/issues)

**Like this project? Give it a ⭐ on GitHub!**
