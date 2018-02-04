@{
    AllNodes    = @(
        @{
            # The name of the node we are describing
            NodeName        = "*"

            # The path to the .cer file containing the
            # public key of the Encryption Certificate
            # used to encrypt credentials for this node
            CertificateFile = ""

            # The thumbprint of the Encryption Certificate
            # used to decrypt the credentials on target node
            Thumbprint      = ""
        }
    )
    NonNodeData = @{

    }
}
