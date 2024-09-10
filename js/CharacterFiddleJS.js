//Character Fiddle JS

// -------------------------------------------------- Spell Cards Load In --------------------------------------------------

//Flippy spell cards for DnD sheet
var flipCards = document.getElementsByClassName("flip-card");

  for (var i = 0; i < flipCards.length; i++)  {
    flipCards[i].addEventListener("click", function cardFlip() {
      this.classList.toggle("flipped");
    });
  }

// ----------------------------------- Main Button Active Toggle --------------------------------------------------

//get all buttons
var btns = document.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++)  {
    //add listener to all buttons
    btns[i].addEventListener("click", function() {
        //get the clicked element and the container it's in
        var button = event.target;
        var parentContainer = button.parentElement;

        //get all buttons in the container with it
        var buttons = parentContainer.getElementsByClassName("btn");
        var buttonsLen = buttons !== null ? buttons.length : 0;

        //remove active class from all buttons in container
        for (let i = 0; i < buttonsLen; i++) {   
            buttons[i].classList.remove("activebtn"); 
            //and add to this one
            button.classList.add("activebtn");
        }
    });
}

// ------------------------------------------------------------ Main Tab Toggle ---------------------------------------------
function openTab(evt, tabName, tabContainer) {
    var tabsContainer = document.getElementById(tabContainer);
    var currenttab = document.getElementById(tabName);

      //For the main page tabs
      if (tabContainer == 'Main-Tabs-Wrapper') {
        var tabContent = tabsContainer.getElementsByClassName("tab-content");
        //Get all elements with class="inactive-tab" and remove the class "active"
          for (i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove("active");
        }
        currenttab.classList.add("active");
    }

    //For the details tabs
      if (tabContainer == "details") {
        var detailsContent = tabsContainer.getElementsByClassName("details-content");
        //Get all elements with class="inactive-tab" and remove the class "active"
          for (i = 0; i < detailsContent.length; i++) {
            detailsContent[i].classList.remove("active");
        }
        currenttab.classList.add("active");
    }

    //For the spells, metamagic, and other dnd tabs
      if (tabContainer == "spells" || tabContainer == "metamagic" || tabContainer == "hound-of-ill-omen") {
        var detailsContent = tabsContainer.getElementsByClassName("level-spell-list");
        //Get all tabs and remove the class "active"
          for (i = 0; i < detailsContent.length; i++) {
            detailsContent[i].classList.remove("active");
        }
        currenttab.classList.add("active");
    }

    //For the family tabs
      if (tabContainer == "family" || tabContainer == "party" || tabContainer == "other-relations") {
        var relationshipContent = tabsContainer.getElementsByClassName("relationship-content");
        //Get all elements with class="inactive-tab" and remove the class "active"
          for (i = 0; i < relationshipContent.length; i++) {
            relationshipContent[i].classList.remove("active");
        }
        currenttab.classList.add("active");
    }

}

// ------------------------------------------------------------ New Modal code ------------------------------------------------------------

function openModal(evt, itemNumber, container) {
  // Declare all variables
  var i, items, modalContainer;

  var modalContainer = document.getElementById(container);

  // Get all modal items, remove open from all
  var items = modalContainer.getElementsByClassName("modal-item");
  
  for (i = 0; i < items.length; i++) {
    items[i].classList.remove("open");
  
   // Add open to selected container, and the main container
   var currenttab = document.getElementById(itemNumber);
    currenttab.classList.add("open");
    modalContainer.classList.add("open");
    }

  //Modal nav buttons
      var nextButtons = modalContainer.querySelectorAll(".next");
      var backButtons = modalContainer.querySelectorAll(".back");
      let lastBtn = nextButtons[nextButtons.length - 1];
      let firstBtn = backButtons[0];

      //Deactivate the first and last next/prev buttons
      firstBtn.classList.add("inactive");
      lastBtn.classList.add("inactive");
      firstBtn.disabled = true;
      lastBtn.disabled = true;

      //Add event listener to step through images, next and previous on click
      nextButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
          items[index].classList.remove("open");
          items[index + 1].classList.add("open");

          //flip card: auto flip the card if there is one
          var currenttabCard = document.querySelector(".modal-item.open");
          var card = currenttabCard.querySelector(".flip-card");

          if (typeof card !== 'undefined' && card !== null) {
            setTimeout(function(){
              card.classList.add("flipped");
            }, 200);
          }
        });
      });

      backButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
          items[index - 1].classList.add("open");
          items[index].classList.remove("open");

          //flip card: auto flip the card if there is one
          var currenttabCard = document.querySelector(".modal-item.open");
          var card = currenttabCard.querySelector(".flip-card");

          if (typeof card !== 'undefined' && card !== null) {
            setTimeout(function(){
              card.classList.add("flipped");
            }, 200);
          }
        });
      });
}

//Arrow Key Navigation & Hide
      window.addEventListener('keydown', function (event) {
        //Get the currently open modal container
        var modalContainer = document.querySelector(".open.big-modal")
        //Run code only if there is an open modal
          if (typeof modalContainer !== 'undefined' && modalContainer !== null) {
          var nowOpenTab = modalContainer.querySelector(".open.modal-item");
          var currentNext = nowOpenTab.querySelector(".next");
          var currentBack = nowOpenTab.querySelector(".back");
          var items = modalContainer.getElementsByClassName("modal-item");

          //hide the modal with escape key
          if (event.key === 'Escape') {
            modalContainer.classList.remove("open");

          // And remove open from all modal items
            for (i = 0; i < items.length; i++) {
              items[i].classList.remove("open");
            }
          }

          //If the right arrow key is clicked, click the next button on the open modal
          if (event.key === 'ArrowRight') {
            currentNext.click();
          }

          //If the left arrow key is clicked, click the back button on the open modal
          if (event.key === 'ArrowLeft') {
            currentBack.click();
          }
        }
      })


//Close w button
  function closeModal(evt, container) {
     var modalContainer = document.getElementById(container);
     modalContainer.classList.remove("open");
   }

//Music Container Modal
  function openMusic() {
    var musicContainer = document.getElementById("music-container");
    musicContainer.classList.add("open");
  }

  window.addEventListener('keydown', function (event) {
    var musicContainer = document.getElementById("music-container");
    if (event.key === 'Escape') {
      musicContainer.classList.remove("open");
    }
  })

  //Close w button
  var musicContainer = document.getElementById("music-container");
  function closeMusic() {
     musicContainer.classList.remove("open");
   }

//Tab Height Variable VH
  window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  var body = document.getElementsByTagName('body')[0];
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  if (window.pageYOffset + window.innerHeight - (body.offsetTop + body.scrollHeight) > -250) {
      window.scrollTo({ top: offset, left: 0, behavior: "smooth", });
  }
});

  const offset = document.body.scrollHeight;
  var body = document.getElementsByTagName('body')[0];

  window.addEventListener('scrollend', function() {
  if (window.pageYOffset + window.innerHeight - (body.offsetTop + body.scrollHeight) > -200) {
      window.scrollTo({ top: offset, left: 0, behavior: "smooth", });
  }
});

// -------------------------------------------------- All Dressup code ----------------------------------------------------------------------

  //Now-Playing function for album covers (desktop)

  var songList = document.getElementById("song-list");
  //get the song container
  var playButtons = songList.querySelectorAll("audio");
  //get all the individual song players

  var coverList = document.getElementById("album-covers");
  //get the album container
  var albumCovers = coverList.querySelectorAll("img");
    var albumCoversLen = albumCovers !== null ? albumCovers.length : 0;
  //get all covers in the album

  playButtons.forEach(function(button, index) {
        button.addEventListener("play", function() {
            var nowPlaying = albumCovers[index];
            //get the album cover with an index matching that of the clicked song

            for (let i = 0; i < albumCoversLen; i++) {
            //for all albums, remove "now-playing"
              albumCovers[i].classList.remove("now-playing");
              if (i !== index) {
                //pause all players except the one that was clicked
                playButtons[i].pause();
              }
            }

            nowPlaying.classList.add("now-playing");
            //add "now-playing" to the clicked song's album cover
        });
      });

// -------------------------------------------------- All Dressup code ----------------------------------------------------------------------

// Display clothing layers on click of checkbox, with subsection for hair
function outfitDisplay(evt, clothingName, toggleName) {
    const checkbox = event.target;
    var otherboxes = document.getElementsByClassName(toggleName);
        var otherboxeslen = otherboxes !== null ? otherboxes.length : 0;
    var parentDiv = checkbox.parentElement;
    var clothingImages = document.getElementsByClassName(clothingName);
        var clothingImageslen = clothingImages !== null ? clothingImages.length : 0;

    for (let i = 0; i < clothingImageslen; i++) {
        // If the checkbox is checked, display the clothing image
        if (checkbox.checked) {
            clothingImages[i].classList.add('clothing-visible');
            for (let i = 0; i < otherboxeslen; i++) {
            // And check all other boxes of the same name
              otherboxes[i].checked = true;
            };
        } else {
          // If not, hide the clothing images
            clothingImages[i].classList.remove('clothing-visible');
            for (let i = 0; i < otherboxeslen; i++) {
            // And uncheck all other boxes of the same name
              otherboxes[i].checked = false;
            };
        }
    }

    if (parentDiv.classList.contains("hair")) {
        var haircontainer = document.getElementById('Hair');
        //Get checkboxes specifically in the hair DIV
        var checkboxes = haircontainer.getElementsByTagName("input");
        var checkboxesLen = checkboxes !== null ? checkboxes.length : 0;

        for (let i = 0; i < checkboxesLen; i++) {
            //if the checkbox is clicked, make all boxes checkable, and click the checked one
            if (checkboxes[i].checked) {
                checkboxes[i].disabled = false;
                checkboxes[i].click();
                // Then re-click this one and re-add the class
                checkbox.click();
                // Then, disable any checked boxes
                if (checkbox.checked) {
                    checkbox.disabled = true;
                } else {
                    checkbox.disabled = false;
                }
            }
        }
    }

    if (parentDiv.classList.contains("shirt-toggle")) {
        var outfitcontainer = document.getElementById('all-outfits');
        var checkboxes = outfitcontainer.getElementsByTagName("input");
          var checkboxesLen = checkboxes !== null ? checkboxes.length : 0;

        for (let i = 0; i < checkboxesLen; i++) {
          //if the parent element contains shirt-toggle,
          if (checkboxes[i].parentElement.classList.contains("shirt-toggle")) {
            //and the checkbox is clicked, click it
            if (checkboxes[i].checked) {
                checkboxes[i].click();
          // Then re-click this one and re-add the class
                checkbox.click();
            }
        }
      }
    }

    if (parentDiv.classList.contains("ribbon-toggle")) {
        var outfitcontainer = document.getElementById('all-outfits');
        var checkboxes = outfitcontainer.getElementsByTagName("input");
          var checkboxesLen = checkboxes !== null ? checkboxes.length : 0;

        for (let i = 0; i < checkboxesLen; i++) {
          //if the parent element contains shirt-toggle,
          if (checkboxes[i].parentElement.classList.contains("ribbon-toggle")) {
            //and the checkbox is clicked, click it
            if (checkboxes[i].checked) {
                checkboxes[i].click();
          // Then re-click this one and re-add the class
                checkbox.click();
            }
        }
      }
    }
}

function outfitToggle(evt, OutfitContainer) {
  // Toggle entire outfit's visibility
     var container = document.getElementById(OutfitContainer);
    const button = container.querySelector(".outfit-toggle");
    var checkboxes = container.getElementsByTagName("input");
        var checkboxesLen = checkboxes !== null ? checkboxes.length : 0;

    var dressupcontainer = document.querySelector(".outfit-options-wrapper");
    var toggles = dressupcontainer.getElementsByClassName("outfit-toggle");
        var togglesLen = toggles !== null ? toggles.length : 0;
    var allboxes = dressupcontainer.getElementsByTagName("input");
      var allboxesLen = allboxes !== null ? allboxes.length : 0;
    
    // If button has the hide class, click any checked boxes to uncheck them and to hide clothing images, toggle hide on toggle button
    if (button.classList.contains("hide")) {  
      for(let i = 0; i < checkboxesLen; i++) {
        if (checkboxes[i].checked) {
        checkboxes[i].click();
        button.classList.remove('hide');}
        }
    } else {
      // Otherwise, we need to hide ALL OTHER clothing items
      // Find all checked checkboxes in the outfit container, and click them all to uncheck + hide
      for(let i = 0; i < allboxesLen; i++) {
        if (allboxes[i].checked) {
        allboxes[i].click();}
        }
      // If toggles have the hide class, remove it,
      for(let i = 0; i < togglesLen; i++) {
         if(toggles[i].classList.contains("hide")) {
            toggles[i].classList.toggle("hide");
          }
        }
      // And finally, mark all boxes as unchecked, click them to show clothing images, and toggle hide off on the clicked button
        for(i=0; i < checkboxesLen; i++) {
          checkboxes[i].checked = false;
          checkboxes[i].click();
        }
          button.classList.toggle('hide');
      }
}

//Consider rewriting logic for the jacket/bracer masks, using a passed variable to indicate what kind it is vs the function name

// Add a mask to all shirts when the jacket is selected 
  function jacketMask() {
    var shirts = document.querySelectorAll(".shirt, .shirt-back, .necklace"),
      len = shirts !== null ? shirts.length : 0,
      i = 0;

    for(i; i < len; i++) {
      shirts[i].classList.toggle("mask");
    }
  }

  // Add a mask to all shirts when the right bracer is selected 
  function bracerMask() {
    var shirts = document.querySelectorAll(".shirt, .shirt-back"),
      len = shirts !== null ? shirts.length : 0,
      i = 0;

    for(i; i < len; i++) {
      if (shirts[i].classList.contains("bracer-mask") || document.querySelector(".bracerright.clothing-visible") == null) {
        //if shirts contain bracer-mask, AND the right bracer is not visible, remove the mask
        shirts[i].classList.remove("bracer-mask"); 

      } else if (!shirts[i].classList.contains("bracer-mask") || document.querySelector(".bracerright.clothing-visible") !== null) {
        shirts[i].classList.add("bracer-mask");
        //if shirts contain don't bracer-mask, AND the right bracer IS visible, add the mask
      }
    }
  }

// Select hairstyle from the reccommended menu
  function hairClick(evt, hairStyle) {
    var hair = document.getElementById(hairStyle);
      hair.click();
  }

// Front/Back toggle for mobile dressup 
function frontBackToggle() {
  var button = document.getElementById("Front-Back-Toggle");
  var layers = document.querySelectorAll(".base, .layer"),
        len = layers !== null ? layers.length : 0,
        i = 0;

  for(i; i < len; i++) {
          layers[i].classList.toggle('single-view-back');
        }
  button.classList.toggle('toggle-back');
}
    // Show/Hide colour swatches, and toggle so only one is open
  function showHide(evt, buttonclick, otherContainer) {
    const button = event.target;
    var parentDiv = button.parentElement;
    var swatches = parentDiv.getElementsByClassName("swatch");
      swatchesLen = swatches !== null ? swatches.length : 0;

    var otherbutton = document.getElementById(buttonclick);
    var secondContainer = document.getElementById(otherContainer);
    var otherswatches = secondContainer.getElementsByClassName("swatch"),
      otherswatchesLen = otherswatches !== null ? otherswatches.length : 0,
          i = 0;

    if (button.classList.contains("open")) {
      for(let i = 0; i < swatchesLen; i++) {
        swatches[i].classList.add("hide");
      }
        otherbutton.classList.remove("open");
        secondContainer.classList.remove("open");
        button.classList.toggle("open");
        parentDiv.classList.toggle("open");

    } else {

        for(let i = 0; i < swatchesLen; i++) {
          swatches[i].classList.remove("hide");
        }

        for(let i = 0; i < otherswatchesLen; i++) {
          otherswatches[i].classList.add("hide");
        }

        otherbutton.classList.remove("open");
        secondContainer.classList.remove("open");
        button.classList.toggle("open");
        parentDiv.classList.toggle("open");
      }
  }

// Copy Swatch colour to clipboard (based on custom value, not actual colour)

function colourCode(evt, bgColour) {
  var swatch = event.target;
  var tooltip = swatch.querySelector("span");
  var originaltext = tooltip.innerHTML;

  navigator.clipboard.writeText(bgColour);
  tooltip.innerHTML = "copied!";

  setTimeout(function() {
    tooltip.innerHTML = originaltext;
  }, 800);
}

  function tabNav(evt, tab) {
    document.getElementById(tab).click();
  }


// -------------------------------------------------- Misc Character Page Code ----------------------------------------------------------------------

// Simple visibility toggle for paired elements

  function fadeSwap(evt, Pair) {
    var item1 = document.getElementById(Pair);
    var item2 = document.getElementById(Pair + "Back");
    var button = evt.target;
    // Get both elements, with IDs labelled with Pair and PairBack
    // Meant to work with eye icon from fontawesome as the button

    if (item1.classList.contains("visible")) {
      item1.classList.remove("visible");
      item2.classList.add("visible");
    } else if (item2.classList.contains("visible")) {
      item2.classList.remove("visible");
      item1.classList.add("visible");
    }

    if (button.classList.contains("fa-solid")) {
      button.classList.remove("fa-solid");
      button.classList.add("no-bg");
    } else if (button.classList.contains("no-bg")) {
      button.classList.remove("no-bg");
      button.classList.add("fa-solid");
    }
  }


// Random Number Generator to append to IMGs for variable images

  window.addEventListener("load", randomImage);
  //fire on load

  function randomImage() {
    var imageContainers = document.querySelectorAll(".random-image");
    imageContainersLen = imageContainers !== null ? imageContainers.length : 0;
    //get all random image containers

    for(let i = 0; i < imageContainersLen; i++) {
      var images = imageContainers[i].getElementsByTagName("img");
      imagesLen = images !== null ? images.length : 0;
      //get all images within them
          var shownImage = images[Math.floor(Math.random()*images.length)];
          //show a random image from the array
          shownImage.classList.add("visible");
    }
  }

// Random Number Generator -- this one shows multiple random images in a div. Consider for belt items

  //need to add listener on load

  //update classes to be unique, if this code gets used
  function randomizedImagesAll() {
    var imageContainers = document.querySelectorAll(".random-image");
    imageContainersLen = imageContainers !== null ? imageContainers.length : 0;
    //get all random image containers
    console.log(imageContainers);

    for(let i = 0; i < imageContainersLen; i++) {
      var images = imageContainers[i].getElementsByTagName("img");
      imagesLen = images !== null ? images.length : 0;
      //get all images within them
      console.log(images);
        for(let i = 0; i < imagesLen; i++) {
          var shownImage = images[Math.floor(Math.random()*images.length)];
          //show a random number of them
          console.log(shownImage);
          shownImage.classList.add("test");
        }
    }
  }


