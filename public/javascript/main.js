const questions = [

    {
        Q: 'What is the supreme law of the land?',
        A: ['The Constitution'],
        N: 1
    },
    {
        Q: 'What does the Constitution do?\nComplete the sentences:\n_______ up the Government.\n_______ the government.\n_______ basic rights of Americans',
        A: ['Sets', 'Defines', 'Protects'],
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
        A: ['The Bill of Rights', 'Bill of Rights'],
        N: 1
    },
    {
        Q: 'What is one right or freedom from the first amendment?',
        A: ['Speech', 'Religion', 'Assembly', 'Press', 'Petition the Government', 'Freedom of speech', 'Freedom of religion', 'Freedom of the press', 'Freedom to petition'],
        N: 1
    },
    {
        Q: 'How many amendments does the Constitution have?',
        A: ['27', 'Twenty-Seven', 'Twenty Seven'],
        N: 1
    },
    {
        Q: 'What did the Declaration of Independence do?\nComplete the sentence:\nIt _______ our Independence from Great Britain',
        A: ['Announced', 'Declared'],
        N: 1
    },
    {
        Q: 'What are two rights in the Declaration of Independence?',
        A: ['Life', 'Liberty', 'Pursuit of happiness'],
        N: 2
    },
    {//10
        Q: 'What is freedom of religion?\nComplete the sentence:\nYou can practice _______ religion or _______ practice a religion',
        A: ['Any', 'Not'],
        N: 2
    },
    {
        Q: 'What is the economic system in the United States?',
        A: ['Capitalism', 'Capitalist economy', 'Market economy', 'Capitalist', 'Market'],
        N: 2
    },
    {
        Q: 'What is the "rule of the law"?\nComplete the sentences:\n_______ must follow the law.\n_______ and _______ must obey the law.\nNo one is _______ the law',
        A: ['Everyone', 'Leaders', 'Government', 'Above'],
        N: 3
    },
    {
        Q: 'Name one branch or part of the Government',
        A: ['Congress', 'Legislative', 'President', 'Executive', 'The Courts', 'Judicial'],
        N: 1
    },
    {
        Q: 'What stops one branch of government from becoming too powerful?',
        A: ['Checks and balances', 'Separation of powers'],
        N: 2
    },
    {//15
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
        A: ['435', 'Four hundred thirty five'],
        N: 1
    },
    {
        Q: 'We elect a US representative for how many years?',
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
    {//25
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
    {//35
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
        Q: 'What does the judicial branch do?\nComplete the sentence:\nIt _______ laws, _______ laws and _______ disputes.',
        A: ['reviews', 'explains', 'resolves'],
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
        Q: 'Under our Constitution, some powers belong to the states. What is one power of the states?',
        A: ['Provide schooling and education', 'Provide protection', 'Police', 'Provide safety', 'Fire departments', 'Give a drivers license', 'Approve zoning and land use'],
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
    {//45
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

    {
        Q: 'There are four amendments to the Constitution about who can vote. Describe one of them',
        A: ['Citizens 18 and older', 'Citizens eighteen and older', 'You dont have to pay to vote', 'You dont have to pay a poll tax to vote', 'Any citizen can vote', 'A male citizen of any race can vote', 'Women and men can vote'],//consider changing this to sentence question with 1 answer supplied.
        N: 1
    },
    {
        Q: 'What is one responsibility that is only for United States citizens?',
        A: ['Serve on a jury', 'Vote in a federal election'],
        N: 1
    },
    {//50
        Q: 'Name one right only for United States citizens',
        A: ['Vote in a federal election', 'Run for federal office'],
        N: 1
    },
    {
        Q: 'What are two rights of everyone living in the United States?',
        A: ['Freedom of expression', 'Freedom of speech', 'Freedom of assembly', 'Freedom to petition the government', 'Freedom of religion', 'The right to bear arms'],
        N: 2
    },
    {
        Q: 'What do we show loyalty to when we say the Pledge of Allegiance?',
        A: ['The United States', 'America', 'United States', 'The flag', 'Flag'],//should only allow states answer and flag answer....
        N: 2
    },
    {
        Q: 'What is one promise you make when you become a United States citizen?',
        A: ['Give up loyalty to other countries', 'Obey the laws of the United States', 'Defend the Constitution and the laws of the United States', 'Serve in the US Military', 'Serve the nation', 'Be loyal to the United States'],// consider sentence answers
        N: 1
    },
    {
        Q: 'How old do citizens have to be to vote for President?',
        A: ['18', 'Eighteen', '18 or older', 'Eighteen or older'],
        N: 1
    },
    {//55
        Q: 'What are two ways that Americans can participate in their democracy?',
        A: ['Vote', 'Join a political party', 'Help with a campaign', 'Join a civic group', 'Join a community group', 'Give an elected official your opinion on an issue', 'Call Senators and Representatives', 'Publicly support or oppose an issue or policy', 'Run for office', 'Write to a newspaper'],// consider sentence answers
        N: 2
    },

    {
        Q: 'When is the last day you can send in federal income tax forms?',
        A: ['April 15', 'April 15th'],
        N: 1
    },
    {
        Q: 'When must all men register for the Selective Service? Complete the sentence:  Between the ages of _______ and _______',
        A: ['18', '26', 'Eighteen', 'Twenty Six'],
        N: 2
    },
    {
        Q: 'What is one reason colonists came to America?',
        A: ['Freedom', 'Political liberty', 'Religious freedom', 'Economic opportunity', 'Practice their religion', 'Escape persecution'],
        N: 1
    },
    {
        Q: 'Who lived in America before the Europeans arrived?',
        A: ['Native Americans', ' American Indians'],
        N: 1
    },

    {//60
        Q: 'What group of people was taken to America and sold as slaves?',
        A: ['Africans', 'People from Africa'],
        N: 1
    },
    {
        Q: 'Why did the colonists fight the British? Complete these sentences: Because of high _______  The British army stationed their _______  Because they didnt have self _______',
        A: ['Taxes', 'Houses', 'Government'],
        N: 3
    },
    {
        Q: 'Who wrote the Declaration of Independence?',
        A: ['Thomas Jefferson', 'Jefferson'],
        N: 1
    },
    {
        Q: 'When was the Declaration of Independence adopted? (Include Month/ Day/ Year',
        A: ['July 4 1776', 'July 4th 1776'],
        N: 1
    },
    {
        Q: 'There were 13 original states, name three.',
        A: ['New Hampshire', 'Massachusetts', 'Rhode Island', 'Connecticut', 'New York', 'New Jersey', 'Pennsylvania', 'Delaware', 'Maryland', 'Virginia', 'North Carolina', 'South Carolina', 'Georgia'],
        N: 3
    },
    {//65
        Q: 'What happened at the Constitutional Convention?',
        A: ['The Constitution was written', 'The Founding Fathers wrote the Constitution'],
        N: 1
    },
    {
        Q: 'When was the constitution written? (Include only the year)',
        A: ['1787'],
        N: 1
    },
    {
        Q: 'The Federalist Papers supported the passage of the US Constitution.  Name one of the writers',
        A: ['James Madison', 'Madison', 'Alexander Hamilton', 'Hamilton', 'John Jay', 'Jay', 'Publius'],
        N: 1
    },
    {
        Q: 'What is one thing Benjamin Franklin is famous for?',
        A: ['US diplomat', 'Oldest member of the Constitutional Convention', 'First Postmaster General of the United States', 'First Postmaster General', 'Write of Poor Richards Almanac', 'Started the first free libraries'],
        N: 1
    },
    {
        Q: 'Who is the "Father of Our Country?"',
        A: ['George Washington', 'Washington'],
        N: 1
    },
    {//70
        Q: 'Who was the first President?',
        A: ['George Washington', 'Washington'],
        N: 1
    },
    {
        Q: 'What territory did the United States buy from France in 1803',
        A: ['The Louisiana Territory', 'Louisiana Territory', 'Louisiana'],
        N: 1
    },
    {
        Q: 'Name one war fought by the United States in the 1800s',
        A: ['War of 1812', 'The War of 1812', 'Mexican American War', 'The Mexican American War', 'Civil War', 'The Civil War', 'Spanish American War', 'The Spanish American War'],
        N: 1
    },
    {
        Q: 'Name the US war between the North and the South',
        A: ['The Civil War', 'Civil War', 'War between the States'],
        N: 1
    },
    {
        Q: 'Name one problem that led to the Civil War',
        A: ['Slavery', 'Economic reasons', 'States rights'],
        N: 1
    },
    {//75
        Q: 'What was one important thing that Abraham Lincoln did?',
        A: ['Freed the slaves', 'Emancipation Proclamation', 'Saved the Union', 'Preserved the Union', 'Led the United States during the Civil War', 'Led the US during the Civil War'],
        N: 1
    },
    {
        Q: 'What did the Emancipation Proclamation do? Complete the sentence: Freed the _______',
        A: ['Slaves'],
        N: 1

    },
    {
        Q: 'What did Susan B Anthony do? Complete the sentence: Fought for _______ rights and _______ rights',
        A: ['Civil', ' Womens'],
        N: 2
    },
    {
        Q: 'Name one war fought by the United States in the 1900s',
        A: ['World War I', 'World War II', 'Korean War', 'Vietnam War', 'Gulf War', 'Persian Gulf War', 'World War One', 'World War Two', 'World War 1', 'World War 2'],
        N: 1
    },
    {
        Q: 'Who was the President during World War I?',
        A: ['Woodrow Wilson', 'Wilson'],
        N: 1
    },

    {//80
        Q: 'Who was the President during the Great Depression and World War II?',
        A: ['Franklin Roosevelt', 'Roosevelt'],
        N: 1
    },
    {
        Q: 'Who did the United States fight in World War II?',
        A: ['Japan', 'Germany', 'Italy'],
        N: 3
    },
    {
        Q: 'Before he was President, Eisenhower was a General.  What war was he in?',
        A: ['World War II', 'World War Two', 'World War 2'],
        N: 1
    },
    {
        Q: 'During the Cold War what was the main concern of the United States?',
        A: ['Communism'],
        N: 1
    },
    {
        Q: 'What movement tried to end racial discrimination?',
        A: ['Civil rights movement', 'Civil rights'],
        N: 1
    },
    {//85
        Q: 'What did Martin Luther King Jr do?\nComplete the sentences:\nFought for _______ rights.\nWorked for _______ for all Americans',
        A: ['Civil', 'Equality'],
        N: 2
    },
    {
        Q: 'What major event happened on September 11, 2001 in the United States? Complete the sentence: The United States was attacked by _______',
        A: ['Terrorists'],
        N: 1
    },
    {
        Q: 'Name one American Indian tribe in the United States',
        A: ['Cherokee', 'Navajo', 'Sioux', 'Chippewa', 'Choctaw', 'Pueblo', 'Apache', 'Iroquois', 'Creek', 'Blackfeet', 'Seminole', 'Cheyenne', 'Arawak', 'Shawnee', 'Mohegan', 'Huron', 'Oneida', 'Lakota', 'Crow', 'Teton', 'Hopi', 'Inuit'],
        N: 1
    },
    {
        Q: 'Name one of the two longest rivers in the United States',
        A: ['Missouri', 'Mississippi', 'Missouri River', 'Mississippi River'],
        N: 1
    },
    {
        Q: 'What ocean is on the West coast of the United States?',
        A: ['Pacific', 'Pacific Ocean'],
        N: 1
    },
    {//90
        Q: 'What ocean is on the East Coast of the United States?',
        A: ['Atlantic', 'Atlantic Ocean'],
        N: 1
    },
    {
        Q: 'Name one US territory',
        A: ['Puerto Rico', 'US Virgin Islands', 'American Samoa', 'Northern Mariana Islands', 'Guam'],
        N: 1
    },
    {
        Q: 'Name one state that borders Canada',
        A: ['Maine', 'New Hampshire', 'Vermont', 'New York', 'Pennsylvania', 'Ohio', 'Michigan', 'Minnesota', 'North Dakota', 'Montana', 'Idaho', 'Washington', 'Alaska'],
        N: 1
    },
    {
        Q: 'Name one state that borders Mexico',
        A: ['Texas', 'New Mexico', 'Arizona', 'California'],
        N: 1
    },
    {
        Q: 'What is the capital of the United States?',
        A: ['Washington DC'],
        N: 1
    },
    {//95
        Q: 'Where is the Status of Liberty?',
        A: ['New York', 'New York Harbor', 'Liberty Island', 'New Jersey', 'Near New York City', 'On the Hudson River'],
        N: 1
    },
    {
        Q: 'Why does the flag have 13 stripes? Complete the sentence:  The stripes represent the _______ _______ _______',
        A: ['Original', '13', 'Thirteen', 'Colonies'],
        N: 3
    },
    {
        Q: 'Why does the flag have 50 stars?  Complete the sentence:  Each _______ represents a _______',
        A: ['Star', 'State'],
        N: 2
    },

    {
        Q: 'What is the name of the national anthem?',
        A: ['The Star Spangled Banner', 'Star Spangled Banner'],
        N: 1
    },

    {
        Q: 'When do we celebrate Independence Day?',
        A: ['July4', 'July 4th'],
        N: 1
    },

    {
        Q: 'Name two national US holidays',
        A: ['New Years Day', 'Martin Luther King Jr Day', 'Presidents Day', 'Memorial Day', 'Independence Day', 'Labor Day', 'Columbus Day', 'Veterans Day', 'Thanksgiving', 'Christmas'],
        N: 2
    }

    // {
    //     Q:'',
    //     A:[],
    //     N:0
    // },


];

//currentQuestion will keep currentQuestion of what question we are on as we move through the test
let currentQuestion = 0;
let printQuestionNum = 1;
let modalTrigger = null;

//this userInput array will keep user entries to cross reference against the correct answers provided in the questions object
let userInput = [];
let fieldCount = 0;
let userString = [];
//array that holds user answer as a string with all characters from invalid to remove
let answerString = [];
//array to hold the correct answer string with all the characters from invalid to remove
let ansToEval = questions[currentQuestion].A
const invalid = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '[', '}', ']', '|', ';', ':', "'", '"', '<', ',', '>', '.', '/', '?', ' ']
//characters that will be filtered out of users answers

let cleanString = '';
let eval = null;
//\

//setting up event listener for the start button
const enterButton = document.getElementById('start')
enterButton.addEventListener('click', newButton)

//Modal
const modal = document.getElementsByClassName('modal')[0];
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
span.addEventListener('click', function () {
    modal.style.display = "none";
})
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
})

let numCorrectAns = 0;
let questionsLeft = 100;

//for later to get percentage
let finalScore = numCorrectAns/100;




//event listener for the document on change to focus on the first input element
function focusInput() {
    let inputFocus = document.getElementsByClassName('answer-fields')[0]
    inputFocus.focus();
}
//function writes new question to the DOM
function newQuestion() {
    document.querySelector('.question-section h1').innerHTML = printQuestionNum + '. ' + questions[currentQuestion].Q;
}

function createForm() {
    //user a loop to create multiple times based on the  variable, 
    for (var i = 0; i < questions[currentQuestion].N; i++) {
        fieldCount++;
        let answerSection = document.querySelector('.answer-section');
        let input = document.createElement("input");
        input.setAttribute('type', 'text');
        input.setAttribute('maxlength', '75');//form field eval
        input.setAttribute('value', '');
        input.setAttribute('class', 'answer-fields');
        input.setAttribute('id', 'field' + fieldCount);
        answerSection.appendChild(input);
        input.addEventListener('blur', fieldCharacters)
        input.addEventListener('focus', fieldCharacters)
        input.addEventListener('input', fieldCharacters)
        input.addEventListener('input', checkAllFields)
    }
}

//function that loops through the input fields and pushes the users answers into an array to then be filtered
function getUserInput() {
    let fieldCountNum = 0
    for (var i = 0; i < fieldCount; i++) {
        fieldCountNum++
        let userSaidWhat = document.getElementById('field' + fieldCountNum).value
        userInput.push(userSaidWhat);
    }
}

//function that loops through the characters in the invalid array (unwanted characters) if there is a match on what is passed as x stop the loop and start over on the next character, otherwise finish the loop.  Set eval variable to true/ false  if true create a new string adding the character that made it through the gauntlet which will later be pushed into another array for evaluating the correct answer that is filtered with the users answer that is filtered.
function invalidFilter(x) {
    for (var i = 0; i < invalid.length; i++) {
        if (x === invalid[i]) {
            eval = false;
            break;
        } else {
            eval = true;
        }
    }
    if (eval === true) {
        cleanString += x;
    }
}

//function that finishes filtering the arrays passed and turns them into a final array to be validated against the filtered user answer and the filtered correct answer. 
function filterString(a) {
    for (var i = 0; i < a.length; i++) {
        let string = a[i]
        let stringLow = string.toLowerCase().trim();
        for (var j = 0; j < stringLow.length; j++) {
            invalidFilter(stringLow[j])
            //this is where invalid filter finally runs after the index of the argument string passed is changed to lowercase with excess space removed on edges. 
        }
        if (a === userInput) {
            userString.push(cleanString)
            cleanString = '';
        } else if (a === ansToEval) {
            answerString.push(cleanString)
            cleanString = '';
            //if else is used to check what variable was passed, if userInput push to a different array from ansToEval variable.
        } else {
            console.log('Something went wrong, input argument isnt userInput or answerInput')
        }
    }
}

//function runs through the filtered strings for the users answer and the correct answer, then checks to see how many matched.  If the number matched is equal to the number of correct answers required the user answered correctly if less then the user answered something wrong.  Only issue is the multiple answers example: NY, NYC, New York, etc.  Will need to re-write the QA in the future  or use sub arrays.

function evaluateAnswer() {
    //userInput vs answerString
    let modalHeader = document.getElementsByClassName('modal-header')[0].children[1];
    let modalFooter = document.getElementsByClassName('modal-footer')[0];
    let modalContent = document.getElementsByClassName('modal-body')[0];
    let answers = questions[currentQuestion - 1].A
    let right = document.getElementById('right-answer').children[1];
    console.log(right)
    let user = document.getElementById('user-answer').children[1];
    console.log(user)

    let trueCount = 0;
    //
    for (var i = 0; i < userString.length; i++) {
        for (var j = 0; j < answerString.length; j++) {
            if (userString[i] === answerString[j]) {
                trueCount++
            }
        }
    }
    modalHeader.innerHTML = questions[currentQuestion - 1].Q;
    right.textContent = '';
    user.textContent = '';

    for (var i = 0; i < userInput.length; i++) {
        user.textContent += userInput[i] + '  |  ' + '\n'
    }
    for (var i = 0; i < answers.length; i++) {
        right.textContent += answers[i] + '  |  ' + '\n'
    }
    //show modal
    modal.style.display = "block";

    //writes whether or not the answers provided were correct on the modal also if correct change the number correct variable.
    if (trueCount === questions[currentQuestion - 1].N) {
        numCorrectAns++
        questionsLeft--
        modalFooter.textContent = 'Your answer(s) were all correct, you have answered ' + numCorrectAns + ' out of 100 correctly and you have ' + questionsLeft + ' questions left to answer.'
        console.log(finalScore)
    } else {//can do answers/ answer and were/ was based on the # of answers then use switch statement/ or another if else
        questionsLeft--
        modalFooter.textContent = 'One or more of your answer(s) were incorrect,  you have answered ' + numCorrectAns + ' out of 100 and you have ' + questionsLeft + ' questions left to answer.'
    
    }
}

function resetFields() {
    userInput = [];
    userString = [];
    answerString = [];
    cleanString = '';
    document.getElementById('submit').disabled = true;
    let fieldDeleteCount = 0;
    let offsetCurrentQ = currentQuestion - 1
    for (var i = 0; i < questions[offsetCurrentQ].N; i++) {
        fieldDeleteCount++
        let fieldToRemove = document.getElementById('field' + fieldDeleteCount)
        fieldToRemove.parentNode.removeChild(fieldToRemove)
    }
}

//event listener function that checks for key pressed if its the enter key runs the next question
function whichKey(e) {
    if (e.which === 13) {
        nextQuestion();
    }
}

// do not let reset fields run until the user has submitted all answers & only on click: onclick is running getUserInput();

function newButton() {
    newQuestion();
    createForm();
    let deleteButton = document.getElementById('start')
    let buttonSection = document.querySelector('.enter')
    deleteButton.parentNode.removeChild(deleteButton)
    let button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('id', 'submit')
    button.addEventListener('click', nextQuestion)
    button.setAttribute('disabled', 'true')
    button.setAttribute('class', 'enter-buttons')
    button.innerHTML = 'Submit'
    buttonSection.appendChild(button)
    focusInput();
}

//function that changes the class of the fields based on whether or not the value length is more than 0 or 1, attached as an event listener to the field that is selected/user is currently on.
function fieldCharacters(e) {
    let target = e.target;
    if (target.value.length < 1 || 0) {
        target.setAttribute('class', 'answer-fields red')
        // target.setAttribute('placeholder', 'please enter something')
        buttonChanges();
    } else {
        //change it back
        target.setAttribute('class', 'answer-fields')
    }
}

//final check if user changes or deletes an answer leaving field blank
function areTheseEmpty() {
    let numFields = document.getElementsByClassName('answer-fields')
    for (var i = 0; i < numFields.length; i++) {
        if (numFields[i].value.length === 0) {
            buttonChanges();
        } else {
            document.addEventListener('keyup', whichKey)
        }
    }
}

function checkAllFields() {
    let fieldsArr = [];
    let counts = [];
    let domFields = document.getElementsByClassName('answer-fields')
    for (var i = 0; i < domFields.length; i++) {
        let fieldToLower = domFields[i].value.toLowerCase().trim()
        fieldsArr.push(fieldToLower)
        //users answer is pushed to a new array after changing to lowercase
    }
    for (var i = 0; i <= fieldsArr.length; i++) {
        if (counts[fieldsArr[i]] === undefined) {
            //looped itself will return undefined set value to 1 so it is defined
            counts[fieldsArr[i]] = 1;
        } else {
            // console.log('you have a duplicate answer please change your answer to something else')
            //return true if during loop hit  key that exists
            return true;//stop if duplicate is found
        }
    }
    let submitButton = document.getElementById('submit')
    submitButton.setAttribute('class', 'enter-buttons green')
    submitButton.disabled = false;
    //final check to check for empty fields runs afterwards
    areTheseEmpty()
    return false;
}

function buttonChanges() {
    let submitButton = document.getElementById('submit')
    submitButton.setAttribute('class', 'enter-buttons')
    submitButton.disabled = true;
    document.removeEventListener('keyup', whichKey)
}

function nextQuestion() {
    buttonChanges();
    currentQuestion++;
    printQuestionNum++
    ansToEval = questions[currentQuestion - 1].A
    getUserInput();
    fieldCount = 0
    filterString(userInput);
    filterString(ansToEval);
    evaluateAnswer()
    // alert('This was your answer:  ' + userString + '\nThese are acceptable answers:  ' + answerString);
    resetFields()
    newQuestion();
    createForm();
    focusInput();
    //when this runs it also runs the placeholder on the second question
}


//finish writing tests for Mocha

//For answers that are the same but phrased differently: put them within their own array so that duplicates arent entered or a different version of the same answer isnt given by the user

//need end to test to summarize what was right and wrong

//write a short 10 answer test to simulate test given @ naturalization test

// add different states (this will be the "get ready page")

//add on page load focus on the first input field
// https://www.uscis.gov/sites/default/files/USCIS/Office%20of%20Citizenship/Citizenship%20Resource%20Center%20Site/Publications/100q.pdf

//https://www.uscis.gov/citizenship/learners/study-test

//https://www.uscis.gov/citizenship/learners/study-test/study-materials-civics-test

//https://www.uscis.gov/citizenship/learners/study-test/study-materials-civics-test/100-civics-questions-and-answers-mp3-audio-english-version


//https://www.uscis.gov/sites/default/files/files/nativedocuments/Track%2001.mp3

//can include track from USCIS website as well, add to questions object and display for the user to be able to click when the question is presented(imbed into page)

//for end the sentences questions MAY need to supply a sentence answer, will decide much later...
