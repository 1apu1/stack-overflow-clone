import jwt from 'jsonwebtoken'


const auth = (req,res,next) =>{
    try{
const token = req.headers.authorization.split(' ')[1];


 let decodeData = jwt.verify(token,process.env.JWT_SECRET)
//   in" test" use process


req.userId = decodeData?.id


next()
    }catch(error){
   console.log(error)
    }
}


export default auth;


// import jwt from "jsonwebtoken";

// const auth = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];

//     let decodeData = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decodeData?.id;

//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default auth;
// 