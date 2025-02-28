/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START: VERSE LIST~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// ORIGINAL COPY OF BIBLE VERSE LIST
const verseList = [
	{
		verse: `When Jesus heard this, he said, "Healthy people don't need a doctor—sick people do." Then he added, "Now go and learn the meaning of this Scripture: 'I want you to show mercy, not offer sacrifices.' For I have come to call not those who think they are righteous, but those who know they are sinners."`,
		book: `Matthew 9:12-13`,
	},
	{
		verse: `He said, "I came naked from my mother's womb, and I will be naked when I leave. The Lord gave me what I had, and the Lord has taken it away. Praise the name of the Lord!"`,
		book: `Job 1:21`,
	},
	{
		verse: `But the Holy Spirit produces this kind of fruit in our lives: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. There is no law against these things!`,
		book: `Galatians 5:22-23`,
	},
	{
		verse: `The Lord is my shepherd; I have all that I need.`,
		book: `Psalm 23:1`,
	},
	{
		verse: `"So why do you keep calling me 'Lord, Lord!' when you don't do what I say?"`,
		book: `Luke 6:46`,
	},
	{
		verse: `"Do not be afraid, for I am with you. Do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."`,
		book: `Isaiah 41:10`,
	},
	{
		verse: `For who has shown contempt for the day of small things? But these seven will rejoice when they see the plumb line in the hand of Zerubbabel—they are the eyes of the Lord roaming throughout the earth.`,
		book: `Zechariah 4:10`,
	},
];

// BIBLE VERSE LIST TO BE USED
const verseListToBeUsed = [];
for (let i = 0; i < verseList.length; i++) {
	verseListToBeUsed.push(verseList[i]);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END: VERSE LIST~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START: INITIAL STATES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// INITIAL RANDOM INDEX
let currentIndex = Math.floor(Math.random() * verseList.length);

// INITIAL BIBLE VERSE
const verse = document.getElementById("verse"),
	book = document.getElementById("book");

verse.innerText = verseList[currentIndex].verse;
book.innerText = `− ${verseList[currentIndex].book}`;

// COLORS FOR NEW VERSE BUTTON
const newVerseButton = document.getElementById("new-verse-btn"),
	darkGreen = "rgb(50, 80, 62)",
	forestGreen = "forestgreen";

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END: INITIAL STATES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START: FUNCTIONS TO GENERATE NEW BIBLE VERSE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function highlightNewVerseButton() {
	// HIGHLIGHT NEW VERSE BUTTON
	newVerseButton.style.background = forestGreen;
}

function getBibleVerse() {
	// FADE OUT PREVIOUS BIBLE VERSE
	verse.style.opacity = 0;
	book.style.opacity = 0;

	// RESET COLOR OF NEW VERSE BUTTON
	newVerseButton.style.background = darkGreen;

	// FIRE FUNCTION AFTER 500ms DELAY
	setTimeout(() => {
		// REMOVE PREVIONS BIBLE VERSE FROM BIBLE VERSE LIST TO BE USED
		verseListToBeUsed.splice(currentIndex, 1);

		// RESET BIBLE VERSE LIST TO BE USED ONCE EMPTY
		if (verseListToBeUsed.length === 0) {
			for (let i = 0; i < verseList.length; i++) {
				verseListToBeUsed.push(verseList[i]);
			}
		}

		// GENERATE NEW RANDOM INDEX
		currentIndex = Math.floor(Math.random() * verseListToBeUsed.length);

		// FADE IN NEW BIBLE VERSE
		verse.innerText = verseListToBeUsed[currentIndex].verse;
		book.innerText = `− ${verseListToBeUsed[currentIndex].book}`;

		verse.style.opacity = 1;
		book.style.opacity = 1;
	}, 500);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END: FUNCTIONS TO GENERATE NEW BIBLE VERSE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START: MISCELLANEOUS TOUCH FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

newVerseButton.addEventListener(
	"touchstart",
	(e) => {
		e.preventDefault();
	},
	{ passive: false }
);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END: MISCELLANEOUS TOUCH FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
