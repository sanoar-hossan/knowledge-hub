import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div class="container mt-5 text-center">
  <div class="row">
    <div class="col">
   <div className="ques">Question-1: Props vs State</div>
   <div className="answer">Props are used to pass data from a parent component to a child component. They are immutable and read-only, meaning that the child component cannot modify the props it receives from its parent.
   State, on the other hand, is used to manage the internal data and behavior of a component. It is mutable and can be changed using the setState method. State is local to the component, meaning that only the component that owns the state can modify it.</div>
    </div>
    <div class="col">
   <div className="ques"> Question-2: How does UseState work?</div>
    <div className="answer">useState is a hook in React that allows functional components to have stateful logic without using class components. It is used to declare a state variable and its initial value, as well as to update the value of the state variable. The useState hook returns an array that contains two elements: the current state value and a function that updates the state value. The state value can be any type of data, including objects and arrays. Whenever the state value changes, React will re-render the component to reflect the updated state.</div>
    </div>
    <div class="col">
   <div className="ques"> Question-3:Purpose of useEffect other than fetching data</div>
    <div className="answer">The useEffect hook in React is not only used for fetching data, but also for performing side effects, such as manipulating the DOM, setting up event listeners, and updating the document title. It allows you to run code after rendering the component, and specify when it should be run, such as when a specific prop or state changes. This way, you can ensure that your application is always up-to-date with the latest data and UI changes. Additionally, you can use it to clean up after the component, such as removing event listeners or cancelling subscriptions.</div>
    </div>
    <div class="col">
    <div className="ques">Question-4:How does React Work?</div>
    <div className="answer">React is a JavaScript library that helps in building user interfaces (UIs) for web applications. React is based on the component-based architecture, where a web page is divided into small components. Each component has its own logic, state, and UI elements, which can be reused and combined to build a complete web page.When a user interacts with a React-based web page, such as clicking a button, React updates the relevant components and their states. React uses a virtual DOM (Document Object Model), which is a lightweight representation of the actual DOM. React compares the virtual DOM with the previous version of the virtual DOM to determine the changes that need to be made to the actual DOM, and then updates only those elements that need to be updated. </div>
    </div>
  </div>
</div>
         

        </div>
    );
};

export default Blog;