import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinPage(props) {

    const navigate = useNavigate();

    const [isHoverLoginBtn, setIsHoverLoginBtn] = useState(false);

    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const [userList, setUserList] = useState(() => {
        const isUserList = localStorage.getItem("userList");
        return isUserList ? JSON.parse(isUserList) : [{
            account: "admin",
            password: "admin"
        }]
    });
    const [isViewPassword, setIsViewPassword] = useState(false);
    

    const handleClickIsViewPassword = () => {
        setIsViewPassword(!isViewPassword);
    }

    const addUser = () => {
        const userInfo = { account, password }
        const newUserList = [...userList, userInfo];
        setUserList(newUserList);
        localStorage.setItem("userList", JSON.stringify(newUserList));
        alert("회원가입에 성공했습니다!");
    }

    const handleClickLogin = () => {
        navigate("/loginPage");
    }

    return (
        <div>
            <h2>회원가입 페이지</h2>
            <br />
            <label>
                <input type="text" onChange={(e) => setAccount(e.target.value)} value={account} placeholder='아이디를 입력해주세요.' />
            </label>
            <br />
            <label>
                <input type={isViewPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} value={password} placeholder='비밀번호를 입력해주세요.' />
                <button onClick={handleClickIsViewPassword}>👁️</button>
            </label>
            <br />
            <button onClick={addUser} >회원가입</button>
            <br />
            <hr />
            <h3>이미 계정이 있으신가요?</h3>
            <a onMouseEnter={() => setIsHoverLoginBtn(true)} onMouseLeave={() => setIsHoverLoginBtn(false)} style={{color: isHoverLoginBtn ? "skyblue" : "black"}} onClick={handleClickLogin} >로그인 하러가기</a>
        </div>
    );
}

export default JoinPage;