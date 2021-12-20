# BLOG_SITE CREATED BY KAMOLIDDIN JAMOLIDDINOV JALOLIDDIN O'G'LI

# URL = "http://localhost:777"

# token shart bo'magan routlar

# POST

1. REGISTERATION - url/users/register -- body : { firstName, lastName, email, username, password, confirmPassword }
2. LOGIN - url/auth/login -- body : { password, ((username) yoki (email) - ikkalasidan bittasi bo'lishi kerak)}

# GET

1. HOME - url/home -- users, posts, comments lani chiqazib beradi

# token shart bo'ganlari

# headers da token bervorish shart!

# GET

1. PROFILE - url/users/profile -- user, posts, comments lani chiqazberadi

# POST

1. POST yaratish - url/post/create -- body : { media, title, body }
2. COMMENT yaratish - url/comment/create -- body : { comment, post } - comment bn post id si

# PUT

1. PROFILE o'zgartirish - url/users/update -- body : { firstName, lastName, username, image } - shulani holaganini o'zgartirolidi

2. POST o'zgartirish - url/post/update/{postId} -- body : { media, title, body } - shulani holaganini o'zgartirolidi
3. COMMENT o'zgartirish - url/comment/update/{commentId} -- body : { comment }

# DELETE

1. O'ZINI o'chirish - url/users/delete
2. POST o'chirish - url/post/delete/{postId}
3. COMMENT o'chirish - url/comment/delete/{commentId}
