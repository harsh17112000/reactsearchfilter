import React from 'react';
import Card from 'react-bootstrap/Card'

const Cardj = ({ data }) => {

    return (
        <>
            {
                data.map((e) => {
                    return (
                        <>
                            <Card style={{ width: '22rem', border: "none" }} key={e.id} className='hove mb-4'>
                                <Card.Img variant="top" className='cd' src={e.imgdata} />
                                <div className="card_body">
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2'>{e.rname}</h4>
                                        <span>{e.rating}&nbsp;★</span>
                                    </div>
                                    <div className="lower_data d-flex justify-content-between">
                                        <h5>{e.address}</h5>
                                        <span>{e.price}</span>
                                    </div>
                                    <div className="extra"></div>
                                    <div className="last_data d-flex justify-content-between align-items-center">
                                        <img src={e.arrimg} className='limg' alt="arrow" />
                                        <p>{e.somedata}</p>
                                        <img src={e.delimg} className='laimg' alt="max" />
                                    </div>
                                </div>
                            </Card>
                        </>
                    )
                })
            }

        </>
    )
};

export default Cardj;
