import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { formatQuantity } from '../helpers';

export function BudgetControl ( { 
        expenses, 
        setExpenses, 
        budget, 
        setBudget,
        setIsValidBudget 
} ) {

    const [ percentage, setPercentage ] = useState(0);

    const [ available, setAvailable ]   = useState(0);
    const [ spent, setSpent ]           = useState(0);

    useEffect( () => {

        // Total Gastado
        const totalSpent        = expenses.reduce( ( total, expense ) => expense.quantity + total, 0 );

        // Total Disponible
        const totalAvailable    = budget - totalSpent;

        // Calcular porcentaje
        const newPercentage     = (( ( budget - totalAvailable ) / budget ) * 100).toFixed( 2 ) ;

        setSpent( totalSpent );
        setAvailable( totalAvailable );
        
        setTimeout( () => {
            setPercentage( newPercentage );
        }, 1500 );

    }, [ expenses ]);

    const handleResetApp = () => {
        const result = confirm('¿Estas seguro de restablecer los datos, esto eliminara el presupuesto y gastos?');

        if( result ) {
            setExpenses([]);
            setBudget(0);
            setIsValidBudget( false );
        }

    }


    return (
        <div className="container-budget container-statistics shadow two-columns">

            <div style={{ width: 180, height: 180 }}>
                <CircularProgressbar
                    value={ percentage }
                    strokeWidth={ 6 }
                    styles={ buildStyles( {
                        pathColor: percentage > 100 ? '#DC2626' : '#34B3F1',
                        trailColor: '#F5F5F5',
                        textColor: percentage > 100 ? '#DC2626' : '#34B3F1',
                    } ) }
                    text={ `${ percentage }%` }
                />
            </div>

            <div className="budget-content">

                <button className='reset-app'
                        type='button'
                        onClick={ handleResetApp }>
                    Restablecer App
                </button>

                <p> 
                    <span> Presupuesto: </span> { formatQuantity( budget ) }
                </p>

                <p className={`${ available < 0 ? 'negative': '' }`}> 
                    <span> Disponible: </span> { formatQuantity( available ) }
                </p>

                <p> 
                    <span> Gastado: </span> { formatQuantity( spent ) }
                </p>
            </div>

        </div>
    );

}