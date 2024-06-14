import React, { useCallback, useState } from 'react'
import { usePostsQuery, usePrefetch } from '../redux/api/PostsApi';

export default function Posts() {
    const [page, setPage] = useState(0);
    const { data: posts, isLoading } = usePostsQuery(page);
    const prefetchPage = usePrefetch('posts');

    const prefetchNext = useCallback(() => {
        prefetchPage(page + 1);
    }, [prefetchPage, page]);
    
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
        <div>
            <button onClick={() => setPage(page => page - 1)}> Prev</button>
            <button onClick={() => setPage(page => page + 1)} onMouseEnter={prefetchNext}>Next</button>
        </div>
        <ul>
            {
                posts?.map(post => (
                    <li key={post.id}> {post.title} ' ' {post.body}</li>
                ))
            }
        </ul>
        </>
        
    )
}
