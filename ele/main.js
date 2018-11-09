// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const Menu = require('electron').Menu;
var template = [
    {
        label: '文件',
        submenu: [
            {
                label: '新建',
            },
            {
                label: '打开',
                click: function () {
                    openFile()
                }
            }

        ]
    },
    {
        label: '加载网页2',
        submenu: [
            {
                label: 'github',
            },
            {
                type: 'separator'
            },
            {
                label: 'CSDN',
            }
        ]
    },
    {
        label: '我的信息',
        submenu: [
            {
                label: '我的github',
            },
            {
                label: '欢迎star ●▂●',
            }
        ]
    }
];
var menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

function openFile() {
    // 打开文件夹
    const {shell} = require('electron');
    var path1 = "F:\\";
    shell.openItem(path1);
}

function newFile() {
    // 新建文件夹
}

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600});

    // and load the index.html of the app.
    mainWindow.loadURL('http://200.200.216.172:3101/#');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
