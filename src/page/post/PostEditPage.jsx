import React, { useEffect, useState } from 'react';
import { editPost } from '../../redux/slice/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function PostEditPage(props) {

    const navigate = useNavigate();

    const { isLoggedIn, user } = useSelector((state) => state.loginInfo);
    const dispatch = useDispatch();

    const { id } = useParams();
    const { postList } = useSelector((state) => state.postList);

    const selectedPost = postList.find(post => post.id === Number(id));

    const [title, setTitle] = useState(selectedPost ? selectedPost.title : "");
    const [content, setContent] = useState(selectedPost ? selectedPost.content : "");

    useEffect(() => {
        if (!isLoggedIn) {
            alert("글을 수정하려면 로그인이 필요합니다!");
            navigate("/loginPage");

        }
    }, []);

    const handleClickEditButton = () => {
        const newPost = { id: Number(id), title, content, writer: user.account };
        dispatch(editPost(newPost));
        alert("글 수정 완료!");
        navigate(`/postDetailPage/${id}`);
    }

    return (
        <div className="mx-auto max-w-2xl px-4 py-8">
            <div className="rounded-xl border border-sky-100 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-sky-600">글 수정</h2>
                <div className="space-y-4">
                    <input
                        type='text'
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        placeholder='수정 사항을 입력해주세요'
                        className="w-full rounded-md border border-sky-200 px-4 py-2 outline-none focus:border-sky-500"
                    />
                    <textarea
                        onChange={e => setContent(e.target.value)}
                        value={content}
                        placeholder='수정 사항을 입력해주세요'
                        rows={10}
                        className="w-full rounded-md border border-sky-200 px-4 py-2 outline-none focus:border-sky-500"
                    />
                    <button onClick={handleClickEditButton} className="w-full rounded-md bg-sky-500 py-2 font-medium text-white hover:bg-sky-600">글 수정</button>
                </div>
            </div>
        </div>
    );
}

export default PostEditPage;
