import db from "../db/database.js";
import { DataTypes, Sequelize } from "sequelize";

const User = db.define("user_table",{
   
    tittle : DataTypes.STRING,
    description : DataTypes.STRING,
    status : DataTypes.CHAR,
    priority : DataTypes.ENUM("penting","sedang","gak penting"),
    due_date : DataTypes.DATE,
   
},{
    freezeTableName : true
})

export default User ;

(async()=>{
await db.sync()
})();