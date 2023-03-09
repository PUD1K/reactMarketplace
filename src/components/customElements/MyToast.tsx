import React, {useState} from 'react';

interface ToastInterface{
    text: string;
    color: string;
    show: boolean;
}

const MyToast = ({text, color, show}: ToastInterface) => {
    const [showState, setShowState] = useState(show);
    // console.log(`showState = ${showState}`);
    // console.log(`show = ${show}`);

    const classStyle = `toast ${showState ? 'show' : 'hide'} align-items-center text-white ${color} border-0`
    return (
        <div className='position-absolute p-3 bottom-0 end-0'>
            <div className={classStyle} data-autohide="true" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">
                        {text}
                    </div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShowState(false)}></button>
                </div>
            </div>
        </div>
    );
};

export default MyToast;