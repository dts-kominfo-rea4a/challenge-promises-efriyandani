const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {

  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  const movies = [...theaterIXX, ...theaterVGC]

  let jumlahEmosi = 0;

  movies.forEach((movie) => {
    if (movie.hasil === emosi) {
      jumlahEmosi++;
    }
  })

  return jumlahEmosi;

};

module.exports = {
  promiseOutput,
};