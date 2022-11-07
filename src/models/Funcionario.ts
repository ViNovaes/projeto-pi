import { Model , DataTypes } from "sequelize";

import {sequelize} from '../instances/mysql'

export interface FuncionarioInstance extends Model {

    codFunc: number
    nome: string
    cpf: String
    telefone: number
    email: string
    logadouro: string
    cargo: string
    password: string
}

export const Funcionario = sequelize.define<FuncionarioInstance>("Funcionario,",{
    codFunc:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    nome:{
        type:DataTypes.VARCHAR
    },
    cpf:{
        type:DataTypes.VARCHAR
    },
    telefone:{
        type:DataTypes.VARCHAR
    },
    email:{
        type:DataTypes.VARCHAR
    },
    logadouro:{
        type:DataTypes.VARCHAR
    },
    cargo:{
        type:DataTypes.VARCHAR
    },
    password:{
        type:DataTypes.VARCHAR
    }
},{
    tableName:'tbFuncionario',
    timestamps:false
}
)