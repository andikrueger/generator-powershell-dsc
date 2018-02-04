#Requires -Version 5 -RunAsAdministrator
function Start-PowerShellDsc {
    $scriptDir = Join-Path $script:MyInvocation.MyCommand.Path
    $configData = Import-PowerShellDataFile (Join-Path $scriptDir "ConfigurationData.psd1")
    $outputPath = Join-Path $scriptDir "MOF"

    Write-Verbose "Generate DSC Configuration..."
    <%= ConfigurationName %> -ConfigurationData $configData -OutputPath $outputPath

    Write-Verbose "Setting up LCM to decrypt credentials..."
    Set-DscLocalConfigurationManager $outputPath -Verbose

    Write-Verbose "Starting Configuration..."
    Start-DscConfiguration $outputPath -wait -Verbose
}
