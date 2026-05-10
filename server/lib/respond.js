const respond = (res, { data, error }) => {
  if (error) return res.status(400).json({ success: false, data: error.message });
  res.json({ success: true, data });
};

module.exports = respond;
