// Hàm lấy query_id từ nội dung trang
function getQueryID() {
    let queryId = null;
    
    // Ví dụ: Bạn cần xác định vị trí của query_id trong DOM của Telegram Web
    // Điều này phụ thuộc vào cách Telegram render nội dung
    // Dưới đây là một cách cơ bản để lấy thông tin từ các biểu mẫu
    let queryElements = document.querySelectorAll("[data-query-id]"); // Giả sử dữ liệu nằm trong thuộc tính `data-query-id`
    
    if (queryElements.length > 0) {
        queryId = queryElements[0].getAttribute('data-query-id');
    }
    
    return queryId;
}

// Gửi query_id về background hoặc popup để hiển thị
let queryId = getQueryID();
if (queryId) {
    chrome.runtime.sendMessage({query_id: queryId}, function(response) {
        console.log("Query ID sent: " + queryId);
    });
}
