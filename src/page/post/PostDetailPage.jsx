import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editPost, deletePost, increaseViewCount } from '../../redux/slice/postSlice';

function PostDetailPage(props) {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { id } = useParams();
    const { postList } = useSelector((state) => state.postList);

    const selectedPost = postList.find(post => post.id === Number(id));
    const title = selectedPost.title;
    const content = selectedPost.content;
    const writer = selectedPost.writer;
    const viewCount = selectedPost.viewCount;
    const date = selectedPost.date;

    useEffect(() => {
        dispatch(increaseViewCount(selectedPost))
    }, [])

    const handleClickEditPost = (postId) => {
        navigate(`/postEditPage/${postId}`);
    }

    const handleClickDeletePost = (postId) => {
        const isConfirmed = window.confirm("정말 삭제하시겠습니까?");
        if (!isConfirmed) return;

        dispatch(deletePost({ id: Number(postId) }));
        alert("글 삭제 완료!");
        navigate('/mainPage');
    }

    return (
        <div className="mx-auto max-w-2xl px-4 py-8">
            <div className="rounded-xl border border-sky-100 bg-white p-8 shadow-sm">
                <h2 className="mb-2 text-2xl font-bold text-sky-600">{title}</h2>
                <div className="mb-6 flex items-center justify-between text-sm text-sky-500">
                    <span>{writer}</span>
                    <div className="flex items-center gap-3">
                        <span>조회 {viewCount}</span>
                        <span>{new Date(date).toLocaleDateString()}</span>
                    </div>
                </div>
                <textarea
                    readOnly
                    value={content}
                    rows={10}
                    className="w-full resize-none rounded-md border border-sky-100 bg-sky-50 px-4 py-2 text-sky-700 outline-none"
                />
                <div className="mt-6 flex justify-end gap-2">
                    <button onClick={() => handleClickEditPost(id)} className="rounded-md border border-sky-500 px-4 py-2 text-sm font-medium text-sky-500 hover:bg-sky-50">글 수정</button>
                    <button onClick={() => handleClickDeletePost(id)} className="rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600">글 삭제</button>
                </div>
            </div>
        </div>
    );
}

export default PostDetailPage;
