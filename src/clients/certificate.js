import axios from "axios";

export const getCertificate = id => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/certificates/${id}`).then(response => response)
}
