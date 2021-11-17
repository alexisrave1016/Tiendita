import React, { Fragment, useEffect, useState } from 'react'
import { useModal } from '../hooks/useModal';
import ModalBusqueda from './ModalBusqueda';
import axios from 'axios';
const url='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/'

const Buscador = () => {
    const [city, setCity] = useState('')
    const [cities, setCities] = useState([])
    const [isOpenlBusqueda, openBusqueda, closeBusqueda] = useModal(false);
    const [filterCities, setFilterCities] = useState([])
    const peticionesGet= async()=>{
        await axios.get(url)
        .then(resp=>{
            
            setCities(resp.data)
        }).catch(error=>{
            console.log(error)
        })
    }
    const updateCities=(cities)=>{
        setFilterCities(cities)
    }
    const onSelect = (selectCity)=>{
        setCity(selectCity)
        
    }

    useEffect(() => {
        peticionesGet()
        
    }, [])
    
    return (
        <Fragment>
        
            <button className="ubicacion" type="button" onClick={()=>openBusqueda()}>
                        <img className="img_logo" src="placeholder.png" alt="no disponible" srcset="" />
                        <h5> Tu ciudad es {city} </h5>
            </button>
            <ModalBusqueda 
            isOpenModal={isOpenlBusqueda}
            closeModal={closeBusqueda}
            cities={cities}
            filterCities={filterCities}
            onSelect={onSelect}
            updateCities={updateCities}
            />
        </Fragment>
    )
}

export default Buscador
