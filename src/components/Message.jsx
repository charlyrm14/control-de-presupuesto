export function Message ( { children, type } ) {

    return (
        <div className={`alert ${ type }`}>
            { children }
        </div>
    );

}