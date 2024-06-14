import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getCommentsAction } from '../redux/features/CommentSlice';

export default function Comments() {
    const dispatch = useAppDispatch();
     const {data, isLoading, errors} = useAppSelector(state => state.comments);
  // componentDidMount
  useEffect(() => {
    dispatch({type: "GET_COMMENTS"}); 
  }, []);

  return (
    <div>
        <h1>Comments</h1>
        {
            isLoading ? <h1>Loading...</h1>:
            //@ts-ignore
            data?.map(elem => <div key={elem.id}>{elem.name}</div>)
        }
    </div>
  )
}
