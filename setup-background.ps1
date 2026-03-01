# Shahir Assistant Keep-Alive Setup Script
# This script sets up the project to run in the background using PM2

Write-Host "Setting up Shahir Assistant for background execution..." -ForegroundColor Cyan

# Check if PM2 is installed
if (!(Get-Command pm2 -ErrorAction SilentlyContinue)) {
    Write-Host "PM2 not found. Installing PM2 globally..." -ForegroundColor Yellow
    npm install -g pm2
}

# Install dependencies if node_modules is missing
if (!(Test-Path "node_modules")) {
    Write-Host "Installing project dependencies..." -ForegroundColor Yellow
    npm install
}

# Start the application in background
Write-Host "Starting application in background mode..." -ForegroundColor Green
pm2 start npm --name "shahir-assistant" -- run dev

# Save PM2 list to respawn on reboot (requires pm2-windows-startup if not set)
pm2 save

Write-Host "`nSuccess! Your web app is now running in the background." -ForegroundColor Green
Write-Host "You can close VS Code now. The app will stay alive at http://localhost:5173" -ForegroundColor White
Write-Host "`nUseful commands:" -ForegroundColor Cyan
Write-Host "  npm run status  - Check if the app is running"
Write-Host "  npm run stop    - Stop the background app"
Write-Host "  pm2 logs shahir-assistant - View logs"
