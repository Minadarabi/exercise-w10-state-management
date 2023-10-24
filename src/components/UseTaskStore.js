import { create } from "zustand"



export const UseTaskStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({
    tasks: [...state.tasks , task],

  })),
   removeTask: (taskIndex) => {
    const shouldDelete = window.confirm("are you sure you want to delete this task?");

    if(!shouldDelete){
      return
    }
    set((state)=>{
      const updateTsk = [...state.tasks]
      updateTsk.splice(taskIndex , 1)
      return {tasks: updateTsk}

    })
   },
   inputValue: "",
   changeInput: (value) => set((state)=>({...state , inputValue: value}))

}))