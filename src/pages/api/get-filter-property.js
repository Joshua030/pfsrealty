import property from "../../../lib/db/models/property";
const { Op } = require("sequelize");

export const getFilterProperty = async (req, res) => {
 
  const { parameter, type, page = 1, pageSize = 10, proyectos,rooms } = req.body;
  console.log(rooms);
  let property_type = "";

  if (type) {
    property_type = "RNT";
  } else {
    property_type = "RES";
  }
 
  const limit = parseInt(pageSize);
  const offset = (parseInt(page) - 1) * limit;

  try {
    let whereClause = {
      property_type,
    };

    if (parameter) {
      whereClause = {
        [Op.or]: [
          {
            postal_code: {   [Op.iLike]: `%${parameter}%` },
            property_type,
          },
          {
            city:  {   [Op.iLike]: `%${parameter}%` },
            property_type,
          },
          {
            address: {   [Op.iLike]: `%${parameter}%` },
            property_type,
          },
        ],
      };
    }

    if (proyectos && proyectos.length > 0) {
        whereClause = {
          ...whereClause,
          sub_type_text: {
            [Op.in]: proyectos,
          },
        };
      }

      if (rooms && rooms.length > 0) {
        whereClause = {
          ...whereClause,
          property_bedrooms: {
            [Op.in]: rooms,
          },
        };
      }

    const properties = await property.findAll({
      where: whereClause,
      limit,
      offset,
    });

    const totalCount = await property.count({ where: whereClause });

    const totalPages = Math.ceil(totalCount / limit);

    res.status(200).json({ properties, totalPages, totalCount });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default getFilterProperty;
