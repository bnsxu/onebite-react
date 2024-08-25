const Button = ({text, color, children}) => {
    //{text} App.jsx에서 설정한 text를 넣어준다
    return <button style={{color: color}}>
        {text}-{color.toUpperCase()}
        {children}
        </button>
};

Button.defaultProps = {
    color: "black",
};

export default Button;