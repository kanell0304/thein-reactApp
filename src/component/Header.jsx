import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header(props) {

    const navigate = useNavigate();

    // Redux
    const { isLoggedIn, user } = useSelector((state) => state.loginInfo);

    const handleClickLogo = () => {
        navigate('/mainPage');
    }

    const handleClickToMyPage = () => {
        navigate('/myPage');
    }

    const handleClickToLoginPage = () => {
        navigate('/loginPage');
    }

    return (
        <header className="sticky top-0 z-10 flex items-center justify-between bg-sky-500 px-6 py-4 shadow-sm">
            <button onClick={handleClickLogo} className="text-xl font-bold text-white">
                Logo
            </button>
            <p className="hidden text-sm text-sky-100 sm:block">아직 뭘 넣을지 모르겠음</p>
            {isLoggedIn ?
                <button onClick={handleClickToMyPage} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-sky-600 hover:bg-sky-50">마이페이지</button> :
                <button onClick={handleClickToLoginPage} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-sky-600 hover:bg-sky-50">로그인</button>
            }
        </header>
    );
}

export default Header;
