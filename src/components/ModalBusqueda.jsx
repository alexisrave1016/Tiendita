import Modal from "../components/Modal";
import "../styles/modalPintar.css";
import { useEffect, useState } from "react";
import '../styles/modalBusqueda.css'
import { Button } from "./Disenos";



const ModalBusqueda = (props) => {
  const { isOpenModal, closeModal, cities, onSelect,updateCities, filterCities} = props;
  const [city, setCity] = useState('')
  
  const handleSubmit=(e)=>{
      e.preventDefault();
     
      onSelect(city)
      closeModal()

  }

  const selectCity = (e)=>{
      setCity(e.city)
      updateCities([])
  }
  
  const handleChange=(e)=>{
    e.preventDefault();
    const filteredCities = cities.filter(place => {
        const regex = new RegExp(e.target.value, 'gi');
        return place.city.match(regex) ||
            place.state.match(regex);
    })

    updateCities(filteredCities)
    setCity()

  }
  

  useEffect(() => {}, []);

  return (
    <Modal isOpen={isOpenModal} closeModal={closeModal} className="modalBusquedaContainer">
        <div className="contaienerModalBuscador">
            <h3>Donde quiere hacer su pedido</h3>
        <form  onSubmit={handleSubmit} >
            
        <label className="formularioBuscador">
           <span className="tituloBuscador">Para poder ofrecerte productos dentro de tu área, necesitamos tu dirección</span> 
          <input type="text" name="name" value={city} onChange={handleChange} className="inputCiudades"/>
        </label>
        
        <Button type="submit" value="Submit" className="buttonBuscar"> Buscar</Button>
        </form>
        <ul>
            
            {filterCities.length>0 &&
                filterCities.map(elem=>{
                    return <li key={elem.rank} onClick={()=>selectCity(elem)}>{elem.city}-{elem.state}</li>
                })
            }
        </ul>
        </div>
      
    </Modal>
  );
};

export default ModalBusqueda;
