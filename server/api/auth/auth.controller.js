const {users} = require('../../config');
const generateToken = require('./generateToken');
const verifyToken = require('./verifyToken');

function authenticate(req, res, next) {
  console.log('HERE');
  const username = req.body.username;
  const password = req.body.password;

  console.log(req);
  console.log(req.body);

  console.log(JSON.stringify(users));
  console.log(JSON.stringify(users[username]));

  if(!users[username]) { res.status(403).json({message: 'Unauthorized'}); return; }
  if(users[username].password !== password) { res.status(403).json({message: 'Unauthorized'}); return; }

  const scopes = users[username].scopes;
  console.log("Here2");
  generateToken({username, scopes}, (err, token) => {
    console.log("Here3");

    if(err) { res.status(403).json({message: 'Unauthorized'}); return; }
    console.log("Here4");

    res.status(201).json({username:username, token: token});
  });
}

function isAuthenticated(req, res, next) {
  const authorizationHeader = req.get('Authorization');
  if(!authorizationHeader) { res.status(200).json({isAuthenticated: false}); return; }

  const token = authorizationHeader.replace('Bearer ', '');
  verifyToken(token, (err) => {
    if(err) { res.status(200).json({isAuthenticated: false}); return; }
    else res.status(200).json({isAuthenticated: true}); return;
  })
}

module.exports = {
  authenticate,
  isAuthenticated
}
