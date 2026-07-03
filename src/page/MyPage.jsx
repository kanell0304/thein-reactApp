import React from 'react';
import { useSelector } from 'react-redux';

function MyPage(props) {

    const { isLoggedIn, user } = useSelector((state) => state.loginInfo);

    return (
        <div className="mx-auto max-w-sm px-4 py-12">
            <div className="rounded-xl border border-sky-100 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-center text-2xl font-bold text-sky-600">마이페이지</h2>
                <p className="text-center text-lg text-sky-700">{user.account}님 어서오세요!</p>
                <div className="mt-6 space-y-2 rounded-md bg-sky-50 p-4 text-sm text-sky-700">
                    <p>UID: {user.id}</p>
                    <p>계정: {user.account}</p>
                </div>
            </div>
        </div>
    );
}

export default MyPage;
