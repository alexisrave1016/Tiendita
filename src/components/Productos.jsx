import React from 'react'

export const Productos = () => {
    return (
        <div>
            <form >
                <h1>Producto</h1>
                <div className="form-group">
                    <div className="form-group col-md-4">
                        <label htmlFor="nombres">Nombres</label>
                        <input className="form-control" type="text" name="nombres" id="nombres" />
                    </div>
 
                    <div className="form-group col-md-4">
                        <label htmlFor="descripcion">Descripcion del Producto</label>
                        <input className="form-control" type="text" name="descripcion" id="descripcion"/>
                    </div>
 
                    <div className="form-group col-md-4">
                        <label htmlFor="precio">Precio</label>
                        <input className="form-control" type="number" name="precio" id="precio"/>
                    </div>
 
                    <div className="form-group col-md-4">
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                        />
 
                        <button className="btn btn-success" type="button">Imagen</button>
                    </div>
                    <button className="btn btn-success" type="submit">Guardar</button>
 
                    <div>
                        <button className="btn btn-primary" type="button"
                       >Guardar</button>
                    </div>
 
                </div>
            </form>
        </div>
    )
}
