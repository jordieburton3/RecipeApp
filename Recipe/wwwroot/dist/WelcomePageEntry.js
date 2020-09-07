import * as React from "react";
import * as ReactDOM from "react-dom";
import { WelcomePage } from "./Components/WelcomePage/WelcomePage";
class WelcomePageBuilder {
    constructor(config) {
        console.log(config);
    }
    render() {
        ReactDOM.render(React.createElement(WelcomePage), document.getElementById("root"));
    }
}
console.log("woop");
const documentAsAny = document;
const recipeApp = new WelcomePageBuilder(documentAsAny.RecipeApp);
recipeApp.render();
//# sourceMappingURL=WelcomePageEntry.js.map