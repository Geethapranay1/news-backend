# Fetch Stories
GET /api/stories
Params:
    - category (optional): top, new, best

Response:
    [
        {
            "_id": "604f1b3d1c9d440000c5a0a1",
            "title": "Breaking News",
            "url": "https://example.com/news",
            "author": "John Doe",
            "createdAt": "2023-04-10T12:00:00.000Z",
            "category": "top",
            "score": 100,
            "commentsCount": 50
        },
        ...
    ]

# Fetch Comments for a Story
GET /api/comments?storyId=604f1b3d1c9d440000c5a0a1
Response:
    [
        {
            "_id": "604f1b3d1c9d440000c5a0a2",
            "story": "604f1b3d1c9d440000c5a0a1",
            "author": "Jane Smith",
            "content": "This is an interesting story!",
            "createdAt": "2023-04-10T12:30:00.000Z",
            "score": 10
        },
        ...
    ]

# Fetch User Profile
GET /api/users/604f1b3d1c9d440000c5a0a3
Response:
    {
        "_id": "604f1b3d1c9d440000c5a0a3",
        "username": "johndoe",
        "email": "johndoe@example.com",
        "bookmarks": [
            {
                "_id": "604f1b3d1c9d440000c5a0a1",
                "title": "Breaking News",
                "url": "https://example.com/news",
                "author": "John Doe",
                "createdAt": "2023-04-10T12:00:00.000Z",
                "category": "top",
                "score": 100,
                "commentsCount": 50
            },
            ...
        ],
        "karma": 1000,
        "createdAt": "2023-04-01T10:00:00.000Z"
    }

# Bookmark a Story
POST /api/users/bookmarks
{
    "storyId": "604f1b3d1c9d440000c5a0a1"
}