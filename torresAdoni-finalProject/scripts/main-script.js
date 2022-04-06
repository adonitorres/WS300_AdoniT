'use strict';
// global variables
let statContainer = $('.container'); // generator container
let startText = $('.race-menu-container p'); // Text shown at start
let raceMenuBtn = $('.race-menu-button'); // Race menu container
let raceMenuIcon = $('.race-menu-icon'); // Race menu container icon ('+' & '-' div)
let raceMenuList = $('.race-menu'); // Race menu list
let raceListItem = $('.race-menu li'); // Race menu list item
let race; // placeholder for selected race
let selectedRace = $('.race-selected'); // selected race
let selectedRaceDescription = $('.race-description'); // placeholder for selected race's description
let raceBonus = $('.race-bonus'); // placeholder for selected race's ability bonus(s)

let rollMethodMenu = $('.roll-method-container'); // Roll Method menu container
let rollMethodText = $('.roll-method-container p') // text shown when Roll Method selection becomes available
let rollMethodMenuBtn = $('.roll-method-menu-button'); // Roll Method menu container button
let rollMethodMenuIcon = $('.roll-method-menu-icon'); // Roll Method menu container icon ('+' & '-' div)
let rollMethodMenuList = $('.roll-method-menu'); // Roll Method menu list
let rollMethodMenuListItem = $('.roll-method-menu li'); // Roll Method menu list item
let rollMethod; // placeholder for selected roll method
let selectedRollMethod = $('.roll-method-selected'); // selected roll method
let selectedRollMethodDescription = $('.roll-method-description'); // placeholder for selected roll method's description

let singleStat; // placeholder for one 4d6 roll
let statArray = []; // placeholder for all six 4d6 rolls

let firstRoll = $('.roll-01 div');
let secondRoll = $('.roll-02 div');
let thirdRoll = $('.roll-03 div');
let fourthRoll = $('.roll-04 div');
let fifthRoll = $('.roll-05 div');
let sixRoll = $('.roll-06 div');

let singleScore;
let scoreArray = [];

// let abilityScore = $('.ability-score'); // placeholder for ability score divs

// Race menu open click event
raceMenuBtn.on('click', function(){
  if(raceMenuList.hasClass('active') != true){ // check to see if raceMenuList has the class of 'active'; if not, then add it which displays the list of races
    raceMenuList.addClass('active');
    raceMenuIcon.addClass('menu-open');
    startText.addClass('no-show');
    statContainer.css('min-height', 700);
  }else{
    raceMenuList.removeClass('active');
    raceMenuIcon.removeClass('menu-open');
    startText.removeClass('no-show');
    statContainer.css('min-height', 300);
  }
}) // end race menu open click event

// Race menu icon click event
raceMenuIcon.on('click', function(){
  if(raceMenuList.hasClass('active') != true){ // check to see if raceMenuList has the class of 'active'; if not, then add it which displays the list of races
    raceMenuList.addClass('active');
    raceMenuIcon.addClass('menu-open');
    startText.addClass('no-show');
    statContainer.css('min-height', 700);
  }else{
    raceMenuList.removeClass('active');
    raceMenuIcon.removeClass('menu-open');
    startText.removeClass('no-show');
    statContainer.css('min-height', 300);
  }
}) // end race menu icon click event

// select race li click event
raceListItem.on('click', function(){
  race = $(this).text();  // gets text of li clicked
  // console.log(race);

  selectedRace.removeClass('no-show');
  selectedRace = selectedRace.text(race); // shows selected race to user
  selectedRaceDescription.removeClass('no-show');
  raceBonus.removeClass('no-show');

  switch(race){
    case 'Hill Dwarf':
      selectedRaceDescription.html('Temporary description (full description commented out on line 79 in main-script.js)');
      raceBonus.html('Your <span>Constitution</span> score increases by <span>2</span> and your <span>Wisdom</span> score increases by <span>1</span>.')
      // temporarily hidden to make it faster to click through options
      // selectedRaceDescription.html('Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.<br><br>Dwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully. <span class="page">(PHB pg. 18)</span><br><br>As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerun in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting. <span class="page">(PHB pg. 20)</span>');
      // raceBonus.html('Your <span>Constitution</span> score increases by <span>2</span> and your <span>Wisdom</span> score increases by <span>1</span>.')
      // statContainer.css('min-height', 1350);
      break;
    case 'Mountain Dwarf':
      selectedRaceDescription.html("Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.<br><br>Dwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully. <span class='page'>(PHB pg. 18)</span><br><br>As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerun, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves. <span class='page'>(PHB pg. 20)</span>");
      raceBonus.html('Your <span>Constitution</span> score increases by <span>2</span> and your <span>Strength</span> score increases by <span>2</span>.')
      statContainer.css('min-height', 1400);
      break;
    case 'High Elf':
      selectedRaceDescription.html('Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world. <span class="page">(PHB pg. 21)</span><br><br>As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races. <span class="page">(PHB pg. 23)</span>');
      raceBonus.html('Your <span>Dexterity</span> score increases by <span>2</span> and your <span>Intelligence</span> score increases by <span>1</span>.')
      statContainer.css('min-height', 1400);
      break;
    case 'Wood Elf':
      selectedRaceDescription.html('Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world. <span class="page">(PHB pg. 21)</span><br><br>As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. I n FaerG.n, wood elves (also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves. <span class="page">(PHB pg. 24)</span>');
      raceBonus.html('Your <span>Dexterity</span> score increases by <span>2</span> and your <span>Wisdom</span> score increases by <span>1</span>.')
      statContainer.css('min-height', 1200);
      break;
    case 'Dark Elf (Drow)':
      selectedRaceDescription.html('Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world. <span class="page">(PHB pg. 21)</span><br><br>Descended from an earlier subrace of elves, the drow were banished from the surface world for following the goddess Lolth down the path of evil. Now they have built their own civilization in the depths of the Underdark, patterned after the Way of Lolth. <span class="page">(PHB pg. 24)</span>');
      raceBonus.html('Your <span>Dexterity</span> score increases by <span>2</span> and your <span>Charisma</span> score increases by <span>1</span>.')
      statContainer.css('min-height', 1050);
      break;
    case 'Lightfoot Halfling':
      selectedRaceDescription.html("The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings Jive out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along an dirt road or a raft floating downriver. <span class='page'>(PHB pg. 26)</span><br><br>As a lightfoot halfting, you can easily hide from notice, even using other people as cover. You're inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halftings have spread the farthest and thus are the most common variety.<br><br>Lightfoots are more prone to wanderlust than other halftings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halftings are called hairfeet or tallfellows. <span class='page'>(PHB pg. 28)</span>");
      raceBonus.html('Your <span>Dexterity</span> score increases by <span>2</span> and your <span>Charisma</span> score increases by <span>1</span>.')
      statContainer.css('min-height', 1475);
      break;
    case 'Stout Halfling':
      selectedRaceDescription.html("The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings Jive out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along an dirt road or a raft floating downriver. <span class='page'>(PHB pg. 26)</span><br><br>As a stout halfting, you're hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halftings are called stronghearts, and they're most common in the south. <span class='page'>(PHB pg. 28)</span>");
      raceBonus.html('Your <span>Dexterity</span> score increases by <span>2</span> and your <span>Constitution</span> score increases by <span>1</span>.')
      statContainer.css('min-height', 1250);
      break;
    case 'Human':
      selectedRaceDescription.html("In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds. <span class='page'>(PHB pg. 29)");
      raceBonus.html('<span>All</span> of your <span>ability</span> scores increase by <span>1</span>.')
      statContainer.css('min-height', 900);
      break;
    case 'Dragonborn':
      selectedRaceDescription.html('Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life. <span class="page">(PHB pg. 32)</span>');
      raceBonus.html('Your <span>Strength</span> score increases by <span>2</span> and your <span>Charisma</span> score increases by <span>1</span>.')
      statContainer.css('min-height', 850);
      break;
    case 'Forest Gnome':
      selectedRaceDescription.html('A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their closeknit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play. <span class="page">(PHB pg. 35)</span><br><br>As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. In the worlds of D&D, forest gnomes are rare and secretive. They gather in hidden communities in sylvan forests, using illusions and trickery to conceal themselves from threats or to mask their escape should they be detected. Forest gnomes tend to be friendly with other good-spirited woodland folk, and they regard elves and good fey as their most important allies. These gnomes also befriend small forest animals and rely on them for information about threats that might prowl their lands. <span class="page">(PHB pg. 37)</span>');
      raceBonus.html('Your <span>Intelligence</span> score increases by <span>2</span> and your <span>Dexterity</span> score increases by <span>1</span>.')
      statContainer.css('min-height', 1400);
      break;
    case 'Rock Gnome':
      selectedRaceDescription.html('A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their closeknit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play. <span class="page">(PHB pg. 35)</span><br><br>As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting. <span class="page">(PHB pg. 37)</span>');
      raceBonus.html('Your <span>Intelligence</span> score increases by <span>2</span> and your <span>Constitution</span> score increases by <span>1</span>.')
      statContainer.css('min-height', 1050);
      break;
    case 'Half-Elf':
      selectedRaceDescription.html('Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.<br><br>Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children.<br><br>Many half-elves, unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life. <span class="page">(PHB pg. 38)</span>');
      raceBonus.html('Your <span>Charisma</span> score increases by <span>2</span> and <span> two other ability</span> scores <span>of your choice</span> increase by <span>1</span>.')
      statContainer.css('min-height', 1200);
      break;
    case 'Half-Orc':
      selectedRaceDescription.html('Whether united under the leadership o f a mighty warlock or having fought to a standstill after years of conflict, ore and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-ores are born.<br><br>Some half-ores rise to become proud chiefs of ore tribes, their human blood giving them an edge over their full-blooded ore rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury. <span class="page">(PHB pg. 40)</span>');
      raceBonus.html('Your <span>Strength</span> score increases by <span>2</span> and your <span>Constitution</span> score increases by <span>1</span>.')
      statContainer.css('min-height', 1075);
      break;
    case 'Tiefling':
      selectedRaceDescription.html("To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefting. And to twist the knife, tiefiings know that this is because a pact struck generations ago infused the essence of Asmodeus-overlord of the Nine Hells-into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children's children will always be held accountable. <span class='page'>(PHB pg. 42)</span>");
      raceBonus.html('Your <span>Intelligence</span> score increases by <span>1</span> and your <span>Charisma</span> score increases by <span>2</span>.')
      statContainer.css('min-height', 850);
      break;
  }

  $('.confirm').removeClass('no-show'); // show confirm button

  raceMenuList.removeClass('active');
  raceMenuIcon.removeClass('menu-open');
})  // end select race li click event

// confirm button click event
$('.confirm').on('click', function(){
  raceListItem.addClass('no-show');
  raceMenuBtn.addClass('no-show');
  raceMenuIcon.addClass('no-show');
  selectedRaceDescription.addClass('no-show');
  $('.race-menu-container .menu').addClass('no-show');
  $(this).addClass('no-show');
  rollMethodMenu.removeClass('no-show');
  statContainer.css('min-height', 400);
}) // end confirm button click event

// roll method Menu open click event
rollMethodMenuBtn.on('click', function(){
  if(rollMethodMenuList.hasClass('active') != true){ // check to see if raceMenuList has the class of 'active'; if not, then add it which displays the list of races
    rollMethodMenuList.removeClass('no-show');
    rollMethodMenuList.addClass('active');
    rollMethodMenuIcon.addClass('menu-open');
    rollMethodText.addClass('no-show');
  }else{
    rollMethodMenuList.addClass('no-show');
    rollMethodMenuList.removeClass('active');
    rollMethodMenuIcon.removeClass('menu-open');
  }
}) // end roll method Menu open click event

// roll method menu icon click event
rollMethodMenuIcon.on('click', function(){
  if(rollMethodMenuList.hasClass('active') != true){ // check to see if rollMethodMenuList has the class of 'active'; if not, then add it which displays the list of roll methods
    rollMethodMenuList.addClass('active');
    rollMethodMenuIcon.addClass('menu-open');
    rollMethodText.addClass('no-show');
  }else{
    rollMethodMenuList.addClass('no-show');
    rollMethodMenuList.removeClass('active');
    rollMethodMenuIcon.removeClass('menu-open');
  }
}) // end roll method menu icon click event

// select roll method li click event
let rollMethodTitle;

rollMethodMenuListItem.on('click', function(){
  rollMethod = $(this).text();  // gets text of li clicked
  rollMethodTitle = rollMethod + ' Roll Method';

  selectedRollMethod.removeClass('no-show');
  selectedRollMethod = selectedRollMethod.text(rollMethodTitle); // shows selected roll method to user
  selectedRollMethodDescription.removeClass('no-show');

  switch(rollMethod){
    case 'Random':
      selectedRollMethodDescription.text('You are choosing to put the fate of your characters ability scores in the hands of the dice gods. This method will randomly complete all six rolls for you. Accepting these rolls will then randomly assign them between your ability scores.');
      statContainer.css('min-height', 650);
      break;
    case 'Standard Array':
      selectedRollMethodDescription.text("If you want to save time or don't  like the idea of randomly determining ability scores, you can use the following standard array instead: 15, 14, 13, 12, 10, and 8.");
      statContainer.css('min-height', 600);
      break;
    case 'Manual':
      selectedRollMethodDescription.text('Much like the Random Roll Method, this method will randomly complete all six rolls for you. If you accept these rolls, instead of randomly assigning them to your ability scores, you will be able to assign the rolls to the ability score of your choice.');
      statContainer.css('min-height', 650);
      break;
    case 'Point Buy':
      selectedRollMethodDescription.html('This method allows you the most customization possible. You have 27 points to spend on your ability scores but the cost of each score is specified in the Ability Score Point Cost table shown after you select this method.<br><br>Using this method, 15 is the highest ability score you can end up with, before applying racial increases. You cannot have a score lower than 8.');
      statContainer.css('min-height', 825);
      break;
  }

  $('.continue').removeClass('no-show'); // show continue button

  rollMethodMenuIcon.removeClass('menu-open');
  rollMethodMenuList.removeClass('active');
})  // end select roll method li click event

// continue button click event
$('.continue').on('click', function(){
  $('.roll-div').html('&nbsp;');
  rollMethodMenuListItem.addClass('no-show');
  rollMethodMenuBtn.addClass('no-show');
  rollMethodMenuIcon.addClass('no-show');
  selectedRollMethodDescription.addClass('no-show');
  $('.roll-method-container .menu').addClass('no-show');
  $(this).addClass('no-show');
  $('.roll-btn').removeClass('no-show');
  $('.rolls').removeClass('no-show');
  statContainer.css('min-height', 550);
}) // end continue button click event

// roll button click event
$('.roll-btn').on('click', function(){
  rollStat();
  $(this).addClass('no-show');
  $('.buttons').removeClass('no-show');
  statContainer.css('min-height', 620);
}) // end roll button click event


// generate a 4d6 roll, remove lowest roll, and insert into roll divs
function rollStat(){
  $('.roll-div').each( function(){
    singleStat = 0;
    statArray = [];
    for(let i = 0; i < 4; i++){
      let num = getRandInt(1, 6);
      statArray.push(num);
    }
    statArray.sort();
    statArray.shift();
    singleStat = statArray.reduce(totalStats);

    // console.log(singleStat);
    $(this).text(singleStat);
  })
} // end rollStat()

// sum up the remaining numbers for each 4d6 roll
function totalStats(total, num){
  return total + num;
} // end totalStats()

// accept button click event
$('.accept').on('click', function(){
  $(this).addClass('no-show');
  $('.re-roll').addClass('no-show');
  $('.start-over').addClass('no-show');
  $('.next').removeClass('no-show');
  $('.ability-score-container').removeClass('no-show');
  statContainer.css('min-height', 1050);
}) // end accept button click event

// re-roll button click event
$('.re-roll').on('click', function(){
  rollStat();
})  // end re-roll button click event

// start-over button click event
$('.start-over').on('click', function(){
  $(this).addClass('no-show');
  selectedRollMethod.addClass('no-show');
  rollMethodMenuBtn.removeClass('no-show');
  rollMethodMenuIcon.removeClass('no-show');
  rollMethodMenuListItem.removeClass('no-show');
  rollMethodText.removeClass('no-show');
  $('.rolls + .buttons').addClass('no-show');
  $('.rolls').addClass('no-show');
  $('.ability-score-container').addClass('no-show');
  statContainer.css('min-height', 400);
}) // end start-over button click event

// next button click event
$('.next').on('click', function(){
  
  firstRoll = firstRoll.text();
  secondRoll = secondRoll.text();
  thirdRoll = thirdRoll.text();
  fourthRoll = fourthRoll.text();
  fifthRoll = fifthRoll.text();
  sixRoll = sixRoll.text();

  let rollsArray = [firstRoll, secondRoll, thirdRoll, fourthRoll, fifthRoll, sixRoll];

  console.log(`Before shuffle: ${rollsArray}`);
  shuffle(rollsArray);
  console.log(`After shuffle: ${rollsArray}`);

  $('.ability-score').each( function(i){
    $(this).text(rollsArray[i]);
  })

  selectedRollMethod.addClass('no-show');
  $('.rolls').addClass('no-show');
  $(this).addClass('no-show')
  $('.ability-score-container .buttons').removeClass('no-show');
  $('.ability-score-container .start-over').removeClass('no-show');

  $('.ability-modifier').removeClass('hidden');

  $('.ability-score').each( function(){
    let score = $(this).text();
    let modText = getModifier(score);
    // console.log(modText);
    $(this).parent().next().text(modText);    
  })

  $('.ability-modifier').each( function(){
    let abilityScore = $('.ability-score').text();
    // console.log(abilityScore);
  })

  statContainer.css('min-height', 750);

}) // end next button click event


// start getModifier()
function getModifier(score){
  let mod = '';

  switch(score){
      case '1':
        mod += '-5';
        break;
      case '2':
      case '3':
        mod += '-4';
        break;

      case '4':
      case '5':
        mod += '-3';
        break;
      
      case '6':
      case '7':
        mod += '-2';
        break;

      case '8':
      case '9':
        mod += '-1';
        break;

      case '10':
      case '11':
        mod += '+0';
        break;

      case '12':
      case '13':
        mod += '+1';
        break;

      case '14':
      case '15':
        mod += '+2';
        break;

      case '16':
      case '17':
        mod += '+3';
        break;

      case '18':
      case '19':
        mod += '+4';
        break;

      case '20':
      case '21':
        mod += '+5';
        break;

      case '22':
      case '23':
        mod += '+6';
        break;

      case '24':
      case '25':
        mod += '+7';
        break;

      case '26':
      case '27':
        mod += '+8';
        break;

      case '28':
      case '29':
        mod += '+9';
        break;

      case '30':
        mod += '+10';
        break;
    }
// console.log(score, mod);
    return mod;
} // end getModifier()


// start applyBonus()
function applyBonus(raceBonus){
  let strScore = Number($('.str-score').text());
  let dexScore = Number($('.dex-score').text());
  let conScore = Number($('.con-score').text());
  let intScore = Number($('.int-score').text());
  let wisScore = Number($('.wis-score').text());
  let chaScore = Number($('.cha-score').text());
  console.log(`${strScore}, ${dexScore}, ${conScore}, ${intScore}, ${wisScore}, ${chaScore}`);
  let strMod = Number($('.str-modifier').text());
  let dexMod = Number($('.dex-modifier').text());
  let conMod = Number($('.con-modifier').text());
  let intMod = Number($('.int-modifier').text());
  let wisMod = Number($('.wis-modifier').text());
  let chaMod = Number($('.cha-modifier').text());
  console.log(`${strMod}, ${dexMod}, ${conMod}, ${intMod}, ${wisMod}, ${chaMod}`);

  // strScore = Number(strScore);
  // strScore = Number(strScore) + Number(strMod);
  console.log(strScore);
  strScore = strScore + strMod;
  // console.log(typeof(strScore));
  console.log(strScore);

  switch(raceBonus){
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
    case 'Hill Dwarf':
      conScore + 2;
      wisScore + 1;
      break;
  }


} // end applyBonus()



// shuffle array function
function shuffle(array) {
	for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	return array;
} // end shuffle()



// Random Number Generator
function getRandInt(min = 1, max = 100){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
} // end getRandInt()




// test arrow function for rolling a single d6
// incorporate this somewhere?
// const throwdice = () => ~~(Math.random() * 6) + 1;



/*

Point Buy Roll Method text:
This method of determining ability scores enables you to create a set of three high numbers and three low ones (15, 15, 1 5, 8, 8, 8), a set of numbers that are above average and nearly equal (13, 13, 13, 12 , 12 , 12), or any set of numbers between those extremes.


HTML for the Point Buy Roll Method Ability Score Cost Table:
<br><br><table><h2>Ability Score Cost Table</h2><tr><th>Score</th><th>Cost</th></tr><tr><td>8</td><td>0</td></tr><tr><td>9</td><td>1</td></tr><tr><td>10</td><td>2</td></tr><tr><td>11</td><td>3</td></tr><tr><td>12</td><td>4</td></tr><tr><td>13</td><td>5</td></tr><tr><td>14</td><td>7</td></tr><tr><td>15</td><td>9</td></tr></table>

*/