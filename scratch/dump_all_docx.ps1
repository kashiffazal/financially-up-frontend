Add-Type -AssemblyName System.IO.Compression.FileSystem

$outputDir = "scratch/docx_txt"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir
}

$files = Get-ChildItem "agent-data/Individual-Engagement-form/*.docx"

foreach ($file in $files) {
    $outPath = Join-Path $outputDir ($file.BaseName + ".txt")
    $zip = [System.IO.Compression.ZipFile]::OpenRead($file.FullName)
    $entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
    if ($entry) {
        $stream = $entry.Open()
        $reader = New-Object System.IO.StreamReader($stream)
        $xml = [xml]$reader.ReadToEnd()
        $reader.Close()
        $stream.Close()

        $ns = New-Object Xml.XmlNamespaceManager($xml.NameTable)
        $ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
        $nodes = $xml.SelectNodes("//w:p", $ns)
        $lines = @()
        foreach ($node in $nodes) {
            $t = ($node.SelectNodes(".//w:t", $ns) | ForEach-Object { $_.InnerText }) -join ""
            if ($t) { $lines += $t }
        }
        $lines | Out-File -FilePath $outPath -Encoding utf8
    }
    $zip.Dispose()
}
Write-Output "Extracted $($files.Count) docx files to $outputDir"
