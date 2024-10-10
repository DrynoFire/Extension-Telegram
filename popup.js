// Nhận dữ liệu query_id từ background
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.query_id) {
        document.getElementById('queryId').innerText = "Query ID: " + request.query_id;
    }
});
