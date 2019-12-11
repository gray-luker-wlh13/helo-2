SELECT p.title, p.img, p.content, u.username, u.profile_pic FROM posts p
JOIN users u ON p.author_id = u.id
WHERE p.author_id = $1 AND title LIKE '%' + $2 + '%';