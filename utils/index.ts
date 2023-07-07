
export async function fetchCars() {
    const headers = {
    'X-RapidAPI-Key': 'c8ab83a60amsh67594b0fd97f29dp198e56jsnc85281a897aa',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' , {headers:headers},);
    const result = await response.json();
    return result;
}