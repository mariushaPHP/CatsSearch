import {Container, Spinner} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import CatsOption from "./catsOption";

const Search = () => {

    const [cats, setCats] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
            fetch("https://api.thecatapi.com/v1/breeds")
                .then(response => response.json())
                .then(data => setCats(data))
        },[]
    )

    const [foto, setFoto] = useState("")

    const handleClick = () => {

        localStorage.removeItem('url')
        const select = document.querySelector('.form-select');
        const value = select.options[select.selectedIndex].value;
        const kate = cats.filter(cat => cat.id === value)
        console.log("console kate", kate)
        setFoto(kate[0].image.url)
        setShow(true);

    }

    //console.log(cats)

    return(

        <>
            <select className="form-select" aria-label="Default select example" onChange={handleClick}>
                <option selected>Open this select menu</option>
                { cats.map(cat=><CatsOption value={cat.id} name={cat.name} image={cat.image}/>)}
            </select>
            <Container style={{display: "flex", justifyContent: "center"}}>
                {(show)&& <img src={foto} alt="" width={'500px'} style={{margin: "40px auto"}}/>}
            </Container>

        </>

    )
}

export default Search