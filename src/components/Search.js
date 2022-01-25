import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Cardj from './Card';
import Fooddata from './FoodData';
import Set from './Set';
import "./style.css"

const Search = () => {

    const [fdata, setFdata] = useState(Fooddata);

    const [copydata, setCopy] = useState([]);

    const Changedata = (e) => {
        // console.log(e);
        let getchangedata = e.toLowerCase();

        if (getchangedata == "") {
            setCopy(fdata);
        } else {
            let storedata = copydata.filter((element, k) => element.rname.toLowerCase().match(getchangedata));
            
            return setCopy(storedata);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setCopy(Fooddata);
        }, 3000);

    }, []);


    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

    return (
        <>
            <div>
                <div className='con d-flex justify-content-between align-items-center container'>
                    <img src={zomatologo} alt="amazon" className='zomato' style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} />
                    <h2 className='text mt-3'>Search Filter App</h2>
                </div>
                <Form className='d-flex justify-content-center align-items-center mt-3'>
                    <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
                        <Form.Control type="text"
                            onChange={(e) => Changedata(e.target.value)}
                            placeholder="Serach for Restaurants" />
                    </Form.Group>
                    <button className='col-lg-1 bt btn text-light'>Submit</button>
                </Form>

                <section className='iteam_section mt-4 container'>
                    <h2 className="px-3">Restaurants in Ahmedabad Open now</h2>
                    <div className="row mt-2 d-flex justify-content-around align-items-center">
                        {
                            copydata && copydata.length ? <Cardj data={copydata} /> : <Set sdata={fdata} />
                        }
                    </div>
                </section>
            </div>
        </>
    )
};

export default Search;
