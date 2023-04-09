import React from 'react';
import { IComment } from '../../models/CommentInterface';
import { Container, Row, Col, Card, Button, ListGroup, ButtonGroup } from "react-bootstrap";
import CommentItem from './CommentItem';

interface commentsProps{
    comments: IComment[]
}


const CommentsList = ({comments} : commentsProps) => {
    return (
        <div>
            <ListGroup variant="flush">
                {comments.map(comment => (
                    <CommentItem
                    key={comment.id}
                    comment={comment}
                    />
                ))}
            </ListGroup>
        </div>
    );
};

export default CommentsList;