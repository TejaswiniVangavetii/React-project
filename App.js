const heading= React.createElement("div",{},
[React.createElement("div",{id:"Child1"},
React.createElement("h1",{id:"header"},"I am H1")),
React.createElement("div",{id:"Child2"},
React.createElement("h1",{id:"header2"},"I am H2"))]
);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



{/* <div>
    <div></div>
    <div></div>
</div> */}