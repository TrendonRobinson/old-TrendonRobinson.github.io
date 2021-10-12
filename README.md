# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | complete
|Day 1| Wireframes / Priority Matrix / Timeline | complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | complete
|Day 4| MVP & Bug Fixes | complete
|Day 5| Final Touches | complete
|Day 6| Present | incomplete


## Project Description

For this project I will be taking inspiration from https://jacekjeznach.com/ with potentially a more vibrant color scheme The format will be the same with a different aesthetic

## Wireframes

https://www.figma.com/file/pZflckcx5Hxc92WRleBiIT/Untitled?node-id=0%3A1

## Time/Priority Matrix 

[Link](https://res.cloudinary.com/jkeohan/image/upload/a_270/v1591621734/project1_matrix_ocy5gc_h1kg0m.jpg)

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase

#### PostMVP 

- Anything else that is not MVP

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into smaller components.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the portfolio. Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the portfolio must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 1hr | hr |
| Project Previews | H | 3hr | hr |
| Adding Form | H | 1.5hr|  hr | 
| Other sections and flex| M | 2hr | hr|
| Working with API | H | 3hrs|  hr | 
| Responsive | H | 3hr | hr | hr |
| Social Media Icons | L | 1hr |  hr |
| Total | H | 14.5hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Hover | L | 3hr | -hr | hr |
| Banner letters wiggle | L | 1hr | hr |
| Interactive Banner | M | 4hr | hr |
| Materialize | H | 4hr | -hr | hr |
| Bootstrap | H | 4hr | hr |
| Make own icon | L | 1hr | hr |
| Total | H | 17hrs| hrs |

## Additional Libraries
 jQuery
 
 particles.js
 
 typewriter.js
 
 scrollreveal.js
 
 materialize.css

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

This code gets the innerHTML of elements with the "animatedTitles" class and it skips over tags suchs as '<br>' tags while wrapping the letters in "<span>" tags.

```js
function findClosing(arr, i) {
    let count = i;
    let getFullTag = arr[count];
    
    while (arr[count] != ">") {
        count += 1;
        getFullTag += arr[count];
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
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
 
 Honestly I really don't remember running into any issue aside from the one above. 

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
