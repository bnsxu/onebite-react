import { useEffect } from "react";

const usePageTitle = (title) => {
    //title 제목 바꾸기
    useEffect(() => {
        const $title = document.getElementsByTagName("title")[0];
        $title.innerText = title;
    }, [title])
};

export default usePageTitle;