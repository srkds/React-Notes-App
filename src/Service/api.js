import axios from "axios"

const url = "http://127.0.0.1:3003/notes"

export const getNotes = async () => {
    return await axios.get(url,{
        headers:{
            'Access-Control-Allow-Origin': '*',
        },
        proxy: {
          host: '104.236.174.88',
          port: 3128
        }
    })
}

export const addNote = async (note) => {
    return await axios.post(url, note)
}

export const deleteNote = async (id) => {
    return await axios.delete(`${url}/${id}`)
}