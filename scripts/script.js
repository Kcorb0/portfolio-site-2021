
const options = {
    bottom: '64px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#000000',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: 'Lights', // default: ''
    autoMatchOsTheme: false // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();