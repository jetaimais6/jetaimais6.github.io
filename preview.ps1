<#
    preview.ps1 —— 本地预览个人主页
    用法：powershell -NoProfile -ExecutionPolicy Bypass -File D:\hykmmq\site\preview.ps1
    按 Ctrl+C 停止。
#>

param([int]$Port = 8000)

$site = Join-Path $PSScriptRoot '.'
$env:Path = [Environment]::GetEnvironmentVariable('Path','Machine') + ';' +
            [Environment]::GetEnvironmentVariable('Path','User')

Write-Host ""
Write-Host "  个人主页本地预览" -ForegroundColor Cyan
Write-Host "  目录: $((Resolve-Path $site).Path)"
Write-Host "  地址: http://localhost:$Port/" -ForegroundColor Green
Write-Host "  停止: Ctrl+C"
Write-Host ""

Start-Process "http://localhost:$Port/"
python -m http.server $Port --directory $site --bind 127.0.0.1
