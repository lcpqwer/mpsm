const key = 'ijustect2022mpsmmini'
const MD5 = require('./MD5')
var getSign = (params) => {
	let sign = objKeySort(params)
	params.sign = MD5.md5(sign)
	return params
}

function objKeySort(arys) {
	//先用Object内置类的keys方法获取要排序对象的属性名数组，再利用Array的sort方法进行排序
	var newkey = Object.keys(arys).sort();
	// console.log('newkey=' + newkey);
	var newObj = ''; //创建一个新的对象，用于存放排好序的键值对
	for (var i = 0; i < newkey.length; i++) {
		if (arys[newkey[i]] == '' || !arys[newkey[i]]){
			continue
		}
		//遍历newkey数组
		newObj += [newkey[i]] + '=' + arys[newkey[i]] + '&';
    }
    newObj += 'key=ijustect2021mediatemini'
	return newObj
}

module.exports = {
	getSign
}