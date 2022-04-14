(function(){
  'use strict';
  // global variables
  let statContainer = $('.container'), // generator container
      startText = $('.race-menu-container p'), // Text shown at start
      raceMenuBtn = $('.race-menu-button'), // Race menu container
      raceMenuIcon = $('.race-menu-icon'), // Race menu container icon ('+' & '-' div)
      raceMenuList = $('.race-menu'), // Race menu list
      raceListItem = $('.race-menu li'), // Race menu list item
      race, // placeholder for selected race
      selectedRace = $('.race-selected'), // selected race
      selectedRaceDescription = $('.race-description'), // placeholder for selected race's description
      raceBonus = $('.race-bonus'), // placeholder for selected race's ability bonus(s)
      selectedRollMethod = $('.roll-method-selected'), // selected roll method
      selectedRollMethodDescription = $('.roll-method-description'), // placeholder for selected roll method's description
      singleStat, // placeholder for one 4d6 roll
      statArray = [], // placeholder for all six 4d6 rolls
      firstRoll = $('.roll-01 div'),
      secondRoll = $('.roll-02 div'),
      thirdRoll = $('.roll-03 div'),
      fourthRoll = $('.roll-04 div'),
      fifthRoll = $('.roll-05 div'),
      sixRoll = $('.roll-06 div'),
      rollsArray = [],
      singleScore,
      scoreArray = [],
      abilityScore = $('.ability-score'), // placeholder for ability score divs
      strScore,
      dexScore,
      conScore,
      intScore,
      wisScore,
      chaScore,
      strBonus = Number(),
      dexBonus = Number(),
      conBonus = Number(),
      intBonus = Number(),
      wisBonus = Number(),
      chaBonus = Number(),
      strMod = Number($('.str-modifier').text()),
      dexMod = Number($('.dex-modifier').text()),
      conMod = Number($('.con-modifier').text()),
      intMod = Number($('.int-modifier').text()),
      wisMod = Number($('.wis-modifier').text()),
      chaMod = Number($('.cha-modifier').text()),
      continueBtn = $('.continue'),
      lastStartOver = $('.last-start-over');

  // Race menu open click event
  raceMenuBtn.on('click', function(){
    selectedRace.addClass('no-show');
    selectedRaceDescription.addClass('no-show');
    raceBonus.addClass('no-show');
    $('.confirm').addClass('no-show');
    if(!raceMenuList.hasClass('active')){ // check to see if raceMenuList has the class of 'active'; if not, then add it which displays the list of races
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
    if(!raceMenuList.hasClass('active')){ // check to see if raceMenuList has the class of 'active'; if not, then add it which displays the list of races
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

    selectedRace.removeClass('no-show');
    selectedRace = selectedRace.text(race); // shows selected race to user
    selectedRaceDescription.removeClass('no-show');
    raceBonus.removeClass('no-show');

    switch(race){
      case 'Hill Dwarf':
        // selectedRaceDescription.html('Temporary description (full description commented out in main-script.js)');
        selectedRaceDescription.html('Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.<br><br>Dwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully. <span class="page">(PHB pg. 18)</span><br><br>As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerun in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting. <span class="page">(PHB pg. 20)</span>');
        raceBonus.html('Your <span>Constitution</span> score increases by <span>2</span> and your <span>Wisdom</span> score increases by <span>1</span>.')
        conBonus += 2;
        wisBonus += 1;
        statContainer.css('min-height', 1350);
        break;
      case 'Mountain Dwarf':
        selectedRaceDescription.html("Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.<br><br>Dwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully. <span class='page'>(PHB pg. 18)</span><br><br>As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerun, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves. <span class='page'>(PHB pg. 20)</span>");
        raceBonus.html('Your <span>Constitution</span> score increases by <span>2</span> and your <span>Strength</span> score increases by <span>2</span>.')
        conBonus += 2;
        strBonus += 1;
        statContainer.css('min-height', 1400);
        break;
      case 'High Elf':
        selectedRaceDescription.html('Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world. <span class="page">(PHB pg. 21)</span><br><br>As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races. <span class="page">(PHB pg. 23)</span>');
        raceBonus.html('Your <span>Dexterity</span> score increases by <span>2</span> and your <span>Intelligence</span> score increases by <span>1</span>.')
        dexBonus += 2;
        intBonus += 1;
        statContainer.css('min-height', 1400);
        break;
      case 'Wood Elf':
        selectedRaceDescription.html('Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world. <span class="page">(PHB pg. 21)</span><br><br>As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. I n FaerG.n, wood elves (also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves. <span class="page">(PHB pg. 24)</span>');
        raceBonus.html('Your <span>Dexterity</span> score increases by <span>2</span> and your <span>Wisdom</span> score increases by <span>1</span>.')
        dexBonus += 2;
        wisBonus += 1;
        statContainer.css('min-height', 1200);
        break;
      case 'Dark Elf (Drow)':
        selectedRaceDescription.html('Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world. <span class="page">(PHB pg. 21)</span><br><br>Descended from an earlier subrace of elves, the drow were banished from the surface world for following the goddess Lolth down the path of evil. Now they have built their own civilization in the depths of the Underdark, patterned after the Way of Lolth. <span class="page">(PHB pg. 24)</span>');
        raceBonus.html('Your <span>Dexterity</span> score increases by <span>2</span> and your <span>Charisma</span> score increases by <span>1</span>.')
        dexBonus += 2;
        chaBonus += 1;
        statContainer.css('min-height', 1050);
        break;
      case 'Lightfoot Halfling':
        selectedRaceDescription.html("The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings Jive out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along an dirt road or a raft floating downriver. <span class='page'>(PHB pg. 26)</span><br><br>As a lightfoot halfting, you can easily hide from notice, even using other people as cover. You're inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halftings have spread the farthest and thus are the most common variety.<br><br>Lightfoots are more prone to wanderlust than other halftings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halftings are called hairfeet or tallfellows. <span class='page'>(PHB pg. 28)</span>");
        raceBonus.html('Your <span>Dexterity</span> score increases by <span>2</span> and your <span>Charisma</span> score increases by <span>1</span>.')
        dexBonus += 2;
        chaBonus += 1;
        statContainer.css('min-height', 1475);
        break;
      case 'Stout Halfling':
        selectedRaceDescription.html("The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings Jive out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along an dirt road or a raft floating downriver. <span class='page'>(PHB pg. 26)</span><br><br>As a stout halfting, you're hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halftings are called stronghearts, and they're most common in the south. <span class='page'>(PHB pg. 28)</span>");
        raceBonus.html('Your <span>Dexterity</span> score increases by <span>2</span> and your <span>Constitution</span> score increases by <span>1</span>.')
        dexBonus += 2;
        conBonus += 1;
        statContainer.css('min-height', 1250);
        break;
      case 'Human':
        selectedRaceDescription.html("In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds. <span class='page'>(PHB pg. 29)");
        raceBonus.html('<span>All</span> of your <span>ability</span> scores increase by <span>1</span>.')
        strBonus += 1;
        dexBonus += 1;
        conBonus += 1;
        intBonus += 1;
        wisBonus += 1;
        chaBonus += 1;
        statContainer.css('min-height', 900);
        break;
      case 'Dragonborn':
        selectedRaceDescription.html('Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life. <span class="page">(PHB pg. 32)</span>');
        raceBonus.html('Your <span>Strength</span> score increases by <span>2</span> and your <span>Charisma</span> score increases by <span>1</span>.')
        strBonus += 2;
        chaBonus += 1;
        statContainer.css('min-height', 850);
        break;
      case 'Forest Gnome':
        selectedRaceDescription.html('A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their closeknit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play. <span class="page">(PHB pg. 35)</span><br><br>As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth. In the worlds of D&D, forest gnomes are rare and secretive. They gather in hidden communities in sylvan forests, using illusions and trickery to conceal themselves from threats or to mask their escape should they be detected. Forest gnomes tend to be friendly with other good-spirited woodland folk, and they regard elves and good fey as their most important allies. These gnomes also befriend small forest animals and rely on them for information about threats that might prowl their lands. <span class="page">(PHB pg. 37)</span>');
        raceBonus.html('Your <span>Intelligence</span> score increases by <span>2</span> and your <span>Dexterity</span> score increases by <span>1</span>.')
        intBonus += 2;
        dexBonus += 1;
        statContainer.css('min-height', 1400);
        break;
      case 'Rock Gnome':
        selectedRaceDescription.html('A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their closeknit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play. <span class="page">(PHB pg. 35)</span><br><br>As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting. <span class="page">(PHB pg. 37)</span>');
        raceBonus.html('Your <span>Intelligence</span> score increases by <span>2</span> and your <span>Constitution</span> score increases by <span>1</span>.')
        intBonus += 2;
        conBonus += 1;
        statContainer.css('min-height', 1050);
        break;
      case 'Half-Elf':
        // selectedRaceDescription.html('Temporary description (full description commented out in main-script.js)');
        selectedRaceDescription.html('Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.<br><br>Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children.<br><br>Many half-elves, unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life. <span class="page">(PHB pg. 38)</span>');
        raceBonus.html('Your <span>Charisma</span> score increases by <span>2</span> and <span> two other ability</span> scores <span>of your choice</span> increase by <span>1</span>.')
        chaBonus += 2;
        statContainer.css('min-height', 1200);
        break;
      case 'Half-Orc':
        selectedRaceDescription.html('Whether united under the leadership o f a mighty warlock or having fought to a standstill after years of conflict, ore and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-ores are born.<br><br>Some half-ores rise to become proud chiefs of ore tribes, their human blood giving them an edge over their full-blooded ore rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury. <span class="page">(PHB pg. 40)</span>');
        raceBonus.html('Your <span>Strength</span> score increases by <span>2</span> and your <span>Constitution</span> score increases by <span>1</span>.')
        strBonus += 2;
        conBonus += 1;
        statContainer.css('min-height', 1075);
        break;
      case 'Tiefling':
        selectedRaceDescription.html("To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefting. And to twist the knife, tiefiings know that this is because a pact struck generations ago infused the essence of Asmodeus-overlord of the Nine Hells-into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children's children will always be held accountable. <span class='page'>(PHB pg. 42)</span>");
        raceBonus.html('Your <span>Intelligence</span> score increases by <span>1</span> and your <span>Charisma</span> score increases by <span>2</span>.')
        intBonus += 1;
        chaBonus += 2;
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

    $('.roll-method-container').removeClass('no-show');

    selectedRollMethod.removeClass('no-show');
    selectedRollMethod = selectedRollMethod.text('Random Roll Method'); // shows selected roll method to user
    
    selectedRollMethodDescription.removeClass('no-show');
    selectedRollMethodDescription.text('You are choosing to put the fate of your characters ability scores in the hands of the dice gods. This method will randomly complete all six rolls for you. Accepting these rolls will then randomly assign them between your ability scores.');

    continueBtn.removeClass('no-show'); // show continue button

    statContainer.css('min-height', 600);
  }) // end confirm button click event


  // continue button click event
  continueBtn.on('click', function(){
    if(abilityScore.hasClass('bonus-applied')){
      abilityScore.removeClass('bonus-applied');
    }
    $('.roll-div').html('&nbsp;');
    selectedRollMethodDescription.addClass('no-show');
    $('.roll-method-container .menu').addClass('no-show');
    $(this).addClass('no-show');
    $('.roll-btn').removeClass('no-show');
    $('.rolls').removeClass('no-show');
    statContainer.css('min-height', 550);
  }) // end continue button click event


  // roll button click event
  $('.roll-btn').on('click', function(){
    diceGif();
    setTimeout( function(){
      rollStat();
    }, 4500);
    $(this).addClass('no-show');
    $('.buttons').removeClass('no-show');
    if(($('.first-start-over') || $('.accept') || $('.re-roll')).hasClass('no-show')){
      $('.first-start-over').removeClass('no-show');
      $('.accept').removeClass('no-show');
      $('.re-roll').removeClass('no-show');
    }
    statContainer.css('min-height', 620);
  }) // end roll button click event


  // function to create/remove the dice roll gif
  function diceGif(){
    let styling = $('link');
    for (let cssStyle in styling){
      let style = styling[cssStyle];
      if(style.rel == 'stylesheet'){
        style.href += '';
      }
    }
    let diceRolling = $(`<img src="images/4d6_roll_transparent_bg_faster.gif" alt="dice rolling">`);
    diceRolling.add().appendTo($('#dice-gif'));
    setTimeout( function(){
      diceRolling.fadeOut(1000, 'linear')
    }, 3500);
    setTimeout( function(){
      diceRolling.remove();
    }, 4500);

  } // end diceGif()


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
    $('.first-start-over').addClass('no-show');
    $('.next').removeClass('no-show');
    $('.ability-score-container').removeClass('no-show');
    if(!$('.finish').hasClass('no-show')){
      $('.finish').addClass('no-show');
    }
    
    $('.ability-score').html(`&nbsp;`);
    $('.ability-score').removeClass('bonus-applied');
    $('.ability-modifier').html(`&nbsp;`);

    statContainer.css('min-height', 1050);
  }) // end accept button click event


  // re-roll button click event
  $('.re-roll').on('click', function(){
    rollStat();
  })  // end re-roll button click event


  // first start-over button click event
  $('.first-start-over').on('click', function(){
    $(this).addClass('no-show');
    selectedRollMethod.removeClass('no-show');
    selectedRollMethodDescription.removeClass('no-show');
    $('.rolls').addClass('no-show');
    $('.accept').addClass('no-show');
    $('.re-roll').addClass('no-show');
    
    continueBtn.removeClass('no-show');
    statContainer.css('min-height', 600);
  }) // end first start-over button click event


  // next button click event
  $('.next').on('click', function(){

    firstRoll = $('.roll-01 div');
    secondRoll = $('.roll-02 div');
    thirdRoll = $('.roll-03 div');
    fourthRoll = $('.roll-04 div');
    fifthRoll = $('.roll-05 div');
    sixRoll = $('.roll-06 div');
    
    firstRoll = firstRoll.text();
    secondRoll = secondRoll.text();
    thirdRoll = thirdRoll.text();
    fourthRoll = fourthRoll.text();
    fifthRoll = fifthRoll.text();
    sixRoll = sixRoll.text();

    rollsArray = [firstRoll, secondRoll, thirdRoll, fourthRoll, fifthRoll, sixRoll];

    shuffle(rollsArray);

    abilityScore.each( function(i){
      $(this).text(rollsArray[i]);
    })

    selectedRollMethod.addClass('no-show');
    $('.rolls').addClass('no-show');
    $(this).addClass('no-show')
    $('.ability-score-container .buttons').removeClass('no-show');
    if($('.finish').hasClass('no-show')){
      $('.finish').removeClass('no-show');
    }
    $('.second-start-over').removeClass('no-show');
    $('.ability-score-container .start-over').removeClass('no-show');

    $('.ability-modifier').removeClass('hidden');

    applyBonus();
    bonusApplied();
    
    // Half-Elf specific bonus
    if(race == 'Half-Elf'){
      $('.ability-score').not('.bonus-applied').on('click', function(e){
        let strScore = $('.str-score'),
            dexScore = $('.dex-score'),
            conScore = $('.con-score'),
            intScore = $('.int-score'),
            wisScore = $('.wis-score');
        
        let abilityClass = e.target.classList;

        let bonuses = $('.bonus-applied');

        if($(this).hasClass('bonus-applied')){
          null;
        }else{

          switch(abilityClass[0]){
            case 'str-score':
              if(strScore.hasClass('bonus-applied')){
                null;
              }else{
                let strText = Number(strScore.text()) + 1;
                strScore.text(strText);
                strScore.addClass('bonus-applied');
              }
              break;

            case 'dex-score':
              if(dexScore.hasClass('bonus-applied')){
                null;
              }else{
                let dexText = Number(dexScore.text()) + 1;
                dexScore.text(dexText);
                dexScore.addClass('bonus-applied');
              }
              break;

            case 'con-score':
              if(conScore.hasClass('bonus-applied')){
                null;
              }else{
                let conText = Number(conScore.text()) + 1;
                conScore.text(conText);
                conScore.addClass('bonus-applied');
              }
              break;
              
            case 'int-score':
              if(intScore.hasClass('bonus-applied')){
                null;
              }else{
                let intText = Number(intScore.text()) + 1;
                intScore.text(intText);
                intScore.addClass('bonus-applied');
              }
              break;

            case 'wis-score':
              if(wisScore.hasClass('bonus-applied')){
                null;
              }else{
                let wisText = Number(wisScore.text()) + 1;
                wisScore.text(wisText);
                wisScore.addClass('bonus-applied');
              }
              break;
          } // end switch

        } // end if/else statement
        
        $('.bonus-applied').off(); // turn off click event listener

        // update ability modifier
        let score = $(this).text();
        let modText = getModifier(score);
        $(this).parent().next().text(modText);  

        if(bonuses.length == 2){
          abilityScore.off();
        } // end if statement

      }) // end click event listener

    } // end Half-Elf if statement

    abilityScore.each( function(){
      let score = $(this).text();
      let modText = getModifier(score);
      $(this).parent().next().text(modText);    
    })

    statContainer.css('min-height', 750);

  }) // end next button click event


  // finish button click event
  $('.finish').on('click', function(){
    $('h1').addClass('no-show');
    $(this).addClass('no-show');
    raceBonus.addClass('no-show');
    $('.save').removeClass('no-show');
    $('body').addClass('final');
    $('.second-start-over').addClass('no-show');
    lastStartOver.removeClass('no-show');
    statContainer.css('min-height', 665);

  })  // end finish button click event


  // second start-over button click event
  $('.second-start-over').on('click', function(){
    $(this).addClass('no-show');
    $('.ability-score-container').addClass('no-show');
    $('.finish').addClass('no-show');

    selectedRollMethod.removeClass('no-show');
    selectedRollMethodDescription.removeClass('no-show');
    
    continueBtn.removeClass('no-show');
    statContainer.css('min-height', 600);

  }) // end second start-over button click event


  // save button click event
  $('.save').on('click', function(){
    $(this).addClass('no-show');
    lastStartOver.addClass('no-show');
    $('footer p').addClass('no-show');
    statContainer.css('min-height', 625);
    domtoimage.toPng(document.getElementById('all-content'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-character-ability-scores.png';
        link.href = dataUrl;
        link.click();
    });
    setTimeout( function(){
      alert(`Your character's ability scores have been saved to your download folder!`);
      $('.ability-score-container .save').removeClass('no-show');
      lastStartOver.removeClass('no-show');
      $('footer p').removeClass('no-show');
      statContainer.css('min-height', 665);
    }, 1200);

  }) // end save button click event


  // final start-over button click event
  lastStartOver.on('click', function(){
    location.reload();
  }) // end final start-over button click event


  // function to get modifier for the current ability score value
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
      return mod;
  } // end getModifier()


  // function to apply racial bonus to appropriate ability score
  function applyBonus(){

    let strScore = Number($('.str-score').text());
    let dexScore = Number($('.dex-score').text());
    let conScore = Number($('.con-score').text());
    let intScore = Number($('.int-score').text());
    let wisScore = Number($('.wis-score').text());
    let chaScore = Number($('.cha-score').text());
    
    // adds racial bonus (if any) to corresponding ability
    strScore = strScore + strBonus;
    dexScore = dexScore + dexBonus;
    conScore = conScore + conBonus;
    intScore = intScore + intBonus;
    wisScore = wisScore + wisBonus;
    chaScore = chaScore + chaBonus;

    $('.str-score').text(strScore);
    $('.dex-score').text(dexScore);
    $('.con-score').text(conScore);
    $('.int-score').text(intScore);
    $('.wis-score').text(wisScore);
    $('.cha-score').text(chaScore);

  } // end applyBonus()


  // function to apply visual change for race bonus on ability score(s)
  function bonusApplied(){
    if(strBonus >= 1){
      $('.str-score').addClass('bonus-applied');
    }
    if(dexBonus >= 1){
      $('.dex-score').addClass('bonus-applied');
    }
    if(conBonus >= 1){
      $('.con-score').addClass('bonus-applied');
    }
    if(intBonus >= 1){
      $('.int-score').addClass('bonus-applied');
    }
    if(wisBonus >= 1){
      $('.wis-score').addClass('bonus-applied');
    }
    if(chaBonus >= 1){
      $('.cha-score').addClass('bonus-applied');
    }

  } // end bonusApplied()


  // shuffle array function
  function shuffle(array) {
    for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
  } // end shuffle()


  // Random Number Generator
  function getRandInt(min = 1, max = 100){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  } // end getRandInt()
})();