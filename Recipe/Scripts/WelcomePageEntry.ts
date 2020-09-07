import * as React from "react";
import * as ReactDOM from "react-dom";
import { WelcomePage } from "./Components/WelcomePage/WelcomePage";

interface Config {
    testValue: string;
    testInt: number;
}

class WelcomePageBuilder {
    constructor(config: Config) {
        console.log(config);
    }

    render() {
        ReactDOM.render(
            React.createElement(WelcomePage),
            document.getElementById("root")
        );
    }
}

console.log("woop");
const documentAsAny = document as any;
const recipeApp = new WelcomePageBuilder(documentAsAny.RecipeApp);
recipeApp.render();