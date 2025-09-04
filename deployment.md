Step 1: Add Your EmailJS Secrets to GitHub
Go to your repository: https://github.com/nileshunique/nilesh_portfolio
Click Settings → Secrets and variables → Actions
Click New repository secret and add these 3 secrets:
REACT_APP_EMAILJS_SERVICE_ID = your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID = your_actual_template_id  
REACT_APP_EMAILJS_PUBLIC_KEY = your_actual_public_key
Step 2: Enable GitHub Actions for Pages
In your repo, go to Settings → Pages
Under Source, change from "Deploy from a branch" to GitHub Actions
Save
Step 3: Push and Deploy
git add .
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
✅ What Happens Next
Automatic Build: GitHub Actions will build your React project
Environment Variables: Your EmailJS credentials will be securely injected
Deploy: Your site deploys to the same URL: https://nileshunique.github.io/nilesh_portfolio
Contact Form Works: Emails will be sent directly to your inbox
