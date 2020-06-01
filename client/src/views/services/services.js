import Axios from "axios";


export default function() {
    const apiURL = '';
    return Axios(apiURL,
        {method: 'GET'},
    )
}