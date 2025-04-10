import React, { useCallback, useState } from 'react'
import { usePostsQuery, usePrefetch } from '../redux/api/postsApi';

export default function Posts() {
    const [page, setPage] = useState(1);
    const {data: posts, isLoading, isFetching} = usePostsQuery(page);
    const prefetchPage = usePrefetch('posts');

     const prefetchNext = useCallback(() => {
         prefetchPage(page + 1)
    }, [page, prefetchPage]);

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={() => setPage(prev => prev - 1)}>&lt;</button> 
            <button onClick={() => setPage(prev => prev + 1)} onMouseOver={prefetchNext}>&gt;</button>
            <ul>
                {
                    posts && posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}
