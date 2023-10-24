import { useTheme } from "../Themes/ThemeContext"



export const Context = () => {
    const {mode} = useTheme()
  return (
    <div>Context
        <h1>Create Context</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime corporis eum, fuga magni inventore repudiandae omnis et ea sequi. Natus voluptatem nisi adipisci maxime quaerat. Sit quaerat culpa, perferendis suscipit, molestias expedita impedit eveniet facilis, maxime unde eos aliquid.</p>
        <h4>Hello - {mode}</h4>
    </div>
  )
}
