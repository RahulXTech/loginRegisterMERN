# PicStory

PicStory is a photo sharing web application built using the MERN stack.  
Users can upload photos with a title and description, store images using ImageKit cloud storage, and manage posts with full CRUD functionality.

## Features

- Upload photos
- Add title and description to images
- View uploaded photos in a responsive gallery
- Update post information
- Delete posts
- Cloud image storage using ImageKit
- Store post data in MongoDB
- Fast backend using Express.js
- Modern user interface using React and Tailwind CSS

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (file upload)
- ImageKit (image storage)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/picstory.git
cd picstory
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
PORT=3000
MONGO_DB=your_mongodb_connection_string
PUBLIC_KEY=your_imagekit_public_key
PRIVATE_KEY=your_imagekit_private_key
URL_END_POINT=https://ik.imagekit.io/your_imagekit_id
```

Run the backend server:

```bash
nodemon server.js
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:  
`http://localhost:5173`

Backend runs on:  
`http://localhost:3000`

## API Endpoints

### Create Post
**POST** `/create-post`

FormData:
```
image: file
title: string
description: string
```

### Get All Posts
**GET** `/show-post`

### Update Post
**PUT** `/update-post/:id`

Body:
```
title: string
description: string
```

### Delete Post
**DELETE** `/delete-post/:id`

## Future Improvements

- Like system
- Comments
- User authentication
- Mobile responsive improvements
- Search functionality
