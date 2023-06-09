const favMoviesArray = require('../models/favorites.models')

const addfavmovie = async (req, res) => {
  await favMoviesArray.create(req.body)
  res.json({
    success: true,
  })
}

const getfavmovies = async (req, res) => {
  const data = await favMoviesArray.find()
  res.json({
    data: data,
  })
}

const deletefavmovie = async (req, res) => {
    try {
      const data = await favMoviesArray.findByIdAndDelete(req.body.id);
      return res.status(200).json({ success: true, msg: data._id });
    } catch (err) {
      console.error(err);
    }
  };
  
module.exports = { addfavmovie, getfavmovies, deletefavmovie }
