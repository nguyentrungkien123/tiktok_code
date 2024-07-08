import { useState, useEffect } from "react";
import Button from "./Component/Button"

function App() {
  const [state, setState] = useState(false)
  const [dt, setDt] = useState([])
  const page = ['posts', 'comments', 'albums']
  const [change,setChange] = useState('posts')
  const handleOnclick = () => {
    setState(true)
  }
  
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${change}`)
    .then((responsive)=>{
      return responsive.json()
    })
    .then((data)=>{
       setDt(data)
    })

  },[change])
  
  return (
    <div className="App">
      <Button onclick={handleOnclick} text='Tongle' />
      <div>
        {state && page.map((item) => (
          <Button key={item} onclick={()=>setChange(item)} text={item} />
        ))}
      </div>
      <ul>
        {dt.map((course, index) => (
          <li key={index}>
            {course.title || course.body}
          </li>
        )
        )}
      </ul>
    </div>
  );
}

export default App;
