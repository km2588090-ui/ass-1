const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
console.log(req.method)
console.log(req.url)

let users = JSON.parse(fs.readFileSync('users.json'))

if(req.url == '/users' && req.method == 'GET')
{
res.write(JSON.stringify(users))
}

if(req.url == '/users' && req.method == 'POST')
{
  let data='';
req.on('data',(chunk)=>{
data=JSON.parse(chunk)

})
req.on('end',()=>{
let newUser = JSON.parse(chunk)
users.push(newUser)
fs.writeFileSync('users.json',JSON.stringify(users))
res.write("user added")
})

}

if(req.url == '/users' && req.method == 'DELETE')
{
let id=""
req.on('data',(chunk)=>{
id = JSON.parse(chunk).id
users = users.filter(user => user.id != id)
fs.writeFileSync('users.json',JSON.stringify(users))
res.write("user deleted")
})
}

if(req.url == '/users' && req.method == 'PATCH')
{
req.on('data',(chunk)=>{
let data = JSON.parse(chunk)
let user = users.find(user => user.id == data.id)

user.name = data.name

fs.writeFileSync('users.json',JSON.stringify(users))
res.write("user updated")
res.end()
})
}

})

server.listen(3000,()=>{
console.log('server is run in port 3000')
})