export function formatMessage(data, message) {
  return {
    code: '0000-00000',
    message: message,
    data: data
  }
}

export function formatErrorMessage(data, message) {
  return {
    code: '0000-11111',
    message: message,
    data: data
  }
}

export function formatErrorMessageCode(code ,data, message) {
  return {
    code: code,
    message: message,
    data: data
  }
}

export function formatPaging(list, page, size, total) {
  return {
    list: list,
    page: page,
    size: size,
    total: total
  }
}

export function param2Obj(url) {
	const search = url.split('?')[1]
	if (!search) {
		return {}
	}
	return JSON.parse(
		'{"' +
		decodeURIComponent(search)
		.replace(/"/g, '\\"')
		.replace(/&/g, '","')
		.replace(/=/g, '":"') +
		'"}'
	)
}