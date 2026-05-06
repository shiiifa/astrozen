@echo off
REM Complete Deepfake Project Card Setup
REM This script will copy the image, commit changes, and push to GitHub

cd /d "C:\Users\hp\astrozen.worktrees\copilot-adding-project-card-deepfake-audio"

echo ========================================
echo Deepfake Audio Detection - Project Card Setup
echo ========================================
echo.

REM Step 1: Copy the image
echo [1/4] Copying deepfake image to public folder...
if not exist "public" mkdir public
copy /Y "c:\Users\hp\astrozen\dist\deepfake.jpeg" "public\deepfake.jpeg"
if errorlevel 1 (
    echo ERROR: Failed to copy image file
    echo Trying alternative location...
    if exist "c:\Users\hp\astrozen\dist\deepfake.jpeg" (
        echo Source file exists, checking permissions...
    ) else (
        echo Source file not found at c:\Users\hp\astrozen\dist\deepfake.jpeg
        echo Please verify the file location and try again.
        pause
        exit /b 1
    )
)
echo [✓] Image copied successfully

REM Step 2: Check git status
echo.
echo [2/4] Checking git status...
git status --short
echo.

REM Step 3: Stage changes
echo [3/4] Staging changes...
git add -A
git add "public/deepfake.jpeg"
echo [✓] All changes staged

REM Step 4: Commit changes
echo.
echo [4/4] Committing changes...
git commit -m "feat: Add Deepfake Audio Detection project card - Added deepfake detection project to portfolio - Includes comprehensive project page with technical details - Model performance metrics and links to GitHub repo and technical report Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

if errorlevel 1 (
    echo ERROR: Git commit failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo Pushing to GitHub...
echo ========================================
echo.

git push origin copilot/adding-project-card-deepfake-audio

if errorlevel 1 (
    echo ERROR: Git push failed
    echo Verify your GitHub credentials and try again
    pause
    exit /b 1
)

echo.
echo ========================================
echo SUCCESS! Project card setup complete
echo ========================================
echo.
echo The following files were updated:
echo - src/config/index.ts (added project entry)
echo - src/pages/projects/deepfake-audio-detection.astro (project page)
echo - public/deepfake.jpeg (project image)
echo.
echo Changes pushed to branch: copilot/adding-project-card-deepfake-audio
echo.
echo Next steps:
echo 1. Verify changes on GitHub
echo 2. Create a pull request to merge into main
echo 3. Deploy to trigger website rebuild
echo.
pause
