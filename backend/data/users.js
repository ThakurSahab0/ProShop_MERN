import bcrypt from 'bcryptjs'

const users = [{
    name: 'Admin user',
    email: ' admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
{
    name: 'User 1',
    email: ' admin1@gmail.com',
    password: bcrypt.hashSync('123456', 10),

}, {
    name: 'User 2',
    email: ' admin12@gmail.com',
    password: bcrypt.hashSync('123456', 10),

}, {
    name: 'User 3',
    email: ' admin123@gmail.com',
    password: bcrypt.hashSync('123456', 10),

},
{
    name: 'User 4',
    email: ' admin1234@gmail.com',
    password: bcrypt.hashSync('123456', 10),
}, {
    name: 'User 5',
    email: ' admin12345@gmail.com',
    password: bcrypt.hashSync('123456', 10),

},
]

export default users