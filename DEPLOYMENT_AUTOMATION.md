# Deployment Automation Guide

## 🎯 TL;DR - What You Need

**For automatic deployments when you push to GitHub:**

✅ **Already working!** Vercel automatically deploys on every push to main.

**Optional:** Add GitHub Actions for quality checks before deployment.

---

## 🔄 How Automatic Deployment Works (Current Setup)

When you connected your GitHub repo to Vercel, it automatically set up:

1. **GitHub Webhook** → Notifies Vercel when you push code
2. **Auto-Deploy** → Vercel builds and deploys automatically
3. **Status Checks** → Green checkmarks appear on commits

### Test It:
```bash
# Make any change
echo "# Update" >> website/README.md
git add .
git commit -m "Test deployment"
git push

# Watch in Vercel dashboard - deployment starts automatically!
```

---

## 📊 Three Deployment Options

### Option 1: Vercel Only (Recommended) ⭐

**What it does:**
- Automatic deployment on every push
- Preview deployments for pull requests
- Built-in caching and optimization

**Pros:**
- ✅ No configuration needed (already working!)
- ✅ Fastest deployment
- ✅ Free unlimited deployments
- ✅ Easy to use

**Cons:**
- ❌ Can't add custom build steps
- ❌ Limited control over build process

**Setup:** None required - it's already working!

---

### Option 2: Vercel + Quality Checks ⭐⭐ (Good Balance)

**What it does:**
- Vercel handles deployment (automatic)
- GitHub Actions runs tests/linting
- Blocks merge if quality checks fail

**Pros:**
- ✅ Still gets Vercel's fast deployment
- ✅ Catches errors before deployment
- ✅ Team can see test results in PRs

**Cons:**
- ⚠️ Slightly more complex setup
- ⚠️ Uses GitHub Actions minutes

**Files to use:**
- Use: `website/.github/workflows/quality-checks.yml`
- Delete: `website/.github/workflows/deploy.yml` (not needed)

**Setup:**
```bash
# Keep quality checks, remove full deployment workflow
rm website/.github/workflows/deploy.yml
git add .
git commit -m "Add quality checks workflow"
git push
```

---

### Option 3: Full GitHub Actions Control ⭐⭐⭐ (Advanced)

**What it does:**
- GitHub Actions handles everything
- Full control over build process
- Can add custom steps, notifications, etc.

**Pros:**
- ✅ Complete control
- ✅ Can add custom build steps
- ✅ Integrate with other services

**Cons:**
- ❌ More complex setup
- ❌ Requires Vercel API tokens
- ❌ Slower than Vercel's native integration
- ❌ Need to manage secrets

**Files to use:**
- Use: `website/.github/workflows/deploy.yml`
- Delete: `website/.github/workflows/quality-checks.yml`

**Setup:** See `website/.github/GITHUB_ACTIONS_SETUP.md`

---

## 🚀 Recommended Setup for Your Project

I recommend **Option 2** (Vercel + Quality Checks):

### Why?
- ✅ You get fast Vercel deployments (already working!)
- ✅ Code quality is checked before deployment
- ✅ Simple to set up
- ✅ No API tokens needed

### Quick Setup:

1. **Remove the full deployment workflow:**
   ```bash
   rm website/.github/workflows/deploy.yml
   ```

2. **Keep the quality checks workflow:**
   ```bash
   # The file quality-checks.yml is already created
   git add .github/workflows/quality-checks.yml
   git commit -m "Add quality checks workflow"
   git push
   ```

3. **That's it!** Now:
   - Vercel deploys automatically (as before)
   - GitHub Actions runs quality checks
   - You see status on every commit

---

## 📈 What Happens on Push

### With Option 2 (Recommended):

```
You push to GitHub
       ↓
    ┌──────────────────────┐
    │                      │
    ↓                      ↓
GitHub Actions         Vercel
    ↓                      ↓
Run Linter           Build Site
    ↓                      ↓
Type Check           Deploy
    ↓                      ↓
Build Test           Update Live Site
    ↓                      ↓
✅ Success!          ✅ Deployed!
```

Both run in parallel!

---

## 🔍 Monitoring Deployments

### View in Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Click your project
3. See all deployments with logs

### View in GitHub:
1. Go to your repo
2. Click **Actions** tab
3. See workflow runs

### On Commits:
- Green ✅ = All checks passed + deployed
- Red ❌ = Something failed
- Yellow 🟡 = Still running

---

## 🔧 Common Workflows

### Deploy a New Feature:
```bash
git checkout -b feature/new-page
# ... make changes ...
git add .
git commit -m "Add new page"
git push origin feature/new-page

# Create PR on GitHub
# Quality checks run automatically
# Preview deployment created by Vercel

# After review, merge to main
# Production deployment happens automatically
```

### Quick Content Update:
```bash
# Edit content files
git add content/
git commit -m "Update blog post"
git push

# Automatic deployment in ~2 minutes
```

### Fix a Bug:
```bash
git checkout -b fix/contact-form
# ... fix bug ...
git add .
git commit -m "Fix contact form validation"
git push origin fix/contact-form

# PR runs quality checks
# Preview deployment for testing
# Merge when ready
```

---

## 🎛️ Configuration

### Skip CI for Minor Changes:

```bash
git commit -m "Update README [skip ci]"
# Quality checks won't run (but Vercel still deploys)
```

### Deploy Only (Skip Vercel Integration):

If you want to use only GitHub Actions:
1. Go to Vercel dashboard
2. Settings → Git
3. Disconnect GitHub integration
4. Use the full `deploy.yml` workflow instead

---

## 📞 Getting Help

### Vercel Deployment Issues:
- Check Vercel dashboard for build logs
- Verify Root Directory is set to `website`
- Check environment variables if using email

### GitHub Actions Issues:
- Go to Actions tab → Click failed workflow
- Check logs for error messages
- Verify Node.js version matches local (18)

### Both Working but Site Not Updating:
- Clear browser cache
- Check if correct branch deployed
- Verify changes were actually pushed

---

## 💡 Pro Tips

1. **Use Branch Protection:**
   - Go to repo Settings → Branches
   - Add rule for `main` branch
   - Require status checks to pass
   - Prevents broken code from deploying

2. **Monitor Performance:**
   - Enable Vercel Analytics in dashboard
   - Track Core Web Vitals
   - See real user data

3. **Preview Deployments:**
   - Every PR gets a unique URL
   - Test before merging
   - Share with team for review

4. **Environment Variables:**
   - Set different values for production/preview
   - Vercel dashboard → Settings → Environment Variables
   - Choose which environments get which values

---

## ✅ Current Status

Based on your setup:
- ✅ GitHub repository connected
- ✅ Vercel automatic deployments: **ACTIVE**
- 📝 GitHub Actions quality checks: **OPTIONAL** (workflows created, need to push)

**You're all set!** Deployments happen automatically on every push to main.

---

## 🔜 Next Steps

1. **Test automatic deployment:**
   ```bash
   # Make a small change
   echo "Test" >> website/README.md
   git add . && git commit -m "Test" && git push
   ```

2. **Optional - Add quality checks:**
   ```bash
   rm website/.github/workflows/deploy.yml
   git add .
   git commit -m "Add CI workflow"
   git push
   ```

3. **Set up custom domain** (see DEPLOYMENT.md)

4. **Add environment variables** when ready for email

---

Need more help? Check:
- `DEPLOYMENT.md` - Full deployment guide
- `.github/GITHUB_ACTIONS_SETUP.md` - GitHub Actions details
- Vercel docs: https://vercel.com/docs

