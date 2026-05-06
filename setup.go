package main

import (
	"fmt"
	"io"
	"os"
	"os/exec"
	"path/filepath"
)

func main() {
	// Step 1: Copy image
	fmt.Println("Step 1: Copying deepfake image...")
	src := "c:\\Users\\hp\\astrozen\\dist\\deepfake.jpeg"
	dst := "C:\\Users\\hp\\astrozen.worktrees\\copilot-adding-project-card-deepfake-audio\\public\\deepfake.png"

	if err := copyFile(src, dst); err != nil {
		fmt.Printf("✗ Error copying image: %v\n", err)
		os.Exit(1)
	}
	fmt.Printf("✓ Image copied to %s\n", dst)

	// Change directory
	projectDir := "C:\\Users\\hp\\astrozen.worktrees\\copilot-adding-project-card-deepfake-audio"
	os.Chdir(projectDir)

	// Step 2: Git add
	fmt.Println("\nStep 2: Staging changes...")
	cmd := exec.Command("git", "add", "-A")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		fmt.Printf("✗ Git add failed: %v\n", err)
		os.Exit(1)
	}
	fmt.Println("✓ Files staged")

	// Step 3: Git commit
	fmt.Println("\nStep 3: Committing changes...")
	commitMsg := `feat: Add Deepfake Audio Detection project card

- Added deepfake detection project to portfolio
- Includes comprehensive project page with technical details
- Model performance metrics and links to GitHub repo and technical report

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>`

	cmd = exec.Command("git", "commit", "-m", commitMsg)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		fmt.Printf("✗ Git commit failed: %v\n", err)
		os.Exit(1)
	}
	fmt.Println("✓ Changes committed")

	// Step 4: Git push
	fmt.Println("\nStep 4: Pushing to GitHub...")
	cmd = exec.Command("git", "push", "origin", "copilot/adding-project-card-deepfake-audio")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		fmt.Printf("✗ Git push failed: %v\n", err)
		os.Exit(1)
	}
	fmt.Println("✓ Changes pushed to GitHub")

	fmt.Println("\n✓ All steps completed successfully!")
}

func copyFile(src, dst string) error {
	source, err := os.Open(src)
	if err != nil {
		return err
	}
	defer source.Close()

	destination, err := os.Create(dst)
	if err != nil {
		return err
	}
	defer destination.Close()

	_, err = io.Copy(destination, source)
	return err
}
