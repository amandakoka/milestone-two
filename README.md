# World Flags Quiz
[View website here](https://amandakoka.github.io/milestone-two/)

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
    4. [Site Owner Stories](#site-owner-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Images](#images)
    3. [Colour](#colours)
    4. [Fonts](#fonts)
    5. [Structure](#structure)
    6. [Wireframes](#wireframes)
4. [Features](#features)
5. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
6. [Testing](#testing)
    1. [HTML Validation](#html-validaion) 
    2. [CSS Validation](#css-validaion) 
    3. [JavaScript Validation](#javascript-validaion) 
    4. [Performance](#performance)  
    5. [Device testing](#device-testing) 
    6. [Browser testing](#browser-testing) 
    7. [Testing user stories](#testing-user-stories) 
7. [Bugs](#bugs) 
8. [Deployment](#deployment)
9. [Credits](#credits) 

# Project Goals 
The world flags quiz is a a classic flag guessing game to test users knowledge on flags and a fun educational game to play!
## User Goals 
* Play a fun and engaging world flag guessing game. 
* Test your knowledge by guessing the flags name. 
## Site Owner Goals 
* Create a fun and engaging game that users will want to play over and over again.
* The quiz should be interactive and fully responsive to be able to be played on different devices.

# User Experience 
## Target Audience 
* Students who need to test their knowledge.
* People looking for a fun, quick game to play.
* Anyone with an interest with flags and guessing games.
## User Requirements and Expectations 
* A simple, intuative navigation system.
* Quick, easy, fun game to play.
* Links and buttons to work as expected.
* Accessibility 
* Easy way to leave feedback 
## User Stories 
1. As a user, I want to test my knowledge on world flags.
2. As a user, I want to know what the right flag is in case I dont pick correctly.
3. As a user, I want to see how many flags I have got correct and incorrect.
4. As a user, I want to see how long I take guessing the flags.
5. As a user, I want to receive feedback when I get an answer correct or incorrect.
## Site Owner Stories 
1. As a site owner, I want users to be able to contact us and leave any feedback.
2. As a site owner, I want users to find us on social media. 
3. As a site owner, I want all users to be able to play the quiz easily.

# Design 
## Design Choices 
The World Flags quiz prioritizes a simple and clean layout to ensure users can immerse themselves in the quiz without unnecessary distractions. The primary goal is to create an engaging environment where users can focus on the challenge of identifying flags. By using a straightforward design, users can navigate effortlessly and concentrate on the quiz content. This design promotes accessibility and inclusivity, allowing a diverse audience to enjoy the game without complications.
## Colour 
The color palette for the website was carefully chosen to coordinate with the grey header image. To maintain visual coherence, a color picker tool was employed to extract a suitable grey shade from the header image. This approach makes sure that the colors blend smoothly across the entire website.The deliberate use of a simple color scheme aims to facilitate a smooth user experience, minimizing potential distractions and enabling users to concentrate on the vibrant colors of the flags displayed in the quiz.
- [Header Image](documentation/background.png)
- [Colour picker image](documentation/colourpicker.png)
## Images 
All flag images used in the World Flags Quiz are from freepik.com by rawpixel.com. Proper credit has been attributed to rawpixel.com in the "Credits" section. These images not only contribute to the visual appeal of the quiz but also align with its educational and engaging nature. They enhance the overall aesthetic, allowing users to explore and identify flags from around the world, thereby enriching the quiz experience.
## Fonts
Choosing the right font is important to maintaining the overall simplicity and cleanliness of the design. I opted for the Lato font from Google Fonts for its clean and modern aesthetic. This font enhances the readability of the quiz content, ensuring that users can easily comprehend text instructions, flag names, and any additional information provided during the quiz.
## Structure 
The website is structured in a user-friendly and easy-to-use way and designed with a simple and clean layout to ensure an immersive, distraction-free experience. The webiste consists of 2 pages:

1. Homepage(The Quiz):
- Upon entering the website, users are greeted with a welcome message and a "Start Quiz" button.
- Clicking the "Start Quiz" button leads users to the actual quiz, where there's a series of flag images to identify.
- The layout prioritizes ease of navigation, allowing users to focus on the challenge of guessing flags.
2. Contact us page(where users can contact with any concerns/questions)
- A separate "Contact Us" page is available for users to reach out with concerns or questions located in the footer.
- The contact form enables easy communication and provides users with a platform to leave feedback.

## Wireframes 
* [Home page](documentation/wireframe.png)
* [Contact us page](documentation/contactwireframe.png)

# Features 

# Technologies Used
## Languages Used 
- HTML
- CSS
- JavaScript 
## Frameworks Used
- Figma was used to create wireframes.
- Google Fonts was used for the fonts throughout the website.
- Font Awesome was used for icons in the footer.
- GitHub was used to store the project and code after being pushed from git.
- Git used for version control and for commiting and pushing to GitHub.

# Testing
### HTML Validation 
### CSS Validation
### JavaScript Validation
### Performance 
### Device testing
### Browser testing
### Testing user stories
1. As a user, I want to know what the right flag is in case I dont pick correctly.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
|  |  |  |  |

2. As a user, I want to see how many flags I have got correct and incorrect.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
|  |  |  |  |

3. As a user, I want to see how long I take guessing the flags.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
|  |  | |  |

4. As a user, I want to receive feedback when I get an answer correct or incorrect.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
|  |  |  |  |

5.. As a site owner, I want users to be able to contact us and leave any feedback.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
|  |  |  |  |

6. As a site owner, I want users to find us on social media.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
|  |  |  |  |

# Bugs 
| **Bug** | **Fix** |
| ----------- | ----------- |
| [Button bug](documentation/buttonbug.png) After starting a new game, the first four answer buttons were still visible. This occurred because the state was not properly reset after starting a new game.| Implemented a reset state function to ensure that the initial state is properly cleared, including the visibility of answer buttons. |
| [Image bug](documentation/imagebug.png) The question was displaying as text instead of an image. The HTML structure needed modification to ensure that the question is rendered as an image.  | Updated the HTML code to correctly include image elements, resolving the issue of text display and ensuring that questions are consistently presented as images. |
| Game scores and total score were still appearing when starting a new game. This occurred because the final score, correct, and incorrect elements were not being cleared after starting a new game. | Added a restart quiz function to reset the necessary elements, including the final score, correct, and incorrect elements, ensuring a clean start for each new game. |
| Content distorted in certain views. The content was distorted in certain views, affecting the visual layout. This distortion occurred due to the lack of responsive design elements, causing elements to display improperly on smaller screens or specific resolutions. | Implemented media queries in the CSS to apply specific styling adjustments based on screen size. This ensured that the content layout adapts appropriately to different devices, preventing distortion and maintaining a visually appealing presentation. |
| [Message Bug](documentation/messagebug.png) The message was still appearing when moving to the next question. The message container was not properly reset during the transition to the next question. | Included the "message container" in the reset state function to clear any existing messages, preventing them from carrying over to the next question. |
| [Progress Bar Bug](documentation/progressbarbug.png) The progress bar wasn't filling when the game finished. The progress bar was not updated to 100% when displaying the final score. | Modified the show score function to set the progress bar to 100% when showing the final score, ensuring that the progress bar accurately reflects completion. |
| [Timer Bug](documentation/timerbug.png) The timer was starting before the user pressed the "Start Quiz" button. The timer interval was not properly controlled, leading to premature initiation. | Added an event listener to start the timer only when the user clicks the "Start Quiz" button, preventing the timer from starting unintentionally.  

# Deployment
The World Flags Quiz project is deployed on GitHub Pages, providing a convenient way to showcase and access the quiz online. The following steps outline the deployment process:

### GitHub Repository:
The project is stored in a GitHub repository, ensuring version control and collaboration.
### GitHub Pages:
GitHub Pages is utilized for hosting the live version of the World Flags Quiz.
Navigate to the "Settings" tab in the GitHub repository.
### Source Branch:
In the "Settings" tab, scroll down to the "GitHub Pages" section.
Choose main from the branch menu. Select root from the folder menu and save. GitHub Pages will deploy the site.
### Deployment:
After selecting the source branch, GitHub Pages will provide the URL where the live site is accessible.
### Live Site URL:
The live version of the World Flags Quiz can be accessed at Your GitHub Pages URL.

## Local Deployment
You can fork the World flags Quiz repositry by following these steps:

1. Log in or signup to Github.
2. Find the repository for this website.
3. Click the fork button in the top right corner.

You can clone the repositry by following these steps:

1.Log in or signup to Github.
2.Find the repository for this website, autismawareness.
3.Click on the code button and select whether you would like to clone with HTTPS,SSH or Github CLI and copy the link shown.
4.Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5.Type 'git clone' into the terminal, then paste the link you copied in step 3 and Press enter.

# Credits 

## Media 
- All images of flags were used from the freepik website by [rawpixel.com](https://www.freepik.com/search?author=2199844&authorSlug=rawpixel.com&format=author&query=flags)
<a href="https://www.freepik.com/free-vector/illustration-uk-flag_2807791.htm#query=flags&position=0&from_view=author&uuid=063cb6e6-0ed9-4f48-bd6e-dc8b1aca686f">Image by rawpixel.com</a> on Freepik
- My header image was also used from the same place.
<a href="https://www.freepik.com/free-vector/worldwide-connection-gray-background-illustration_3525480.htm#query=grey%20map&position=24&from_view=search&track=ais&uuid=e1233345-ec0f-4ffa-9e06-b9288ed4ddeb">Image by rawpixel.com</a> on Freepik

## Code 
- The score area HTML,CSS+JS code was written with the help of Code Institutes Love Maths project
- The footer HTML+CSS code was reused from my [previous project](https://github.com/amandakoka/autismawareness) and changed to fit this website.
- The contact form HTML+CSS was resued from my [previous project](https://github.com/amandakoka/autismawareness)and changed to fit this websites purpose.
- The contact forms JS code was written with the help of the [EmailJs tutorials](https://www.emailjs.com/docs/tutorial/creating-contact-form/) and a [youtube tutorial.](https://youtu.be/qxWDVRyc95E?si=rJUAMLa7AzZuczgo)


