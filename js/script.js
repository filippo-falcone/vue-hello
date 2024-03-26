/*
// Stampo a schermo un messaggio all’interno di un h1, utilizzando i data.

// BONUS
// Aggiungo un'immagine, presa anch’essa da un data.
*/

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'We\'re 122!',
            imageSrc: 'https://www.filepicker.io/api/file/PrjQ7ZxTQye3aR2Tzt3N',
            imageAlt: 'Logo Boolean'
        }
    }
}).mount('#app')