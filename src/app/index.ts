"use strict";

import * as chalk from "chalk";
import * as Generator from "yeoman-generator";


module.exports = class App extends Generator {
    constructor(args, options) {
        super(args, options);
        this.appname = 'PowerShell DSC Template Generator';
        this.log(
            chalk.default.blue('  _____                       _____ _          _ _   _____   _____  _____  \n') +
            chalk.default.blue(' |  __ \\                     / ____| |        | | | |  __ \\ / ____|/ ____| \n') +
            chalk.default.blue(' | |__) |____      _____ _ _| (___ | |__   ___| | | | |  | | (___ | |      \n') +
            chalk.default.blue(' |  ___/ _ \\ \\ /\\ / / _ \\ \'__\\___ \\| \'_ \\ / _ \\ | | | |  | |\\___ \| |    \n') +
            chalk.default.blue(' | |  | (_) \\ V  V /  __/ |  ____) | | | |  __/ | | | |__| |____) | |____  \n') +
            chalk.default.blue(' |_|   \\___/ \\_/\\_/ \\___|_| |_____/|_| |_|\\___|_|_| |_____/|_____/ \\_____| \n') +
            chalk.default.blue(' Welcome to the PowerShell DSC project generator!')
        );
    };

    public async prompting() {
        const askForConfigurationName: Generator.Questions = [{
            message: 'Whats the name of your configuration?',
            name: 'ConfigurationName',
            store: true,
            type: 'input'
        }];
        const answerForConfigurationName = await this.prompt(askForConfigurationName);
    };

    public writing() {
        this.fs.copy(
            this.templatePath('.vscode/settings.json'),
            this.destinationPath('.vscode/settings.json')
        );

        this.fs.copy(
            this.templatePath('MOF'),
            this.destinationPath('MOF')
        );

        this.fs.copyTpl(
            this.templatePath('Configuration.ps1'),
            this.destinationPath('Configuration.ps1'),
            {
                ConfigurationName: this.config.get('ConfigurationName')
            }
        );

        this.fs.copy(
            this.templatePath('ConfigurationData.psd1'),
            this.destinationPath('ConfigurationData.psd1')
        );

        this.fs.copy(
            this.templatePath('Install-ConfigPrerequisites.psm1'),
            this.destinationPath('Install-ConfigPrerequisites.psm1')
        );

        this.fs.copyTpl(
            this.templatePath('Start-Configuration.psm1'),
            this.destinationPath('Start-Configuration.psm1'),
            {
                ConfigurationName: this.config.get('ConfigurationName')
            }
        );
    }
}
