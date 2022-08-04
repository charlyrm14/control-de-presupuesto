import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { FilterCategories } from './components/FilterCategories';
import { ExpensesList } from './components/ExpensesList';
import { Modal } from './components/Modal';

import { generateId } from './helpers';

import NewExpensetIcon from './img/nuevo_gasto.png';


function App() {

  const [ expenses, setExpenses ]             = useState(
    //Comprueba que exista en local storage sino existe inicia como arreglo vacío
    localStorage.getItem('expenses') ? JSON.parse( localStorage.getItem('expenses') ) : []
  );

  // Obtiene de localstorage el presupuesto, si no hay nada le asigna 0
  const [ budget, setBudget ]                 = useState( 
    Number( localStorage.getItem('budget') ) ?? 0
  );

  const [ isValidBudget, setIsValidBudget ]   = useState( false );
  const [ modal, setModal ]                   = useState( false );
  const [ animateModal, setAnimateModal ]     = useState( false );

  const [ expenseEdit, setExpenseEdit ]       = useState({});

  const [ filter, setFilter ]                 = useState('');
  const [ leakedExpenses, setleakedExpenses ] = useState([]);

  // Pasa el info del objeto a editar al deslizar sobre su card
  useEffect ( () => {

    if ( Object.keys( expenseEdit ).length > 0 ) {

      setModal( true );

      // Animación Modal
      setTimeout( () => {
        setAnimateModal( true );
      }, 500 );

    }

  }, [ expenseEdit ]);

  useEffect ( () => {
    // Guarda en localstorage el presupuesto
    localStorage.setItem('budget', budget ?? 0 );
  }, [ budget ] );

  // Guarda los gastos en Local Storage
  useEffect ( () => {
    localStorage.setItem('expenses', JSON.stringify( expenses ) ?? [] );
  }, [ expenses ] );


  // Filtro de categorías
  useEffect ( () => {

    if ( filter ) {

      const leakedExpenses = expenses.filter( expense => expense.category === filter );
      
      // Filtrar gastos por categoría
      setleakedExpenses( leakedExpenses );

    }

  }, [ filter ]);

  // Si el presupuesto es valido obtiene el presupuesto de localstorage para no volver a pedir un presupuesto al usuario
  useEffect ( () => {
    const budgetLocalStorage = Number( localStorage.getItem('budget') ) ?? 0;

    if ( budgetLocalStorage > 0 ) {
      setIsValidBudget( true );
    }

  }, [] );
  

  const handleNewExpense = () => {
    setModal( true );

    // Se pone vacío para que limpie el form del modal al crear un nuevo gasto despues de editar
    setExpenseEdit({});

    // Animación Modal
    setTimeout( () => {
      setAnimateModal( true );
    }, 500 );
  }

  const saveExpense = expense => {

    if ( expense.id ) {

      // Actualiza Gasto

      // Itera sobre el arreglo y obtienme el que sea igual al gasto que se le esta pasando los que no cumplan con la 
      // condición los sigue retornando
      const updatedExpenses = expenses.map( expenseState => expenseState.id === expense.id ? expense : expenseState );
      setExpenses( updatedExpenses );
      setExpenseEdit({});

    } else {

      // Nuevo Gasto
      expense.id    = generateId();
      expense.date  = Date.now();
      setExpenses( [ ...expenses, expense ] );

    }

    

    setAnimateModal( false );

    setTimeout( () => {
        setModal( false );
    }, 500 );

  }


  const expenseDelete = ( id ) => {
    const updatedExpenses = expenses.filter( expenseDelete => expenseDelete.id !== id );
    setExpenses( updatedExpenses );
  }

  return (
    <div className={ modal ? 'pin-up' : '' }>

      <Header
        expenses={ expenses }
        setExpenses={ setExpenses }
        budget={ budget }
        setBudget={ setBudget }
        isValidBudget={ isValidBudget }
        setIsValidBudget={ setIsValidBudget }
      />
      
      { isValidBudget && (
        <>
          <main>

            <FilterCategories
              filter={ filter }
              setFilter={ setFilter }
            />

            <ExpensesList
              expenses={ expenses }
              setExpenseEdit={ setExpenseEdit }
              expenseDelete={ expenseDelete }
              filter={ filter }
              leakedExpenses={ leakedExpenses }
            />
          </main>
          <div className='new-expense'>
            <img  src={ NewExpensetIcon } 
                  alt="Nuevo Gasto"
                  onClick={ handleNewExpense } />
          </div>
        </>
      )}

      { modal && <Modal setModal={ setModal }
                        animateModal={ animateModal }
                        setAnimateModal={ setAnimateModal }
                        saveExpense={ saveExpense }
                        expenseEdit={ expenseEdit }
                        setExpenseEdit={ setExpenseEdit }
                  /> }

    </div>
  )
}

export default App
