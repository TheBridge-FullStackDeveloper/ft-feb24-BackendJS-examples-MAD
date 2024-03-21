-- Crear tabla authors
CREATE TABLE authors (
  id_author serial NOT NULL PRIMARY KEY, 
  name varchar(45) NOT NULL, 
  surname varchar(45) NOT NULL, 
  email varchar(100) NOT NULL UNIQUE,
  image varchar(255)
);

-- Crear tabla entries
CREATE TABLE entries (
  id_entry serial NOT NULL PRIMARY KEY, 
  title varchar(100) NOT NULL, 
  content text NOT NULL, 
  date date DEFAULT CURRENT_DATE,
  id_author int,
  category varchar(15),
  FOREIGN KEY (id_author) REFERENCES authors(id_author)
);

-- Insertar datos en tabla authors
INSERT INTO authors(name,surname,email,image)
VALUES
('Alejandru','Regex','alejandru@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/75.jpg'),
('Birja','Rivera','birja@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/60.jpg'),
('Alvaru','Riveru','alvaru@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/45.jpg'),
('Muchelle','Wuallus','muchelle@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/women/72.jpg'),
('Albertu','Henriques','albertu@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/33.jpg'),
('Guillermu','Develaweyer','guillermu@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/34.jpg'),
('Jabier','Hespinoza','jabier@thebridgeschool.es','https://randomuser.me/api/portraits/thumb/men/35.jpg');



-- Insertar datos en tabla entries
INSERT INTO entries(title,content,id_author,category)
VALUES 
('Noticia: SOL en Madrid','Contenido noticia 1',(SELECT id_author FROM authors WHERE email='alejandru@thebridgeschool.es'),'Tiempo'),
('Noticia: Un panda suelto por la ciudad','El panda se comió todas las frutas de una tienda',(SELECT id_author FROM authors WHERE email='birja@thebridgeschool.es'),'Sucesos'),
('El rayo gana la champions','Victoria por goleada en la final de la champions',(SELECT id_author FROM authors WHERE email='albertu@thebridgeschool.es'),'Deportes'),
('Amanece Madrid lleno de arena','La calima satura Madrid de arena. Pérdidas millonarias',(SELECT id_author FROM authors WHERE email='birja@thebridgeschool.es'),'Sucesos'),
('Descubren el motor de agua','Fin de la gasolina. A partir de ahora usaremos agua en nuestros coches',(SELECT id_author FROM authors WHERE email='alvaru@thebridgeschool.es'),'Ciencia');

-- Buscar entries por email usuario
SELECT * FROM entries WHERE id_author=(SELECT id_author FROM authors WHERE email='alejandro@thebridgeschool.es');


-- Buscar datos por email de usuario y cruzar datos
SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
FROM entries AS e
INNER JOIN authors AS a
ON e.id_author=a.id_author
WHERE a.email='alejandru@thebridgeschool.es'
ORDER BY e.title;


-- Buscar datos por email de 2 usuarios y cruzar datos
SELECT entries.title,entries.content,entries.date,entries.category,authors.name,authors.surname,authors.image
FROM entries
INNER JOIN authors
ON entries.id_author=authors.id_author
WHERE authors.email='alejandru@thebridgeschool.es' OR authors.email='alvaru@thebridgeschool.es' OR authors.email='albertu@thebridgeschool.es'
ORDER BY entries.title;

UPDATE entries
    SET
        title='Noticia: SOL en Madrid4', 
        content='Hello', 
        date='2014-04-16', 
        category='Coches',
        id_author=(SELECT id_author FROM authors WHERE email = 'alejandru@thebridgeschool.es')
    WHERE 
        title = 'Noticia: SOL en Madrid3';
