
import './App.css'


function App() {
  
  const handleSubmit = (e) => {
e.preventDefault();
const form = e.target;
const email = form.email.value;
const name = form.text.value;
const user = {name, email};
console.log(user);

fetch(`http://localhost:5000/users`, {
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(user)
  
})
.then(res =>res.json())
  .then(data =>{
    console.log(data)
  })
  }

  return (
    <>
     <h2>i am ok</h2>
     <form onSubmit={handleSubmit}>
      <input type="text" name="text" id="" />
      <input type="email" name="email" id="" />
      <input type="submit" value="submit" />
     </form>
    </>
  )
}

export default App
