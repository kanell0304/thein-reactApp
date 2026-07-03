import React from 'react';

function Post({post, onClick}) {
    return (
        <div onClick={onClick} className="cursor-pointer rounded-lg border border-sky-100 bg-white px-5 py-4 shadow-sm transition hover:border-sky-300 hover:shadow-md">
            <div className="flex items-center justify-between">
                <h3 className="font-medium text-sky-700">{post.title}</h3>
                <span className="text-xs text-sky-400">#{post.id}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-sky-500">
                <span>{post.writer}</span>
                <div className="flex items-center gap-3">
                    <span>조회 {post.viewCount}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;
