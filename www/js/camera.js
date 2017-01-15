 // This is a JavaScript file
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    var flag = -1;
    var flag2 = -1; 
    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
        //ウエストの値をローカルストレージに保存(身長未入力だと走らない)
         person_waist = waist(waist_front(personalList.Height, waistList1.height, waistList1.width), waist_side(personalList.Height, waistList2.height, waistList2.width));
         localStorage.setItem('personalWaist', JSON.stringify({
                    Waist: person_waist,
                  }));
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
//       var largeImage = document.getElementById('largeImage');
// 
//       // Unhide image elements
//       //
//       largeImage.style.display = 'block';
// 
//       // Show the captured photo
//       // The inline CSS rules are used to resize the image
//       //
//       largeImage.src = imageURI;
      
        flag2 *= -1;
        if(flag2 == 1){
            var largeImage1 = document.getElementById('largeImage1');
        
              // Unhide image elements
              //
              largeImage1.style.display = 'block';
        
              // Show the captured photo
              // The inline CSS rules are used to resize the image
              //
              largeImage1.src = imageURI;
        }else{
            var largeImage2 = document.getElementById('largeImage2');
        
              // Unhide image elements
              //
              largeImage2.style.display = 'block';
        
              // Show the captured photo
              // The inline CSS rules are used to resize the image
              //
              largeImage2.src = imageURI;        
        }
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL, saveToPhotoAlbum: false, targetWidth: 200, targetHeight: 200 });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }

function hyouzi(width, height){
    flag *= -1;
    if(flag == 1){
        var elem = document.getElementById("test1");
        elem.innerHTML = width + ", " + height;
        localStorage.setItem('waistList1', JSON.stringify({
                   Height: height,
                   Weight: width,
                 }));
    }else{
        var elem = document.getElementById("test2");
        elem.innerHTML = width + ", " + height;
        localStorage.setItem('waistList2', JSON.stringify({
                   Height: height,
                   Weight: width,
                 }));        
    }
}

function keisan(){
    waistList1 = JSON.parse(localStorage.getItem('waistList1'));
    waistList2 = JSON.parse(localStorage.getItem('waistList2'));
    //alert(waist_front(personalList.Height, waistList1.Height, waistList1.Width));
    person_waist = waist(waist_front(personalList.Height, waistList1.Height, waistList1.Weight), waist_side(personalList.Height, waistList2.Height, waistList2.Weight));
    localStorage.setItem('personalWaist', JSON.stringify({
                Waist: person_waist,
          }));
    personalWaist = JSON.parse(localStorage.getItem('personalWaist'));
    alert(person_waist);
    myNavigator.pushPage('index.html');
    //alert(person_waist);
}

