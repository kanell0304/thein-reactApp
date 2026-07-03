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
            setWarnText("존재하지 않는 계정입니다!");
            setIsViewWarningText(true);
            return;
        }

        if (matchedUser.password !== password) { // 계정은 있지만 비밀번호가 틀렸다면
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
        <div className="mx-auto max-w-sm px-4 py-12">
            <div className="rounded-xl border border-sky-100 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-center text-2xl font-bold text-sky-600">로그인 페이지</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        onChange={(e) => setAccount(e.target.value)}
                        value={account}
                        placeholder='아이디를 입력해주세요.'
                        className="w-full rounded-md border border-sky-200 px-4 py-2 outline-none focus:border-sky-500"
                    />
                    <div className="flex items-center gap-2">
                        <input
                            type={isViewPassword ? "text" : "password"}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder='비밀번호를 입력해주세요.'
                            className="w-full rounded-md border border-sky-200 px-4 py-2 outline-none focus:border-sky-500"
                        />
                        <button onClick={handleClickIsViewPassword} className="shrink-0 rounded-md border border-sky-200 px-3 py-2 hover:bg-sky-50">👁️</button>
                    </div>
                    {/* 경고 텍스트가 발생했다면 */}
                    {isViewWarningText && (
                        <p className="rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700">{warnText}</p>
                    )}
                    <button onClick={handleClickLogin} className="w-full rounded-md bg-sky-500 py-2 font-medium text-white hover:bg-sky-600">로그인</button>
                </div>
                <hr className="my-6 border-sky-100" />
                <div className="text-center">
                    <h3 className="mb-2 text-sm text-sky-700">계정이 없으신가요?</h3>
                    <span onClick={handleClickJoin} className="cursor-pointer text-sm font-medium text-sky-500 hover:text-sky-700 hover:underline">회원가입 하러가기</span>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
