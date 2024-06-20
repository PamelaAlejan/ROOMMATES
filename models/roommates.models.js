import { pool } from '../database/connection.js'

const findAll = async () => {
    const { rows } = await pool.query('SELECT * from roommates')
    return rows
}
/*
// CONSULTA UNO
const one = async ({ id, titulo, artista, tono }) => {
    const querySQL = {
        text: 'SELECT * FROM canciones WHERE id= $1',
        values: [id]
    }
    const { rows } = await pool.query(querySQL)
    return rows[0]
}
// ELIMINA UNO
const remove = async ({ id, titulo, artista, tono }) => {
    const querySQL = {
        text: 'DELETE FROM canciones WHERE id= $1',
        values: [id]
    }
    const { rows } = await pool.query(querySQL)
    return rows
}*/
//CREA UNO
const create = async ({ nombre, debe, recibe }) => {
    const querySQL = {
        text: 'INSERT INTO canciones VALUES($1,$2,$3,$4) RETURNING *',
        values: [nombre, debe, recibe],
    }
    const { rows } = await pool.query(querySQL)
    return rows[0]
}

const gasto = async ({ nombre, descripcion, monto }) => {
    const querySQL = {
        text: 'INSERT INTO canciones VALUES($1,$2,$3,$4) RETURNING *',
        values: [nombre, descripcion, monto],
    }
    const { rows } = await pool.query(querySQL)
    return rows[0]
    /*
//MODIFICA UNO
const update = async ({ id, titulo, artista, tono }) => {
    const querySQL = {
        text: 'UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id= $4 RETURNING *;',
        values: [id, titulo, artista, tono]
    }
    const { rows } = await pool.query(querySQL)
    return rows[0]
*/
}
export const cancionero = {
    findAll,
    remove,
    create,
    update,
    //one
}