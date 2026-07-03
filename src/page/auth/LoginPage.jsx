import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/slice/loginInfoSlice';

function LoginPage(props) {

    const navigate = useNavigate();
    
    // Redux
    const { isLoggedIn, user } = useSelector((state) => state.loginInfo);
    const dispatch = useDispatch();

    // Localstorage
    const [userList, setUserList] = useState(() => { // 유저 목록 가져오기
        const isUserList = localStorage.getItem("userList"); // localstorag에서 유저 리스트 가져오기
        return isUserList ? JSON.parse(isUserList) : [{ // 만약 없다면 기본 관리자 계정 추가하기
            id: 1,
            account: "admin",
            password: "admin"
        }]
    });
    
    // 상태 관리 변수
    const [isHoverLoginBtn, setIsHoverLoginBtn] = useState(false); // 회원가입 페이지로 이동하는 버튼의 마우스 호버 여부
    const [isViewPassword, setIsViewPassword] = useState(false);
    const [isViewWarningText, setIsViewWarningText] = useState(false);
    const [warnText, setWarnText] = useState("");

    // 계정 정보 입력 정보
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const handleClickIsViewPassword = () => {
        setIsViewPassword(!isViewPassword); // 비밀번호 표시 여부 변경
    }

    const handleClickLogin = () => {
        const matchedUser = userList.find(user => user.account === account); // userList에서 로그인 정보와 일치하는 계정 찾기

        if (!matchedUser) { // 일치하는 계정이 없다면
            // alert("존재하지 않는 계정입니다!");
            setWarnText("존재하지 않는 계정입니다!");
            setIsViewWarningText(true);
            return;
        }

        if (matchedUser.password !== password) { // 계정은 있지만 비밀번호가 틀렸다면
            // alert("비밀번호가 틀렸습니다!");
            setWarnText("비밀번호가 틀렸습니다!");
            setIsViewWarningText(true);
            return;
        }
        
        // 로그인 유저 데이터 객체 생성
        const loginUserData = { id: matchedUser.id, account: matchedUser.account };
        dispatch(login(loginUserData)); // 로그인 처리

        alert("로그인 성공!");
        navigate("/mainPage");
    }
    
    // 회원가입 페이지로 이동
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
            {/* 경고 텍스트가 발생했다면 */}
            { isViewWarningText && <div style={{color: 'red'}}>{warnText}</div> }
            <button onClick={handleClickLogin}>로그인</button>
            <hr />
            <h3>계정이 없으신가요?</h3>
            <span onMouseEnter={() => setIsHoverLoginBtn(true)} onMouseLeave={() => setIsHoverLoginBtn(false)} style={{color: isHoverLoginBtn ? "skyblue" : "black"}} onClick={handleClickJoin}>회원가입 하러가기</span>
        </div>
    );
}

export default LoginPage;