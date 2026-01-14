const mongoose = require('mongoose');

const editMovie = async (req,res)=>{
    const moviesModel = mongoose.model('movies');
    const { id } = req.params;
    const { movie_name, info, rating } = req.body;
    try{
        const movieData = await moviesModel.findByIdAndUpdate(id, { movie_name, info, rating },  { new: true, runValidators: true });    
        return res.status(200).json({
            status: 'success',
            message: 'Movie updated successfully',
            data: movieData,
        });
        //findbyidandupdate will return the updated document
        //so we don't need to fetch the data again
        //but if we use findoneandupdate, then we need to fetch the data again
        //findoneandupdate will return the original document
        //so we need to fetch the data again
        //findoneandupdate will return the original document

        //updateOne will not return the document will return only status

    } catch (error) {
        console.error('Error editing movie:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Failed to edit movie in DB',
            error: error.message
        });
    }
}

module.exports = editMovie;