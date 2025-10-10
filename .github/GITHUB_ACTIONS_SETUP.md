# GitHub Actions Setup for Vercel Deployment

## 🤔 Do You Need This?

**NO, if:** You just want automatic deployments → Vercel's built-in GitHub integration already does this!

**YES, if:** You want to:
- Run tests/linting before deployment
- Add custom build steps
- Send notifications
- Have more control over the deployment process

---

## 🚀 Quick Setup (If Using GitHub Actions)

### Step 1: Get Vercel Credentials

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Link your project:**
   ```bash
   cd website
   vercel link
   ```

4. **Get your credentials:**
   ```bash
   # This creates .vercel/project.json
   cat .vercel/project.json
   ```
   
   You'll see:
   ```json
   {
     "projectId": "prj_xxxxxxxxxxxx",
     "orgId": "team_xxxxxxxxxxxx"
   }
   ```

5. **Get Vercel Token:**
   - Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - Click "Create Token"
   - Name it "GitHub Actions"
   - Copy the token (you won't see it again!)

### Step 2: Add GitHub Secrets

1. Go to your GitHub repo
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these three secrets:

   **Secret 1:**
   - Name: `VERCEL_TOKEN`
   - Value: (paste the token from Step 1.5)

   **Secret 2:**
   - Name: `VERCEL_ORG_ID`
   - Value: (the orgId from .vercel/project.json)

   **Secret 3:**
   - Name: `VERCEL_PROJECT_ID`
   - Value: (the projectId from .vercel/project.json)

### Step 3: Push the Workflow

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push
```

### Step 4: Watch It Work! 🎉

1. Go to your repo → **Actions** tab
2. You'll see the workflow running
3. Click on it to see detailed logs

---

## 📝 Workflow Explanation

The workflow does:

1. **Quality Checks:**
   - Runs ESLint
   - Type checks with TypeScript
   - Builds the project

2. **Deploy:**
   - Only runs if quality checks pass
   - Uses Vercel CLI to deploy
   - Deploys to production on main branch

---

## 🎛️ Customization Options

### Add Tests

```yaml
- name: Run tests
  working-directory: ./website
  run: npm test
```

### Add Slack Notifications

```yaml
- name: Slack Notification
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    text: 'Deployment completed!'
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

### Deploy to Preview for PRs

```yaml
on:
  pull_request:
    branches:
      - main

# In deploy step, remove --prod flag for preview deployments
```

---

## 🔍 Troubleshooting

### Workflow fails at "Pull Vercel Environment"
- Check that VERCEL_TOKEN, VERCEL_ORG_ID, and VERCEL_PROJECT_ID are set correctly
- Make sure the token hasn't expired

### Build fails but works locally
- Check Node.js version matches (currently set to 18)
- Verify all dependencies are in package.json

### Deployment succeeds but site doesn't update
- Check Vercel dashboard for deployment status
- May need to clear browser cache

---

## 🔄 Simple Alternative (Recommended)

**If you just want automatic deployments:**

1. Delete the workflow file:
   ```bash
   rm -rf .github/workflows/deploy.yml
   ```

2. Let Vercel's built-in integration handle it automatically
   - It's faster (no GitHub Actions wait time)
   - It's simpler (no secrets to manage)
   - It's free with no limits

3. You can still add a simple workflow for just quality checks:
   ```yaml
   name: Quality Checks
   on: [push, pull_request]
   
   jobs:
     test:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 18
         - run: cd website && npm ci
         - run: cd website && npm run lint
         - run: cd website && npm run build
   ```

---

## 📊 Comparison

| Feature | Vercel Integration | GitHub Actions |
|---------|-------------------|----------------|
| Setup Complexity | ⭐ Easy | ⭐⭐⭐ Medium |
| Speed | ⚡ Fast | ⚡⚡ Slower |
| Cost | 💰 Free | 💰 Free (2000 min/month) |
| Custom Steps | ❌ No | ✅ Yes |
| Preview Deployments | ✅ Automatic | ⚙️ Manual setup |
| Build Logs | ✅ Vercel Dashboard | ✅ GitHub Actions |

---

## 💡 Recommendation

**For most users:** Use Vercel's automatic integration (it's already working!)

**Use GitHub Actions if:** You need custom build steps, testing, or notifications

---

Need help? Check the workflow runs in the **Actions** tab of your GitHub repo!

