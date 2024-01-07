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

const parent = React.createElement(
        "div",
        { id: "parent" },[
                React.createElement("div", { id: "child1" }, [
                        React.createElement("h1", {}, "I'm an h1 tag"),
                        React.createElement("h2", {}, "I'm an h2 tag"),
                      ]),
                      React.createElement("div", { id: "child2" }, [
                        React.createElement("h1", {}, "I'm an h1 tag"),
                        React.createElement("h2", {}, "I'm an h2 tag"),
                      ])
        ]
      );

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

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
