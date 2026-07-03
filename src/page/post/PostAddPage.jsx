import React, { useEffect, useState } from 'react';
import { addPost } from '../../redux/slice/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PostAddPage(props) {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const { isLoggedIn, user } = useSelector((state) => state.loginInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoggedIn) {
            alert("글을 작성하려면 로그인이 필요합니다!");
            navigate("/loginPage");
        }
    }, []);

    const handleClickAddPost = () => {
        const newPost = { title, content, writer: user.account };
        dispatch(addPost(newPost));
        alert("글 작성 완료!");
        navigate("/mainPage");
    }

    return (
        <div className="mx-auto max-w-2xl px-4 py-8">
            <div className="rounded-xl border border-sky-100 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-sky-600">글 작성</h2>
                <div className="space-y-4">
                    <input
                        type='text'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        placeholder='제목을 입력해주세요'
                        className="w-full rounded-md border border-sky-200 px-4 py-2 outline-none focus:border-sky-500"
                    />
                    <textarea
                        onChange={e => setContent(e.target.value)}
                        value={content}
                        placeholder='내용을 입력해주세요'
                        rows={10}
                        className="w-full rounded-md border border-sky-200 px-4 py-2 outline-none focus:border-sky-500"
                    />
                    <button onClick={handleClickAddPost} className="w-full rounded-md bg-sky-500 py-2 font-medium text-white hover:bg-sky-600">글 작성</button>
                </div>
            </div>
        </div>
    );
}

export default PostAddPage;
