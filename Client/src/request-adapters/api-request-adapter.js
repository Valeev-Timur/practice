export default class ApiRequestAdapter {
    makeGetRequest = async (url, paramsObject) =>{
        let mainUrl;
        if(paramsObject === undefined){
            mainUrl = `${url}`;
        }
        else{
            mainUrl = `${url}/${paramsObject}`;
        }

        return await fetch(mainUrl)
            .then(
                response => response.json()
            )
            .then(
                data => {
                    console.log(data)
                    return data;
                }
            )
            .catch(error => {
                    throw new Error(`${error}`);
                }
            )
    }
}