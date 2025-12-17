import React from "react";
import ReactDOM from "react-dom/client";

/*const App=()=>{
  return(
    <h1>Welcome to the Application</h1>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Dynamic Rendering

/*const Sample=()=>{
  const name="azar";
  const age=30;
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>Your age is::{age}</p>
      <p>Todays date is::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React without jsx

/*const myelem1=React.createElement("h1",null,"welcome")
const myelem2=React.createElement("p",null,"This is a Paragraph")
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(React.createElement("div",null,myelem1,myelem2))*/

//Login Form

/*const Login=()=>{
  return(
    <>
      <form>
        <label>UserName</label>
        <input type="text"/>
        <label>Password</label>
        <input type="password"/>
        <input type="submit" value="Login"/>
      </form>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Login/>)*/

//React List

/*const MyElem=()=>{
  return(
    <div>
      <h1>MyList</h1>
      <ul>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
      </ul>
      <ol>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
      </ol>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

//Conditional Rendering
/*const x=20
let text="";
if(x>10)
{
  text="x is greater than 10"
}
else
{
  text="x is less than 10"
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

/*const x=10
let text="";
if(x>10)
{
  text="x is greater than 10"
}
else if(x==10)
{
  text="Equal to 10"
}
else
{
  text="x is less than 10"
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

//Task Nested if else statement

/*import './index.css'
const App=()=>{
  return(
    <>
    <h1>Welcome</h1>
    <p className="f1">This is Paragraph</p>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Function Component

/*function Sample()
{
  return(
    <div>
      <h1>This is Function Component</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//class Component

/*class Sample extends React.Component
{
  render()
  {
    return(
      <h1>Welcome</h1>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Using onClick()
/*function SimpleButton()
{
  function showMessage()
  {
    alert("Button was clicked")
  }
  return(
    <div style={{textAlign:'center'}}>
       <button onClick={showMessage}>ClickHere</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<SimpleButton/>)*/

//Function Component with props

/*function Sample(props)
{
  return(
    <div>
      <h1>Hello{props.name}{props.age}</h1>
      <p>This is Paragraphs</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar" age="40"/>)*/

//Component in component

/*function Component1()
{
  return(
    <div>
      <h1>Hello</h1>
      <p>Component1</p>
      <Component2/>
    </div>
  )
}
function Component2()
{
  return(
    <h1>This is Component2</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//constructor using super

/*class Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"azar",age:30}
  }
  render()
  {
    return(
      <div>
        <h1>Hello,{this.state.name}</h1>
        <p>Your age is:{this.state.age}</p>
      </div>
    )
  } 
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//constructor without super

/*class Sample extends React.Component
{
  constructor()
  {
    //super();
    this.state={name:"azar",age:30}
  }
  render()
  {
    return(
      <div>
        <h1>Hello,{this.state.name}</h1>
        <p>Your age is:{this.state.age}</p>
      </div>
    )
  } 
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//constructor with props

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={name:props.name,age:props.age}
  }
  render()
  {
    return(
      <div>
        <h1>Hello,{this.state.name}</h1>
        <p>Your age is:{this.state.age}</p>
      </div>
    )
  } 
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar" age="30"/>)*/

/*class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={count:0};
  }
  increment=()=>{
    this.setState({count:this.state.count+1});
  }
  decrement=()=>{
    this.setState({count:this.state.count-1});
  }
  render()
  {
    return(
      <div style={{textAlign:'center'}}>
        <h1>Counter:{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//Changing the State object

/*class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={name:"azar",age:30};
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange()
  {
    this.setState({name:"khan",age:35});
  }
  render()
  {
    return(
      <div style={{textAlign:'center'}}>
        <h1>Name:{this.state.name}</h1>
        <p>Age:{this.state.age}</p>
        <button onClick={this.handleChange}>Change</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React Event

/*function Football()
{
  const shoot=()=>{
    alert("Great Shot!!")
  }
  return(
    <div style={{textAlign:'center'}}>
      <button onClick={shoot}>Take the shot!!</button>
    </div>
  ) 
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React event based on Arguments

/*function Football()
{
  const shoot=(a)=>{
    alert(a)
  }
  return(
    <div style={{textAlign:'center'}}>
      <button onClick={()=>shoot("Great Shot!!")}>Take the shot!!</button>
    </div>
  ) 
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function MissedGoal()
{
  return<h1>Missed Goal!!</h1>
}
function MadeGoal()
{
  return<h1>Made Goal!!</h1>
}
function Football(props)
{
  const isGoal=props.isGoal;
  return(
    <div style={{textAlign:'center'}}>
      {isGoal ? <MadeGoal/> : <MissedGoal/>}
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={false}/>)*/

//using if else
/*function MissedGoal()
{
  return<h1>Missed Goal!!</h1>
}
function MadeGoal()
{
  return<h1>Made Goal!!</h1>
}
function Football(props)
{
  const isGoal=props.isGoal;
  let goal;
  if(isGoal)
  {
    goal=<MadeGoal/>
  }
  else
  {
    goal=<MissedGoal/>
  }
  return(
    <div style={{textAlign:'center'}}>
      {goal}
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={true}/>)*/

//Event using form
/*function MyForm()
{
  const handleSubmit=(event)=>{
    event.preventDefault();
    alert("Form Submitted!!")
  }
  return(
    <div style={{textAlign:'center'}}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyForm/>)*/

//Destructuring
/*function Welcome({name,age})
{
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>Your age is:{age}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome name="azar" age="30"/>)*/

//Destructuring in class component

/*class Welcome extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"azar",age:30}
  }
  render()
  {
    const{name,age}=this.state;
    return(
      <div>
        <h1>Hello,{name}</h1>
        <p>Your age is:{age}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome/>)*/

//Destructuring using arrays

/*function Skills()
{
  const skills=["HTML","CSS","JavaScript","React"];
  const [skill1,skill2,skill3,skill4]=skills;
  return(
    <div>
      <h1>My Skills</h1>
      <ul>
        <li>{skill1}</li>
        <li>{skill2}</li>
        <li>{skill3}</li>
        <li>{skill4}</li>
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Skills/>)*/

//class component(Mounting)

/*class MyComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log("Constructor called")
  }
  componentDidMount()
  {
    console.log("Component Mounted")
  }
  render(){
    console.log("Render Called...");
    return<h2>Hello,React Mounting..</h2>
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyComponent/>)*/

//class component updating

/*class Counter extends React.Component
{
  constructor()
  {
    super();
    this.state={count:0}
  }
  componentDidUpdate(prevProps,prevState)
  {
    console.log("ComponentUpdated");
    console.log("Previous Count:",prevState.count);
    console.log("CurrentCount:",this.state.count);
  }
  render()
  {
    return(
      <>
      <h2>Count:{this.state.count}</h2>
      <button onClick={()=>{
        this.setState({count:this.state.count+1})
      }}>
        Increment
      </button>
      </>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//Unmounting-ComponentwillUnmount

/*class Child extends React.Component
{
  componentWillUnmount()
  {
    console.log("Component unmounted..")
  }
  render()
  {
    return<h3>Child Component</h3>
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Child/>)*/

//Hooks

import { useState,useEffect } from "react";

/*function Counter()
{
  const [count,setCount]=useState(0);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//using String state

/*function Welcome()
{
  const [name,setName]=useState("admin")
  return(
    <div>
      <h2>Welcome,{name}!!!</h2>
      <input type="text" placeholder="Enter the name" onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome/>)*/

//using Object state

/*function Profile(){
  const [user,setUser]=useState({name:"azar",age:25});
  const updateAge=()=>{
    setUser({...user,age:user.age+1})
  }
  return(
    <div>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <button onClick={updateAge}>IncreaseAge</button>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Profile/>)*/

//useEffect

/*function Example()
{
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("Component Rendered or updated")
  })
  return(
    <div>
      <p>Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Example/>)*/

//Example 1
/*const Example1=()=>{
  useEffect(()=>{
    console.log("Component Mounted")
  },[])
  return(
    <h3>Hello from useEffect</h3>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Example1/>)*/

//Example 2
/*const Example2=()=>{
  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log("Timer is Running...")
    },1000)
    return()=>{
      clearInterval(timer)
      console.log("TimeCleared")
    }
  },[])}
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Example2/>)*/

  //React without useContext

  /*function Component1()
  {
    const [user,setUser]=useState("mohamed");
    return(
      <div>
        <h1>UserName is::{user}</h1>
        <button onClick={()=>setUser("azar")}>ClickHere</button>
        <Component2 user={user}/>
      </div>
    )
  }
  function Component2(props)
  {
    return(
      <div>
        <h1>UserName is::{props.user}</h1>
      </div>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Component1/>)*/

  //React using userContext()

  import { useContext,createContext } from "react";

  const UserContext=createContext();

  function Component1()
  {
    const [user,setUser]=useState("mohamed");
    return(
      <UserContext.Provider value={user}>
        <h1>This is Component1 is::{user}</h1>
        
      </UserContext.Provider>
    )
  }
  function Component2()
  {
    const user=useContext(UserContext);
    return(
      <div>
        <h1>Component2 is:;{user}</h1>
        <Component1/>
      </div>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Component2/>)