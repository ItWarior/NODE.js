let ownError = require('./three');
try {
   throw new ownError('AAAAAAA', "code","desc");
} catch (e) {
   e.pretty();
};