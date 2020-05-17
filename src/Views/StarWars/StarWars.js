import React, { useState } from "react"
import { Button, TextField } from "@material-ui/core"

export default function StarWars(){

    const [textValue, setTextValue] = useState("")
    const [toDo, setToDo] = useState([])

    const printLala = (n) => {
        let lalas = []
        for (let index = 0; index < n; index++) {
            lalas.push(<p>lalala</p>)
        }
        return lalas
    }

    const printToDo = () => {
        return toDo.map((element) => {
            return(
                <div>
                    <p>{element}</p>
                </div>
            )
        })
    }

    const attLista = () => {
        setToDo((toDo) => {return [...toDo, textValue]})
        setTextValue("")
    }

    return(
        <div style={{paddingLeft:"20px"}}>
            <TextField
            value={textValue}
            onChange = {(event) => {setTextValue(event.target.value)}}
            ></TextField>
            <Button onClick={attLista}>Enviar</Button>
            <div>
                {printToDo()}
            </div>
        </div>
    )
}