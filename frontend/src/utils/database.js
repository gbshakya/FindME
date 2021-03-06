import axios from 'axios';


export const updateData = async (username, data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);
    return axios.put(`/api/database/${username}/`, body, config)
        .then(
            (result) => { console.log('Data updated'); /*console.clear()*/ }
        ).catch(err => console.log(err.response.data))
}

const deleteData = (username) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return axios.delete(`/api/database/${username}`, config).then((result) => console.log("Deleted")).catch(err => console.log(err.response.data));
}

const addDataSeparately = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);
    return axios.post('/api/database/', body, config)
        .then(
            (result) => { console.log('Data added'); /*console.clear()*/ }
        ).catch(err => console.log(err.response.data))
}

export const addData = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify(data);
    //console.log(body);
    axios.post('/api/database/', body, config)
        .then(
            (result) => console.log('Data added')
        )
        .catch(err => {
            console.log(err.response.data);
            if (err.response.data['id'] || err.response.data['userName']) {
                updateData(data.userName, data);
                //deleteData(data.userName).then((result) => addDataSeparately(data)).catch(err => console.log(err.response.data))
            }
        });
}

export const getData = async (username) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return await axios.get(`/api/database/${username}`, config)
        .then((result) => result)
        .catch(err => {
            if (err.response.data['detail'] = "Not found.") {
                //console.log('Not found');
                return null;

            }
        });
}

export const getAllData = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return await axios.get(`/api/database/`, config)
        .then((result) => result)
        .catch(err => {
            if (err.response.data['detail'] = "Not found.") {
                //console.log('Not found');
                return null;
            }
        });
}
