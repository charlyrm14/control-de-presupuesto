import { BudgetControl } from "./BudgetControl";
import { NewBudget } from "./NewBudget";

export function Header ( {
    expenses,
    setExpenses, 
    budget, 
    setBudget, 
    isValidBudget, 
    setIsValidBudget 
} ) {
    
    return (
        <header>
            <h1> Planificador de Gastos </h1>

            { isValidBudget ? (

                <BudgetControl
                    expenses={ expenses }
                    setExpenses={ setExpenses }
                    budget={ budget }
                    setBudget={ setBudget }
                    setIsValidBudget={ setIsValidBudget }
                />

            ) : (

                <NewBudget
                    budget={ budget }
                    setBudget={ setBudget }
                    setIsValidBudget={ setIsValidBudget }
                />

            )}

            
        </header>
    );

}