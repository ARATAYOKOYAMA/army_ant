// This is a JavaScript file



/*
情報を消去するメソッド
*/
function clearStorage() {
    localStorage.removeItem('personalList');
}


/*
home.html内の要素をAnglerJSで管理出来るようにするためのコントローラー
*/
app.controller('HomeCtrl', function ($scope) {//HomeCtrlという名前のコントローラの作成
    personalList = JSON.parse(localStorage.getItem('personalList'));
    $scope.height = "未入力";
    $scope.weight = "未入力";
    if (personalList){
        if(personalList.Height != "")$scope.height = personalList.Height;
        if(personalList.Weight != "")$scope.weight = personalList.Weight;
    }else {}
});