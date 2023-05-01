const getImagen = async() => {

    //https://api.giphy.com/v1/gifs/random?key=TKYvzJfH80FGpmrphnotufvVJbQy8ZoS
    try {
    
        const apiKey = 'TKYvzJfH80FGpmrphnotufvVJbQy8ZoS';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    
    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
    }
    getImagen()
   
    module.exports = getImagen