export function InstructionsEditDelete () {
    
    return (
        <div className="instructions">
            <p> 
                Desliza para Editar 
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="with-svg ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </p>
            <p> 
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="with-svg mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </span>
                Desliza para Eliminar 
            </p>
        </div>
    );

}