// Add some text to the body

const body = document.getElementsByTagName("body")[0];
//change the background color of an element
body.style.backgroundColor = "lightblue";
body.style.fontFamily = "'Garamond', serif";


let heading = document.createElement("h1");
body.appendChild(heading);

//add text content will update since child has already been appended
heading.textContent = "This is a Web Page H1 Header";
// 🎨 Apply gradient to the text for funzies
heading.style.background = "linear-gradient(to right, #ffbf00, #dc143c )";
heading.style.webkitBackgroundClip = "text";   // for Chrome, Safari
heading.style.backgroundClip = "text";         // standard property
heading.style.color = "transparent";           // make text itself see-through
heading.style.display = "inline-block";
heading.style.marginBlockEnd = "20px";
heading.style.marginRight = "10px";


// body text with default text in intialization
const bodyText = document.createTextNode("Some Text to go into the body");
body.appendChild(bodyText);

// add a paragraph
const paragraph = document.createElement("p");
const paraText = document.createTextNode("This is a paragraph added dynamically, with some additional attributes attached!");
paragraph.appendChild(paraText);
body.appendChild(paragraph);

// The additional attributes
paragraph.style.fontWeight = "Bold";
paragraph.style.textDecoration = "underline";
paragraph.style.fontStyle = "italic";
paragraph.style.fontSize = "30px";
paragraph.style.color = "#ff0000ff";



const paragraph2 = document.createElement("p");
const paraText2 = document.createTextNode("This is a second paragraph added dynamically!");
paragraph2.appendChild(paraText2);
body.appendChild(paragraph2);

paragraph2.style.fontSize = "20px";

//adding anothe rtext node to paragraph
const para1Text2 = document.createTextNode(" A 2nd Node of Text");
paragraph.appendChild(para1Text2);

paragraph.insertBefore(para1Text2, paraText);


const list = document.createElement("ol");
const listTitle = document.createElement("p");
listTitle.textContent = "This is a list added dynamically"

for(let i = 0; i < 10; i++){
    const listItem = document.createElement("li");
    listItem.textContent = `This is item ${i+1}!`;
    
    
    list.appendChild(listItem);
}

body.appendChild(listTitle);
body.appendChild(list);

const list2 = document.createElement("ul");

for(let i = 0; i < 10; i++){
    const listItem2 = document.createElement("li");
    let link = document.createElement("a");
    link.href = "#" + i; // links to other list
    linkText = document.createTextNode("This links to something: " + i);
    link.appendChild(linkText);
    listItem2.appendChild(link);
    // listItem2.textContent = `This is item ${i+1}!`;
    
    
    list2.appendChild(listItem2);
}

body.appendChild(list2);






