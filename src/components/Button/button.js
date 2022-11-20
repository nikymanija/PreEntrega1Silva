const Button = (props)=>{
    const {colorText,backgroundText,children} = props
    return <button style={{color:colorText,background:backgroundText}}> {children} </button>

}

export default Button