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

## list with map functon (Custom)

* Make an Array of users
* Use map function for Create List.
* Apply Style of List.
* Need ScrollView to scroll list

Question : Make a list without using any RN feature.

Question : Jab hum map ka use karke list bna hi lete hai then, Why FlatList?

Answer : Because FlatList me additional features hote hai, jissai hum list me Header or Footer bhi set kar sakte hai.

Also FlatList me hum zyada data ke sath bhi aasani se kaam kar sakte hai but jab map ka use karenge toh scrolling lag hone lagegi.

## Make Dynamic Grid

* Add Text Items for Static Grid
* Add Style to make the grid
* Make dynamic Grid

Question : Explain Flex 1 means

Answer : If we give someone flex 1 property which means that it will covers all the available space or you can say that it will become flexible according to the available space.

## Component in Loop with Flatlist

* Make List with FlatList and Array
* Apply Style
* Make Componet
* Use Componet inside List

Question : Are we able to use Custom component in FlatList?

Question : How we pass props ?

Question : Can we pass multiple props?

## Section List in React-Native

* Make SectionData with Array
  * when we have nested array, there we use Section List
  * and jab bhi hum nested array lete hai toh andr waale array ki key ( data ) hi name se lete hai!
* Use SectionList
* Render Items and Header

Question : can we make nested list with Flatlist ?

Answer : yes, but Section list provide these faetures itself,.

Question : Where we need to use Section List  and Where Flat List?

## Class Component in React-Native ( used in old version )

* Make Class Component
* Add Component in Class Component
* Event and Function in class Component

Class ke andr hum const let kuch use nhi kar sakte during the time of making function or anything

Question : Which one we use Functional component or Class Component ?

Answer : Both, but now-a-day functional Component are recommended in both Reactjs and React-native official documentation.

Question : Difference between Class and Functional Component ?

Question : How to function on Class Component ?

Question : What the purpose of render function ?

Answer : we use render function in class component. Because class component can not return anything by its own. So,  we need to return UI part in render function.

## State and Props in Class Component

* Define State in Class Component
* Print state value
* Update state
* Pass props and display in Class Component

## LIfe Cycle methods

* What is the life Cycle in React-Native
  * like : human ( jaise phle vo banta hai, fir kuch na kuch changes aate rhte hai, end me ram nam satya ho jata hai )
* The phase of life cycle methods
  * Mounting
  * Updating
  * Unmounting
* When the life cycle will be executed.
  * When Component Render First Time.
  * When Component Upadte with State
  * When Component Update with Props
  * On Error
  * When Component Unmount

*** Without this we are unable to work on big pojects.

Har ek component ka apna khud ka life cycle hota hai. na  ki application ka.

ye aise function hote hai jo apne aap hi execute hote rhte hai apne components ke hisab se. Like: maan lo hum koi component add kar rhe hai tab kuch karna chahte hai ya jab delete ho rha hai, tab kuch karwana chahte haii. waha inka use kiya jata hai.

Question : Can we use life Cycle in functional and Class Components

## Hooks in React-Native

* What are hooks?

  * *Hooks* are a new addition in React 16.8. They let you use state and other React features without writing a class.
  * use keyword se jo bhi start hote hai ussai hook ki phchaan hoti hai.
  * and hooks bss function Component me hi use hote hai, Class Component me nhi.
* What we can do with hooks?
* State
* Life cycle methods
* Context API
* Ref and Memo
* Custom hooks

## useEffect hook for life cycle methods

* What is useEffect hook?
* How to use it.
* useEffect for mounting phase
* useEffect for componentDidMount
  * componentDidMount means ye baaki or kisi case me nhi chalega, ye bss jab component mount hoga, load hoga tvhi work karega !!
  * iske liye bss hume useEffect hook ke last me empty  [] array lgana hoga !!

-- Jab bhi hume life cycle ka use karna hoga functional component me, usai hum useEffect hook me hi use karenge!!!

-- Ab humara useEffect hook kyoki apne aap mount/ load hota hai , toh jaise hi hum kisi bhi component me kuch bhi change karenge ye baar baar change hota rahega.

-- lekin hum chahte hai ki ye tbhi mount ho jab hum newly newly uss route pr aaye, toh usko rokane ke liye hum, useEffect hook me, last me ek empty [] array de dete hai.

-- means that ab humara useEffect ek hi baar mount karega uske baad kisi bhi component me change ho, vo mount nhi karega !!!

## useEffect hook for life cycle methods ( for state and props )

* useEffect hook as componentDidUpdate?
  * means that jab humara state or props update ho tbhi useEffect hook run karega!
* Define state and button
* useEffect only for specific state
  * iske liye hume useEffect hook me jo empty array chord rhe the, usme uss state ka naam dena hoga jiske update hone pr hum useEffect hook call karwana chahte haiiiiii.
* useEffect only for specific props
  * isme bhi empty array me props ke through data ko dena hoga jiske change hone par hum useEffect hook call karenge.

## Show Hide Component

* Make Component.
* Button and State for component.

-- Jab bhi hum apne component ko hide ya detach karte hai apne UI se tab Unmount Life cycle method call hota hai!!

## useEffect for Unmount Life Cycle

* Make Component and Hide on Button Press
* Apply useEffect Hook
* Why Need to call Life cycle on Unmount

-- Unmount Life cycle ki zarurat hume isiliye padhti hai, maan lo jaise ki ye tab call hota hai jab kuch UI me se unmount ho ya delete/hide ho. But during this time hmare timer jo hai backside me chlta rhta h, jissai kaafi data jamaa ho jaayega or phone lag karne lagega. toh iss case me hum Unmount Life cycle ka use karte hai!!

---

## Responsive Layout with Flex

* Understand Responsive UI
* Understant FLex
* Make Responsive UI

## Style with Button in RN

* Why default button not support Style
* Alternative of Button in React-Native
* Style with TouchableHighlight / TouchableOpacity
* Make Different type of button with style.

## Radio Button

* Make 2 TouableOpacity with Text
* Apply style for the radio button.
* use state to make working radio button.

-- There is no radio button in React-Native. Ss, we need to make it by owns..

## Dynamic Radio Button

* Make an Array of Skills.
* Apply Map over the radio button.
* Update State with skill

## Activity Indicator (Loader)

* Use of Activity Indicator.
* Common Props.
* Hide and How with button.

-- Iska use hum jab karte hai jaha par activity perform hone me kuch time lag sakta ho. like : humne button pr click kiya dusre route pr jaane ke liye but api thoda time lga rhi, to hum waha pr loader show kar dete hai, taaki user experience accha ho. User ko ye na lage app lag ho rhi hai. ya net nhi chal rha, aisa kuch.

-- ActivityIndicator ka size hum android me : small, medium, large and koi bhi numeric value de sakte hai

-- whereas apple me hum bss : small, medium and large hi de sakte hai.

## Modal in React Native ( Dialog Box )

* Import button and Modal
* Add style to button and Modal
* Show and Hide Modal with State

--  Where we want to show quik information, warning, error messages and to update any field there we use Modal.

## Pressable in React Native ( New )

* Use of Pressable
* Add Style to the button
* Check all Event

-- Hum Pressable use tab karte hai, jab humko ek hi button pr ek se zyada event lgane ho. iska use hum gaming controller se samjh sakte hai.

-- Ab maan lo game me gun ka button hai, jab hum gun pr single press karte hai toh, ek bullet fire hoti hai, or agar press karke rakhte hai toh bullet fire hoti jaati hai, or jab chord dete hai, gun down ho jaati hai..

-- onLongPress event me 500 millisecound hold karne se ye event call hota hai, aur hum isko change bhi kar sakte hai.

## Status Bar in React Native

* What is State Bar
* How to Update Style for Status Bar
* Hide and Show Status Bar
* Update Statis with Button Press

## Platform in React Native

* What is Platform
* How to check Platform
* Apply conditions with Platorms
* Other Importants

-- Ye kaafi important kahi baari hume platform base me conditions lgani padh sakti hai. like : android, ios or and windows ke liye alag alag conditions mention karte hai.

## Install NPM Package in React-Native

* What is Package
* How to install Package
* Write code to apply changes

-- npm i react-native-webview         :  agar hume apne phone me web kholna hai koi, toh ye pakage lagega

-- lekin iske liye hume sbse phle built bnani padegi  :             npx react-native run-android / ios

## Custom Modal ( Pop-up )

* Add Button and UI component
* Use Style to make Modal
* Show and Hide Modal with state

-----------------------------------------------------------------------------------------------------------------------------_

## Navigation with React-Native

* What is Navigation
* Type of Navigation
  * Stack
    * Jab 1st screen se 2nd, 2nd se 3rd, so on.. par jaana ho, udhar Stack ka use karte hai
  * Drawer
    * side menu ( like side me upr 3 lines bani hoti hai, uspar click karne se, saari navigation samne aa jaati hai ya list kahlo ) udhar iska use karte hai
  * Tab
    * Tab navigation waha use hoti hai jaha pr ek application me ( whatsapp ) alg alg tab bane hote hai. like : chats, status and moree..
* Exaples

## Stack Navigation

* Install React Navigation.
* Install Dependencies
* Make Wrapper of Navigation.
* Make Login and Home Component.
* Navigate between Screens.

## Stack Navigation Style

* The Style for single screen
* Common Style for all screen
* Change the title of the screen

-- Idhar hum stack.screen me options naam se attributes me changes likhte hai, kisi ek screen ke liye.

-- aur If hum chahte hai same change sab me rahe toh hum Stack.Navigator me ScreenOptions ke naam se property lgate hai..

## Stack Navigation Button and Component

* Add a Button in the Navigation.
* Action on the Navigation Button.
* Add Component in Navigation

-- options me headerTitle or headerRight ke naam se key hai usme kuch bhi paas karwa sakte hai

## Pass Data Between Screen

* Pass Static data from one screen to another screen
* Access data and display state
* Pass Text input data in screens

## Tab Navigation

* Install NPM tab package.
* Make 2 Component for the screen
* Make Tab Navigation Wrapper.
* npm start --clean-cache

### Bottom Tab Navigation

* Install the NPM bottom package
* Update Code for Navigation
* npm start --clean-cache

### Top Tab Navigation

* Install the NPM Top Package
* Update Code for Navigation
* npm start --clean-cache

<!-- ------------------------------------------------- -->


## Simple API call

* Make a Function for the API call
* Store API data in the state 
* Display API data in the screen

-- phle humne ek function bnaya or usmai api call karva kar axios ke through fetch karke setData state me uska result set kar diya, then useEffect ke through usai call karwa liya and return me condition ke through check kar liya data undefined hai ya nhi. aur url me se sb kuch screen pr show karwa diya.



## List with API 

* Make function to Call API
* Use map function to render Data
* Add Style and ScrollView


## FlatList with API

* Make function to Call API
* Use FlatList to render Data
* Add Style


<!-- ---------------------------------------- -->



## Make API with JSON-Server

* Install JSON-Server
* Make db file and a simple file 
* Get API data with Postman
* Run JSON-Server ( json-server --watch db.json )


## Test JSON-Server API with Postman

* Install Postman
* Api Method Name
* Test Get API Method for fetch data
* Test Post API Method for store data
* Test Put API Method for update data
* Test Delete API Method for delete data


## Simple Post API

* Make Button and function to Call API
* Write code to call Post API and test


