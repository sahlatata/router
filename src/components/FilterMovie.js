import {Form,FormControl,Button } from "react-bootstrap"
import { useState } from "react";
import { Rating } from "@mui/material"
const FilterMovie =({setRateF,rateF,setTextSearch})=>{
    const handleReset =()=>{
        setTextSearch('')
        setRateF(0)
    }
    return(
        <div>
<Form className="d-flex">
            <FormControl style={{ width: 200}}
            onChange={(e)=>setTextSearch(e.target.value)}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Rating value={rateF} name="simple-controlled" onChange={(e)=> setRateF(e.target.value)} />
            <Button  className="bluesky"  style={{marginLeft:'10px'}} onClick={handleReset}>Reset</Button> 
          </Form>
        </div>
    )
}

export default FilterMovie