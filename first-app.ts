
//type annotation
let userName: string = 'Test';

userName = "Test1";

let userAge = 34;

let isValid = true;


//string, number, boolean <- Main Types

//npx tsc datei-name <- compiler


//combining types
let userID: string | number = 'abc';
userID = 123;

//working with object types
let user: object;

user = {
    name: 'abc',
    age: 25,
    isAdmin: true,
    id: 'abc'
}
//auch object
let user1: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: number | string;
};

user1 = {
    name: "cre",
    age: 25,
    isAdmin: false,
    id: 12 // oder "id"
}

//Array Types
let hobbies: Array<string>;

hobbies = ["Sports", "Cooking", "Reading"];

//kürzere Schreibweise - Array for strings
let hobbies2: string[]; // number[], boolean[], object[]

//combining Array types

let hobbies1: Array<string|number>
hobbies1 = ["Sports", "Dies", "Das", 456456]

//kürzere Schreibweise - Array for strings and numbers
let hobbies3: string|number[]; // number[], boolean[], object[]


//functions
function add(a:number, b:number):number {
    return a+b;
}

function add1(a:number, b:number):undefined {
    const result = a + b;
    console.log(result);
}

function add2(a:number, b:number):void {
    const result = a + b;
    console.log(result);
}

function add3(a:number, b:number, calcFn:AddFn) :void {
    calcFn(a,b);
}

//type aliases
type AddFn = (a: number, b: number) => number;

type StringOrNum = string | number;

type User = {
    name: "cre",
    age: 25,
    isAdmin: false,
    id: 12 // oder "id"
}

let users: User;


interface Credentials {
    password: string;
    email: string;
}

let creds: Credentials;

creds = {
    password: "abc",
    email: "ja sicha",
}

class AuthCredentials implements Credentials {
    email: string;
    password: string;
    userName: string;
}

function login(credentials: Credentials) {

}

login(new AuthCredentials());
login(creds);


type Admin = {
    permissions: string[]
};

type AppUser = {
    userName: string;
}

type AppAdmin = Admin & AppUser;

let admin: AppAdmin

admin = {
    permissions: [],
    userName: 'Max'
}

interface Admin1 {
    permissions: string[];
}

interface AppUser1 {
    userName: string;
}

interface AppAdmin1 extends Admin1{}

type Role = 'admin' | 'user' | "editor";


//literal type feature
let role: Role; // 'admin', "user", "editor"

role = 'admin';
role = "user";
role = "editor";
role = "not functione" // not working


function performAction(action: string, role: Role) {
    if (role === 'admin') {
        console.log("You are an admin");
    }
}

