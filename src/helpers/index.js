export function generateId () {
    const random    = Math.random().toString(36).substring(2);
    const date      = Date.now().toString(36);
    return date + random;
}

export function formatDate ( date ) {
    const dateNew = new Date( date );

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };

    return dateNew.toLocaleDateString( 'es-Es', options );
}

export function formatQuantity ( quantity ) {
    return quantity.toLocaleString ( 'en-US', {
        style: 'currency',
        currency: 'USD'
    } )
}