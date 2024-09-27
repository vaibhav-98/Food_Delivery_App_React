const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div", {id:"child"},
            [React.createElement("h2", {}, "I am an h2 tag" ),
                React.createElement("h3", {}, "I am an h3 tag" )
            ]
        ),
        React.createElement("div", {id:"child2"},
            [React.createElement("h2", {}, "I am an h2 tag" ),
                React.createElement("h3", {}, "I am an h3 tag" )
            ]
        )
    ]
 )

console.log(parent); // object 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent) // this render methed 