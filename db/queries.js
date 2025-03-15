import { pool } from "./pool.js";

function createAnalytics() {
  const getTotalCustomers = async () => {
    const result = await pool.query("SELECT COUNT(*) FROM users;");
    return Number(result.rows[0].count);
  };

  const getTotalProducts = async () => {
    const result = await pool.query("SELECT COUNT(*) FROM products;");
    return Number(result.rows[0].count);
  };

  const getTotalOrders = async () => {
    const result = await pool.query("SELECT COUNT(*) FROM orders;");
    return Number(result.rows[0].count);
  };

  const getTotalSales = async () => {
    const result = await pool.query(
      "SELECT SUM(quantity * price) AS total_sales FROM OrderItems;"
    );
    return Number(result.rows[0].sum) || 0;
  };

  const getTotalOutstockProducts = async () => {
    const result = await pool.query(
      "SELECT COUNT(*) FROM Products WHERE stock_quantity = 0;"
    );
    return Number(result.rows[0].count);
  };

  const getTopSellingProduct = async () => {
    const result = await pool.query(`
      SELECT p.product_id, p.name, SUM(oi.quantity) AS total_sold
      FROM orderitems oi
      JOIN products p ON oi.product_id = p.product_id
      GROUP BY p.product_id, p.name
      ORDER BY total_sold DESC
      LIMIT 1;
    `);

    if (result.rows.length === 0) {
      return "No sales available";
    }

    return {
      id: result.rows[0].id,
      name: result.rows[0].name,
      totalSold: Number(result.rows[0].total_sold),
    };
  };

  const getAnalytics = async () => {
    const [customers, products, orders, sales, outOfstocks, topSellingProduct] =
      await Promise.all([
        getTotalCustomers(),
        getTotalProducts(),
        getTotalOrders(),
        getTotalSales(),
        getTotalOutstockProducts(),
        getTopSellingProduct(),
      ]);

    return {
      totalCustomers: customers,
      totalProducts: products,
      totalOrders: orders,
      totalSales: sales,
      totalOutOfstocks: outOfstocks,
      topSellingProduct: topSellingProduct,
    };
  };

  return {
    getTotalCustomers,
    getTotalProducts,
    getTotalOrders,
    getTotalSales,
    getAnalytics,
    getTotalOutstockProducts,
  };
}

const analytics = createAnalytics();

export { analytics };
