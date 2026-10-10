Add-Type -AssemblyName System.IO.Compression.FileSystem
$docPath = "d:\xampp\htdocs\myProjects\nextjs\financially-up\financially-up-frontend\agent-data\new-content\10th Pillar Property Tax.docx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($docPath)
$entry = $zip.GetEntry("word/document.xml")
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlText = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

[xml]$xml = $xmlText
$ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")

$paras = $xml.SelectNodes("//w:p", $ns)
$sb = New-Object System.Text.StringBuilder
foreach ($p in $paras) {
    $tNodes = $p.SelectNodes(".//w:t", $ns)
    $line = ""
    foreach ($t in $tNodes) {
        $line += $t.InnerText
    }
    if ($line.Trim().Length -gt 0) {
        [void]$sb.AppendLine($line)
    }
}

$sb.ToString() | Out-File -FilePath "d:\xampp\htdocs\myProjects\nextjs\financially-up\financially-up-frontend\agent-data\new-content\property_tax_extracted.txt" -Encoding utf8
Write-Host "Extracted successfully to property_tax_extracted.txt"
