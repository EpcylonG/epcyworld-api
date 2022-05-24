function sendResponse(data = "") {
  const res = { success: true };

  if (data) res.data = data;

  return res;
}

function sendError(errorMsg = "") {
  let res = {
    success: false,
  };

  if (errorMsg.length > 0) res.msg = errorMsg;
  else
    res.msg =
      "something wrong in back stage, contact a specialized technician, thank you";

  return res;
}

module.exports = {
  sendResponse,
  sendError,
};