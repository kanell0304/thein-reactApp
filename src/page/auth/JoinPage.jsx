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
        <div className="mx-auto max-w-sm px-4 py-12">
            <div className="rounded-xl border border-sky-100 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-center text-2xl font-bold text-sky-600">회원가입 페이지</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            onChange={(e) => setAccount(e.target.value)}
                            value={account}
                            placeholder='아이디를 입력해주세요.'
                            className="w-full rounded-md border border-sky-200 px-4 py-2 outline-none focus:border-sky-500"
                        />
                        <button onClick={handleClickExists} className="shrink-0 rounded-md border border-sky-500 px-3 py-2 text-sm text-sky-500 hover:bg-sky-50">중복 확인</button>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* 비밀번호 표시 여부에 따라 input type을 text, password 로 지정 */}
                        <input
                            type={isViewPassword ? "text" : "password"}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder='비밀번호를 입력해주세요.'
                            className="w-full rounded-md border border-sky-200 px-4 py-2 outline-none focus:border-sky-500"
                        />
                        <button onClick={handleClickIsViewPassword} className="shrink-0 rounded-md border border-sky-200 px-3 py-2 hover:bg-sky-50">👁️</button>
                    </div>
                    <button onClick={addUser} className="w-full rounded-md bg-sky-500 py-2 font-medium text-white hover:bg-sky-600">회원가입</button>
                </div>
                <hr className="my-6 border-sky-100" />
                <div className="text-center">
                    <h3 className="mb-2 text-sm text-sky-700">이미 계정이 있으신가요?</h3>
                    <span onClick={handleClickLogin} className="cursor-pointer text-sm font-medium text-sky-500 hover:text-sky-700 hover:underline">로그인 하러가기</span>
                </div>
            </div>
        </div>
    );
}

export default JoinPage;
