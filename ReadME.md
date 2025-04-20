# BlogApp 

> A simple blogging platform API with Posts, Comments, and Likes built on Node.js, Express, and MongoDB Atlas.

## 🌟 Features

- Create and retrieve blog posts
- Add comments to posts
- Like and unlike posts
- Data persistence with MongoDB via Mongoose

## 🚀 Installation

```bash
git clone https://github.com/Singhdhiru/BLOGAPP.git
cd BLOGAPP
npm install
```

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
MONGO_URI=<Your MongoDB Atlas connection string>
PORT=3000
```

## 🗄 Models

### Post

| Field      | Type                                | Required | Description             |
| ---------- | ----------------------------------- | -------- | ----------------------- |
| `titel`    | `String`                            | Yes      | Title of the post       |
| `body`     | `String`                            | Yes      | Content of the post     |
| `comments` | `ObjectId[]` (ref: `Comment`)       | No       | Array of comment IDs    |
| `likes`    | `ObjectId[]` (ref: `Like`)          | No       | Array of like IDs       |

### Comment

| Field   | Type                         | Required | Description               |
| ------- | ---------------------------- | -------- | ------------------------- |
| `post`  | `ObjectId` (ref: `Post`)     | Yes      | ID of the related post    |
| `user`  | `String`                     | Yes      | Username of commenter     |
| `body`  | `String`                     | Yes      | Content of the comment    |

### Like

| Field   | Type                         | Required | Description             |
| ------- | ---------------------------- | -------- | ----------------------- |
| `post`  | `ObjectId` (ref: `Post`)     | Yes      | ID of the liked post    |
| `user`  | `String`                     | Yes      | Username of liker       |

## 📝 API Endpoints

Base URL: `http://localhost:3000/api/v1`

### Posts

- **Create Post**  
  `POST /create/post`  
  ```json
  {
    "titel": "My First Post",
    "body": "Hello, world!"
  }
  ```

- **Get All Posts**  
  `GET /post/getPost`

### Comments

- **Add Comment**  
  `POST /comment/create`  
  ```json
  {
    "post": "<POST_ID>",
    "user": "Alice",
    "body": "Great read!"
  }
  ```

### Likes

- **Like Post**  
  `POST /like/likes`  
  ```json
  {
    "post": "<POST_ID>",
    "user": "Alice"
  }
  ```

- **Unlike Post**  
  `POST /like/unlike`  
  ```json
  {
    "post": "<POST_ID>",
    "user": "Alice"
  }
  ```

## 💻 Usage

Start the server in development mode:

```bash
npm run dev
```

Server runs at `http://localhost:3000`.

## 🗂 Project Structure

```
BLOGAPP/
├── config/
│   └── db.js
├── controllers/
│   ├── commentController.js
│   ├── likeController.js
│   └── postController.js
├── models/
│   ├── commentModel.js
│   ├── likeModel.js
│   └── postModel.js
├── routes/
│   └── blogRoutes.js
├── .env
├── index.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

MIT 