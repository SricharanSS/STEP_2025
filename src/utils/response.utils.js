export const sendResponse = (res, data, message, code) => {
  res.status(code).json({
    code,
    message,
    data,
  })
}