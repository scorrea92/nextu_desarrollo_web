var fs = require('fs')
	ptah = require('path')


module.exports() = {
	saveData: function(datatype, newData, data){
		var dataPath = datatype =='users'?
					__dirname + path.join('/data/users.json'):
					__dirname + path.join('/data/messages.json')
		data.current.push(newData)
		return new promise(function(resolver,reject){
			fs.writeFile(dataPath, JSON.stringify(data), function(err){
				if(err) reject(err)
				resolver('ok')
			})
		})
	},
	getData: function(datatype){
		var dataPath = datatype =='users'?
					__dirname + path.join('/data/users.json'):
					__dirname + path.join('/data/messages.json')
		data.current.push(newData)
		return new promise(function(resolver,reject){
			fs.readFile(dataPath, 'utf8', function(err,readData){
				if(err) reject(err)
				resolver(JSON.parse(readData))
			})
		})
	}
}


















