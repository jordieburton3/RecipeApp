import * as React from "react";
import * as ReactDOM from "react-dom";
import { TestPage } from "./Components/TestPage";

function TSButton() {
    let name: string = "Fred";
    document.getElementById("ts-example").innerHTML = greeter(user);
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Fred", "M.", "Smith");

interface Config {
    testValue: string;
    testInt: number;
}

class RecipeApp {
    constructor(config: Config) {
        console.log(config);
    }

    render() {
        ReactDOM.render(
            React.createElement(TestPage),
            document.getElementById("root")
        );
    }
}

console.log("woop");
const recipeApp = new RecipeApp((document as any).RecipeApp);
recipeApp.render();