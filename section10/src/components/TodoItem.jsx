import "./TodoItem.css";
import { useMemo } from "react";

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckBox} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
}

//고차 컴포넌트 (HOC)
export default memo(TodoItem, (prevProps, nextProps) => {
    //반환값에 따라, Props가 바뀌엇는지 안바뀌었는지 판단
    //T -> Props 바뀌지 않으면 리렌더링 X
    //F -> Props 바뀌면 리렌더링 O

    if(prevProps.id !== nextProps.id) return false;
    if(prevProps.isDone !== nextProps.isDone) return false;
    if(prevProps.content !== nextProps.content) return false;
    if(prevProps.date !== nextProps.date) return false;

    return true;
});