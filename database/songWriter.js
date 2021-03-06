//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: songWriter.js
//
// DESCRIPTION: Definition of the song_writer table model used by SequelizeJS
//              to map objects.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/12/02
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
'use strict';

module.exports = function defineSongWriter(sequelize, DataTypes) {
    var SongWriter = sequelize.define('SongWriter', {
        /*eslint-disable camelcase, new-cap */
        /*eslint-enable camelcase, new-cap */
    }, {
        // timestamps: true,      // defaulted globally
        // createdAt:  true,
        // updatedAt:  true,
        paranoid: false,
        // freezeTableName: true, // defaulted globally
        tableName: 'song_writer', // force table name to this value
        validate: {
        },
        hooks: {
        },
        classMethods: {
            associate(models) { // eslint-disable-line no-unused-vars
                // song_id and user_id foreign key references handled by through
                // table definition
            }
        },
        instanceMethods: {
        }
    });

    return SongWriter;
};
