import axiosLib from "axios"

const axios = axiosLib.create({
    baseURL: "https://p0sqi95w69.execute-api.ap-south-1.amazonaws.com/sample/api"
})

export default axios