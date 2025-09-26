const sendResponse = (res, data, message, code) => {
  res.status(code).json({
    code,
    message,
    data,
  })
}

const sendErrorResponse = (res, data, message, code) => {
  res.status(code).json({
    code,
    message,
    error: true,
    data,
  })
}

export {sendResponse, sendErrorResponse};