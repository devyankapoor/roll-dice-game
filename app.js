/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, prevScore, winningScore, dice, dice2;
init();




document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(gamePlaying)
        {
            
        
    
    dice=  Math.floor(Math.random() * 6) + 1;
    dice2=  Math.floor(Math.random() * 6) + 1;        
    document.querySelector('#current-' + activePlayer).textContent = dice + dice2;
    
    var diceDOM = document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src= 'dice-'+ dice + '.png';
   var dice2DOM = document.querySelector('.dice2');
   dice2DOM.style.display = 'block';
   dice2DOM.src= 'dice-'+ dice2 + '.png';        
   if(dice !== 1 && dice2 !== 1)     
{
    prevScore= dice;
    roundScore += dice2 + dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    
}
 else if (dice=== 6 && prevScore === 6)
    {
     
     nextPlayer(); 
    }
    else
    {
        //next player
    
     nextPlayer();  
   
    }
            
        }
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
            if(gamePlaying){                                        
    //add current score to global score
    scores[activePlayer] += roundScore;
     
    //update the UI
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    
   
     //player win the game
    
    if(scores[activePlayer] >= winningScore)
     {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
         
           document.querySelector('.dice').style.display = 'none';
          document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
           document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');  
         gamePlaying = false;
    }
    else
    {
        nextPlayer();
        
    }
}
});


function nextPlayer()
{
      prevScore = 0;
     activePlayer === 0 ? activePlayer = 1 :  activePlayer = 0;
      roundScore = 0;   
        
        document.getElementById('current-0').textContent = '0' ; 
         document.getElementById('current-1').textContent = '0' ; 
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
       
}

document.querySelector('.btn-new').addEventListener('click', init);


function init()
{
    
    scores=[0,0];
    activePlayer = 0;
    roundScore = 0;
    prevScore=0;
    winningScore = prompt('Please enter the winning score');
    gamePlaying =true;
    
document.querySelector('.dice').style.display= 'none';
document.querySelector('.dice2').style.display= 'none';
document.getElementById('score-0').textContent= '0';

document.getElementById('score-1').textContent= '0';

document.getElementById('current-0').textContent= '0';

document.getElementById('current-1').textContent= '0';
    
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active'); 
   document.querySelector('.player-1-panel').classList.remove('active');
     document.querySelector('.player-0-panel').classList.add('active'); 
}