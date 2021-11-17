package dk.znautocenter.DbManager;

import dk.znautocenter.pojo.User;

import java.sql.*;


public class DBManager {

    private static DBManager dbManager;
    private final Connection connection;

    private DBManager() throws Exception {
        this.connection = connect();
    }

    public static DBManager getInstance() throws Exception {
        if (dbManager == null) {
            dbManager = new DBManager();
        }
        return dbManager;
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception {
        DBManager dbManager = new DBManager();
        //dbManager.createTable();
        //dbManager.TireTable();
        dbManager.RimTable();



        //dbManager.insertRow("znbiler@yahoo.com","123456");
       // dbManager.getUser("znbiler@yahoo.com");
    }

    /**
     * Connect to a sample database
     */
    private Connection connect() throws Exception {
        Connection conn = null;
        try {
            // db parameters
            String url = "jdbc:sqlite:userdb.db";
            // create a connection to the database
            conn = DriverManager.getConnection(url);

            System.out.println("Connection to SQLite has been established.");
            return conn;

        } catch (SQLException e) {
            throw new Exception(e);
        }
    }





    private void createTable() {
        String sql = "CREATE TABLE IF NOT EXISTS users (\n"
                + " id integer AUTO INCREMENT ,\n"
                + " username text PRIMARY KEY,\n"
                + " password text NOT NULL\n"
                + ");";

        try {
            Statement stmt = connection.createStatement();
            stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

   public void insertUser( String username, String password) {
        String sql = "INSERT INTO users (username, password) VALUES(?,?)";
        try {
            PreparedStatement pstmt = connection.prepareStatement(sql);
            pstmt.setString(1, username);
            pstmt.setString(2, password);
            pstmt.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public User getUser(String username, String password) {
        String sql = "SELECT * FROM users where username=? and password =?";

        try {
            PreparedStatement stmt = connection.prepareStatement(sql);
            stmt.setString(1, username);
            stmt.setString(2, password);
            ResultSet rs = stmt.executeQuery();

            // loop through the result set
            while (rs.next()) {
                User user = new User(rs.getString("username"), rs.getString("password"));
               return user;
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

// Table for the tire class
    private void TireTable() {
        String sql = "CREATE TABLE IF NOT EXISTS tiers\n" +
                "(tireId int NOT NULL PRIMARY KEY,\n" +
                "type varchar(20) NOT NULL,\n" +
                "dimensions varchar(30) NULL,\n" +
                "brand varchar(30) NULL,\n" +
                "condition varchar(30) NULL,\n" +
                "owner varchar(50) NULL,\n" +
                "comments varchar(1024) NULL,\n" +
                "location varchar(50) NULL,\n" +
                "date varchar(20) NULL);";

        try {
            Statement stmt = connection.createStatement();
            stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Table for the rim class
    private void RimTable() {
        String sql = "CREATE TABLE IF NOT EXISTS rims\n" +
                "(rimId int NOT NULL PRIMARY KEY,\n" +
                "condition varchar(30) NULL,\n" +
                "dimensions varchar(30) NULL,\n" +
                "brand varchar(30) NULL,\n" +
                "color varchar(10) NULL,\n" +
                "material varchar(30) NULL,\n" +
                "owner varchar(50) NULL,\n" +
                "comments varchar(1024) NULL,\n" +
                "location varchar(50) NULL,\n" +
                "date varchar(20) NULL);";

        try {
            Statement stmt = connection.createStatement();
            stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}



