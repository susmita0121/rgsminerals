# Run this script AFTER installing Git from https://git-scm.com/download/win
# Open PowerShell, navigate to your project folder, and run: .\push-to-github.ps1

$env:PATH += ";C:\Program Files\Git\bin;C:\Program Files\Git\cmd"

cd "c:\Users\Sush\Downloads\Corporate Website Design (1)"

# Initialize git if not already done
if (-not (Test-Path ".git")) {
    git init
    git remote add origin https://github.com/susmita0121/rgsminerals.git
} else {
    # Make sure remote is set correctly
    git remote set-url origin https://github.com/susmita0121/rgsminerals.git
}

# Stage all files
git add .

# Commit
git commit -m "Deploy: Add full source files including src/ folder"

# Push to GitHub (force to overwrite incomplete previous push)
git push -u origin main --force

Write-Host ""
Write-Host "✅ Done! Your code is now on GitHub." -ForegroundColor Green
Write-Host "Vercel will automatically redeploy from GitHub in ~1 minute." -ForegroundColor Cyan
