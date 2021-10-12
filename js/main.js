let animatedTitles = $('.animated-title')

function findClosing(arr, i) {
    let count = i
    let getFullTag = arr[count]
    
    while (arr[count] != ">") {
        count += 1
        getFullTag += arr[count]
    }

    return getFullTag
}

for (let index = 0; index < animatedTitles.length; index++) {
    const element = animatedTitles[index];
    // console.log([...element.innerHTML])
    let arr = [...element.innerHTML];
    let string = ""
    let getFullTag = ""
    let ignoreText = false
        
    for (let i = 0; i < arr.length; i++) {
        const letter = arr[i];
        if (arr[i] == "<") {
            ignoreText = true
            getFullTag = findClosing(arr, i)
            string += `${getFullTag}`
            getFullTag = ""
        }

        if (!ignoreText) {
            string += `<span class="letter-highlight">${letter}</span>`
        }

        if (arr[i] == ">") {
            ignoreText = false
        }

    }
    element.innerHTML = string;
}

let hamNav = $('#hamburger-nav');
let hamNavItems = $('#hamburger-nav-items');

console.log(hamNav);

let hamExpand = false;

hamNav.click(function(element){
    if (hamExpand) {
        hamNavItems.css({"display": "none"});
        hamExpand = false;
    } else {
        hamNavItems.css({"display": "flex"})
        hamExpand = true;
    }
})
console.log("test")