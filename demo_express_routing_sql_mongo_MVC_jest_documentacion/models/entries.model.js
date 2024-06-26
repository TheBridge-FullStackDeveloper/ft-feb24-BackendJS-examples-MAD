/**
 * @author Alejandro Reyes <alejandroreyes.com> 
 * @exports entries
 * @namespace SQLQueries 
 */

const { Pool } = require("pg");
const queries = require("./queries"); // Queries SQL

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: "5433",
  database: "postgres",
  password: "1234",
});

/**
  * Descripción de la función: Esta función busca todas las entries de cierto autor por email.
  * @memberof SQLQueries 
  * @method getEntriesByEmail 
  * @async
  * @param {String} email email del autor
  * @return {Array} Devuelve las entries encontradas en un array []
  * @throws {Error} Error de consulta a la BBDD
  */
const getEntriesByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getEntriesByEmail, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

/**
 * Descripción: Esta función devuelve todas las entries del sistema
 * @memberof SQLQueries 
 * @method getAllEntries 
 * @async 
 * @return {Array} Devuelve todas las entries en un array
 * @throws {Error} Error de consulta a la BBDD
 */
const getAllEntries = async () => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllEntries);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// CREATE
const createEntry = async (entry) => {
  const { title, content, email, category } = entry;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.createEntry, [
      title,
      content,
      email,
      category,
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

//UPDATE

/*
    SET
        title=$1, 
        content=$2, 
        date=$3, 
        category=$4,
        id_author=(SELECT id_author FROM authors WHERE email = $5)
    WHERE 
        title = $6`,
*/
/*

{
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    date: "2021-12-25",
    category: "sucesos",
    email: "alejandru@thebridgeschool.es",
    old_title: "Se acabaron las mandarinas de TB"
}

*/


/**
 * Descripción: Esta función crea una entry nueva
 <pre>
 * Ejemplo:
 * {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}
 </pre>
 * 
 * 
 * @memberof SQLQueries 
 * @method createEntry 
 * @async 
 * @param {Object} entry nueva entry
 <pre>
{
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}
</pre>
 * @return {Object} Devuelve todas las entries en un array
 * @throws {Error} Error de consulta a la BBDD
 */
const updateEntry = async (entry) => {
  const { title, content, date, category, email, old_title} = entry;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.updateEntry, [
      title,
      content,
      date,
      category,
      email,
      old_title
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// DELETE

const entries = {
  getEntriesByEmail,
  getAllEntries,
  createEntry,
  updateEntry
  //deleteEntry
};

module.exports = entries;

// Pruebas
/*
getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data))
*/

/*
getAllEntries()
.then(data=>console.log(data))
*/

/* let newEntry = {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}

createEntry(newEntry)
    .then(data => console.log(data)) */

/*
   const entry_to_update =  {
        title: "Nos vamos de tortillas",
        content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
        date: "2021-12-25",
        category: "sucesos",
        email: "alejandru@thebridgeschool.es",
        old_title: "Noticia: Un panda suelto por la ciudad"
    }

    updateEntry(entry_to_update)
    .then(data => console.log(data)) 
    */
