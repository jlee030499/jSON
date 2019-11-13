let outputElement = document.getElementById('outputElement');
let outputPara= document.getElementById('outputP');
let photoGrid = document.getElementById('photoGrid');

let photoBase = [
   {
     "title" : "Nice",
     "picture_url" : "nice.jpg",
     "color" : "white",
     "font" : "black",
     "facts" : ["Taken at 53rd & 6 ave", "Used a Canon 6D", "Nice Place to Drink Coffee"]
   },
   {
     "title" : "Hakone",
     "picture_url" : "hakone.jpg",
     "color" : "white",
     "font" : "black",
     "facts" : ["Taken at Hakone, Japan", "Used a Canon 6D", "One of the most beautiful places in the world"]
   },
   {
     "title" : "Golden",
     "picture_url" : "golden.jpg",
     "color" : "white",
     "font" : "black",
     "facts" : ["Taken at Battery Park", "Used a Samsung Galaxy S10E", "NYC has the best sunsets"]
   }
 ]

 for (var i = 0; i < photoBase.length; i++) {
   createElementnice(photoBase[i]);
 }

function createElementnice(incomingJSON){
  let photoElement = document.createElement("div");
  photoElement.style.backgroundColor = incomingJSON['color'];
  photoElement.style.color = incomingJSON['font'];
  photoElement.classList.add('photo');

  let titleOfPhoto = document.createElement("h2");
  titleOfPhoto.classList.add('photoTitle');
  titleOfPhoto.innerHTML = incomingJSON['title'];
  photoElement.appendChild(titleOfPhoto);

  let titleContent = document.createElement("h3");
  titleContent.innerHTML = "Some Facts";
  photoElement.appendChild(titleContent);

  for (var i = 0; i < incomingJSON['facts'].length; i++){
    var photoString = incomingJSON['facts'][i];
    var factItem = document.createElement('li');
    factItem.innerHTML = photoString;
    photoElement.appendChild(factItem);
  }

  let actualPhotoContainer = document.createElement("div");
  actualPhotoContainer.classList.add("photoCharacter");
  let actualPhoto = document.createElement("img");
  actualPhoto.src = incomingJSON['picture_url'];
  actualPhotoContainer.appendChild(actualPhoto);
  photoElement.appendChild(actualPhotoContainer);

  photoGrid.appendChild(photoElement);
}
