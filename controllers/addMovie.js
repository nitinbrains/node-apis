const mongoose = require('mongoose');



const addMovie = async (req, res) => {
     
    const moviesModel = mongoose.model('movies');

    try {
        const { movie_name, info, rating } = req.body;

        //Validation
        if (!movie_name || !info || !rating) {
            return res.status(400).json({
                status: 'error',
                message: 'All fields are required',
            });
        }

        if (rating < 0 || rating > 10) {
            return res.status(400).json({
                status: 'error',
                message: 'Rating must be between 0 and 10',
            });
        }



        try{    
            const createMovie = await moviesModel.create({ movie_name, info, rating });
            console.log(createMovie);
        } catch (error) {
            console.error('Error adding movie:', error);
            res.status(500).json({
                status: 'error',
                message: 'Failed to add movie in DB',
                error: error.message
            });
        }

        //Success

        res.status(200).json({
            status: 'success',
            message: 'Movie added successfully',
        })
    } catch (error) {
        console.error('Error adding movie:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to add movie',
            error: error.message
        });
    }
};

module.exports = addMovie;