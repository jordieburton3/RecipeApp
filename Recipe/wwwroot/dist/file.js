import * as React from "react";
import * as ReactDOM from "react-dom";
import { TestPage } from "./Components/TestPage";
function TSButton() {
    let name = "Fred";
    document.getElementById("ts-example").innerHTML = greeter(user);
}
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Fred", "M.", "Smith");
class RecipeApp {
    constructor(config) {
        console.log(config);
    }
    render() {
        ReactDOM.render(React.createElement(TestPage), document.getElementById("root"));
    }
}
console.log("woop");
const recipeApp = new RecipeApp(document.RecipeApp);
recipeApp.render();
//# sourceMappingURL=file.js.map