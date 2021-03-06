import {Model} from 'sequelize'

export default class UserEvent extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
            },
            {
                sequelize,
                tableName: "user_event",
            },
        )
    }

}
