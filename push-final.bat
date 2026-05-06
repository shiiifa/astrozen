@echo off
setlocal enabledelayedexpansion

cd /d "C:\Users\hp\astrozen.worktrees\copilot-adding-project-card-deepfake-audio"

echo Copying deepfake image...
copy /Y "c:\Users\hp\astrozen\dist\deepfake.jpeg" "public\deepfake.png" 
if errorlevel 1 (
    echo Failed to copy image
    exit /b 1
)

echo.
echo Checking git status...
git status

echo.
echo Staging all changes...
git add -A

echo.
echo Committing changes...
git commit -m "feat: Add Deepfake Audio Detection project card - Added deepfake detection project to portfolio - Includes comprehensive project page with technical details - Model performance metrics and links to GitHub repo and technical report Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo Pushing to GitHub...
git push origin copilot/adding-project-card-deepfake-audio

echo.
echo Process completed!
pause
