#!/usr/bin/env python3
import shutil
import subprocess
import os
import sys

os.chdir(r'C:\Users\hp\astrozen.worktrees\copilot-adding-project-card-deepfake-audio')

# Step 1: Copy the image
print("Step 1: Copying deepfake image...")
try:
    src = r'c:\Users\hp\astrozen\dist\deepfake.jpeg'
    dst = r'public\deepfake.png'
    shutil.copy2(src, dst)
    print(f"✓ Image copied to {dst}")
except Exception as e:
    print(f"✗ Error copying image: {e}")
    sys.exit(1)

# Step 2: Git add
print("\nStep 2: Staging changes...")
result = subprocess.run(['git', 'add', '-A'], capture_output=True, text=True)
if result.returncode == 0:
    print("✓ Files staged")
else:
    print(f"✗ Git add failed: {result.stderr}")
    sys.exit(1)

# Step 3: Git commit
print("\nStep 3: Committing changes...")
commit_msg = """feat: Add Deepfake Audio Detection project card

- Added deepfake detection project to portfolio
- Includes comprehensive project page with technical details
- Model performance metrics and links to GitHub repo and technical report

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"""

result = subprocess.run(['git', 'commit', '-m', commit_msg], capture_output=True, text=True)
if result.returncode == 0:
    print("✓ Changes committed")
    print(result.stdout)
else:
    print(f"✗ Git commit failed: {result.stderr}")
    sys.exit(1)

# Step 4: Git push
print("\nStep 4: Pushing to GitHub...")
result = subprocess.run(['git', 'push', 'origin', 'copilot/adding-project-card-deepfake-audio'], 
                       capture_output=True, text=True)
if result.returncode == 0:
    print("✓ Changes pushed to GitHub")
    print(result.stdout)
else:
    print(f"✗ Git push failed: {result.stderr}")
    sys.exit(1)

print("\n✓ All steps completed successfully!")
