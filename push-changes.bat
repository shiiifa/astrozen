@echo off
cd /d "C:\Users\hp\astrozen.worktrees\copilot-adding-project-card-deepfake-audio"

REM Copy the deepfake image
copy "c:\Users\hp\astrozen\dist\deepfake.jpeg" "public\deepfake.png" >nul 2>&1

REM Stage all changes
git add -A

REM Commit with the co-authored-by trailer
git commit -m "feat: Add Deepfake Audio Detection project card

- Added project to portfolio config
- Created comprehensive project page with technical details
- Includes model performance metrics and GitHub/report links

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

REM Push to GitHub
git push origin copilot/adding-project-card-deepfake-audio

echo Push completed!
pause
