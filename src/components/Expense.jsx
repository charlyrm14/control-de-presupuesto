import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { formatDate, formatQuantity } from '../helpers';
import IconoAhorro from '../img/icono_ahorro.png';
import IconoCasa from '../img/icono_casa.png';
import IconoComida from '../img/icono_comida.png';
import IconoGastos from '../img/icono_gastos.png';
import IconoOcio from '../img/icono_ocio.png';
import IconoSalud from '../img/icono_salud.png';
import IconoSus from '../img/icono_suscripciones.png';

const collectionIcons = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    hogar: IconoCasa,
    entretenimiento: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSus,
    otros: IconoGastos
}


export function Expense ( { expense, setExpenseEdit, expenseDelete } ) {

    const { id, name, quantity, category, date } = expense;

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={ () => setExpenseEdit( expense ) }>
            Editar
          </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            onClick={ () => expenseDelete( id ) } 
            destructive={true} >
            Eliminar
          </SwipeAction>
        </TrailingActions>
    );

    return (
        <SwipeableList>
            <SwipeableListItem 
                leadingActions={ leadingActions() }
                trailingActions={ trailingActions() }>
                <div className="expense shadow">
                    
                    <div className="expense-content">

                        <img    src={ collectionIcons[ category ] } 
                                alt="ICono Gasto" />

                        <div className="expense-description">
                            <p className="category"> { category } </p>
                            <p className="expense-name"> { name } </p>
                            <p className="expense-date"> 
                                <svg xmlns="http://www.w3.org/2000/svg" className='with-svg' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg> { formatDate( date ) } 
                            </p>
                        </div>

                    </div>

                    <p className='expense-quantity'> { formatQuantity( quantity ) } </p>

                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
}