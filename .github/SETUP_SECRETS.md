# Quick Setup: Add GitHub Secrets for Vercel Deployment

## Your Project Details

You have:
- ✅ Vercel Project ID: `prj_FxLk8ieGv2NXb0bAAMHU1d7QIonu`
- ✅ Vercel Team ID (Org ID): `team_Sf9GC1FHFgaLgbrtWKHs43VL`
- ✅ GitHub Actions workflows created
- ⏳ Need to add Vercel token to GitHub (if using full deployment)

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Vercel Organization ID

1. Go to your Vercel dashboard: [vercel.com](https://vercel.com)
2. Click on your project (nm-global)
3. Go to **Settings** → **General**
4. Scroll down to find **"Organization ID"** or **"Team ID"**
5. Copy it (looks like: `team_xxxxxxxxxxxxx` or `prj_xxxxxxxxxxxxx`)

**Alternative method:**
```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login and link project
cd website
vercel link

# View the project details
cat .vercel/project.json
```

You'll see:
```json
{
  "projectId": "prj_FxLk8ieGv2NXb0bAAMHU1d7QIonu",
  "orgId": "team_xxxxxxxxxxxxx"  ← Copy this
}
```

### Step 2: Get Your Vercel Token

1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click **"Create Token"**
3. Name: `GitHub Actions - NM Global`
4. Scope: **Full Account**
5. Expiration: Choose your preference (recommend: No Expiration)
6. Click **Create**
7. **IMPORTANT:** Copy the token immediately! You won't see it again.

The token looks like: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 3: Add Secrets to GitHub

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/nm-global`
2. Click **Settings** (top right)
3. Click **Secrets and variables** → **Actions** (left sidebar)
4. Click **New repository secret** (green button)

Add these **3 secrets**:

#### Secret #1: VERCEL_TOKEN
```
Name: VERCEL_TOKEN
Secret: (paste the token from Step 2)
```
Click **Add secret**

#### Secret #2: VERCEL_PROJECT_ID
```
Name: VERCEL_PROJECT_ID
Secret: prj_FxLk8ieGv2NXb0bAAMHU1d7QIonu
```
Click **Add secret**

#### Secret #3: VERCEL_ORG_ID
```
Name: VERCEL_ORG_ID
Secret: team_Sf9GC1FHFgaLgbrtWKHs43VL
```
Click **Add secret**

### Step 4: Choose Your Workflow

You have two workflow files. Choose one:

#### Option A: Quality Checks Only (Recommended) ⭐

Let Vercel handle deployments automatically, GitHub Actions just checks code quality:

```bash
# Remove the deployment workflow
rm .github/workflows/deploy.yml

# Keep quality-checks.yml
git add .
git commit -m "Setup CI with quality checks"
git push
```

**With this option:**
- ✅ No secrets needed (you can skip Steps 1-3!)
- ✅ Faster deployments
- ✅ Simpler setup
- ✅ Vercel's automatic deployment still works

#### Option B: Full GitHub Actions Control

Use GitHub Actions to fully control the deployment:

```bash
# Remove the quality checks workflow
rm .github/workflows/quality-checks.yml

# Keep deploy.yml
git add .
git commit -m "Setup GitHub Actions deployment"
git push
```

**With this option:**
- ⚙️ Complete control over deployment
- 🔒 Must complete Steps 1-3 (add all secrets)
- ⚡ Slightly slower than Vercel's native integration

---

## ✅ Verification

### After pushing your workflow:

1. Go to your GitHub repo
2. Click **Actions** tab
3. You should see a workflow run starting
4. Click on it to see the progress

### If it fails:

Check that all three secrets are added correctly:
- Go to repo **Settings** → **Secrets and variables** → **Actions**
- You should see:
  - `VERCEL_TOKEN` 
  - `VERCEL_PROJECT_ID`
  - `VERCEL_ORG_ID`

---

## 🎯 My Recommendation

**Use Option A (Quality Checks Only)** because:

1. ✅ Vercel's automatic deployment is already working perfectly
2. ✅ No need to manage API tokens
3. ✅ GitHub Actions still checks your code quality
4. ✅ Simpler and more maintainable
5. ✅ Faster deployment times

You get the best of both worlds!

---

## 📋 Quick Commands Summary

### If Using Option A (Recommended):
```bash
cd D:\Ideas\nm-global

# Remove deployment workflow
rm website\.github\workflows\deploy.yml

# Add and push quality checks
git add .
git commit -m "Add CI quality checks"
git push

# Done! No secrets needed.
```

### If Using Option B (Advanced):
```bash
cd D:\Ideas\nm-global

# Remove quality checks workflow  
rm website\.github\workflows\quality-checks.yml

# Add deploy workflow
git add .
git commit -m "Add GitHub Actions deployment"
git push

# Make sure you added all 3 secrets to GitHub!
```

---

## 🔍 Testing Your Setup

After setup, test it:

```bash
# Make a small change
echo "# Test CI" >> website/README.md

git add .
git commit -m "Test automated deployment"
git push

# Watch it work:
# 1. GitHub Actions: https://github.com/YOUR_USERNAME/nm-global/actions
# 2. Vercel Dashboard: https://vercel.com
```

---

## ❓ Need Your Org ID?

If you can't find your Organization ID, run this:

```bash
cd website
vercel whoami

# Or check your project settings
vercel inspect
```

Or look in Vercel dashboard:
1. Click your profile picture (top right)
2. Go to "Account Settings" or "Team Settings"
3. The ID is usually shown in the URL or settings page

---

## 🆘 Troubleshooting

### "Invalid token" error
- Make sure you copied the entire token
- Token might have expired - create a new one
- Check the token has correct permissions (Full Account)

### "Project not found" error
- Verify VERCEL_PROJECT_ID is exactly: `prj_FxLk8ieGv2NXb0bAAMHU1d7QIonu`
- Check VERCEL_ORG_ID matches your organization

### Workflow doesn't run
- Check the workflow file is in `.github/workflows/` folder
- Verify the file name ends with `.yml`
- Make sure you pushed the file to GitHub

---

**Ready to set it up?** I recommend Option A for simplicity! 🚀

