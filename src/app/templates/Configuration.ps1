Configuration <%= ConfigurationName %> {

    param(
        # Parameter help description
        [Parameter(AttributeValues)]
        [ParameterType]
        $ParameterName
    )

    Node $AllNodes.NodeName {

        LocalConfigurationManager
        {
            CertificateId = $Node.Thumbprint
        }

    }
}
