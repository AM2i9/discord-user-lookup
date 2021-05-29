const axios = require('axios');

const getUser = async (id) => {
    try {
        const response = await axios({
            method: 'get',
            url: `https://discord.com/api/users/${id}`,
            headers: {
                'Authorization':`Bot ${process.env.TOKEN}`,
            }
        })
        return response;
    } catch (error) {
        return { data: "There was an internal issue with the API.", error: error };
    }
}

module.exports = { getUser }