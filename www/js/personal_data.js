// This is a JavaScript file

/*
情報をlocalStorageへ保存する
*/
function setStorage() {
     //JSON.stringifyは、JavaScriptの各値を JSON 文字列に変換する
    localStorage.setItem('personalList', JSON.stringify({
                   Height: $("#height").val(),
                   Weight: $("#weight").val(),
                 }));
    //home.htmlに遷移する
    myNavigator.pushPage('index.html');
}

