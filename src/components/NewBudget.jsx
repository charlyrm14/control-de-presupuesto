import { useState } from "react";
import { Message } from "./Message";


export function NewBudget (  { budget, setBudget, setIsValidBudget } ) {

    const [ message, setMessage ] = useState('');

    const handleBudget = ( e ) => {
        e.preventDefault();

        if ( !budget || budget <= 0) {
            setMessage('No es un presupuesto valido');
            return;
        }
        
        setMessage('');
        setIsValidBudget( true );

        
    }
    
    return (
        <div className="container-budget container shadow">
            
            <form onSubmit={ handleBudget } className="form">

                <div className="field">
                    <label htmlFor="newbudget"> Define tu presupuesto </label>
                    <input  type="number"
                            id="newbudget"
                            name="newbudget" 
                            className="new-budget"
                            placeholder="Añade tu presupuesto"
                            value={ budget }
                            onChange={ ( e ) => setBudget( Number( e.target.value ) ) }/>
                </div>

                <button type="submit"> 
                    Añadir 
                </button>

                { message && <Message type="error"> { message } </Message> }

            </form>

        </div>
    );

}