# Intro component with sign up form

## code operation

- i've declared only two variables called *"input"* and *"btn"*

- **input** makes reference to a collection of html elements input in the form

- **btn** its a action button to submmit the data on the inputs

### functions

- there are two functions *"checkAll"* and *"checkItem"*

- **checkAll()** verify all input elements if they have some value or not

- if some of then didn't have an value inside, change the target color to red and add a background-image with an icon-error on the side right

- if the target value have an value inside him, turns the target border color to green

- finally, start an timeout to clear the value of all inputs and turn his border colors to black