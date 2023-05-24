export default function Pregunta({children, open, close}) {
    if(!open) return null
    return (
        <div>
          
          {children}
        </div>
    )
}