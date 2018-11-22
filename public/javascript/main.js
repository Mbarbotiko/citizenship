const questions = [
    //run a spell check plug in :
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
        A: ['Speech', 'Religion', 'Assembly', 'Press', 'Petition the Government', 'Freedom of speech', 'Freedom of religion', 'Freedom of the press', 'Freedom to petition'], //freedom of...
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
    {
        Q: 'The House of Representatives has how many voting members',
        A: ['435', 'Four hundred thirty five', 'Four hundred thirty-five'],
        N: 1
    },
    {
        Q: 'We elect a US representiative for how many years?',
        A: ['2', 'Two'],
        N: 1
    },
    {
        Q: 'Name your US Representative',
        A: ['Keith Ellison'],
        N: 1
    },
    {
        Q: 'Who does a US Senator represent?',
        A: ['All people of the state', 'People of the state', 'People in the state', 'Everyone in the state'],
        N: 1
    },
    {
        Q: 'Why do some states have more Representatives than other states?',
        A: ['The states population', 'They have more people', 'Some states have more people', 'Based on population', "Population"],
        N: 1
    },
    {
        Q: 'We elect a President for how many years?',
        A: ['4', 'Four'],
        N: 1
    },
    {
        Q: 'In what month do we vote for President?',
        A: ['November', 'Nov'],
        N: 1
    },
    {
        Q: 'What is the name of the President of the United States now?',
        A: ['Donald Trump', 'Trump', "Donald J Trump"],
        N: 1
    },
    {
        Q: 'What is the name of the Vice President of the United States now?',
        A: ['Mike Pence', 'Pence', 'Michael R Pence', 'Michael Pence'],
        N: 1
    },
    {//30
        Q: 'If the President can no longer serve, who becomes President?',
        A: ['The Vice President', 'Vice President', 'Mike Pence', 'Michael Pence', 'Michael R Pence', 'Pence'],
        N: 1
    },
    {
        Q: 'If both the President and the Vice President can no longer serve, who becomes President?',
        A: ['Speaker of the House', 'The speaker of the House'],
        N: 1
    },
    {
        Q: 'Who is the Commander in Chief of the military?',
        A: ['The President', 'President'],
        N: 1
    },
    {
        Q: 'Who signs bills to become laws?',
        A: ['The President', 'President'],
        N: 1
    },
    {
        Q: 'Who vetoes bills?',
        A: ['The President', 'President'],
        N: 1
    },
    {
        Q: 'What does the Presidents Cabinet do?',
        A: ['Advises the President'],
        N: 1
    },
    {
        Q: 'What are two Cabinet-level positions?',
        A: ['Secretary of Agriculture', 'Secretary of Commerce', 'Secretary of Defense', 'Secretary of Education', 'Secretary of Energy', 'Secretary of Health and Human Services', 'Secretary of Homeland Security', 'Secretary of Housing and Urban Development', 'Secretary of the Interior', 'Secretary of Labor', 'Secretary of State', 'Secretary of Transportation', 'Secretary of Treasury', 'Secretary of Veterans Affairs', 'Attorney General', 'Vice President'],
        N: 2
    },
    {
        Q: 'What does the judicial branch do?',
        A: ['reviews laws', 'explains laws', 'resolves disputes', 'resolves disagreements', 'decides if a law goes against the Constitution'],
        N: 3
    },
    {
        Q: 'What is the highest court in the United States?',
        A: ['The Supreme Court', "Supreme Court"],
        N: 1
    },
    {
        Q: 'How many justices are on the Supreme Court?',
        A: ['9', 'Nine'],
        N: 1
    },
    {//40
        Q: 'Who is the Chief Justice of the United States now?',
        A: ['John Roberts', 'John G Roberts Jr'],
        N: 1
    },
    {
        Q: 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',
        A: ['Print money', 'Declare war', 'Create an army', 'Make treaties', ' To print money', 'To declare war', 'To create an army', 'To make treaties'],
        N: 1
    },
    {
        Q: 'Under our Constituion, some powers belong to the states. What is one power of the states?',
        A: ['Provide schooling and education', 'Provide protection', 'Police', 'Provide safety', 'Fire deparments', 'Give a drivers license', 'Approve zoning and land use'],
        N: 1
    },
    {
        Q: 'Who is the Governor of your state now?',
        A: ['Mark Dayton'],
        N: 1
    },
    {
        Q: 'What is the capital of your state?',
        A: ['St Paul', 'Saint Paul'],
        N: 1
    },
    {
        Q: 'What are two major political parties in the United States',
        A: ['Democratic', 'Republican', 'Democrat'],
        N: 2
    },
    {
        Q: 'What is the political party of the President now?',
        A: ['Republican', 'Republican Party'],
        N: 1
    },
    {
        Q: 'What is the name of the Speaker of the House of Representatives now?',
        A: ['Paul Ryan', 'Paul D Ryan'],
        N: 1
    },

    {//48
        Q: 'There are four ammendements to the Constitution aout who can vote. Describe one of them',
        A: [],
        N: 0
    },

    // {
    //     Q: '',
    //     A: [],
    //     N: 0
    // },

    // {
    //     Q: '',
    //     A: [],
    //     N: 0
    // },






    // {
    //     Q:'',
    //     A:[],
    //     N:0
    // },


];


// https://www.uscis.gov/sites/default/files/USCIS/Office%20of%20Citizenship/Citizenship%20Resource%20Center%20Site/Publications/100q.pdf



//currentQuestion will keep currentQuestion of what question we are on as we move through the test
let currentQuestion = 0
//this userInput array will keep user entries to cross reference against the correct answers provided in the questions object
let userInput = [];
let fieldCount = 0;

//function writes new question to the DOM
function newQuestion() {
    document.querySelector('.question-section h1').innerHTML = questions[currentQuestion].Q
}

function createForm() {
    //user a loop to create multiple times based on the  variable, 
    for (var i = 0; i < questions[currentQuestion].N; i++) {
        fieldCount++
        let answerSection = document.querySelector('.answer-section')
        let input = document.createElement("input")
        input.setAttribute('type', 'text')
        input.setAttribute('value', '')
        input.setAttribute('id', 'field' + fieldCount)
        answerSection.appendChild(input);
    }

}

function getUserInput() {
    let fieldCountNum = 0
    for (var i = 0; i < fieldCount; i++) {
        fieldCountNum++
        let userSaidWhat = document.getElementById('field' + fieldCountNum).value
        userInput.push(userSaidWhat);
    }

}

function evaluateUserInput() {
    for (var i = 0; i < userInput.length; i++) {
        let string = userInput[i]
        let stringLow = string.toLowerCase().trim();
        console.log(stringLow)
        for (var j = 0; j < stringLow.length; j++) {
            console.log(stringLow[j]);
            //in this code evaluate what is kept and thrown out characters like '+-. white space use same logic for the correct answers to check against
        }

        //   https://www.w3schools.com/jsref/jsref_obj_regexp.asp

    }
}


function correctAnswer(){
    return correct;
}

console.log(correctAnswer('yes'))

function resetFields() {
    userInput = [];
    let fieldDeleteCount = 0;
    let offsetCurrentQ = currentQuestion - 1
    for (var i = 0; i < questions[offsetCurrentQ].N; i++) {
        fieldDeleteCount++
        let fieldToRemove = document.getElementById('field' + fieldDeleteCount)
        fieldToRemove.parentNode.removeChild(fieldToRemove)
    }
}

// do not let reset fields run until the user has submitted all answers & only on click: onclick is running getUserInput();


function newButton() {
    newQuestion();
    createForm();
    let deleteButton = document.getElementById('start')
    let buttonSection = document.querySelector('.enter-buttons')
    deleteButton.parentNode.removeChild(deleteButton)
    let button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('id', 'submit')
    button.setAttribute('onClick', 'nextQuestion()')
    button.innerHTML = 'Submit'
    buttonSection.appendChild(button)
}

function nextQuestion() {
    currentQuestion++
    getUserInput();
    fieldCount = 0
    evaluateUserInput();
    //resetFields()
    //newQuestion();
    //createForm();
}

//limit user input in field to # of characters

//ensure user doesnt enter duplicate answer in all fields

//prevent user from using any punctuation or filter it out once it hits the user answer array

//write a test for cross referencing the two arrays

//For answers that are the same but phrased differently: put them within their own array so that duplicates arent entered or a different version of the same answer isnt given by the user