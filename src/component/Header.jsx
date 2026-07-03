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
        <div>
            <div>
                <buton onClick={handleClickLogo}>Logo</buton>
            </div>
            <div>
                <p>아직 뭘 넣을지 모르겠음</p>
            </div>
            <div>
                {isLoggedIn ? 
                    <button onClick={handleClickToMyPage}>마이페이지</button> :
                    <button onClick={handleClickToLoginPage}>로그인</button>
                }
            </div>
            <hr />
        </div>
    );
}

export default Header;