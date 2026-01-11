import db from "../db/database.js";
import { DataTypes, Sequelize } from "sequelize";

const User = db.define("user_table",{
   
    tittle : DataTypes.STRING,
    description : DataTypes.STRING,
    status : DataTypes.ENUM("selesai","belum selesai"),   
},{
    freezeTableName : true
})

export default User ;

(async()=>{
await db.sync()
})();