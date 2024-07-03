## What is React Native

- Framework for Develop Android and IOS Apps.
- Written in javaScript with Reach js.
- It will convert code to native apps.
- Current Version :
- Initial release date: 26 March, 2015

## Why learn React-Native

- Make Android, ios, and many more platforms app
- High demand.
- Easy to learn and develop apps
- If you know react js, you can easily learn RN
- Maintained by Facebook so this is a long term player

## Main Topics of Course

- Set up and instal react-Native
- React-Native Basics
- Components
- Hooks and lifecycle
- Navigation
- Handle list
- Form handling
- Rest APIs
- Redux
- Project
- Internet questions

## React native set up in windows

- We will follow official docs for RN Setup
- Instal Choco, Node and Jdk
- Instal Android studio
- Download Jdk and emulator
- Add environment variables
- Create reactinative app
- Run app

## Make First Progrann

- How to start App again.
- Make ther First
- Just keep simplest Code in

## React-Native App File Structure

- Important files for Beginners.
- Explain files and folder.

### Important to know files

- package.json                     :         It's holds whole project info
- package-lock.json                :         ye kisi package ke depedencies ki bhi dependencies rakha hai apne paas, hirerciy form mr
- metro config file                :         fast reloading or compile
- babel config file                :         isme hum naye version ko purane se replace kar sakte hai, taaki project me issue na aaye
- index.js                         :         Entry point of javaScript where we can register our components.
- app.js                           :         It's our first components
- eslintrc.js                      :         Isme hum ecma script se related agar kuch karwana hai to yaha likhte h
- ios and android folder           :         code ko android or iso ke andr compile karo and jab built bnate hai uss time javaScript ke code ko native me convert kar deti hai
- node modules                      :         total jinte bhi package humare application vo sab yaha npde module me hoye hai
- Gemfile                           :        ye ruby ke liye bani hoti hai ( jab hume application ko debug karna hota tab ruby kaam me aati hai )
- watchman-mettro                   :        ye dono ek sath ksrte haai

watchman check karta hai ky humari application me kuch change hua means watchmenas changes ksrta hai or
metro usko load ya implkement karta hai

pakage.js hmari application ki informmation rakhta h and
pakage-lock.js hmari application ki depedencies ki information rakhta hai

---

## View, Text and Button

- Understand App.js code,
- Example of View, Text and Button

## JSX (Power House of React-Native)

- What is JSX ( javaScript Extension  ) : it allow us to write HTML code in javaScript
- Example 0f JSX
- Interesting fact about JSX ( kahi jagah pr iski full form javaScript xml likhi hui hai but jab hum officially site pr jaate hai waha aisa kuch nhi hai)
- inke andr hum bss function ko call kar sakte hai bna nhi sakte

## Components in React Native

- What are Components?

  - Independent and resusable code such as function.
  - Two Types of Components
    - Class Components
    - Functional Components
- Example of Component.
- Note : fuction me hum html nhi likh sakte jabki components me use kar sakte hai. like: button, radiobutton etc.. And
- function ka first letter hum capital likhe ya na likhe farq nhi padhta but in components we need to write first letter always capital

## Button and onPress event

- How to make a button.
- Change the color of thr button
- Call function on button press
- Pass data to function from event

## State In React-Native

- What is the State?
- Example of state
- How to Update State?
- Difference between state and variable?

** Explanation : Jaise variable me hum data ko store karte hai same State me bhi hum data ko store karte hai. But jab hum variable me data ko store karte hai toh component re-render nhi hota whereas, jab hum components me data store karte hai toh pura component fir se re- render hota hai.

** State ko hum outside component use nhi kar sakte. like : agar humare pass 4 components hai. Aur humne phle waale component me koi state define kardi. to ye state ko hum kisi dusre function me use nhi ksr dske.

## Props in React-Native

- What are Props? (Properties)

  - ye basically arguments or parameters hote hai humre components ke,
  - jaise fn me hum arguments and parameter paas karte hsi. data share ke liye.
  - similarly jab hume ek component se dusre component me data send karna hota hai, tab hum props paas karte hai
- Examples
- Difference between State and Props?

  - State is used to store data inside the component.
  - Props are used to pass data from one component to another component.
- Question is : kya hum child component se parent component me data ko le sakte hai?
- Answer is : yes we can. but uske liye ek alg method use hota hai that's called lifting up state.

## Basic Style in RN

- Style-Type in RN
- inline style
- internal
- external
- Important style properties

## Get Text Input Value (Handling Text Input)

- Make Text Input and define the state.
- Apply Style in Text input.
- Get Text Input value on Change.
- Clear Text Input value.

## Simple Form in RN

- Make Text Inputs and Button.
- Make States for every Text Input.
- Get Text Input value in State.
- Print Value on Button Click

## List with FlatList

* Make an Array of users
* use FlatList for Create List
* Apply Style of List

Question : how to make list?

Question : FlatList ke andr hum jo bhi data hoga vo kis type ka hoga.

Answer : normal array ki form me ya, array off objct
