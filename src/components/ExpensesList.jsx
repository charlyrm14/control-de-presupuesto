import { Expense } from "./Expense";
import { InstructionsEditDelete } from "./InstructionsEditDelete";

export function ExpensesList ( { 
        expenses, 
        setExpenseEdit, 
        expenseDelete, 
        filter, 
        leakedExpenses 
} ) {
    
    return (
        <div className="expenses-list container-statistics">


            {
                filter ? (
                    <>
                        <h2> { leakedExpenses.length ? 'Listado de Gastos' : 'No hay gastos en esta categoría' } </h2>

                        <InstructionsEditDelete/>
          
                        { 
                            leakedExpenses.map( expense => (
                                <Expense    key={ expense.id }
                                            expense={ expense }
                                            setExpenseEdit={ setExpenseEdit }
                                            expenseDelete={ expenseDelete }
                                />
                            ))
                        }
                    </>
                ) : (
                    <>
                        <h2> { expenses.length ? 'Listado de Gastos' : 'No hay gastos aún'} </h2>

                        <InstructionsEditDelete/>

                        { 
                            expenses.map( expense => (
                                    <Expense    key={ expense.id }
                                                expense={ expense }
                                                setExpenseEdit={ setExpenseEdit }
                                                expenseDelete={ expenseDelete }
                                    />
                            ))
                        }
                    </>
                )
            }
            

        </div>
    );
}