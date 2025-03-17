import { pool } from "../db/pool.js";
const getCategoryAddPage = (req, res) => {
  res.render("category/categoryAdd", {
    title: "Create roduct PCategory",
  });
};

const addCategory = async (req, res) => {
  const { categoryTitle, createdBy, stock, publishDate, description } =
    req.body;
  const image = req.file ? req.file.filename : null; // Assuming you are using multer for file uploads

  try {
    const query = `
      INSERT INTO Categories (name, created_by, stock, publish_date, description, image) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *;
    `;

    const values = [
      categoryTitle,
      createdBy,
      stock,
      publishDate,
      description,
      image,
    ];

    const result = await pool.query(query, values);

    res.status(201).json({
      message: "Category added successfully",
      category: result.rows[0],
    });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getCategoryAddPage, addCategory };
