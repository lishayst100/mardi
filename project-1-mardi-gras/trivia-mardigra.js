const trivia = document.getElementById('trivia');
class Template {
    constructor(question, answer, choices) {
        this.question = question;
        this.answer = answer;
        this.choices = choices;
    }

}
const restart = document.getElementById('restart');
restart.addEventListener('click', () => {
//index,score,showQuestion
index = 0
score = 0
showQuestion()
restart.style.visibility = 'hidden'
});


const triviaQuestions = [
    new Template('What does "Mardi Gras" mean?','FAT TUESDAY',['SHROVE MONDAY','ASH WEDNESDAY','FAT TUESDAY','GOOD FRIDAY']),
    new Template('What is the Mardi Gras slogan?', 'Laissez les bon temps rouler', ['Voulez-Vous Coucher Avec Moi','Laissez les bon temps rouler','Que La Fete Commence','Vivre Vite, Mourir Jeune']),
    new Template('Mardi Gras is part of what larger festival?', 'FESTIVAL', ['JUBILEE','FESTIVAL','STURNALIA','SAMHAIN']),
    new Template('Who started the bead-throwing tradition?','SANTA CLAUS',['GYPSY ROSE LEE','THEODORE ROOSEVELT','DIONYSUS','SANTA CLAUS']),
    new Template('Where was the first organized Mardi Gras celebration in the United States?', 'MOBILE,ALABAMA', ['MOBILE,ALABAMA','NEW ORLEANS,LOUISIANA','GALVESTON,TEXAS','ST LOUIS,MISSOURI']),
    new Template('What are the official colors of Mardi Gras?', 'PURPLE,GREEN AND GOLD', ['PURPLE,BLACK AND GOLD', 'PURPLE,GREEN AND GOLD', 'PURPLE,GREEN AND YELLOW','WHITE,GREEN AND GOLD']),
    new Template('What day does Carnival season begin in New Orleans?', 'TWELFTH NIGHT', ['EIGHTH NIGHT', 'SIXTH NIGHT', 'TENTH NIGHT','TWELFTH NIGHT']),
    new Template('What groups organize the Mardi Gras parades?', 'KREWES', ['CHOROS','KREWES','REVELRIES','FAXIONS']),
    new Template('What is the oldest known krewe?', 'KREWE OF COMUS', ['KREWE OF BACCHUS', 'KREWE OF CLEOPATRA', 'KREWE OF ORPHEUS','KREWE OF COMUS']),
    new Template('What kind of cake is associated with Mardi Gras?','KING CAKE',['QUEEN CAKE','KING CAKE','DEVILS FOOD CAKE','ANGELS FOOD CAKE']),

   
]

let score = 0;
let index = 0;
let p = document.getElementById('p')



function showQuestion() {
    btn.style.visibility = 'hidden'
    trivia.style.visibility = 'visible'
    trivia.innerHTML = `
    <h2 class = "text-center">${triviaQuestions[index].question}</h2>
  <button class="w-50 mx-auto m-3 btn" style="background-color:#f2cc0f">${triviaQuestions[index].choices[0]}</button>
  <button class="w-50 mx-auto m-3 btn" style="background-color:#8cbf3f">${triviaQuestions[index].choices[1]}</button>
  <button class="w-50 mx-auto m-3 btn" style="background-color:var(--purple)">${triviaQuestions[index].choices[2]}</button>
  <button class="w-50 mx-auto m-3 btn" style="background-color:#f05">${triviaQuestions[index].choices[3]}</button>
  
  
    `
    document.querySelectorAll('#trivia > button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.innerHTML === triviaQuestions[index].answer) {
                score += 1
                
            }else{
                
            }
            index += 1
            
            if (index === triviaQuestions.length) {
                trivia.innerHTML = `<h1 class = "text-center">your score is ${score}/10</h1>`
                restart.style.visibility = 'visible'
            } else {
                showQuestion()

            }
        })

    })


}


let btn = document.getElementById('btn');
btn.addEventListener('click', showQuestion)