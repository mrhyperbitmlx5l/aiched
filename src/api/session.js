import service from '@/utils/request'

export function getVeifyCode() {
	return service({
		url: '/api/code.do',
		method: 'post',
	})
}

export function getToken() {
	return service({
		url: '/api/token.do',
		method: 'post',
	})
}

export function uniqueVerify(data) {
	return service({
		url: '/api/masses/unique/get.do',
		method: 'post',
		data: data
	})
}

export function register(data) {
	return service({
		url: '/api/register.do',
		method: 'post',
		data: data
	})
}

export function login(loginname, password) {
	return service({
		url: '/api/login.do',
		method: 'post',
		data: {
			loginname,
			password
		}
	})
}

export function getMasses(data) {
	return service({
		url: '/api/masses/get.do',
		method: 'post',
		data: data
	})
}

export function logout() {
	return service({
		url: '/api/logout.do',
		method: 'post'
	})
}
