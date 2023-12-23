
import React from "react";
import  ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));


// Core React
const heading = React.createElement(
    "h1",
    {id:'heading'},
    "Core React Heading"
);


// JSX heading
// React Element
const jsxHeading = (<h1 id="headig" tabIndex="9">JSX heading </h1>);



// React functional Component

const Title = () =>{
    return (
        <h1>This is Title </h1>
    )
}

const HeadingComponent = () =>{
    return (
        <>
           <Title />
           <h1>Hello from Heading Component</h1>
        </>
      
    )
}

root.render(<HeadingComponent />)






// const reactEle = React.createElement("h1",{},"Hello from core react");

// const reactEle2 = (<h1>Hello from jsx Element, Also an React element </h1>)

// const Mycomponent2 = () => {
//     return (
//         <> 
//           <Title />
//           <h1> Hello from Component</h1>
//         </>
//     )
// }

// root.render(<Mycomponent2 />)

