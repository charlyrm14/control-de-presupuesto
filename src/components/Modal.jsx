import { useState, useEffect } from 'react';
import CloseModal from '../img/cerrar.png';
import { Message } from "./Message";

export function Modal ( { setModal, animateModal, setAnimateModal, saveExpense, expenseEdit, setExpenseEdit } ) {

    const [ name, setName ]         = useState('');
    const [ quantity, setQuantity ] = useState(0);
    const [ category, setCategory ] = useState('');
    const [ message, setMessage ]   = useState( false );
    const [ date, setDate ]         = useState('');
    const [ id, setId ]             = useState('');

    useEffect ( () => {

        if ( Object.keys( expenseEdit ).length > 0 ) {
            setName( expenseEdit.name );
            setQuantity( expenseEdit.quantity );
            setCategory( expenseEdit.category );
            setId( expenseEdit.id );
            setDate( expenseEdit.date );
        }

    }, [] );

    const HandleHideModal = () => {
        
        setAnimateModal( false );
        setExpenseEdit({});

        setTimeout( () => {
            setModal( false );
        }, 500 );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( [ name, quantity, category ].includes('') ) {
            setMessage('Todos los campos son obligatorios');

            setTimeout( () => {
                setMessage('');   
            }, 3000 );

            return;
        }

        saveExpense( { name, quantity, category, id, date } );

    }

    return (
        <div className="modal">

            <div className="close-modal">
                <img    src={ CloseModal } 
                        alt="Cerrar Modal"
                        onClick={ HandleHideModal } 
                        />
            </div>

            <form   className={`form-new-budget ${ animateModal ? 'animate' : 'close' }`} 
                    onSubmit={ handleSubmit }>

                <legend> { expenseEdit.name ? 'Editar Gasto' : 'Nuevo Gasto' } </legend>

                { message && <Message type="error"> { message } </Message> }


                <div className="field-new-budget">
                    <label htmlFor="name"> Concepto </label>
                    <input  type="text"
                            id='name' 
                            placeholder='Nombre del gasto'
                            value={ name }
                            onChange={ e => setName( e.target.value ) }/>
                </div>

                <div className="field-new-budget">
                    <label htmlFor="quantity"> Cantidad </label>
                    <input  type="number"
                            id='quantity' 
                            placeholder='Cantidad del gasto, ejemplo: 300'
                            value={ quantity }
                            onChange={ e => setQuantity( Number( e.target.value ) ) }/>
                </div>

                <div className="field-new-budget">
                    <label htmlFor="category"> Categoría </label>
                    <select id="category"
                            value={ category }
                            onChange={ e => setCategory( e.target.value ) }>
                        <option value=""> -- Selecciona -- </option>
                        <option value="ahorro"> Ahorro </option>
                        <option value="comida"> Comida </option>
                        <option value="hogar"> Hogar </option>
                        <option value="entretenimiento"> Entretenimiento </option>
                        <option value="salud"> Salud </option>
                        <option value="suscripciones"> Suscripciones </option>
                        <option value="otros"> Otros Gastos </option>
                    </select>
                </div>

                <button type='submit'> { expenseEdit.name ? 'Actualizar Gasto' : 'Añadir Gasto' } </button>

            </form>

        </div>
    );

}

