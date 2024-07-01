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
      { src: 'images/CoastalHeadland.webp', alt: 'A coastal headland view' },
      { src: 'images/CoastalHomes.webp', alt: 'Homes along the coast' },
      { src: 'images/CoastalRoad.webp', alt: 'A coastal road' },
      { src: 'images/CoastChalets.webp', alt: 'Chalets on the coast' },
      { src: 'images/GreenCoast.webp', alt: 'A green coastal area' },
      { src: 'images/PurpleCoast.webp', alt: 'A purple-tinted coastal scene' }
   ];

function getRandomImage(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
   return array[randomIndex];
   }

function displayRandomImage() {
   const container = document.getElementById('imageContainer');
   const randomImage = getRandomImage(images);

   const img = document.createElement('img');
   img.src = randomImage.src;
   img.alt = randomImage.alt;
   img.tabIndex = 0;
   container.appendChild(img);
   }
     


window.onload = displayRandomImage;

document.addEventListener('DOMContentLoaded', () => {
   const imageContainerIds = ['image1', 'image2', 'image3'];
   const images = [
       { src: 'images/CoastalHeadland.webp', alt: 'A coastal headland view' },
       { src: 'images/CoastalHomes.webp', alt: 'Homes along the coast' },
       { src: 'images/CoastalRoad.webp', alt: 'A coastal road' },
       { src: 'images/CoastChalets.webp', alt: 'Chalets on the coast' },
       { src: 'images/GreenCoast.webp', alt: 'A green coastal area' },
       { src: 'images/PurpleCoast.webp', alt: 'A purple-tinted coastal scene' }
   ];

   function getRandomImages(num, sourceArray) {
       let result = [];
       let tempArray = [...sourceArray];
       for (let i = 0; i < num; i++) {
           console.log("Image " + i)
           const randomIndex = Math.floor(Math.random() * tempArray.length);
           result.push(tempArray[randomIndex]);
           tempArray.splice(randomIndex, 1);
       }
       return result;
   }

   const randomImages = getRandomImages(3, images);

   randomImages.forEach((imageObject, index) => {
       const imageContainer = document.getElementById(imageContainerIds[index]);
       const imgElement = document.createElement('img');
       imgElement.src = imageObject.src;
       imgElement.alt = imageObject.alt;
       imgElement.tabIndex = 0;
       imageContainer.appendChild(imgElement);
   });
});



 
