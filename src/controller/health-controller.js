const healthCheck = async (req, res, next) => {
    try {
      res.status(200).json({
        status: 200,
        message: 'API Service Running',
        data:{}
      });
    } catch (e) {
      next(e);
    }
  };
  
  export default { healthCheck };