var dbh = levelup('./level', {
  createIfMissing: true,
  errorIfExists: false
},create);

function create(){
  // populate db with fixtures
}
