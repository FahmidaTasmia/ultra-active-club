import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div  >
            <div className='question' >
             <h3>What is React? and how does it work?</h3>
             <p>React:React.js is one of the most talked about JavaScript web frameworks in years. Alongside Angular, and more recently Vue, React is a critical tool that has had a big impact on the way we build web applications. But it’s hard to find a better description of React.</p>
             <p>It’s a library. For building user interfaces. This is perfect because, more often than not, this is all we want. The best part about this description is that it highlights React’s simplicity. It’s not a mega framework. It’s not a full-stack solution that’s going to handle everything from the database to real-time updates over web socket connections. We don’t actually want most of these pre-packaged solutions, because in the end, they usually cause more problems than they solve. Facebook sure did listen to what we want.</p>
            </div>

            <div className='question' >
             <h3>Difference between props and state in react</h3>
             <p>State:The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
             <p>React:It’s a library. For building user interfaces. This is perfect because, more often than not, this is all we want. The best part about this description is that it highlights React’s simplicity. It’s not a mega framework. It’s not a full-stack solution that’s going to handle everything from the database to real-time updates over web socket connections. We don’t actually want most of these pre-packaged solutions, because in the end, they usually cause more problems than they solve. Facebook sure did listen to what we want.</p>
            </div>

            <div className='question' >
             <h3>Without loading data what else is the useEffect API useful for?</h3>
             <p>
                <li>The useEffect Hook allows you to perform side effects in your components.</li>
                <li>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</li>
                <li>useEffect accepts two arguments. The second argument is optional.</li>
             
             </p>
            </div>
        </div>
    );
};

export default Blog;