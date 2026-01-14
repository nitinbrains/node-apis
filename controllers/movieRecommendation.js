const { OpenAI } = require('openai');

const movieRecommendation = async (req,res) =>{

    const client = new OpenAI({
        apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
      });
      
      const response = await client.responses.create({
        model: 'gpt-4o',
        instructions: 'You are a coding assistant that talks like a pirate',
        input: 'Are semicolons optional in JavaScript?',
      });
      
      console.log(response.output_text);

    res.status(200).json({
        status: 'success openai',
    })
}

module.exports = movieRecommendation;