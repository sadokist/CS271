
function insertNewTwit(twitText, twitAuthor, twitImage, twitPrice) {

  var templateContext = {
    Skin_name: twitText,
    Weapon_type: twitAuthor,
    Image_file: twitImage,
    Price: twitPrice
  }

  var twitHTML = Handlebars.templates.twit(templateContext)
  console.log("==Twit:", twitHTML)
  console.log("==TwitTypeof:", typeof(twitHTML))
  console.log("Help", twitImage)


  var TwitContainer = document.querySelector(".twit-container");
  TwitContainer.insertAdjacentHTML("beforeend", twitHTML)

}

var allTwits = [];


function twitMatchesSearchQuery(twit, searchQuery) {
  
  if (!searchQuery) {
  
    return true;
  }

  searchQuery = searchQuery.trim().toLowerCase();

  return (twit.Skin_name).toLowerCase().indexOf(searchQuery) >= 0;
}

function twitMatchesAKQuery(twit, searchQuery) {
 
  if (!searchQuery) {
   
    return true;
  }

  searchQuery = searchQuery.trim().toLowerCase();

  return (twit.Weapon_type).toLowerCase().indexOf(searchQuery) >= 0;
}

function doSearchUpdate() {

  var searchQuery = document.getElementById('navbar-search-input').value;

  
  var twitContainer = document.querySelector('.twit-container');
  if (twitContainer) {
    while (twitContainer.lastChild) {
      twitContainer.removeChild(twitContainer.lastChild);
    }
  }

 
  allTwits.forEach(function (twit) {
    if (twitMatchesSearchQuery(twit, searchQuery)) {
      
      insertNewTwit(twit.Skin_name, twit.Weapon_type, twit.Image_file, twit.Price);
    }
  });
}

function SniperCatch(twit) {

  var  Sniper = "Sniper";
  Sniper = Sniper.trim().toLowerCase();

  if (twit.Weapon_type.toLowerCase().indexOf(Sniper) >= 0)  {
    console.log(twit)
    return false;
  }
  
  return true;

}

function akFilter() {
 
  var searchQuery = "Rifle"

 
  var twitContainer = document.querySelector('.twit-container');
  if (twitContainer) {
    while (twitContainer.lastChild) {
      twitContainer.removeChild(twitContainer.lastChild);
    }
  }

  allTwits.forEach(function (twit) {
    if (twitMatchesAKQuery(twit, searchQuery)) {
      if (SniperCatch(twit)) {
        insertNewTwit(twit.Skin_name, twit.Weapon_type, twit.Image_file, twit.Price);
      }
      
    }
  });
}

function awpFilter() {
 
  var searchQuery = "Sniper"

  
  var twitContainer = document.querySelector('.twit-container');
  if (twitContainer) {
    while (twitContainer.lastChild) {
      twitContainer.removeChild(twitContainer.lastChild);
    }
  }

  allTwits.forEach(function (twit) {
    if (twitMatchesAKQuery(twit, searchQuery)) {
      
      insertNewTwit(twit.Skin_name, twit.Weapon_type, twit.Image_file, twit.Price);
    }
  });
}


function parseTwitElem(twitElem) {
  var twit = {};

  var twitNameElem = twitElem.querySelector('.twit-text');
  twit.Skin_name = twitNameElem.textContent.trim();

  var twitWeaponLinkElem = twitElem.querySelector('.twit-weapon');
  twit.Weapon_type = twitWeaponLinkElem.textContent.trim();

  var twitResizeLinkElem = twitElem.querySelector('.resize').getAttribute("src");
  console.log("Flag:",twitResizeLinkElem)
  twit.Image_file = twitResizeLinkElem;

  var twitPriceLinkElem = twitElem.querySelector('.twit-author');
  twit.Price = twitPriceLinkElem.textContent.trim();

  return twit;
}

function parser(temp) {
  var c = ""
  for (let i = 1; i < temp.length; i++) {
    if (temp[i] == "-") {
        break;
    }
    if(temp[i] != ",") {
      c =  c + temp[i];
    }
    
}

d = parseInt(c);


  return d;
}

function priceFilter() {
  

  

  var temp = allTwits[1];
  var first;
  var second;

  for(var i = 0; i < allTwits.length; i++){
     
   
    for(var j = 0; j < ( allTwits.length - i -1 ); j++){
       
      first =  parser(allTwits[j].Price);
      second = parser(allTwits[j+1].Price);

      if(first > second){
          
      
        var temp = allTwits[j]
        allTwits[j] = allTwits[j + 1]
        allTwits[j+1] = temp
      }
    }
  }


  var twitContainer = document.querySelector('.twit-container');
  if (twitContainer) {
    while (twitContainer.lastChild) {
      twitContainer.removeChild(twitContainer.lastChild);
    }
  }

  allTwits.forEach(function (twit) {
    insertNewTwit(twit.Skin_name, twit.Weapon_type, twit.Image_file, twit.Price);
      
    
  });



 }




window.addEventListener('DOMContentLoaded', function () {
  
  var twitElemsCollection = document.getElementsByClassName('twit');
  for (var i = 0; i < twitElemsCollection.length; i++) {
  
    allTwits.push(parseTwitElem(twitElemsCollection[i]));
  }

  var createTwitButton = document.getElementById('create-twit-button');
  if (createTwitButton) {
    createTwitButton.addEventListener('click', showCreateTwitModal);
  }

  var modalCloseButton = document.querySelector('#create-twit-modal .modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', hideCreateTwitModal);
  }

  var modalCancalButton = document.querySelector('#create-twit-modal .modal-cancel-button');
  if (modalCancalButton) {
    modalCancalButton.addEventListener('click', hideCreateTwitModal);
  }


  var searchButton = document.getElementById('navbar-search-button');
  if (searchButton) {
    searchButton.addEventListener('click', doSearchUpdate);
  }

  var searchInput = document.getElementById('navbar-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', doSearchUpdate);
  }

  var akInput = document.getElementById('ak');
  if (akInput) {
    akInput.addEventListener('click', akFilter);
  }

  var awpInput = document.getElementById('awp');
  if (awpInput) {
    awpInput.addEventListener('click', awpFilter);
  }

  var priceInput = document.getElementById('price');
  if (priceInput) {
    priceInput.addEventListener('click', priceFilter);
  }


});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
