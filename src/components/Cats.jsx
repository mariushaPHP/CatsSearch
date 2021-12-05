import React, {useState, useEffect} from "react";
import Cat from "./Cat";
import {Row} from "react-bootstrap";
import {Spinner} from "react-bootstrap";

const Cats = () =>  {
    const [show, setShow] = useState(false)
    const [cats, setCats] = useState([])


    const handleClick = () => {
        setShow(true)
    }

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds")
            .then(response => response.json())
            .then(data => setCats(data))
    },[]
    )
    //console.log('cats', cats)
    //console.log('cats[0]', cats[0])
    //console.log(cats[0].image.url)
    let i =0;

    return (

        <>
            <Row>

                {(cats.length) ? cats.map(cat=><Cat key={cat.id} name={cat.name} origin={cat.origin} image={cat.image}/>)
                :
                    (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    )}

            </Row>
        </>
    )
}

export default Cats