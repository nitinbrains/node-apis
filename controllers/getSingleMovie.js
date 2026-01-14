const mongoose = require('mongoose');

const getSingleMovie = async (req,res)=>{
    const moviesModel = mongoose.model('movies');
    const { id } = req.params;
    try{
        const movieData = await moviesModel.find({
            _id: id,
        });
        return res.status(200).json({
            status: 'success',
            message: 'Single Movie found',
            data: movieData[0],
        });
    } catch (error) {
                console.error('Error getting single movie:', error);
                return res.status(500).json({
                status: 'error',
                message: 'Failed to get single movie',
                error: error.message,
            });
        }
    
}

module.exports = getSingleMovie;