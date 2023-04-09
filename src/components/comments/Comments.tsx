import React from 'react';
import { IComment } from '../../models/CommentInterface';
import CommentsList from './CommentsList';

interface commentsProps{
    comments: IComment[]
}


const Comments = ({comments} : commentsProps) => {
    return (
        <div>
            <h2 className='mt-4 mb-3'>Отзывы о товаре</h2>
            <hr/>
            <CommentsList
            comments={comments}
            />
        </div>
    );
};

export default Comments;