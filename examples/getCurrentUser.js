const Wrike = require('../lib/wrike');
var client = new Wrike({
  bearer_token: process.env.WRIKE_BEARER_TOKEN
});

client.get('contacts',{me: true}, function(error,data,response){
  console.log(data);
});
