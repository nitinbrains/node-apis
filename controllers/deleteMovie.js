const mongoose = require('mongoose');

const deleteMovie = async (req, res) => {
    try {
        const moviesModel = mongoose.model('movies');
        const { id } = req.params;
        
        // Check if movie exists
        const movie = await moviesModel.findById(id);
        
        if (!movie) {
            return res.status(404).json({
                status: 'error',
                message: 'Movie not found',
            });
        }
        
        // Actually delete the movie
        await moviesModel.findByIdAndDelete(id);
        
        return res.status(200).json({
            status: 'success',
            message: 'Movie deleted successfully',
        });
    } catch (error) {
        console.error('Error deleting movie:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Failed to delete movie',
            error: error.message,
        });
    }
}

module.exports = deleteMovie;