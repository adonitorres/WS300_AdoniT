'use strict';
// global variables
let startText = $('.race-menu-container p'); // Text shown at start
let raceMenuBtn = $('.race-menu-button'); // Race menu container
let raceMenuList = $('.race-menu'); // Race menu list
let raceListItem = $('.race-menu li'); // Race menu list
let race; // placeholder for selected race
let selectedRace = $('.race-selected'); // selected race
let selectedRaceDescription = $('.race-description'); // placeholder for selected race's description

let menu = $('.menu'); // '+' & '-' div for when Race menu is clicked
const rollMethod = ['random', 'standard array', 'manual', 'point buy']; // array of roll methods

// Race Menu
// open dropdown menu
raceMenuBtn.on('click', function(){
  if(raceMenuList.hasClass('active') != true){ // check to see if raceMenuList has the class of 'active'; if not, then add it which displays the list of races
    raceMenuList.addClass('active');
    menu.toggleClass('menu-open');
  }else{
    raceMenuList.removeClass('active');
    menu.toggleClass('menu-open');
  }
}) // end raceMenu open click event

// select race
raceListItem.on('click', function(){
  race = $(this).text();  // gets text of li clicked
  console.log(race);

  selectedRace.removeClass('no-show');
  selectedRace = selectedRace.text(race); // shows selected race to user
  selectedRaceDescription.removeClass('no-show');

  switch(race){
    case 'Hill Dwarf':
      selectedRaceDescription.text('Hill Dwarf Description here.');
      break;
    case 'Mountain Dwarf':
      selectedRaceDescription.text('Mountain Dwarf Description here.');
      break;
    case 'High Elf':
      selectedRaceDescription.text('High Elf Description here.');
      break;
    case 'Wood Elf':
      selectedRaceDescription.text('Wood Elf Description here.');
      break;
    case 'Dark Elf (Drow)':
      selectedRaceDescription.text('Dark Elf (Drow) Description here.');
      break;
    case 'Lightfoot Halfling':
      selectedRaceDescription.text('Lightfoot Halfling Description here.');
      break;
    case 'Stout Halfling':
      selectedRaceDescription.text('Stout Halfling Description here.');
      break;
    case 'Human':
      selectedRaceDescription.text('Human Description here.');
      break;
    case 'Dragonborn':
      selectedRaceDescription.text('Dragonborn Description here.');
      break;
    case 'Forest Gnome':
      selectedRaceDescription.text('Forest Gnome Description here.');
      break;
    case 'Rock Gnome':
      selectedRaceDescription.text('Rock Gnome Description here.');
      break;
    case 'Half-Elf':
      selectedRaceDescription.text('Half-Elf Description here.');
      break;
    case 'Half-Orc':
      selectedRaceDescription.text('Half-Orc Description here.');
      break;
    case 'Tiefling':
      selectedRaceDescription.text('Tiefling Description here.');
      break;
  }

  $('.confirm').removeClass('no-show'); // show confirm button

  raceMenuList.removeClass('active');
})  // end select race click event


// Random Number Generator
function getRandInt(min = 0, max = 100){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
} // end getRandInt()