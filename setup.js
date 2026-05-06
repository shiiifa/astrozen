const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectDir = 'C:\\Users\\hp\\astrozen.worktrees\\copilot-adding-project-card-deepfake-audio';

try {
  // Step 1: Copy image
  console.log('Step 1: Copying deepfake image...');
  const src = 'c:\\Users\\hp\\astrozen\\dist\\deepfake.jpeg';
  const dst = path.join(projectDir, 'public', 'deepfake.png');
  fs.copyFileSync(src, dst);
  console.log(`✓ Image copied to ${dst}`);

  // Change to project directory
  process.chdir(projectDir);

  // Step 2: Git add
  console.log('\nStep 2: Staging changes...');
  execSync('git add -A', { stdio: 'inherit' });
  console.log('✓ Files staged');

  // Step 3: Git commit
  console.log('\nStep 3: Committing changes...');
  const commitMsg = `feat: Add Deepfake Audio Detection project card

- Added deepfake detection project to portfolio
- Includes comprehensive project page with technical details
- Model performance metrics and links to GitHub repo and technical report

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>`;
  
  execSync(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
  console.log('✓ Changes committed');

  // Step 4: Git push
  console.log('\nStep 4: Pushing to GitHub...');
  execSync('git push origin copilot/adding-project-card-deepfake-audio', { stdio: 'inherit' });
  console.log('✓ Changes pushed to GitHub');

  console.log('\n✓ All steps completed successfully!');
} catch (error) {
  console.error('✗ Error:', error.message);
  process.exit(1);
}
