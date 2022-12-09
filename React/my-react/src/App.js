import './App.css';

//App Component= View+logic(declaration)
function App() {
  // const names=["Aravind","Ajay","Bala","Pandi"];
  const users=[
    {
      name :"Aravind",
      pic:"https://i.pinimg.com/736x/eb/7c/c3/eb7cc3ddaa8735f1698e8da0f0facfd1.jpg" ,
    },
    {
      name:"Bala",
    pic:"https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",

    },
    {
      name:"Ajay",   
    pic:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg",
    }

  ]
 

 return(
  <div className="App">
    {/* <User 
    name ="Aravind"
    pic="https://i.pinimg.com/736x/eb/7c/c3/eb7cc3ddaa8735f1698e8da0f0facfd1.jpg"
    />
    <User 
    name="Bala"
    pic="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    />
    <User
     name="Ajay" 
    pic="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
    />  */}
  {/* <Welcome name="Aravind"/>
  <Welcome name="bala"/>
  <Welcome name="ajay"/> */}
  {/* {names.map(nm=><Welcome name={nm}/>)} */}
  {users.map((usr)=>(
    <User name={usr.name} pic={usr.pic}/>
  ))}
  
  </div>


 );
}

// function Welcome({name}) {
  
//  // console.log(props);
//  return(
//   <section>
//     {/* <img 
//      className="user-profile-pic"
//     src={pic}
//     alt={name} 
//     /> */}
//  <h1 className="user-name"> Hello,
//  <span className="user-first-name"> {name}💕</span>
//   </h1>
//  </section>
//   )
// }

function User({pic,name}){
  return(
    <section>
      <img className="user-profile-pic" src={pic} alt={name}/>
      <h1 className="user-name">
        Hello, <span className="user-first-name">{name}</span>
      </h1>
    </section>
  );
}

export default App;
