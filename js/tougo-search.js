// ----------------------
//  倒語データ
// ----------------------
const tougoList = [
    { word: "ありがとう", reversed: "うとがりあ", len: 5 },
    { word: "にんじん", reversed: "んじんに", len: 4 },
    { word: "てんぷら", reversed: "らぷんて", len: 4 },
    { word: "あめ", reversed: "めあ", len: 2 },
    { word: "かさ", reversed: "さか", len: 2 },
    // 必要に応じて追加
];

// ----------------------
//  テーブル生成
// ----------------------
function renderTable(list) {
    const tbody = document.getElementById("wordTableBody");
    tbody.innerHTML = "";

    list.forEach(item => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.word}</td>
            <td>${item.reversed}</td>
            <td>${item.len}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ----------------------
//  検索機能
// ----------------------
function applyFilters() {
    const keyword = document.getElementById("searchInput").value.trim();
    const selectedLength = window.currentLengthFilter;

    let result = tougoList;

    // キーワード検索
    if (keyword !== "") {
        result = result.filter(item =>
            item.word.includes(keyword) ||
            item.reversed.includes(keyword)
        );
    }

    // 文字数フィルタ
    if (selectedLength !== "all") {
        if (selectedLength === "5+") {
            result = result.filter(item => item.len >= 5);
        } else {
            result = result.filter(item => item.len == selectedLength);
        }
    }

    renderTable(result);
}


// ----------------------
//  ボタン設定
// ----------------------
window.onload = () => {
    window.currentLengthFilter = "all";

    document.getElementById("searchInput").addEventListener("input", applyFilters);

    document.querySelectorAll(".filter-buttons button").forEach(btn => {
        btn.addEventListener("click", () => {
            window.currentLengthFilter = btn.dataset.length;
            applyFilters();
        });
    });

    // 初期表示
    applyFilters();
};
