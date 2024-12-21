import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  timezone: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public birthday!: string;
  public timezone!: string;
}

User.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  birthday: { type: DataTypes.DATEONLY, allowNull: false },
  timezone: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, modelName: 'user' });

export default User;
