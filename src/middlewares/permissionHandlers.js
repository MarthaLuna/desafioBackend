const adminHandler = async (req, res, next) => {


    try {
      console.log("req.params", req.params);
      const { sub } = req.params.tokenPayload;
      const {_id} = req.body;
      console.log(sub);
      console.log(_id);
      if (sub != _id) {
      
        throw new Error("No tienes permisos para realizar esta acción");
      }
  
      next();
    } catch (err) {
      res.status(401).json({
        success: false,
        message: err.message,
      });
    } 
  };
  
  const staffHandler = async (req, res, next) => {
      /*try {
        console.log("req.params", req.params);
        const { role } = req.params.tokenPayload;
    
        if (role !== "client") {
          throw new Error("No tienes permisos para realizar esta acción");
        }
    
        next();
      } catch (err) {
        res.status(401).json({
          success: false,
          message: err.message,
        });
      }*/
    };
  
  module.exports = { adminHandler , staffHandler};