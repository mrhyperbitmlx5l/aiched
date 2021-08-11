import Cookies from 'js-cookie'
//import JsEncrypt from 'jsencrypt'

export function ObjectIsNull(object) {
	if (!object && typeof(object) != 'undefined' && object != 0) {
		return false
	}
	if (typeof(object) == "undefined") {
		return false //alert("undefined");
	}
	return Object.keys(object).length === 0
}
export function StringIsNull(str) {
	return '' === str || str === null
}
export function changeOfPositionByIndex(array, index1, index2) {
	console.log("" + index1 + "" + index2 + "" + array)
}

export function getIndexOfArrayById(array, id) {
	array.forEach((item, index) => {
		if (item.id == id) {
			return index
		}
	})
	return -1
}

export function getItemOfArrayById(array, id) {
	array.forEach(item => {
		if (item.id == id) {
			return item
		}
	})
	return null
}
//生成从minNum到maxNum的随机数
export function randomNum(minNum, maxNum) {
	switch (arguments.length) {
		case 1:
			return parseInt(Math.random() * minNum + 1, 10)
		case 2:
			return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
			//或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum )
		default:
			return 0
	}
}

const TokenKey = 'DOG_START_KEY'

export function getToken() {
	let token = Cookies.get(TokenKey)
	if (token === undefined) {
		return ''
	}
	return token
}

export function setToken(token) {
	return Cookies.set(TokenKey, token)
}

export function removeToken() {
	return Cookies.remove(TokenKey)
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
	randomNum,
	setLocalstorage,
	getLocalstorage,
	removeLocalstorage
}
