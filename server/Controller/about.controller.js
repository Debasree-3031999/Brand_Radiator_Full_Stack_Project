const About=require("../Model/about.model");

const getData=async(req,res)=>{
  try {
    let about=await About.find().lean().exec();
    return res.status(200).send({getAboutData:about})
  } catch (error) {
      console.log(error)

      return res.status(500).send({ message:error })

  }  
}


const postData = async (req, res) => {
    try {
        let about = await About.create(req.body);
        return res.status(201).send({ postAboutData: about })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error.message })

    }
}

module.exports={
    getData,
    postData,
}