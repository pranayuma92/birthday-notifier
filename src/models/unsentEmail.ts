import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface UnsentEmailAttributes {
  id: number;
  userId: number;
  retryAt: Date;
}

interface UnsentEmailCreationAttributes extends Optional<UnsentEmailAttributes, 'id'> {}

class UnsentEmail extends Model<UnsentEmailAttributes, UnsentEmailCreationAttributes> implements UnsentEmailAttributes {
  public id!: number;
  public userId!: number;
  public retryAt!: Date;
}

UnsentEmail.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  retryAt: { type: DataTypes.DATE, allowNull: false },
}, { sequelize, modelName: 'unsent_email' });

export default UnsentEmail;