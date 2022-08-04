import { useState, useEffect } from "react";


export function FilterCategories ( { filter, setFilter } ) {

    return (
        <div className="filters shadow container-statistics">
            
            <form>

                <div className="field">
                    <label htmlFor="filter"> Filtrar Gastos </label>
                    <select id="filter"
                            value={ filter }
                            onChange={ ( e ) => setFilter( e.target.value ) }
                    >
                        <option value=""> -- Todas -- </option>
                        <option value="ahorro"> Ahorro </option>
                        <option value="comida"> Comida </option>
                        <option value="hogar"> Hogar </option>
                        <option value="entretenimiento"> Entretenimiento </option>
                        <option value="salud"> Salud </option>
                        <option value="suscripciones"> Suscripciones </option>
                        <option value="otros"> Otros Gastos </option>
                    </select>
                </div>

            </form>

        </div>
    );
} 