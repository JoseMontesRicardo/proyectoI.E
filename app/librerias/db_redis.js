const redis = require('redis')

var redisClient = ()=>{
	const client = redis.createClient()
	return client
}

module.exports = redisClient