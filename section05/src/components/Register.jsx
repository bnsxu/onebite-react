import { useState } from "react";

//간단한 회원가입 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

const Register = () => {
    //새로운 스테이트 생성, 초기값으로 빈 문자열 설정 ("")
    const [name, setName] = useState("이름");
    const [bitrh, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    };
    
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const onChangeBio = (e) => {
        setBio(e.target.value);
    };

    return (
    <div>
        <div>
            <input value={name} onChange={onChangeName} placeholder={"이름"} />
        </div>

        <div>
            <input value={bitrh} onChange={onChangeBirth} type="date" />
        </div>

        <div>
            <select value={country} onChange={onChangeCountry}>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
        </div>

        <div>
            <textarea value={bio} onChange={onChangeBio} />
            {bio}
        </div>
    </div>
    );
}

export default Register;