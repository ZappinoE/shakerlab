const { app, BrowserWindow, Menu, powerSaveBlocker } = require('electron');
const path = require('path');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
function create() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({
    width: 1180, height: 860, minWidth: 360, minHeight: 500,
    backgroundColor: '#0d1015', title: 'ShakerLab', autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: { backgroundThrottling: false }
  });
  w.loadFile(path.join(__dirname, 'app', 'index.html'));
}
app.whenReady().then(() => {
  powerSaveBlocker.start('prevent-app-suspension');
  create();
});
app.on('window-all-closed', () => app.quit());
