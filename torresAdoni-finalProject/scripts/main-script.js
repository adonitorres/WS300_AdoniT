'use strict';
// global variables
let startText = $('.race-menu-container p'); // Text shown at start
let raceMenuBtn = $('.race-menu-button'); // Race menu container
let raceMenuList = $('.race-menu'); // Race menu list
let raceListItem = $('.race-menu li'); // Race menu list item
let race; // placeholder for selected race
let selectedRace = $('.race-selected'); // selected race
let selectedRaceDescription = $('.race-description'); // placeholder for selected race's description
let raceBonus = $('.race-bonus'); // placeholder for selected race's ability bonus(s)

let menu = $('.menu'); // '+' & '-' div for when Race menu is clicked

let rollMethodMenu = $('.roll-method-container'); // Roll Method menu container
let rollMethodText = $('.roll-method-container p') // text shown when Roll Method selection becomes available
let rollMethodMenuBtn = $('.roll-method-menu-button'); // Roll Method menu container button'
let rollMethodMenuList = $('.roll-method-menu'); // Roll Method menu list
let rollMethodMenuListItem = $('.roll-method-menu li'); // Roll Method menu list item
let rollMethod; // placeholder for selected roll method
let selectedRollMethod = $('.roll-method-selected'); // selected roll method
let selectedRollMethodDescription = $('.roll-method-description'); // placeholder for selected roll method's description

let oneRoll; // placeholder for one dice roll
let rollGroup = []; // placeholder for first group of rolls
let firstRoll = $('.roll-01 div'), 
    secondRoll = $('.roll-02 div'), 
    thirdRoll = $('.roll-03 div'), 
    fourthRoll = $('.roll-04 div'), 
    fifthRoll = $('.roll-05 div'), 
    sixthRoll = $('.roll-06 div');

// Race Menu open click event
raceMenuBtn.on('click', function(){
  if(raceMenuList.hasClass('active') != true){ // check to see if raceMenuList has the class of 'active'; if not, then add it which displays the list of races
    raceMenuList.addClass('active');
    menu.toggleClass('menu-open');
    startText.addClass('no-show');
  }else{
    raceMenuList.removeClass('active');
    menu.toggleClass('menu-open');
    startText.removeClass('no-show');
  }
}) // end raceMenu open click event

// select race
raceListItem.on('click', function(){
  race = $(this).text();  // gets text of li clicked
  // console.log(race);

  selectedRace.removeClass('no-show');
  selectedRace = selectedRace.text(race); // shows selected race to user
  selectedRaceDescription.removeClass('no-show');
  raceBonus.removeClass('no-show');

  switch(race){
    case 'Hill Dwarf':
      selectedRaceDescription.text('Hill Dwarf description here.');
      raceBonus.text('Hill Dwarf ability bonus(s) here.')
      break;
    case 'Mountain Dwarf':
      selectedRaceDescription.text('Mountain Dwarf description here.');
      raceBonus.text('Mountain Dwarf ability bonus(s) here.')
      break;
    case 'High Elf':
      selectedRaceDescription.text('High Elf description here.');
      raceBonus.text('High Elf ability bonus(s) here.')
      break;
    case 'Wood Elf':
      selectedRaceDescription.text('Wood Elf description here.');
      raceBonus.text('Wood Elf ability bonus(s) here.')
      break;
    case 'Dark Elf (Drow)':
      selectedRaceDescription.text('Dark Elf (Drow) description here.');
      raceBonus.text('Dark Elf (Drow) ability bonus(s) here.')
      break;
    case 'Lightfoot Halfling':
      selectedRaceDescription.text('Lightfoot Halfling description here.');
      raceBonus.text('Lightfoot Halfling ability bonus(s) here.')
      break;
    case 'Stout Halfling':
      selectedRaceDescription.text('Stout Halfling description here.');
      raceBonus.text('Stout Halfling ability bonus(s) here.')
      break;
    case 'Human':
      selectedRaceDescription.text('Human description here.');
      raceBonus.text('Human ability bonus(s) here.')
      break;
    case 'Dragonborn':
      selectedRaceDescription.text('Dragonborn description here.');
      raceBonus.text('Dragonborn ability bonus(s) here.')
      break;
    case 'Forest Gnome':
      selectedRaceDescription.text('Forest Gnome description here.');
      raceBonus.text('Forest Gnome ability bonus(s) here.')
      break;
    case 'Rock Gnome':
      selectedRaceDescription.text('Rock Gnome description here.');
      raceBonus.text('Rock Gnome ability bonus(s) here.')
      break;
    case 'Half-Elf':
      selectedRaceDescription.text('Half-Elf description here.');
      raceBonus.text('Half-Elf ability bonus(s) here.')
      break;
    case 'Half-Orc':
      selectedRaceDescription.text('Half-Orc description here.');
      raceBonus.text('Half-Orc ability bonus(s) here.')
      break;
    case 'Tiefling':
      selectedRaceDescription.text('Tiefling description here.');
      raceBonus.text('Tiefling ability bonus(s) here.')
      break;
  }

  $('.confirm').removeClass('no-show'); // show confirm button

  raceMenuList.removeClass('active');
})  // end select race click event

$('.confirm').on('click', function(){
  raceListItem.addClass('no-show');
  raceMenuBtn.addClass('no-show');
  selectedRaceDescription.addClass('no-show');
  $('.race-menu-container .menu').addClass('no-show');
  $(this).addClass('no-show');
  rollMethodMenu.removeClass('no-show');
}) // end confirm race click event

// Roll Method Menu open click event
rollMethodMenuBtn.on('click', function(){
  if(rollMethodMenuList.hasClass('active') != true){ // check to see if raceMenuList has the class of 'active'; if not, then add it which displays the list of races
    rollMethodMenuList.removeClass('no-show');
    rollMethodMenuList.addClass('active');
    menu.toggleClass('menu-open');
    rollMethodText.addClass('no-show');
  }else{
    rollMethodMenuList.addClass('no-show');
    rollMethodMenuList.removeClass('active');
    menu.toggleClass('menu-open');
  }
}) // end Roll Method Menu open click event

// select roll method
rollMethodMenuListItem.on('click', function(){
  rollMethod = $(this).text() + ' Roll Method';  // gets text of li clicked
  // console.log(rollMethod);

  selectedRollMethod.removeClass('no-show');
  selectedRollMethod = selectedRollMethod.text(rollMethod); // shows selected race to user
  selectedRollMethodDescription.removeClass('no-show');

  switch(rollMethod){
    case 'Random':
      selectedRollMethodDescription.text('Random roll method description here.');
      break;
    case 'Standard Array':
      selectedRollMethodDescription.text('Standard Array roll method description here.');
      break;
    case 'Manual':
      selectedRollMethodDescription.text('Manual roll method description here.');
      break;
    case 'Point Buy':
      selectedRollMethodDescription.text('Point Buy roll method description here.');
      break;
  }

  $('.continue').removeClass('no-show'); // show continue button

  rollMethodMenuList.removeClass('active');
})  // end select roll method click event

$('.continue').on('click', function(){
  rollMethodMenuListItem.addClass('no-show');
  rollMethodMenuBtn.addClass('no-show');
  selectedRollMethodDescription.addClass('no-show');
  $('.roll-method-container .menu').addClass('no-show');
  $(this).addClass('no-show');
  $('.roll').removeClass('no-show');
  $('.rolls').removeClass('no-show');
}) // end continue roll method click event

$('.roll').on('click', function(){
  firstRoll = groupRoll();
  console.log(firstRoll);
  // firstRoll = rollDice();
  // secondRoll = rollDice();
  // console.log(firstRoll);
  // console.log(secondRoll);
});

// single roll function
function rollDice(){
  oneRoll = getRandInt(1, 6);
  return oneRoll;
} // end rollDice()

// four roll function
function groupRoll(){
  rollGroup.push(rollDice(), rollDice(), rollDice(), rollDice()); // performs four rolls and adds them to the rollGroup array
  console.log(rollGroup);
  rollGroup.splice(rollGroup.indexOf(Math.min.apply(null, rollGroup)),1); // removes the lowest value in the array; will only remove one instance of the lowest value if more than one exists
  console.log(rollGroup);
  rollGroup = rollGroup[0] + rollGroup[1] + rollGroup[2]; // adds the remaining three values to get the total for that group roll
  return rollGroup;
}

// Random Number Generator
function getRandInt(min = 0, max = 100){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
} // end getRandInt()