let index_data = require('../util/page_data');

exports.index = function (req,res) {
  res.render('index',{text: index_data.index_text});
};