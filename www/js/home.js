// This is a JavaScript file



/*
情報を消去するメソッド
*/
function clearStorage() {
    //localStorage.removeItem('personalList');
}


/*
home.html内の要素をAnglerJSで管理出来るようにするためのコントローラー
*/
app.controller('HomeCtrl', function ($scope) {//HomeCtrlという名前のコントローラの作成
    //身長、体重、ウエストの格納
    personalList = JSON.parse(localStorage.getItem('personalList'));
    personalWaist = JSON.parse(localStorage.getItem('personalWaist'));
    personalFootH = JSON.parse(localStorage.getItem('personalFootH'));
    //とりあえず未入力
    $scope.height = "未入力";
    $scope.weight = "未入力";
    $scope.waist = "未入力";
    $scope.footh = "未入力";
    //それぞれ、存在したら格納
    if (personalList){
        if(personalList.Height != "")$scope.height = personalList.Height;
        if(personalList.Weight != "")$scope.weight = personalList.Weight;
    }else {}
    if (personalWaist){
        if(personalWaist.Waist != "")$scope.waist = personalWaist.Waist;
    }else {}
    if (personalFootH){
        if(personalFootH.FootH != "")$scope.waist = personalFootH.FootH;
    }else {}
});