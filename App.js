import React from "react";
import ReactDOM from "react-dom/client";
// ---------------------------------------------------------------------------------------------------------
/*
        Swiggy UI

        <AppLayout>
                - Header
                        -Logo
                        -NavItems
                - Body
                -Footer
*/

const Header = () => {
        return(
                <div className="header">
                        <div className="logo-container">
                                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU" />
                        </div>
                        <div className="nav-items">
                                <ul>
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Cart</li>
                                </ul>
                        </div>
                </div>
        );
};

const AppLayout = () => {
        return(
                <div className = "app">
                        <Header /> 
                </div>
        );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// --------------------------------------------------------------------------------------
/*
        Writing Component Inside React Element
*/

// const elem = <span>REACT ELEMENT</span>;

// const HeadingComponent = () => (
//         <div id="container">
//                 <h1 clssnName="heading">Namaste React Functional Component</h1>
//         </div>
//         );
// const title = (<h1 
//         className="head">
//         {elem}
//         Namaste React using JSX 🚀
//         <HeadingComponent />
//         </h1>);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(title);

// -------------------------------------------------------------------------------------------
/*
        Putting React Element Inside React Element
*/

// const elem = <span>REACT ELEMENT</span>;

// const title = (<h1 
//         id="heading">
//         {elem}
//         Namaste React using JSX 🚀
//         </h1>);

// const HeadingComponent = () => (
//         <div id="container">
//                 {title}
//                 {console.log("bshbxkjxjnsxn")}
//                 <h1 clssnName="heading">Namaste React Functional Component</h1>
//         </div>
//         );
//         const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

// -------------------------------------------------------------------------------------------
/*
        Putting React Element inside Component 
*/

// const title = (<h1 
//         id="heading">
//         Namaste React using JSX 🚀
//         </h1>);

// const HeadingComponent = () => (
//         <div id="container">
//                 {title}
//                 {console.log("bshbxkjxjnsxn")}
//                 <h1 clssnName="heading">Namaste React Functional Component</h1>
//         </div>
//         );
//         const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

// ----------------------------------------------------------------------------------------------
/*
        COMPONENT COMPOSITION
*/

// const Title = () => (<h1 
//         id="heading">
//         Namaste React using JSX 🚀
//         </h1>);

// const HeadingComponent = () => (
//         <div id="container">
//                 <Title />
//                 <h1 clssnName="heading">Namaste React Functional Component</h1>
//         </div>
//         );
//         const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

// ---------------------------------------------------------------------------------------------
/* 
Writing react code using JSX
*/

// // const heading = React.createElement("h1", {id:"heading"}, "Hello World from REact!");
// // console.log(heading);

// // Writing H1 tag using JSX

// // const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;

// // const jsxHeading = (<h1 id="heading">Namaste React using JSX 🚀</h1>);

// // React Element
// const heading = (<h1 
// id="heading">
// Namaste React using JSX 🚀
// </h1>);

// // React Functional Component


// //  const HeadingComponent = () => {
// //         return <h1 className="heading">Namaste React Functional Component</h1>;
// //  }
// //              OR

// const HeadingComponent = () => (
// <div id="container">
//         <h1 clssnName="heading">Namaste React Functional Component</h1>
// </div>
// );


// // console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Rander React Element
// // root.render(jsxHeading);

// // Render React Component
// root.render(<HeadingComponent />);

// --------------------------------------------------------------------------------------


/*
Nested Sibling Structure
<div id="parent">
        <div id="child">
                <h1>I'm h1 tag</h1>
                <h2>I'm h2 tag</h2>
        </div>
</div>
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ])
// );

// const parent = React.createElement(
//         "div",
//         { id: "parent" },[
//                 React.createElement("div", { id: "child1" }, [
//                         React.createElement("h1", {}, "I'm an h1 tag"),
//                         React.createElement("h2", {}, "I'm an h2 tag"),
//                       ]),
//                       React.createElement("div", { id: "child2" }, [
//                         React.createElement("h1", {}, "I'm an h1 tag"),
//                         React.createElement("h2", {}, "I'm an h2 tag"),
//                       ])
//         ]
//       );

// console.log(parent); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// -----------------------------------------------------------------------------------------------------------
/*
Nested structure in react
 <div id="parent">
        <div id="child">
                <hi>I'm h1 tag</h1>
        </div>
</div>

ReactElement(Object) => HTML(Browser Understand)
*/

// const parent = React.createElement(
//         "div",
//         {id: "parent"},
//         React.createElement(
//                 "div",
//                 {id: "child" },
//                 React.createElement("h1", {}, "I'm an h1 tag")
//         )
// );

// console.log(parent); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// ----------------------------------------------------------------------------------------------------------

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from REact!");

//         const root = ReactDOM.createRoot(document.getElementById("root"));

//         root.render(heading);
