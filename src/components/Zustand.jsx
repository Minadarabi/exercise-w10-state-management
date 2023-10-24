import { UseTaskStore } from "./UseTaskStore"



export const Zustand = () => {

    const {tasks , addTask , removeTask , inputValue , changeInput} = UseTaskStore();

    const onChangeInput = (e)=>{
        changeInput(e.target.value)

    }
const onAdd = ()=>{
    addTask(inputValue)
    changeInput("")
}

  return (
    <div>Zustand
        <h1>Zustand</h1>
        <h2>Add a Task</h2>
        <input type="text" value={inputValue} onChange={onChangeInput}/>
        <button onClick={onAdd}>Add</button>
        <ul>
            {tasks.map((task , index) => {
                return <li key={index}>
                    {task} {""}
                     <button onClick={()=> removeTask(index)}>Delete</button>

                </li>

            })}
        </ul>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat itaque recusandae hic iste alias laborum velit quibusdam ullam sunt laudantium perspiciatis repellat veniam reprehenderit totam earum quae numquam, modi mollitia illum eaque cumque suscipit ipsam atque ea. Voluptatem architecto delectus facere reiciendis optio natus eius, unde amet laudantium possimus rem dolore accusantium qui, eum accusamus fuga ipsa assumenda non totam. Impedit, sint voluptatibus. Cum tenetur porro eaque, accusantium velit distinctio?</p>
    </div>
  )
}
