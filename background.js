chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.query_id) {
        console.log("Received Query ID: " + request.query_id);
        // Bạn có thể thực hiện các thao tác khác với query_id ở đây (lưu vào bộ nhớ, gửi đến máy chủ...)
    }
    sendResponse({status: "Query ID received"});
});
