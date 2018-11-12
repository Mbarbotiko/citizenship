const questions = [
    {
        Q: 'What is the supreme law of the land?',
        A: ['The Constitution'],
        N: 1
    },
    {
        Q: 'What does the Constitution do?',
        A: ['Sets up the government', 'Defines the government', 'Protects basic rights of Americans'],
        N: 3
    },
    {
        Q: 'The idea of self-government is in the first three words of the Constitution. What are these words?',
        A: ['We the People'],
        N: 1
    },
    {
        Q: 'What is an amendment?',
        A: ['A change to the Constitution', 'An addition to the Constitution', 'A change', 'An addition'],
        N: 2
    },
    {//5
        Q: 'What do we call the first ten amendments to the Constitution?',
        A: ['The Bill of Rights'],
        N: 1
    },
    {
        Q: 'What is one right or freedom from the first ammendment?',
        A: ['Speech', 'Religion', 'Assembly', 'Press', 'Petition the Government'],
        N: 1
    },
    {
        Q: 'How many amendments does the Constitution have?',
        A: ['27', 'Twendy-Seven', 'Twenty Seven'],
        N: 1
    },
    {
        Q: 'What did the Declaration of Inependence do?',
        A: ['Announced our Independence from Great Britain', 'Declared our Independence from Great Britain', 'Stated that the United States is free from Great Britain'],
        N: 1
    },
    {
        Q: 'What are two rights in the Declaration of Independence?',
        A: ['Life', 'Liberty', 'Pursuit of happiness'],
        N: 2
    },
    {//10
        Q: 'What is freedom of religion?',
        A: ['You can practice any religion or not practice a religion'],
        N: 1
    },
    {
        Q: 'What is the economic system in the United States?',
        A: ['Capitalism', 'Capitalist economy', 'Market economy', 'Capitalist', 'Market'],
        N: 2
    },
    {
        Q: 'What is the "rule of the law"?',
        A: ['Everyone must follow the law', 'Leaders must obery the law', 'Government must obery the law', 'No one is above the law'],
        N: 1
    },
    {
        Q: 'Name one branch or part of the govenment',
        A: ['Congress', 'Legislative', 'President', 'Executive', 'The Courts', 'Judicial'],
        N: 1
    },
    {//15
        Q: 'What stops one branch of government from becoming too powerful?',
        A: ['Checks and balances', 'Separation of powers'],
        N: 2
    },
    {
        Q: 'Who is in charge of the executive branch?',
        A: ['The President', 'President'],
        N: 1
    },
    {
        Q: 'Who makes federal laws?',
        A: ['Congress', 'Senate and House', 'Senate and House of Representatives', 'United States Legislature'],
        N: 3
    },
    {
        Q: 'What are the two parts of the US Congress?',
        A: ['The Senate', 'Senate', 'House of Representatives', 'House'],
        N: 2
    },
    {
        Q: 'How many US Senators are there?',
        A: ['100', 'One hundred', 'One-hundred'],
        N: 1
    },
    {
        Q: 'We elect a US Senator for how many years?',
        A: ['6', 'Six years', 'Six-years'],
        N: 1
    },
    {//20
        Q: 'Who is one of your states Senators now?',
        A: ['Amy Klobuchar', 'Tina Smith'],
        N: 1
    },


    // https://www.uscis.gov/sites/default/files/USCIS/Office%20of%20Citizenship/Citizenship%20Resource%20Center%20Site/Publications/100q.pdf

    // {
    //     Q:'',
    //     A:[],
    //     N:0
    // },


];

//count will keep count of what question we are on as we move through the test
let count = 0
//this userInput array will keep user entries to cross reference against the correct answers provided in the questions object
let userInput = [];
//may need another array to hold user answer with all spaces trimmed and to lower case


//shorter named variables to hold the place of the object in which we are in

let numQuestion = questions[count].Q
let numFields = questions[count].N
//count for number of fields to create for the question
let fieldCount = 0;
//function writes new question to the DOM
function newQuestion() {
    document.querySelector('.question-section h1').innerHTML = questions[count].Q
}


//function to create a form, add attributes for retrieving user input later to push into user input array
function createForm() {
   
    
    //user a loop to create multiple times based on the numQuestion variable, 
    for (var i = 0; i < questions[count].N; i++) {
    
        fieldCount++;
        
        let answerSection = document.querySelector('.answer-section')
        let input = document.createElement("input")
        input.setAttribute('type', 'text')
        input.setAttribute('value', '')
        input.setAttribute('id', 'field' + fieldCount)
        answerSection.appendChild(input);

    }

}
count++
newQuestion();//tested, works
createForm();//tested, works
getUserInput();//tested works gets all three values from dynamically created form fields

function getUserInput(){
    let fieldCountNum = 0
    for (var i = 0; i<fieldCount; i++){
        fieldCountNum++
        let userSaidWhat = document.getElementById('field'+fieldCountNum).value
        console.log(userSaidWhat);

    }
}


