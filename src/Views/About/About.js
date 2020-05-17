import React from "react"
import Navbar from "../../Components/Navbar/Navbar"
import "./About.css"
import Button from "@material-ui/core/Button/Button"

export default function About(){

    const onClickButton = (event) => {
        const botao = event.target.id
        alert("vc clicou no " + botao)
    }

    
 

    return(
        <div>
            <Navbar pagina="sobre-nos"/>
            <div>
                <button className="AboutButton" id= "botao 1" onClick={onClickButton}>clique me</button>
                <button id= "botao 2" onClick={onClickButton}>clique me</button>
            </div>
            <div style={{marginTop:"50px"}}>
                <Button variant="contained" className="AboutButton">Botao MUI</Button>
            </div>
        </div>
    )
}