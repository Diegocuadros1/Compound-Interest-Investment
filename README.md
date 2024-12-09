
# Investment Converter

This web application is created to be able to calculate compound interest. It takes in 4 inputs: Principal, APR(interest rate), times compounded per year, and how many years. This will give you an output of your compound interest that you will make in those years. There is also functionality in which I added a button that spins an image around. And as you increase your APR, the background color of the web application changes. The button also expands when hovered.
## Tech Stack

**Client:** HTML, CSS, JavaScript

## Explanation

Each different input tag has an id where it is then selected in javascript. Each of these inputs have an event listener for when something is typed inside, and then it will run a function called calculate, where it will run a calculation on the numbers that are given. Then it will output on the output tag that is defaulted to an underline. I also added in the calculate function a small addition that whenever the APR bar is moved, then the background color will change to a random color. I also added another small function that takes in the click me button and it rotates the image around by adding a class whenever the button is pressed. 

## Link

https://codesandbox.io/p/sandbox/compound-interest-investment-6s4hxn
