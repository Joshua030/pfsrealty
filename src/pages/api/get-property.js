import property from "../../../lib/db/models/property";

const getProperty = async (req, res) => {
  const {limit } = (req.query);
 
  try {
    const data= await property.findAll({ limit });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export default getProperty;
