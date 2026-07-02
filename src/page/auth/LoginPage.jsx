import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {

    const navigate = useNavigate();

    const [isHoverLoginBtn, setIsHoverLoginBtn] = useState(false);

    const [userList, setUserList] = useState(() => {
            const isUserList = localStorage.getItem("userList");
            return isUserList ? JSON.parse(isUserList) : [{
                account: "admin",
                password: "admin"
            }]
        });

    const [isViewPassword, setIsViewPassword] = useState(false);

    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const handleClickIsViewPassword = () => {
        setIsViewPassword(!isViewPassword);
    }

    const handleClickLogin = () => {
        let isUser = false;
        let isPassword = false;

        userList.map(user => {
            if (user.account === account) {
                isUser = true;
                if (user.password === password) {
                    isPassword = true;
                }
            }
        })

        alert(isUser ? isPassword ? "로그인 성공!": "비밀번호가 틀렸습니다!" : "존재하지 않는 계정입니다!"); 
    }
    
    const handleClickJoin = () => {
        navigate("/joinPage");
    }

    return (
        <div>
            <h2>로그인 페이지</h2>
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
            <button onClick={handleClickLogin}>로그인</button>
            <hr />
            <h3>계정이 없으신가요?</h3>
            <a onMouseEnter={() => setIsHoverLoginBtn(true)} onMouseLeave={() => setIsHoverLoginBtn(false)} style={{color: isHoverLoginBtn ? "skyblue" : "black"}} onClick={handleClickJoin}>회원가입 하러가기</a>
        </div>
    );
}

export default LoginPage;