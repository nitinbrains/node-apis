const mongoose = require('mongoose');
``
const getAllMovies = async (req,res)=>{

    const moviesModel = mongoose.model('movies');
     
    const moviesData = await moviesModel.find();

    res.status(200).json({
        status: 'success',
        message: 'All movies',
        data: moviesData,
    })
}

module.exports = getAllMovies;