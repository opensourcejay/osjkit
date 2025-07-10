# Deployment Guide

This guide covers deploying your OSJKIT web application to various hosting platforms.

## Pre-Deployment Checklist

- [ ] All environment variables configured for production
- [ ] Production build tested locally (`npm run build && npm run preview`)
- [ ] All tests passing (`npm run test`)
- [ ] No linting errors (`npm run lint`)
- [ ] Dependencies updated and audited (`npm audit`)
- [ ] HTTPS configured for API endpoints
- [ ] Error tracking and analytics configured (if needed)

## Platform-Specific Deployment

### Vercel (Recommended)

1. **Connect Repository:**
   - Connect your GitHub/GitLab repository to Vercel
   - Vercel auto-detects Vite configuration

2. **Environment Variables:**
   ```
   VITE_API_BASE_URL=https://your-production-api.com
   VITE_APP_NAME=Your App Name
   ```

3. **Build Configuration:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Node.js Version: 18.x

### Netlify

1. **Build Settings:**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

2. **Environment Variables:**
   Set the same variables as listed above in Netlify's dashboard

3. **Redirects (for SPA routing):**
   Create a `_redirects` file in `public/`:
   ```
   /*    /index.html   200
   ```

### GitHub Pages

1. **Add to package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

2. **Create deployment workflow** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### Traditional Web Hosting

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder contents** to your web server

3. **Configure server** for SPA routing:
   - **Apache:** Add `.htaccess` to root:
     ```apache
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
     ```
   
   - **Nginx:** Add to server config:
     ```nginx
     location / {
       try_files $uri $uri/ /index.html;
     }
     ```

## Performance Optimization

### Before Deployment
1. **Analyze bundle size:**
   ```bash
   npm run build
   npx vite-bundle-analyzer dist
   ```

2. **Optimize images** in the `public` folder

3. **Review dependencies** and remove unused packages

### After Deployment
1. **Enable gzip compression** on your server
2. **Set proper cache headers** for static assets
3. **Monitor performance** with tools like Lighthouse
4. **Set up error tracking** (e.g., Sentry)

## Environment Variables

### Required for Production
```bash
VITE_API_BASE_URL=https://your-api.com
VITE_APP_NAME=Your App Name
```

### Optional
```bash
VITE_API_TIMEOUT=10000
VITE_ANALYTICS_ID=your-analytics-id
VITE_SENTRY_DSN=your-sentry-dsn
```

## SSL/HTTPS

- Most modern hosting platforms provide HTTPS automatically
- For custom domains, ensure SSL certificates are properly configured
- Update API endpoints to use HTTPS in production

## Monitoring

Consider adding:
- **Error tracking:** Sentry, Bugsnag
- **Analytics:** Google Analytics, Mixpanel
- **Performance monitoring:** Web Vitals, Lighthouse CI
- **Uptime monitoring:** Pingdom, UptimeRobot

## Troubleshooting

### Common Issues
1. **Blank page after deployment:** Check console for errors, verify base URL configuration
2. **404 on refresh:** Configure server for SPA routing
3. **API errors:** Verify environment variables and CORS settings
4. **Slow loading:** Optimize bundle size and enable compression

### Debug Tools
- Browser Developer Tools
- Network tab for API issues
- Lighthouse for performance analysis
- Build output logs for deployment issues
