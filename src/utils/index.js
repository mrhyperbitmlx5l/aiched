export function ObjectIsNull(object) {
	if (!object && typeof(object) != 'undefined' && object != 0) {
		return false
	}
	if (typeof(object) == "undefined") {
		return false //alert("undefined");
	}
	return Object.keys(object).length === 0
}
export function StringIsNull(str){
	return '' === str ||str === null
}
export function changeOfPositionByIndex(array,index1,index2){
	console.log(""+ index1 +""+ index2 + "" +array)
}

export function getIndexOfArrayById(array,id){
	array.forEach((item,index) => {
		if(item.id == id){
			return index
		}
	})
	return -1
}

export function getItemOfArrayById(array,id){
	array.forEach(item => {
		if(item.id == id){
			return item
		}
	})
	return null
}

/**
 * Localstorage 存储数据
 * @param {String} key
 * @param {Object} value
 * @returns
 */
export const setLocalstorage = (key, value) => {
	var storage = window.localStorage
	if (!storage) {
		window.alert('浏览器不支持localstorage')
		return false
	}
	storage.setItem(key, value)
}

/**
 * Localstorage 提取存储
 * @param   {String} key
 * @returns {Boolean} Boolean or String
 */
export const getLocalstorage = (key, defalut) => {
	var storage = window.localStorage
	if (!storage) {
		window.alert('浏览器不支持localstorage')
		return defalut
	}
	let value = storage.getItem(key)
	return value ? value : defalut
}

/**
 * Localstorage 删除存储
 * @param {String} key
 * @returns
 */
export const removeLocalstorage = key => {
	var storage = window.localStorage
	if (!storage) {
		window.alert('浏览器不支持localstorage')
		return false
	}
	storage.removeItem(key)
}

export default {
	ObjectIsNull,
	StringIsNull,
	setLocalstorage,
	getLocalstorage,
	removeLocalstorage
}
