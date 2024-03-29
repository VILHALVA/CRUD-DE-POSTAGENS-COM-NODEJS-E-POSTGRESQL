const { sequelize } = require('./db'); 
const { DataTypes } = require('sequelize');

const Post = sequelize.define('postagens', {
    titulo: {
        type: DataTypes.STRING
    },
    conteudo: {
        type: DataTypes.TEXT
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    }
}, {
    timestamps: false
});

module.exports = Post;
