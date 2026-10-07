Add-Type -AssemblyName System.IO.Compression.FileSystem
$zipPath = "financially-up-frontend\agent-data\new-content\10th Pillar Property Tax.docx"
$resolved = (Resolve-Path $zipPath).Path
$zip = [System.IO.Compression.ZipFile]::OpenRead($resolved)
$entry = $zip.GetEntry("word/document.xml")
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlText = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

$doc = [xml]$xmlText
$nsManager = New-Object System.Xml.XmlNamespaceManager($doc.NameTable)
$nsManager.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
$paragraphs = $doc.SelectNodes("//w:p", $nsManager)

$sb = New-Object System.Text.StringBuilder
foreach ($p in $paragraphs) {
    $texts = $p.SelectNodes(".//w:t", $nsManager)
    $line = ($texts | ForEach-Object { $_.InnerText }) -join ""
    if ($line.Trim().Length -gt 0) {
        [void]$sb.AppendLine($line)
    }
}
$outputFile = "financially-up-frontend\agent-data\new-content\10th_Pillar_Property_Tax_extracted.txt"
[System.IO.File]::WriteAllText($outputFile, $sb.ToString(), [System.Text.Encoding]::UTF8)
Write-Host "Extracted paragraphs:" $paragraphs.Count "Saved to $outputFile"
