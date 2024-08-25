const Button = ({text, color, children}) => {
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };
    
    //{text} App.jsx에서 설정한 text를 넣어준다
    return (
    <button 
    onClick={onClickButton}
    //onMouseEnter={onClickButton}
    style={{color: color}}>
        {text}-{color.toUpperCase()}
        {children}
        </button>
    );
};

Button.defaultProps = {
    color: "black",
};

export default Button;