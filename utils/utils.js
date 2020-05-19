function setResponseStatus(successCode, failureCode, ok) {
	return ok ? successCode : failureCode;
}

module.exports = setResponseStatus;
