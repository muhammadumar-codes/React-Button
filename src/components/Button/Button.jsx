import './Button.css'
export default function Button ({children ,...prop}){
    return (
        <>
        <button className='btn-increase' {...prop}>{children}</button>
        </>
    )
}