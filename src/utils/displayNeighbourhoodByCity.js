export async function displayNeighbourhoodByCity() {

    let cleanedData = [];
    try{
        const response = await fetch('http://localhost:5000/dashboard/neighbourhoods?city=Greater Noida');
        const data = await response.json();

        const cleanedData = data.map(item =>({
            name:item.name,
            description:item.description,
        }));
    }
    catch(error){
        console.error('Error:', error);
    }

    return cleanedData;
}