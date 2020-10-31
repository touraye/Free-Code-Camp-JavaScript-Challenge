// toggle
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')
const socialIcons = document.querySelector('.social-icons');


navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
    socialIcons.classList.toggle('show-links');

});

// create date
const date = document.getElementById('date');
let matchDate = new Date('');
// collections of teams, there match result

// teams collection
const teams = [
    {
        id: 101,
        name: 'westham united',
        coach: 'ebrima bah',
        assistant_coach: 'somita',
        trophy: 4,
    },
    {
        id: 102,
        name: 'golden fc',
        coach: 'reise',
        assistant_coach: 'l t',
        trophy: 2,
    },
    {
        id: 103,
        name: 'manchester sotokoi',
        coach: 'saikouba',
        assistant_coach: '',
        trophy: 1,
    },
    {
        id: 104,
        name: 'youngboys star',
        coach: 'ebou samba',
        assistant_coach: 'ba alagie',
        trophy: 2,
    },
    {
        id: 105,
        name: 'barcelona',
        coach: 'amadou saidy',
        assistant_coach: 'ousman saidy',
        trophy: 2,
    },

]

// create random amounts of teams
function createTeams(id, name, coach, assistant_coach, trophy) {
    teams.push(
        {
            id,
            name,
            coach,
            assistant_coach,
            trophy
        }
    )
}

let newTeam = createTeams(106, 'fulakunda fc', 'tijan bah', 'nata bah', 1);

// console.table(teams);

const result = [
    {
        title: 'round one',
        matchDay: 1,
        date: new Date('09,12,2020'),
        playerOne: 'westham united',
        resultOne: 3,
        playerTwo: 'gloden',
        resultTwo: 1,
        winner: 'westham',
        loser: 'gloden',
        scores: 2,
        category: 'group stage',
        playerOneScorer: 'man',
        playerTwoScorer: 'chureh'

    },
    {
        title: 'round one',
        matchDay: 2,
        date: new Date('09,13,2020'),
        playerOne: 'youngboys star',
        resultOne: 1,
        playerTwo: 'fulakunda fc',
        resultTwo: 1,
        winner: 'youngboys star',
        loser: 'fulakunda fc',
        scores: 1,
        category: 'group stage',
        playerOneScorer: 'ensa',
        playerTwoScorer: 'del'
    },
    {
        title: 'round one',
        matchDay: 3,
        date: new Date('09,14,2020'),
        playerOne: 'barcelona',
        resultOne: 3,
        playerTwo: 'sotokoi',
        resultTwo: 0,
        winner: 'barcelona',
        loser: 'sotokoi',
        scores: 3,
        category: 'group stage',
        playerOneScorer: ['mamadi', ' papa'],
        playerTwoScorer: '',

    }
]
// console.log(result.length);

function createGame(title, matchDay,date, playerOne, resultOne, playerTwo,resultTwo, winner, loser, scores, category, playerOneScorer, playerTwoScorer){
            result.unshift(
              {
                title,
                matchDay,
                date,
                playerOne,
                resultOne,
                playerTwo,
                resultTwo,
                winner,
                loser,
                scores,
                category,
                playerOneScorer,
                playerTwoScorer
              }
            )
}
// westham vs manchester
let simeFinal1 = createGame('sime final',1,new Date('09,17,2020'),'westham united',3,'manchester',1,'westham united','manchester',4,'sime final',['man', ' jagne', ' man'],
['kura']);

// youngboys star vs barcelona
let simeFinal2 = createGame('semi final',2,new Date('09,18,2020'),'youngoys star',1,'barcelone',0,'youngboys star','barcelona',1,'semi final',['ensa'],['']);





// select the winner and promote them to the next stage
let winners = [];
for (value of result) {
    winners.push(value.winner);
}
// console.log(`The winners are: ${winners}`);

// print out the loser
let losers = [];
const drop = result.filter(item => {
    losers.push(item.loser);
})
// console.log(`The loser are: ${losers}`);

// check for the best losers
let bestLoser = [];
for (value of losers) {

}

// semi-final stage, 3 teams plus the one that have a free ticket
const simeFinal = [
    {
        title: 'sime final',
        matchDay: 1,
        date: new Date('09,17,2020'),
        playersOne: 'westham united',
        resultOne: 3,
        playerTwo: 'manchester',
        resultTwo: 1,
        winner: 'westham united',
        loser: 'manchester',
        scorers: 4,
        category: 'sime final',
        playerOneScorer: ['man', 'jagne', 'man'],
        playerTwoScorer:['kura']
    },
    {
        title: 'semi final',
        matchDay: 2,
        date: new Date('09,18,2020'),
        playersOne: 'youngoys star',
        resultOne: 1,
        playerTwo: 'barcelone',
        resultTwo: 0,
        winner: 'youngboys star',
        loser: 'barcelona',
        scores: 1,
        category: 'semi final',
        playerOneScorer: ['ensa'],
        playerTwoScorer: ['']
    }
]

// print the wiiner of the sime finalist and promote them to the next stage of the tournament
let winnersOfSime = [];
for (value of simeFinal) {
    winnersOfSime.push(value.winner);
}
// console.log(winnersOfSime);


// final stage
// final westham vs yougboys star
let final = createGame('final',0,new Date('09,22,2020'),'westham united',2,'yougboys star',1,'westham united','youngboys star',3,'final',['man', ' daz'],['kas'])

winnersOfSime = [
    {
        title: 'final',
        matchDay: 0,
        date: new Date('09,22,2020'),
        playersOne: 'westham united',
        resultOne: 2,
        playerTwo: 'yougboys star',
        resultTwo: 1,
        winner: 'westham united',
        loser: 'youngboys star',
        scores: 3,
        category: 'final',
        playerOnescorer: ['man', ' daz'],
        playerOnescorer: ['kas']
    }

]
// console.log(winnersOfSime[1]);

// the loser
let loserOfFinal = [];
const finalLoser = winnersOfSime.filter(set => {
    loserOfFinal.push(set.loser);
})
// console.log('${loserOfFinal} is the loser of the final');
// console.log(loserOfFinal + ' is the loser of the final');
// the winner of the trophy!
let champion = [];
for (value of winnersOfSime) {
    champion.push(value.winner);
}
// console.log('The winner of the trophy is ' + champion);





// select the item
const teamContainer = document.querySelector('.container');
const teamList = document.querySelector('.team-list');


window.addEventListener('DOMContentLoaded', () => {
displayGames(result);  
  const btns = document.querySelectorAll('.btn');
  // show game info
  btns.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
      const gameInfo = e.currentTarget.parentElement.parentElement;
      gameInfo.classList.toggle('show-gameInfo');      
    });
  });

  displayTeam(teams);
});


function displayGames(games){
  // load the match page;
    let matchDay = games.map((item) => {
        return `

            <div class="top">
              <span id="date">${item.date}</span>
            </div>
            <article class="match-info">
              <!-- player 1 -->
              <section class="rows">
                <div class="team-info">
                  <span><i class="fa fa-users"></i></span>
                  <h6 class="team-name1">${item.playerOne}</h6>
                </div>
              </section>
              <!-- game info -->
              <section class="rows match-detail">
                <div class="">
                  <span class="result1">${item.resultOne}</span>
                </div>
                <div class="">
                  <i class="dash">-</i>
                </div>
                <div class="">
                  <span class="result2">${item.resultTwo}</span>
                </div>
              </section>
              <!-- player 2 -->
              <section class="rows">
                <div class="team-info">
                  <span><i class="fa fa-users"></i></span>
                  <h5 class="team-name2">${item.playerTwo}</h5>
                </div>
              </section>
            </article>
            <div class="bottom">
              <h4 class="tittle">${item.category}</h4>
              <p class="match">match day ${item.matchDay}</p>
              </div>
            <!-- match statistic -->
            <div class="statistic">
              <div class="stat-card">
                <span class="stat-name">game info</span>
              <!-- game info btn -->
                <button type="button" class="btn">
                  <span class="arrow-up"><i class="fa fa-arrow-down"></i></span>
                  <span class="arrow-down"><i class="fa fa-arrow-up"></i></span>
                </button>
              </div>
                <div class="game-info">
                  <div class="score-info">
                      <h4>goals</h4>
                  </div>
                    <!-- <span><i class="fa fa-user"></i></span> -->
                    <div class="score-line">
                      <div class="team1">
                        <p class="scorers">${item.playerOneScorer}</p>

                      </div>
                      <div class="team2">
                        <p class="scorers">${item.playerTwoScorer}</p>
                      </div>
                    </div>
                </div>
            </div>
          `
    });
    matchDay = matchDay.join('');
    teamContainer.innerHTML = matchDay;
}


function displayTeam(team){
  // load the teams
  const displayTeams = team.map((list) => {    
    return`<section>
        <div class="info">
            <h2>${list.name}</h2>
            <p>coach: <span>${list.coach}</span></p>
            <p>assistan: <span>${list.assistant_coach}</span></p>
        </div>
        <div class="wins">
            <i class="fa fa-trophy"></i>
            <span>${list.trophy}</span>
        </div>
    </section>`
  }).join('');  
  teamList.innerHTML = displayTeams;
}
