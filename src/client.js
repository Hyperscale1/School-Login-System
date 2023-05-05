const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const config = require('../config.json')

console.log('Electron.js App has started successfully...')

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '/events/preload.js'),
            nodeIntegrationInWorker: true
        },
    })
    mainWindow.loadURL(config.domain)
    // mainWindow.loadFile('./src/pages/index.html')
}

const dockMenu = Menu.buildFromTemplate([
    {
        label: 'New Window',
        click() {
            console.log('New Window')
        },
    },
    {
        label: 'New Window with Settings',
        submenu: [{ label: 'Basic' }, { label: 'Pro' }],
    },
    { label: 'New Command...' },
])

app.whenReady()
    .then(() => {
        if (process.platform === 'darwin') {
            app.dock.setMenu(dockMenu)
        }
    })
    .then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
