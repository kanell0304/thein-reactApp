import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Post from '../component/post/Post';

function MainPage(props) {

    const navigate = useNavigate();

    const { postList } = useSelector((state) => state.postList);

    const handleClickAddPost = () => {
        navigate('/postAddPage');
    }

    const handleClickPost = (postId) => {
        navigate(`/postDetailPage/${postId}`);
    }

    return (
        <div className="mx-auto max-w-2xl px-4 py-8">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-sky-600">글 목록</h1>
                <button onClick={handleClickAddPost} className="rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600">글 작성</button>
            </div>
            <div className="space-y-3">
                {postList.length === 0 && (
                    <p className="rounded-lg border border-sky-100 bg-white py-10 text-center text-sky-400">아직 작성된 글이 없습니다.</p>
                )}
                {postList.map(post => (
                    <Post onClick={() => handleClickPost(post.id)} key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default MainPage;
