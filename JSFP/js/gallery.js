/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image */
       
       var imageDiv = document.getElementById('image');
       imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
       
    /* 2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
      
       imageDiv.innerHTML = previewPic.alt;
       
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was */

        var imageDiv = document.getElementById('image');
        imageDiv.style.backgroundImage = "url('')";
       
    /* 2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
       imageDiv.innerHTML = 'Hover over an image below to display here.';
       }

const images = [
   'images/CoastalHeadland.webp',
   'images/CoastalHomes.webp',
   'images/CoastalRoad.webp',
   'images/CoastChalets.webp',
   'images/GreenCoast.webp',
   'images/PurpleCoast.webp'
];

function getRandomImage(array) {
   const randomIndex = Math.floor(Math.random() * array.length);
   return array[randomIndex];
}

function displayRandomImage() {
   const container = document.getElementById('imageContainer');
   const randomImageSrc = getRandomImage(images);

   const img = document.createElement('img');
   img.src = randomImageSrc;
   img.tabIndex = 0;
   container.appendChild(img);
}


window.onload = displayRandomImage;

document.addEventListener('DOMContentLoaded', () => {
   const imageContainerIds = ['image1', 'image2', 'image3'];
   const images = [
      'images/CoastalHeadland.webp',
      'images/CoastalHomes.webp',
      'images/CoastalRoad.webp',
      'images/CoastChalets.webp',
      'images/GreenCoast.webp',
      'images/PurpleCoast.webp'
   ];

   function getRandomImages(num, sourceArray) {
       let result = [];
       let tempArray = [...sourceArray];
       for (let i = 0; i < num; i++) {
           console.log("Image "+ i)
           const randomIndex = Math.floor(Math.random() * tempArray.length);
           result.push(tempArray[randomIndex]);
           tempArray.splice(randomIndex, 1);
       }
       return result;
   }

   const randomImages = getRandomImages(3, images);

   randomImages.forEach((image, index) => {
       const imageContainer = document.getElementById(imageContainerIds[index]);
       const imgElement = document.createElement('img');
       imgElement.src = image;
       imgElement.tabIndex = 0;
       imageContainer.appendChild(imgElement);
   });
});

document.addEventListener("DOMContentLoaded", function() {
   const gridContainer = document.getElementById('grid-container1');
   if (gridContainer !== null) {
       const gridItems = gridContainer.getElementsByClassName('preview');
       for (let i = 0; i < gridItems.length; i++) {
           gridItems[i].setAttribute('tabindex', '0');
       }
   }
});


 
