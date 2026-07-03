import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinPage(props) {

    const navigate = useNavigate();

    // 로그인 입력 정보
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    
    const [userList, setUserList] = useState(() => { // localstorage에 저장된 유저 리스트 불러오기
        const isUserList = localStorage.getItem("userList"); // 유저 리스트를 가져옴
        return isUserList ? JSON.parse(isUserList) : [{ // 유저 리스트가 없다면 기본 관리자 계정 데이터로 생성
            id: 1,
            account: "admin",
            password: "admin"
        }]
    });
    
    // 상태 관리
    const [existsAccount, setExistsAccount] = useState(false);
    const [isViewPassword, setIsViewPassword] = useState(false);
    const [isHoverLoginBtn, setIsHoverLoginBtn] = useState(false); // 마우스를 올려뒀는지 아닌지 여부
    
    const handleClickExists = () => {
        const matchedUser = userList.find(user => user.account === account);

        if (matchedUser) {
            alert("이미 존재하는 계정입니다!");
            setExistsAccount(false);
        } else {
            alert("사용할 수 있는 계정입니다!");
            setExistsAccount(true);
        }
    }

    // 비밀번호 표시
    const handleClickIsViewPassword = () => {
        setIsViewPassword(!isViewPassword); // 비밀번호 표시 여부 변경
    }

    // 유저 추가
    const addUser = () => {
        if (!existsAccount) {
            alert("계정 중복 체크를 먼저 해주세요!");
            return;
        }

        const userInfo = { id: userList[userList.length - 1].id + 1, account, password } // 배열의 마지막 요소의 id값 보다 + 1
        const newUserList = [...userList, userInfo]; // 새로운 객체 생성 및 기존 배열에 추가
        setUserList(newUserList); 
        localStorage.setItem("userList", JSON.stringify(newUserList)); // 객체를 문자열로 파싱 후 localstorage에 저장
        alert("회원가입에 성공했습니다!");
    }

    // 로그인 페이지로 이동
    const handleClickLogin = () => {
        navigate("/loginPage");
    }

    return (
        <div>
            <h2>회원가입 페이지</h2>
            <br />
            <label>
                <input type="text" onChange={(e) => setAccount(e.target.value)} value={account} placeholder='아이디를 입력해주세요.' />
                <button onClick={handleClickExists}>중복 확인</button>
            </label>
            <br />
            <label>
                {/* 비밀번호 표시 여부에 따라 input type을 text, password 로 지정 */}
                <input type={isViewPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} value={password} placeholder='비밀번호를 입력해주세요.' />
                <button onClick={handleClickIsViewPassword}>👁️</button>
            </label>
            <br />
            <button onClick={addUser} >회원가입</button>
            <br />
            <hr />
            <h3>이미 계정이 있으신가요?</h3>
            {/* 마우스를 올렸는지 여부에 따라 폰트 색상 변경 */}
            <span onMouseEnter={() => setIsHoverLoginBtn(true)} onMouseLeave={() => setIsHoverLoginBtn(false)} style={{color: isHoverLoginBtn ? "skyblue" : "black"}} onClick={handleClickLogin} >로그인 하러가기</span>
        </div>
    );
}

export default JoinPage;