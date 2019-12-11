INSERT INTO users (
    username,
    password
) VALUES (
    ${username},
    ${hash}
)
RETURNING username, profile_pic;