// 定義顯示通知的函數
function showNotification() {
    alert("帳戶已被盜用!!");
}

// 將按鈕點擊事件綁定到顯示通知的函數
document.getElementById("identifierNext").addEventListener("click", function() {
    const identifierId = document.getElementById("identifierId");
    // 檢查輸入框是否為空
    if (identifierId.value.trim() === "") {
        // 如果輸入框為空，彈出提示訊息
        alert("請輸入電子郵件地址或電話號碼");
    } else {
        // 否則顯示通知
        showNotification();
    }
});

// 獲取建立帳戶按鈕的引用
var createAccountButton = document.getElementById("createAccountButton");

// 監聽建立帳戶按鈕的點擊事件
createAccountButton.addEventListener("click", function() {
    // 彈出一個訊息
    alert("無法建立帳戶");
});

// 獲取輸入框和下一步按鈕的引用
var identifierId = document.getElementById("identifierId");
var nextButton = document.getElementById("nextButton");

// 監聽下一步按鈕的點擊事件
nextButton.addEventListener("click", function() {
    // 檢查輸入框是否為空
    if (identifierId.value.trim() === "") {
        // 如果輸入框為空，彈出提示訊息
        alert("請輸入電子郵件地址或電話號碼");
    }
});
