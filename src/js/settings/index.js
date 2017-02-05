import angular from 'angular';

let settingsModule = angular.module('app.settings', []);


// Include our UI-Router config settings
import SettingsConfig from './settings.config';
settingsModule.config(SettingsConfig);

// Controllers
import SettingsCtrl from './settings.controller';
settingsModule.controller('SettingsCtrl', SettingsCtrl);

export default settingsModule;