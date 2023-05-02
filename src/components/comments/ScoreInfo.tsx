import React, {useState, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router';
import StarStatRating from './StarStatRating';

interface scoreProps{
    totalRating: number,
    totalFeedbackCount: number,
    feedbackButtonVisible: boolean
}

const RatingInfo = ({totalRating, totalFeedbackCount, feedbackButtonVisible} : scoreProps) => {

    const { productarticle } = useParams();
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate(`/${productarticle}/feedback`)
    }

    return (
        <Row>
            <Col>
                <StarStatRating
                totalRating={Number(totalRating)}
                />
                <span className='mt-1 ms-3 text-secondary' style={{margin:0, verticalAlign: 'sub', fontSize:'0.94rem', fontWeight: 400}}>{Number(totalFeedbackCount)}</span>
                
                {
                feedbackButtonVisible ?
                    <button className="btn btn-primary ms-3" type="submit" onClick={() => onSubmit()}>
                        Оставить отзыв
                    </button>
                :
                    <></>
                }

            </Col>
        </Row>
    );
};

export default RatingInfo;