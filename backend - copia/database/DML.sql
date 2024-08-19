CREATE DATABASE adiestramientos;

\c adiestramientos;

CREATE TABLE usuarios (
  id              SERIAL        NOT NULL,
  nombre          VARCHAR(60)   NOT NULL,
  especialidad    VARCHAR(20),
  img             TEXT,
  celular         VARCHAR(20)   NOT NULL,
  direccion       VARCHAR(20)   NOT NULL,
  email           VARCHAR(50)   NOT NULL  UNIQUE,
  password        VARCHAR(60)   NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE publicaciones (
  id              SERIAL        NOT NULL,
  usuario_id      INTEGER       NOT NULL,
  titulo          VARCHAR(20)   NOT NULL,
  descripcion     VARCHAR(500)  NOT NULL,
  img             VARCHAR(200)  NOT NULL,
  precio          INTEGER       NOT NULL,
  status          BOOLEAN       NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) 
  );


CREATE TABLE compras (
  id              SERIAL        NOT NULL,
  usuario_id      INTEGER        NOT NULL,
  publicacion_id  INTEGER        NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (publicacion_id) REFERENCES publicaciones(id)
);

