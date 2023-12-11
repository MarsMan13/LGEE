async function getComments(id, page=0){
    const url = `/live/${id}/comments/${page}`
    try{
        const respone = await axios.get(url);
    }
}