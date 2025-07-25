# 🚀 Production Deployment Guide

## Pre-Deployment Checklist

### Environment Variables
- [ ] Update `CLERK_SECRET_KEY` with production key
- [ ] Update `DATABASE_URL` with production database
- [ ] Update `CLIENT_URL` with production domain
- [ ] Verify all API keys are production-ready

### Security
- [ ] Enable HTTPS
- [ ] Set secure CORS origins
- [ ] Add rate limiting
- [ ] Enable request logging
- [ ] Set up monitoring

### Database
- [ ] Run database migrations
- [ ] Set up database backups
- [ ] Configure connection pooling

### Performance
- [ ] Enable gzip compression
- [ ] Set up CDN for static assets
- [ ] Configure caching headers
- [ ] Optimize images

## Deployment Platforms

### Vercel (Client)
```bash
cd client
npm run build
vercel --prod
```

### Railway/Render (Server)
```bash
cd server
# Set environment variables in platform dashboard
# Deploy via Git integration
```

### Environment Variables for Production
```env
# Server (.env)
NODE_ENV=production
PORT=5000
CLIENT_URL=https://your-domain.com
DATABASE_URL=your_production_db_url
CLERK_SECRET_KEY=your_production_clerk_key
GEMINI_API_KEY=your_gemini_key
CLIPDROP_API_KEY=your_clipdrop_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

```env
# Client (.env)
VITE_CLERK_PUBLISHABLE_KEY=your_production_clerk_key
VITE_BASE_URL=https://your-api-domain.com
```