# Cloud Website Project
A simple website with a Node.js backend deployed on Google Cloud Platform using Docker and Cloud Run.

## Features
- Frontend with HTML, CSS, and JavaScript
- Node.js backend using Express
- Text processing API endpoint
- Responsive design
- Docker containerization
- Health check endpoint

## Project Structure
```
cloud/
├── server.js
├── package.json
├── Dockerfile
├── .gitignore
├── README.md
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

## Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Local Development
Run the server:
```bash
npm start
```
Visit `http://localhost:8080` in your browser.

## Docker Deployment
Build and run with Docker:
```bash
docker build -t cloud-website .
docker run -p 8080:8080 cloud-website
```

## Google Cloud Run Deployment
1. Build the Docker image:
   ```bash
docker build -t gcr.io/YOUR_PROJECT_ID/cloud-website .
   ```
2. Push to Container Registry:
   ```bash
docker push gcr.io/YOUR_PROJECT_ID/cloud-website
   ```
3. Deploy to Cloud Run:
   ```bash
gcloud run deploy cloud-website \
   --image gcr.io/YOUR_PROJECT_ID/cloud-website \
   --platform managed \
   --region us-central1 \
   --allow-unauthenticated
   ```

## API Endpoints
- `GET /` - Serves the frontend HTML
- `POST /api/process` - Processes user input
- `GET /health` - Health check endpoint

## Requirements Met
✅ Frontend with HTML/CSS/JS
✅ Backend with Node.js
✅ Accepts user input and API requests
✅ Returns response from backend
✅ Backend listens on PORT 8080
✅ Containerized with Docker
✅ Ready for Cloud Run deployment