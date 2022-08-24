function Box(props){
    
    const {textClass,background,color,description} = props

    const colorStyles ={
        divs:{
            "backgroundColor":background,
            "padding":"1rem"
        },
        h1:{
            "color":color,
            "fontSize":"3rem"
        }
    }

    return(
        <div style={colorStyles.divs}>
        <h1 style={colorStyles.h1}>{description}</h1>

        <p className={textClass}  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque cum</p>
        </div>
    )
}
export default Box