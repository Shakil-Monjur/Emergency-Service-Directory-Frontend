1. # Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll
  getElementById: it uses to find a signle element by usign an id name.

  getElementByClassName: it used to find all elements by using a class name. It returns an HTML collection.

  querySelector: For a CSS selector(like #id, .class), it finds the first element.

 querySelectorAll:  For a CSS selector(like #id, .class), it finds the all elements.


 2. # How do you create and insert a new element into the DOM?
  first--create a new element(let newP=document.createElement("p");)

  Second--adding text of attributes(
    newP.innerText = "Shakil";
  )

  Third--Append it to the Dom(document.appendChild(newP);)


3. # What is Event Bubbling and how does it work?

  --when we click the element, then it go to his parent, then go to it's grandparent, and move on, then finally go to the main Document. it's called Event Bubbling.

  how does it works?
  a. firstly, it runs on the clicked element itself.
  b. then moves to it's parent
  c. then moves to it's grandparent
  d. go on and finally reach the document

4. # What is Event Delegation in JavaScript? Why is it useful?
  it's a method where we add a eventListener on a parent Element and then we can handle the parent's child.

  it is useful because--
  a. we don't need to add eventListen for all the child element.
  b. It save the memory
  c. code will easy to manage.

5. # What is the difference between preventDefault() and stopPropagation() methods?
  prevenDefault()--it stops the default behavior of an element.

   stopPropagation()-- it stops event bubbling or capturing