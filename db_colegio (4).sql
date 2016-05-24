-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2016 a las 08:08:30
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `db_colegio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acudiente`
--

CREATE TABLE IF NOT EXISTS `acudiente` (
  `usuario_cedula` int(20) NOT NULL,
  PRIMARY KEY (`usuario_cedula`),
  KEY `fk_acudiente_usuario1_idx` (`usuario_cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `acudiente`
--

INSERT INTO `acudiente` (`usuario_cedula`) VALUES
(78106790),
(78106791),
(78106792),
(78106793),
(78106795),
(78106796),
(1066524378);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `area`
--

CREATE TABLE IF NOT EXISTS `area` (
  `codigo` varchar(10) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `area`
--

INSERT INTO `area` (`codigo`, `nombre`) VALUES
('CN002', 'Ciencias Naturales y Educación Ambiental'),
('CS003', 'Ciencias Sociales'),
('EA006', 'Educación artística'),
('EF005', 'Educación física, recreación y deportes'),
('ER007', 'Educación religiosa'),
('EV008', 'Ética y valores humanos'),
('H001', 'Humanidades'),
('M004', 'Matemáticas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignatura`
--

CREATE TABLE IF NOT EXISTS `asignatura` (
  `idasignatura` varchar(10) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `area_codigo` varchar(10) NOT NULL,
  PRIMARY KEY (`idasignatura`),
  KEY `fk_asignatura_area1_idx` (`area_codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`idasignatura`, `nombre`, `area_codigo`) VALUES
('01', 'Humanidades', 'H001'),
('02', 'Inglés', 'H001'),
('03', 'C. Políticas', 'CS003'),
('04', 'C. Económicas', 'CS003'),
('05', 'Matemáticas', 'M004'),
('06', 'Trigonometría', 'M004'),
('07', 'Algebra', 'M004'),
('08', 'Bología', 'CN002'),
('09', 'Química', 'CN002'),
('10', 'Religión', 'ER007'),
('11', 'Ética', 'EV008');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carga_academica`
--

CREATE TABLE IF NOT EXISTS `carga_academica` (
  `docente_cedula` int(20) NOT NULL,
  `idasignatura` varchar(10) NOT NULL,
  PRIMARY KEY (`docente_cedula`,`idasignatura`),
  KEY `fk_docente_has_asignatura_asignatura1_idx` (`idasignatura`),
  KEY `fk_docente_has_asignatura_docente1_idx` (`docente_cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `carga_academica`
--

INSERT INTO `carga_academica` (`docente_cedula`, `idasignatura`) VALUES
(78106793, '01'),
(78106793, '10'),
(78106793, '11'),
(78106795, '08'),
(78106795, '09'),
(78106795, '10'),
(78106796, '05'),
(78106796, '06'),
(78106796, '07'),
(1066524378, '02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente`
--

CREATE TABLE IF NOT EXISTS `docente` (
  `usuario_cedula` int(20) NOT NULL,
  PRIMARY KEY (`usuario_cedula`),
  KEY `fk_docente_usuario1_idx` (`usuario_cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `docente`
--

INSERT INTO `docente` (`usuario_cedula`) VALUES
(78106791),
(78106793),
(78106795),
(78106796),
(1066524378);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE IF NOT EXISTS `estudiante` (
  `ti` varchar(20) NOT NULL,
  `nombre1` varchar(45) NOT NULL,
  `nombre2` varchar(45) DEFAULT NULL,
  `apellido1` varchar(45) NOT NULL,
  `apellido2` varchar(45) NOT NULL,
  `sexo` varchar(1) NOT NULL,
  `grado` int(2) NOT NULL,
  `f_nacimiento` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `acudiente_cedula` int(20) NOT NULL,
  `grupo` int(1) DEFAULT NULL,
  PRIMARY KEY (`ti`),
  KEY `fk_estudiante_acudiente1_idx` (`acudiente_cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`ti`, `nombre1`, `nombre2`, `apellido1`, `apellido2`, `sexo`, `grado`, `f_nacimiento`, `direccion`, `acudiente_cedula`, `grupo`) VALUES
('13713910291', 'Jaime', 'Luis', 'Navarro', 'Hoyos', 'M', 6, '2016-05-27T05:00:00.000Z', 'call 45', 78106792, 1),
('1831389071', 'Vanessa', 'Maria', 'Mercado', 'Caldera', 'F', 6, '2016-05-19T05:00:00.000Z', 'ayapel', 78106790, 2),
('81927611', 'Sofia', 'Andrea', 'Menco', 'Pérez', 'F', 8, '2016-05-12T05:00:00.000Z', 'Ayapel', 78106792, 2),
('91939131', 'Kendy', 'Jhoanna', 'Perez', 'Mestra', 'F', 8, '2016-05-21T05:00:00.000Z', 'ayaepl', 78106790, 2),
('94082413', 'Juan', 'Andrés', 'Menco', 'Pérez', 'M', 6, '2016-05-14T05:00:00.000Z', 'Ayapel', 78106792, 1),
('94082414', 'Juan', 'Andrés', 'Menco', 'Pérez', 'M', 10, '2016-05-14T05:00:00.000Z', 'Ayapel', 78106790, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grado`
--

CREATE TABLE IF NOT EXISTS `grado` (
  `idgrado` int(11) NOT NULL,
  PRIMARY KEY (`idgrado`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `grado`
--

INSERT INTO `grado` (`idgrado`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grado_asignatura`
--

CREATE TABLE IF NOT EXISTS `grado_asignatura` (
  `grado_idgrado` int(11) NOT NULL,
  `asignatura_idasignatura` varchar(10) NOT NULL,
  PRIMARY KEY (`grado_idgrado`,`asignatura_idasignatura`),
  KEY `fk_grado_has_asignatura_asignatura1_idx` (`asignatura_idasignatura`),
  KEY `fk_grado_has_asignatura_grado1_idx` (`grado_idgrado`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `grado_asignatura`
--

INSERT INTO `grado_asignatura` (`grado_idgrado`, `asignatura_idasignatura`) VALUES
(5, '01'),
(5, '10'),
(6, '01'),
(6, '02'),
(6, '08'),
(7, '01'),
(7, '02'),
(7, '08'),
(7, '10'),
(8, '01'),
(8, '02'),
(8, '05'),
(8, '08'),
(8, '10'),
(9, '01'),
(9, '02'),
(9, '05'),
(9, '08'),
(9, '10'),
(10, '01'),
(10, '02'),
(10, '04'),
(10, '06'),
(10, '08'),
(10, '09'),
(10, '10'),
(11, '01'),
(11, '02'),
(11, '03'),
(11, '06'),
(11, '08'),
(11, '09'),
(11, '10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grado_grupo`
--

CREATE TABLE IF NOT EXISTS `grado_grupo` (
  `grado_idgrado` int(11) NOT NULL,
  `grupo_idgrupo` int(11) NOT NULL,
  PRIMARY KEY (`grado_idgrado`,`grupo_idgrupo`),
  KEY `fk_grado_has_grupo_grupo1_idx` (`grupo_idgrupo`),
  KEY `fk_grado_has_grupo_grado1_idx` (`grado_idgrado`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `grado_grupo`
--

INSERT INTO `grado_grupo` (`grado_idgrado`, `grupo_idgrupo`) VALUES
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(5, 2),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

CREATE TABLE IF NOT EXISTS `grupo` (
  `idgrupo` int(11) NOT NULL,
  PRIMARY KEY (`idgrupo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`idgrupo`) VALUES
(1),
(2),
(3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

CREATE TABLE IF NOT EXISTS `horario` (
  `idhorario` varchar(20) NOT NULL,
  `jornada` varchar(20) NOT NULL,
  `dia` varchar(10) NOT NULL,
  `hora` varchar(30) NOT NULL,
  `grado` varchar(2) NOT NULL,
  `grupo` varchar(1) NOT NULL,
  `docente_cedula` int(20) NOT NULL,
  `idasignatura` varchar(10) NOT NULL,
  `entrada` time NOT NULL,
  PRIMARY KEY (`idhorario`),
  KEY `fk_horario_carga_academica1_idx` (`docente_cedula`,`idasignatura`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `horario`
--

INSERT INTO `horario` (`idhorario`, `jornada`, `dia`, `hora`, `grado`, `grupo`, `docente_cedula`, `idasignatura`, `entrada`) VALUES
('601', 'Mañana', 'Lunes', '6:30am-7:30am', '6', '2', 78106793, '10', '06:30:00'),
('6101', 'Mañana', 'Lunes', '6:30am-7:30am', '6', '1', 78106793, '01', '06:30:00'),
('6102', 'Mañana', 'Lunes', '7:30am-8:00am', '6', '1', 78106793, '01', '07:30:00'),
('6103', 'Mañana', 'Lunes', '8:00am-9:00am', '6', '1', 78106795, '08', '08:30:00'),
('6104', 'Mañana', 'Lunes', '8:00am-9:00am', '6', '1', 78106795, '01', '08:30:00'),
('6105', 'Mañana', 'Lunes', '9:30am-10:30am', '6', '1', 78106795, '01', '09:30:00'),
('6106', 'Mañana', 'Lunes', '10:30am-11:30am', '6', '1', 78106793, '10', '10:30:00'),
('6107', 'Mañana', 'Lunes', '11:30am-12:30pm', '6', '1', 78106793, '10', '11:30:00'),
('6201', 'Mañana', 'Lunes', '6:30am-7:30am', '6', '2', 78106793, '10', '06:30:00'),
('6202', 'Mañana', 'Lunes', '7:30am-8:00am', '6', '2', 78106796, '05', '07:30:00'),
('6203', 'Mañana', 'Lunes', '8:00am-9:00am', '6', '2', 78106796, '06', '08:30:00'),
('6204', 'Mañana', 'Lunes', '8:00am-9:00am', '6', '2', 78106795, '08', '08:30:00'),
('6205', 'Mañana', 'Lunes', '9:30am-10:30am', '6', '2', 78106795, '09', '09:30:00'),
('8201', 'Mañana', 'Lunes', '7:30am-8:00am', '8', '2', 78106793, '01', '07:30:00'),
('8202', 'Mañana', 'Lunes', '7:30am-8:00am', '8', '2', 78106795, '10', '07:30:00'),
('8203', 'Mañana', 'Lunes', '7:30am-8:00am', '8', '2', 78106795, '08', '07:30:00'),
('8204', 'Mañana', 'Lunes', '8:00am-9:00am', '8', '2', 78106795, '09', '08:30:00'),
('8205', 'Mañana', 'Lunes', '9:30am-10:30am', '8', '2', 78106795, '09', '09:30:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informe`
--

CREATE TABLE IF NOT EXISTS `informe` (
  `idinforme` int(11) NOT NULL AUTO_INCREMENT,
  `periodo` varchar(1) DEFAULT NULL,
  `año` varchar(8) DEFAULT NULL,
  `estudiante_ti` varchar(20) NOT NULL,
  PRIMARY KEY (`idinforme`),
  KEY `fk_informe_estudiante1_idx` (`estudiante_ti`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `informe`
--

INSERT INTO `informe` (`idinforme`, `periodo`, `año`, `estudiante_ti`) VALUES
(7, '1', '2016', '81927611'),
(8, '1', '2016', '91939131');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informe_logro`
--

CREATE TABLE IF NOT EXISTS `informe_logro` (
  `informe_idinforme` int(11) NOT NULL AUTO_INCREMENT,
  `logro_idlogro` varchar(20) NOT NULL,
  `nota` float DEFAULT NULL,
  `observacion` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`informe_idinforme`,`logro_idlogro`),
  KEY `fk_informe_has_logro_logro1_idx` (`logro_idlogro`),
  KEY `fk_informe_has_logro_informe1_idx` (`informe_idinforme`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `informe_logro`
--

INSERT INTO `informe_logro` (`informe_idinforme`, `logro_idlogro`, `nota`, `observacion`) VALUES
(7, 'H1-01', 3.4, 'no hay'),
(7, 'H1-02', 4.5, 'excelente'),
(7, 'Q1-01', 3, 'le falta'),
(8, 'H1-01', 2.5, 'le falto un poco'),
(8, 'H1-02', 0.3, 'no hizo nada en el examen'),
(8, 'Q1-01', 2.5, 'no sabe');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logro`
--

CREATE TABLE IF NOT EXISTS `logro` (
  `idlogro` varchar(20) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `periodo` varchar(1) NOT NULL,
  `grado` varchar(45) NOT NULL,
  `idasignatura` varchar(10) NOT NULL,
  PRIMARY KEY (`idlogro`),
  KEY `fk_logro_asignatura1_idx` (`idasignatura`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `logro`
--

INSERT INTO `logro` (`idlogro`, `nombre`, `periodo`, `grado`, `idasignatura`) VALUES
('B1-01', 'Comprenderá la estructura de la célula', '1', '6', '08'),
('H1-01', 'Entenderá lo que es una símil', '1', '8', '01'),
('H1-02', 'entiende el respeto', '1', '8', '01'),
('M1-01', 'Resolvera ejercicios por el teorema de pitágo', '1', '10', '06'),
('Q1-01', 'Definirá lo que es un alquino y alqueno', '1', '8', '09'),
('Q1-02', 'Manejara la tabla periodica', '1', '8', '09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE IF NOT EXISTS `mensajes` (
  `idmensajes` int(11) NOT NULL AUTO_INCREMENT,
  `mensaje` varchar(700) DEFAULT NULL,
  `emisor` varchar(45) DEFAULT NULL,
  `receptor` varchar(45) DEFAULT NULL,
  `leido` int(1) DEFAULT NULL,
  PRIMARY KEY (`idmensajes`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=759 ;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`idmensajes`, `mensaje`, `emisor`, `receptor`, `leido`) VALUES
(1, 'Hola profe melissa,  cómo está ?', '78106790', '1066524378', 1),
(2, 'Hola señora yaneth', '1066524378', '78106790', 1),
(3, 'Porfesora le escribo porque mi niño salió muy', '78106790', '1066524378', 1),
(4, 'Si señora, no comprendió el verbo TO BE', '1066524378', '78106790', 1),
(5, 'Profe y será que puede hacerle una recuperaci', '78106790', '1066524378', 1),
(6, 'Tnedriamos que ver, señora yaneth.. lo mas pr', '1066524378', '78106790', 1),
(7, 'Listo profe, me avisa cualquier cosa.', '78106790', '1066524378', 1),
(8, 'hola', '1066524378', '78106790', 1),
(9, 'te llegan los mensajes', '1066524378', '78106792', 1),
(10, 'HOLAA', '78106790', '1066524378', 1),
(11, 'jajaajja', '1066524378', '78106790', 1),
(12, 'bien', '1066524378', '78106790', 1),
(13, 'escribeme', '1066524378', '78106790', 1),
(14, 'siiME LLEGAN', '78106790', '1066524378', 1),
(15, 'sii', '78106790', '1066524378', 1),
(16, 'si ya veo', '1066524378', '78106790', 1),
(17, 'te estoy escribiendo', '78106790', '1066524378', 1),
(18, 'pero que tan rapido?', '1066524378', '78106790', 1),
(19, 'inmediatoo', '78106790', '1066524378', 1),
(20, 'ammm', '1066524378', '78106790', 1),
(21, 'perfecto', '1066524378', '78106790', 1),
(22, 'dile a katy que se conecte', '1066524378', '78106790', 1),
(23, ':/', '1066524378', '78106790', 1),
(24, 'sii', '78106790', '1066524378', 1),
(25, 'que ya', '78106790', '1066524378', 1),
(26, 'no se ha conectado', '1066524378', '78106790', 1),
(27, 'que se conencto como maria', '78106790', '1066524378', 1),
(28, 'no te sale?', '78106790', '1066524378', 1),
(29, 'aja chatea conmigo', '1066524378', '78106792', 1),
(30, 'Si', '78106792', '1066524378', 1),
(31, 'si a mi me salen las dos', '1066524378', '78106790', 1),
(32, 'a ti tambien?', '1066524378', '78106790', 1),
(33, 'bien', '1066524378', '78106792', 1),
(34, 'a mi solo tu', '78106790', '1066524378', 1),
(35, 'ps melissa', '78106790', '1066524378', 1),
(36, 'chatea con melisa', '1066524378', '78106792', 1),
(37, 'a ver', '1066524378', '78106792', 1),
(38, 'ya te escribio Katy?', '78106790', '1066524378', 1),
(39, 'si perose desconecto', '1066524378', '78106790', 1),
(40, 'osea no te sale maria?', '1066524378', '78106790', 1),
(41, 'melissa no me sale', '78106792', '1066524378', 1),
(42, 'no', '78106790', '1066524378', 1),
(43, 'ajam?', '1066524378', '78106792', 1),
(44, 'Es acudiente', '78106792', '1066524378', 1),
(45, 'pero MARIA, es acudinte, no?', '78106790', '1066524378', 1),
(46, 'y yo tambien', '78106792', '1066524378', 1),
(47, 'o docente tambien?', '78106790', '1066524378', 1),
(48, 'ammmes que las acudientes no se uedenhablar', '1066524378', '78106792', 1),
(49, 'no', '1066524378', '78106790', 1),
(50, 'cerraré entrare como otro docente', '78106792', '1066524378', 1),
(51, 'recuerda que los acudientes no pueden hablar', '1066524378', '78106790', 1),
(52, 'aja si', '78106790', '1066524378', 1),
(53, 'ya me sale ana', '78106790', '1066524378', 1),
(54, 'Hola', '78106795', '1066524378', 1),
(55, 'me saliouna ana', '78106790', '1066524378', 1),
(56, 'listo', '1066524378', '78106790', 1),
(57, 'Es otro docente', '78106795', '1066524378', 1),
(58, 'Hola', '78106795', '78106790', 0),
(59, 'hola', '78106790', '78106795', 1),
(60, 'Katy?', '78106790', '78106795', 1),
(61, 'listoya alli esta', '1066524378', '78106795', 1),
(62, 'Si.. soy otro docente', '78106795', '78106790', 0),
(63, 'Si yo', '78106795', '78106790', 0),
(64, ':D', '78106795', '78106790', 0),
(65, 'ya falta la notificacion', '1066524378', '78106795', 1),
(66, 'Faltan las caritas', '78106795', '78106790', 0),
(67, ':(', '78106795', '78106790', 0),
(68, 'jajajajajaa', '78106790', '78106795', 1),
(69, ':p', '78106790', '78106795', 1),
(70, 'ahora lo que tenemos que hacer es ir al coleg', '1066524378', '78106795', 1),
(71, 'ya estaba habalndo con katy por aqui', '78106790', '1066524378', 1),
(72, 'Ñeee', '78106795', '1066524378', 1),
(73, 'porue este lo monte aqui en mi casaesto no es', '1066524378', '78106795', 1),
(74, 'estas conectada es a mi pc', '1066524378', '78106795', 1),
(75, 'Pero es lento jose', '78106795', '1066524378', 1),
(76, 'mi pc esta como servidor', '1066524378', '78106795', 1),
(77, 'que te sale lento?', '1066524378', '78106795', 1),
(78, 'los mensajes?', '1066524378', '78106795', 1),
(79, 'Se demora para cargar las funciones del docen', '78106795', '1066524378', 1),
(80, 'No, el resto de cosas', '78106795', '1066524378', 1),
(81, 'aja', '1066524378', '78106795', 1),
(82, 'aja no es lo mismo local que en internet', '1066524378', '78106795', 1),
(83, 'Hola', '78106790', '78106793', 1),
(84, 'Hola', '78106790', '78106793', 1),
(85, 'Kat?', '78106790', '78106793', 1),
(86, 'si ya vine', '78106793', '78106795', 1),
(87, 'no', '78106793', '78106790', 0),
(88, 'soy jose', '78106793', '78106790', 0),
(89, 'ahh', '78106790', '78106793', 1),
(90, 'me habia desconectado', '78106793', '78106795', 1),
(91, 'Pues una vez ya lelva uno tiempo', '78106795', '78106793', 1),
(92, 'No veo los msje', '78106795', '78106793', 1),
(93, 'como asi?', '78106793', '78106795', 1),
(94, 'si deben aparecer todos', '78106793', '78106795', 1),
(95, 'ecepto cuando escribes como 80', '78106793', '78106795', 1),
(96, 'no se echa todo para debajo', '78106793', '78106795', 1),
(97, 'estas alli?', '78106793', '78106790', 0),
(98, 'esta muy lento lo otro?', '78106793', '78106790', 0),
(99, 'sii', '78106790', '78106793', 1),
(100, 'osea las otras funciones?', '78106793', '78106790', 0),
(101, 'no', '78106790', '78106793', 1),
(102, 'esta lento?', '78106793', '78106790', 0),
(103, 'esta bieen', '78106790', '78106793', 1),
(104, 'a katy disque le sale lento', '78106793', '78106790', 0),
(105, 'mmmm', '78106793', '78106790', 0),
(106, 'unmm', '78106790', '78106793', 1),
(107, 'Pues si', '78106795', '78106793', 1),
(108, 'Cuando entro por ejemplo.. se va cargando tod', '78106795', '78106793', 1),
(109, 'lentamente', '78106795', '78106793', 1),
(110, 'jajajaja ese es el efecto de scroll', '78106793', '78106795', 1),
(111, 'pero ese si tengoque corregirlo', '78106793', '78106795', 1),
(112, 'Ahmmm', '78106795', '78106793', 1),
(113, 'es un pequeño defecto', '78106793', '78106795', 1),
(114, 'Las imagenes ?', '78106795', '78106793', 1),
(115, 'todo ?', '78106795', '78106793', 1),
(116, 'que imagenes?', '78106793', '78106795', 1),
(117, 'Por ejemplo.. la imagen del login es asi', '78106795', '78106793', 1),
(118, 'es que?', '78106793', '78106795', 1),
(119, 'es asi com?', '78106793', '78106795', 1),
(120, 'Osea te hablo de las otras funciones, no del ', '78106795', '78106793', 1),
(121, 'hay que meterlas por un compresor', '78106793', '78106795', 1),
(122, 'porque estan pesadashay qe meterlas or un min', '78106793', '78106795', 1),
(123, 'Todo se carga lentamente.. como en barrido', '78106795', '78106793', 1),
(124, 'ajamya es tu conexion a internet', '78106793', '78106795', 1),
(125, 'Ahmmm', '78106795', '78106793', 1),
(126, 'a melisa segun le carga bien', '78106793', '78106795', 1),
(127, '¿?', '78106793', '78106790', 0),
(128, 'Bueno aquí se me atrasaron los mensajes', '78106795', '78106793', 1),
(129, 'Escribí y demoró como 3 segundos para mostrar', '78106795', '78106793', 1),
(130, 'como asi?', '78106793', '78106795', 1),
(131, 'loq eue scribí', '78106795', '78106793', 1),
(132, 'claro que yaneth', '78106790', '78106793', 1),
(133, 'no tiene logros', '78106790', '78106793', 1),
(134, 'ammm', '78106793', '78106795', 1),
(135, 'ps niguno de los 3 hijpos que tiene ella', '78106790', '78106793', 1),
(136, 'ammmyaya', '78106793', '78106790', 0),
(137, 'es por tu internet', '78106793', '78106795', 1),
(138, 'el mio esta rapido', '78106793', '78106795', 1),
(139, 'Ajá, y como va a funcionar por ejemplo el día', '78106795', '78106793', 1),
(140, 'ninguno de los 3 hijos de yaneth tiene logros', '78106790', '78106793', 1),
(141, 'Si no estoy mal.. el pc del servidor debe est', '78106795', '78106793', 1),
(142, 'aja la conexion de internet', '78106793', '78106795', 1),
(143, 'ninguno de los hijos de yanethtiene logros,', '78106790', '78106795', 1),
(144, 'siosea el mio', '78106793', '78106795', 1),
(145, 'jajajaj pero como no va a estar siempre encen', '78106793', '78106795', 1),
(146, 'miraaaaaa', '78106795', '78106793', 1),
(147, 'por eso te digo que lo montemos en el pc', '78106793', '78106795', 1),
(148, 'del colegio', '78106793', '78106795', 1),
(149, 'porque aja esto es mucha luz para mi', '78106793', '78106795', 1),
(150, 'que te sale lento?? todo, a cargar cualquier ', '78106790', '78106795', 1),
(151, 'bueno voy a apagar todo esto', '78106793', '78106795', 1),
(152, 'chao', '78106793', '78106795', 1),
(153, 'No se, creo que no ninguno', '78106795', '78106790', 0),
(154, 'ok', '78106795', '78106793', 1),
(155, 'despues miramos bien', '78106795', '78106793', 1),
(156, 'que hacemos', '78106795', '78106793', 1),
(157, 'listo', '78106793', '78106795', 1),
(158, 'mira les averigue un hosting', '78106793', '78106795', 1),
(159, 'el mes a 55.000', '78106793', '78106795', 1),
(160, 'jajjajajaj', '78106793', '78106790', 0),
(161, 'El mes ?', '78106795', '78106793', 1),
(162, 'si', '78106793', '78106795', 1),
(163, 'Como se llama ?', '78106795', '78106793', 1),
(164, 'no es un servidor dedicado', '78106793', '78106795', 1),
(165, 'es mas caro porque le puedes instalar lo que ', '78106793', '78106795', 1),
(166, 'otros hostings te limitan a instalar cosas', '78106793', '78106795', 1),
(167, 'Y para nuestro caso ?', '78106795', '78106793', 1),
(168, 'aja', '78106793', '78106795', 1),
(169, 'Nos limitaría otro mas económico ?', '78106795', '78106793', 1),
(170, 'pues si perocomo estan usando node, el hostin', '78106793', '78106795', 1),
(171, 'porque no es un servidor apache', '78106793', '78106795', 1),
(172, 'Si, yo se', '78106795', '78106793', 1),
(173, 'Pero en algunas partes.. decian que soportaba', '78106795', '78106793', 1),
(174, 'Iban variando los precios dependiendo la capa', '78106795', '78106793', 1),
(175, 'si, pero puede que no soporten todas las base', '78106793', '78106795', 1),
(176, 'Porque el dominio también hay que comprarlo :', '78106795', '78106793', 1),
(177, 'por ejemplo, nosotros estamos usando redis', '78106793', '78106795', 1),
(178, 'y no se si el hosting tenga plan para redissi', '78106793', '78106795', 1),
(179, 'Mmm', '78106795', '78106793', 1),
(180, 'hay hostings que no soportan ni mysql', '78106793', '78106795', 1),
(181, 'Bueno', '78106795', '78106793', 1),
(182, 'sino solo postgress', '78106793', '78106795', 1),
(183, 'Ajá y heroku ?', '78106795', '78106793', 1),
(184, 'A mi me recomendaron otro ahi', '78106795', '78106793', 1),
(185, 'Espera te digo el nombre, a ver si lo has esc', '78106795', '78106793', 1),
(186, 'si lo que pasa es que ellospiden tarjet a de ', '78106793', '78106795', 1),
(187, 'hay un pocogoogle web services, amazon web se', '78106793', '78106795', 1),
(188, 'digital ocean', '78106793', '78106795', 1),
(189, 'Aja.. melissa tiene', '78106795', '78106793', 1),
(190, 'Tarjeta', '78106795', '78106793', 1),
(191, 'amm vea entonces compremoslo en', '78106793', '78106795', 1),
(192, 'heroku', '78106793', '78106795', 1),
(193, 'Es que, toca comprar el dominio y ya serian c', '78106795', '78106793', 1),
(194, 'no', '78106793', '78106795', 1),
(195, 'heroku tiene un dominio gratis', '78106793', '78106795', 1),
(196, 'no te gusta este dominio que tengo yo?', '78106793', '78106795', 1),
(197, 'este que trngo es gratuito', '78106793', '78106795', 1),
(198, 'Pues ajá para prueba yo no le veo probelema', '78106795', '78106793', 1),
(199, 'ajambueno', '78106793', '78106795', 1),
(200, 'Depronto eso del puerto', '78106795', '78106793', 1),
(201, 'El que te decia se llama dizque openshift', '78106795', '78106793', 1),
(202, 'amm', '78106793', '78106795', 1),
(203, 'hola', '1066524378', '78106793', 1),
(204, 'como estas?', '1066524378', '78106793', 1),
(205, 'bien', '78106793', '1066524378', 1),
(206, 't', '78106793', '1066524378', 1),
(207, 'r', '78106793', '1066524378', 1),
(208, 't', '78106793', '1066524378', 1),
(209, 'r', '1066524378', '78106793', 1),
(210, 't', '1066524378', '78106793', 1),
(211, 'y', '1066524378', '78106793', 1),
(212, 'r', '1066524378', '78106793', 1),
(213, 'e', '1066524378', '78106793', 1),
(214, 'r', '1066524378', '78106793', 1),
(215, 'e', '1066524378', '78106793', 1),
(216, 'r', '1066524378', '78106793', 1),
(217, 'w', '1066524378', '78106793', 1),
(218, 'e', '1066524378', '78106793', 1),
(219, 'hola', '1066524378', '78106793', 1),
(220, '5', '1066524378', '78106793', 1),
(221, 'lkjl', '1066524378', '78106793', 1),
(222, 'kjlk', '1066524378', '78106793', 1),
(223, 'lkjlk', '1066524378', '78106793', 1),
(224, 'ñkñ', '1066524378', '78106793', 1),
(225, 'kjlk', '1066524378', '78106793', 1),
(226, 'lklk', '1066524378', '78106793', 1),
(227, 'mnl', '1066524378', '78106793', 1),
(228, 'lklkl', '1066524378', '78106793', 1),
(229, 'jlklk', '1066524378', '78106793', 1),
(230, 'ejejej', '1066524378', '78106793', 1),
(231, 'jejejjej', '78106793', '1066524378', 1),
(232, 'hola', '1066524378', '78106793', 1),
(233, 'como vas?', '1066524378', '78106793', 1),
(234, 'jjjeeej', '1066524378', '78106793', 1),
(235, 'hola', '78106793', '1066524378', 1),
(236, 'como vas?', '1066524378', '78106793', 1),
(237, 'hola', '1066524378', '78106793', 1),
(238, 'hola', '1066524378', '78106793', 1),
(239, 'como vas?', '1066524378', '78106793', 1),
(240, 'hola', '78106793', '1066524378', 1),
(241, 'como vas?', '78106793', '1066524378', 1),
(242, 'como estas?', '78106793', '1066524378', 1),
(243, 'hola', '78106793', '1066524378', 1),
(244, 'como vas?', '1066524378', '78106793', 1),
(245, 'hola', '78106793', '1066524378', 1),
(246, 'hola', '78106793', '1066524378', 1),
(247, 'hola', '1066524378', '78106793', 1),
(248, 'como vas', '78106793', '1066524378', 1),
(249, 'bien', '78106793', '1066524378', 1),
(250, 'hola', '1066524378', '78106793', 1),
(251, 'como vas?', '78106793', '1066524378', 1),
(252, 'hola', '1066524378', '78106793', 1),
(253, 'hola', '1066524378', '78106793', 1),
(254, 'hola', '78106793', '1066524378', 1),
(255, 'jejeje', '78106793', '1066524378', 1),
(256, 'como vas', '78106793', '1066524378', 1),
(257, 'bien y tu=?', '1066524378', '78106793', 1),
(258, 'muy bien', '1066524378', '78106793', 1),
(259, 'jeejejej sirviooo', '1066524378', '78106793', 1),
(260, 'siiii ya veo', '78106793', '1066524378', 1),
(261, 'jejejej', '78106793', '1066524378', 1),
(262, 'oyeee', '1066524378', '78106793', 1),
(263, 'mira que sirvio', '78106793', '1066524378', 1),
(264, 'jajaajja si', '1066524378', '78106793', 1),
(265, 'jajaja', '1066524378', '78106793', 1),
(266, 'hola', '1066524378', '78106793', 1),
(267, 'como estas?', '78106793', '1066524378', 1),
(268, 'jejeje, yo bien y tu?', '1066524378', '78106793', 1),
(269, 'como vas', '78106793', '1066524378', 1),
(270, 'bien y tu?', '1066524378', '78106793', 1),
(271, 'ammm me alegra', '78106793', '1066524378', 1),
(272, 'hola', '78106793', '1066524378', 1),
(273, 'como vas?', '1066524378', '78106793', 1),
(274, 'bien y tu?', '78106793', '1066524378', 1),
(275, 'ammmm , me alegra', '1066524378', '78106793', 1),
(276, ':D', '78106793', '1066524378', 1),
(277, 'hola', '78106793', '1066524378', 1),
(278, 'hols', '78106793', '1066524378', 1),
(279, 'como vas', '78106793', '1066524378', 1),
(280, 'bien y tu?', '78106793', '1066524378', 1),
(281, 'hola', '1066524378', '78106793', 1),
(282, 'como vas?', '1066524378', '78106793', 1),
(283, 'bien y tu?', '1066524378', '78106793', 1),
(284, 'bien, me alegra que estes bien', '78106793', '1066524378', 1),
(285, 'ammm que bueno', '1066524378', '78106793', 1),
(286, 'hola papi', '1066524378', '78106793', 1),
(287, 'como estas?', '1066524378', '78106793', 1),
(288, 'bien y tu', '78106793', '1066524378', 1),
(289, 'hola', '78106793', '1066524378', 1),
(290, 'hola', '78106793', '1066524378', 1),
(291, 'como vas?', '78106793', '1066524378', 1),
(292, 'jejejejej te sirve?', '78106793', '1066524378', 1),
(293, 'como vas?', '1066524378', '78106793', 1),
(294, 'hola profe jose, como esta?', '1066524378', '78106793', 1),
(295, 'hola', '78106793', '1066524378', 1),
(296, 'como vas?', '78106793', '1066524378', 1),
(297, 'hola meli como vas?', '78106793', '1066524378', 1),
(298, 'jejjej', '78106793', '1066524378', 1),
(299, 'jejejejeje', '78106793', '1066524378', 1),
(300, 'jejjeje', '78106793', '1066524378', 1),
(301, 'jejjeej', '78106793', '1066524378', 1),
(302, 'ejejje', '78106793', '1066524378', 1),
(303, 'ojo', '78106793', '1066524378', 1),
(304, 'jeejej', '78106793', '1066524378', 1),
(305, 'juee', '78106793', '1066524378', 1),
(306, 'hola', '78106793', '1066524378', 1),
(307, 'hola', '1066524378', '78106793', 1),
(308, 'hola', '1066524378', '78106793', 1),
(309, 'como vas jose?', '1066524378', '78106793', 1),
(310, 'como vas meli?', '78106793', '1066524378', 1),
(311, 'hola meli estas alli?', '1066524378', '78106793', 1),
(312, 'holaaa', '1066524378', '78106793', 1),
(313, 'meliii, holaaa', '1066524378', '78106793', 1),
(314, 'holaaa', '1066524378', '78106793', 1),
(315, 'hola meli', '78106793', '1066524378', 1),
(316, 'como estas?', '1066524378', '78106793', 1),
(317, 'hola meli como estas?', '1066524378', '78106793', 1),
(318, 'meliii', '1066524378', '78106793', 1),
(319, 'nesecito un fa tuyo', '1066524378', '78106793', 1),
(320, 'hola jose', '1066524378', '78106793', 1),
(321, 'como vas?', '1066524378', '78106793', 1),
(322, 'hola', '78106793', '1066524378', 1),
(323, 'jue', '78106793', '1066524378', 1),
(324, 'hola', '1066524378', '78106793', 1),
(325, 'como vas?', '1066524378', '78106793', 1),
(326, 'hola', '1066524378', '78106793', 1),
(327, 'como vas?', '1066524378', '78106793', 1),
(328, 'hola jose', '1066524378', '78106793', 1),
(329, 'hola', '1066524378', '78106793', 1),
(330, 'como vas?', '1066524378', '78106793', 1),
(331, 'bien o que', '1066524378', '78106793', 1),
(332, 'hola como vas', '1066524378', '78106793', 1),
(333, 'como te ha ido?', '1066524378', '78106793', 1),
(334, 'hola profe como esta?', '78106793', '1066524378', 1),
(335, 'hola seño', '78106793', '1066524378', 1),
(336, 'holaaa', '78106793', '1066524378', 1),
(337, 'holaa', '78106793', '1066524378', 1),
(338, 'que mas seño como le va?', '1066524378', '78106793', 1),
(339, 'bien o que profe', '1066524378', '78106793', 1),
(340, 'hola seño', '78106793', '1066524378', 1),
(341, 'como te va profe?', '1066524378', '78106793', 1),
(342, 'todo bien?', '1066524378', '78106793', 1),
(343, 'hola ana, como estas?', '78106793', '78106795', 1),
(344, 'Hola Jose', '78106795', '78106793', 1),
(345, 'jajajaja bueno te sirve bien?', '78106793', '78106795', 1),
(346, 'Si  :)', '78106795', '78106793', 1),
(347, 'bueno', '78106793', '78106795', 1),
(348, 'voy a conectar otro para que veas cuantas con', '78106793', '78106795', 1),
(349, 'Ok', '78106795', '78106793', 1),
(350, 'hola', '1066524378', '78106795', 1),
(351, 'jjajaj  mira', '78106793', '78106795', 1),
(352, 'debio aparecerte el dos', '1066524378', '78106795', 1),
(353, 'No, me salió lo mismo .. pero el nombre d eme', '78106795', '1066524378', 1),
(354, 'enviame mensajes a los dos a ver', '78106793', '78106795', 1),
(355, 'el 1', '78106795', '1066524378', 1),
(356, 'Bueno', '78106795', '78106793', 1),
(357, 'me sale un uno', '78106795', '1066524378', 1),
(358, 'que paso?', '78106793', '78106795', 1),
(359, 'mmmm, no salen los dos?', '1066524378', '78106795', 1),
(360, '?', '78106793', '78106795', 1),
(361, '?', '1066524378', '78106795', 1),
(362, 'A ti si te sale las dos conversaciones ?', '78106795', '78106793', 1),
(363, 'Noo', '78106795', '1066524378', 1),
(364, 'si', '78106793', '78106795', 1),
(365, 'oseaen el iconito no te salen los dos?', '1066524378', '78106795', 1),
(366, 'Sale un uno .. doy clic y sale el nombre de l', '78106795', '1066524378', 1),
(367, 'bueno mira', '1066524378', '78106795', 1),
(368, 'Osea en el icono msje debe salir un numero do', '78106795', '78106793', 1),
(369, 'voy a salir', '78106793', '78106795', 1),
(370, 'si si tienes dos conversaciones si', '78106793', '78106795', 1),
(371, 'Ahhm', '78106795', '78106793', 1),
(372, ':/ me sale un uno', '78106795', '78106793', 1),
(373, 'nicia sesion con otro a ver', '78106793', '78106795', 1),
(374, 'siempre', '78106795', '78106793', 1),
(375, 'y me escribes a mi desde los dos', '78106793', '78106795', 1),
(376, 'voy a colocarle uno donde aparesca que estas ', '78106793', '78106795', 1),
(377, 'se lo hago?', '78106793', '78106795', 1),
(378, 'espera', '78106795', '78106793', 1),
(379, 'vale', '78106793', '78106795', 1),
(380, 'Bueno', '78106795', '78106793', 1),
(381, 'escribeme de los dos', '78106793', '78106795', 1),
(382, 'Holaaa', '78106796', '78106793', 1),
(383, 'Yaaa', '78106795', '78106793', 1),
(384, 'te hable de sofia', '78106795', '78106793', 1),
(385, 'ajam', '78106793', '78106795', 1),
(386, 'si te salen ?', '78106796', '78106793', 1),
(387, 'no aparecen', '78106793', '78106795', 1),
(388, ':s', '78106795', '78106793', 1),
(389, 'buenoesperate y corrijo eso', '78106793', '78106795', 1),
(390, 'nada sale solo uno', '78106793', '78106796', 1),
(391, 'OK', '78106795', '78106793', 1),
(392, 'ya va dme 5 min', '78106793', '78106795', 1),
(393, 'Vale', '78106795', '78106793', 1),
(394, 'bien', '78106793', '78106795', 1),
(395, 'Holaa', '78106796', '78106793', 1),
(396, 'Holaaa', '78106795', '78106793', 1),
(397, 'mmmm', '78106793', '78106795', 1),
(398, 'Holaaa', '78106795', '78106793', 1),
(399, 'Holaa', '78106796', '78106793', 1),
(400, 'Hola', '78106795', '78106793', 1),
(401, 'Hola', '78106796', '78106793', 1),
(402, 'hello', '78106795', '78106793', 1),
(403, 'Holaaa', '78106796', '78106793', 1),
(404, 'Holaaa', '78106796', '78106793', 1),
(405, 'Si ya.. te estpy escribieno', '78106796', '78106793', 1),
(406, 'Si te estpy enviando varioss', '78106796', '78106793', 1),
(407, 'Holaaa', '78106795', '78106793', 1),
(408, 'Bueno este es de sofa', '78106796', '78106793', 1),
(409, 'Y este de ana', '78106795', '78106793', 1),
(410, 'pero solo me apaerece conectada ana', '78106793', '78106795', 1),
(411, 'sofia no me aparece conectada', '78106793', '78106795', 1),
(412, ':/', '78106793', '78106795', 1),
(413, 'Hola te escribo de sofia', '78106796', '78106793', 1),
(414, 'Hola te escribo de ana', '78106795', '78106793', 1),
(415, 'listo', '78106793', '78106795', 1),
(416, 'espera y corrigcreo que se que es el problema', '78106793', '78106795', 1),
(417, 'te llegaron los dos?', '78106795', '78106793', 1),
(418, 'siya va', '78106793', '78106795', 1),
(419, 'hola', '1066524378', '78106793', 1),
(420, 'Hola', '78106792', '78106793', 1),
(421, 'como vas jose?', '1066524378', '78106793', 1),
(422, 'hola ana soy jose moncaleno', '78106793', '78106795', 1),
(423, 'hol ana soy melisa', '1066524378', '78106795', 1),
(424, 'soy melisa', '1066524378', '78106795', 1),
(425, 'soy jose', '78106793', '78106795', 1),
(426, 'te sirvio?', '1066524378', '78106795', 1),
(427, 'hola meli', '78106793', '1066524378', 1),
(428, 'hola sofia', '78106793', '78106796', 1),
(429, 'hola sofia soy melisa', '1066524378', '78106796', 1),
(430, 'hola soy maria', '78106792', '78106796', 0),
(431, 'hola como estas?', '78106793', '1066524378', 1),
(432, 'bien y tu?', '1066524378', '78106793', 1),
(433, 'jwjjeejjeej', '78106793', '1066524378', 1),
(434, 'Hola', '78106796', '78106793', 1),
(435, 'Desde sofia a jose', '78106796', '78106793', 1),
(436, 'Hellooo te envio de nuevo, actualiza', '78106796', '78106793', 1),
(437, 'Hola desde sofiaaaaaaaaaaa', '78106796', '78106793', 1),
(438, 'Hola desde anaaa', '78106795', '78106793', 1),
(439, 'ajam', '78106793', '78106796', 1),
(440, 'creoque es conexion', '78106793', '78106795', 1),
(441, 'a internet porque cuando me llegan los mensaj', '78106793', '78106795', 1),
(442, 'mmmm', '78106795', '78106793', 1),
(443, 'mjum', '78106793', '78106795', 1),
(444, 'Aja entonces enviame de diferente tu', '78106795', '78106793', 1),
(445, 'ahora enviame desde sofia y ana a jose', '78106793', '78106795', 1),
(446, 'ya va', '78106793', '78106795', 1),
(447, 'envia tu primero', '78106793', '78106795', 1),
(448, 'Ok te envio desde ana', '78106795', '78106793', 1),
(449, 'ahora mismo', '78106795', '78106793', 1),
(450, 'Y ahora te envio desde sofia', '78106796', '78106793', 1),
(451, 'A jose los dos', '78106796', '78106793', 1),
(452, 'Te envio otro desde ana', '78106795', '78106793', 1),
(453, 'Te envio otro desde sofia', '78106796', '78106793', 1),
(454, 'Hellloooooo', '78106795', '78106793', 1),
(455, 'Helloo', '78106796', '78106793', 1),
(456, 'bien', '78106793', '78106795', 1),
(457, 'esta bien', '78106793', '78106795', 1),
(458, 'Bueno', '78106795', '78106793', 1),
(459, 'me aparecion en las 2', '78106793', '78106796', 1),
(460, 'Ok', '78106796', '78106793', 1),
(461, 'ahora', '78106793', '78106795', 1),
(462, 'Ahorita a mi tambirn', '78106796', '78106793', 1),
(463, 'ahora', '78106793', '78106796', 1),
(464, 'incluso me salian 3', '78106796', '78106793', 1),
(465, 'jajaajajahora?', '78106793', '78106796', 1),
(466, 'uno de maria', '78106796', '78106793', 1),
(467, 'ammmsi pero ahorita mismo?', '78106793', '78106796', 1),
(468, 'bueno miraestas alli?', '78106793', '78106796', 1),
(469, 'mañana le implemento lo delesta escribienod', '78106793', '78106796', 1),
(470, 'para que aparezca si esta escribiendo', '78106793', '78106796', 1),
(471, 'siii', '78106796', '78106793', 1),
(472, 'lisito', '78106793', '78106796', 1),
(473, 'mmm Bueno esta bien.', '78106796', '78106793', 1),
(474, 'ok', '78106796', '78106793', 1),
(475, 'mra a ver si sirve bien', '1066524378', '78106796', 1),
(476, 'listo', '78106793', '78106796', 1),
(477, 'Sii sale un dos', '78106796', '1066524378', 1),
(478, 'listo', '1066524378', '78106796', 1),
(479, 'Y me salen los nombres de las dos personas', '78106796', '1066524378', 1),
(480, 'ok', '78106796', '1066524378', 1),
(481, 'de seguro era mi conexion', '78106793', '78106796', 1),
(482, 'ok', '78106796', '78106793', 1),
(483, 'sino te salio antes?', '1066524378', '78106796', 1),
(484, 'Si', '78106796', '1066524378', 1),
(485, 'yo tuve problemas con mi conexion', '78106793', '78106796', 1),
(486, 'Antes tambien.. seguro a ti no por la conexio', '78106796', '1066524378', 1),
(487, 'ajam seguro', '78106796', '78106793', 1),
(488, 'ajam', '1066524378', '78106796', 1),
(489, 'hoy he tenido probemas con l conexion', '78106793', '78106796', 1),
(490, 'Bueno vale', '78106796', '1066524378', 1),
(491, 'listo', '1066524378', '78106796', 1),
(492, 'Cierro ?', '78106796', '1066524378', 1),
(493, 'jeejej ya se sabe quien escribe y quien no', '1066524378', '78106796', 1),
(494, 'si cierra las sesiones', '1066524378', '78106796', 1),
(495, 'Ajá ...', '78106796', '1066524378', 1),
(496, 'hola', '78106793', '1066524378', 1),
(497, 'jue', '1066524378', '78106793', 1),
(498, 'andala', '78106793', '1066524378', 1),
(499, 'jejeje', '78106793', '1066524378', 1),
(500, 'hola sofia , como estas?', '78106793', '78106796', 1),
(501, 'jajajaja se torcio esto', '78106796', '78106793', 1),
(502, 'aajjaajj si?. por que?', '78106793', '78106796', 1),
(503, 'hola', '78106796', '78106793', 1),
(504, 'como estas?', '78106796', '78106793', 1),
(505, 'bien y tu?', '78106796', '78106793', 1),
(506, 'jue', '78106796', '78106793', 1),
(507, 'como esta maria cuenteme', '78106793', '78106792', 1),
(508, 'que mas profe?', '78106792', '78106793', 1),
(509, 'bien, cuenteme y usted como estas?', '78106793', '78106792', 1),
(510, 'bien profe', '78106792', '78106793', 1),
(511, 'hola', '1066524378', '78106792', 1),
(512, 'hola', '78106793', '78106792', 1),
(513, 'hola', '1066524378', '78106792', 1),
(514, 'como esta profe?', '78106792', '1066524378', 1),
(515, 'bien maria y tu?', '1066524378', '78106792', 1),
(516, 'hola maria', '78106793', '78106792', 1),
(517, 'soy jose', '78106793', '78106792', 1),
(518, 'hola maria , soy melisa', '1066524378', '78106792', 1),
(519, 'hola melisa, como estas?', '78106792', '1066524378', 1),
(520, 'hola melisa, soy jose', '78106793', '1066524378', 1),
(521, 'hola profe jose, como esta?', '1066524378', '78106793', 1),
(522, 'Holaa no se.. que usuario tienss?', '78106795', '1066524378', 1),
(523, 'hola ana', '78106793', '78106795', 1),
(524, 'Hola', '78106795', '78106793', 1),
(525, 'jue', '78106793', '78106795', 1),
(526, 'Le cambiaste el tamaño al drop ?', '78106795', '78106793', 1),
(527, 'si quieresdesconectate', '78106793', '78106795', 1),
(528, 'nonoes que las embarrejajajajaj ahora lo arre', '78106793', '78106795', 1),
(529, 'mira', '78106793', '78106795', 1),
(530, 'miro', '78106795', '78106793', 1),
(531, 'desconectate y conectate para que veas que te', '78106793', '78106795', 1),
(532, 'ok', '78106795', '78106793', 1),
(533, 'los mensajes', '78106793', '78106795', 1),
(534, 'osea te aparece la notificacion', '78106793', '78106795', 1),
(535, 'jue', '78106793', '78106796', 1),
(536, 'estas alli?', '78106793', '78106796', 1),
(537, 'si miras bien, quien tiene que buscar al prof', '78106793', '78106796', 1),
(538, 'y dijimos que el iba a poder abrir la ventana', '78106793', '78106796', 1),
(539, 'el boton de asignatura', '78106793', '78106796', 1),
(540, 'recuerdas?', '78106793', '78106796', 1),
(541, 'Hola sii me salio un uno.. cuando entré', '78106795', '78106793', 1),
(542, 'jajaajaj bueno', '78106793', '78106795', 1),
(543, 'asi se pueden comunicar cuando no esten conec', '78106793', '78106795', 1),
(544, 'pero como hiciste para enviarme msje .. si no', '78106795', '78106793', 1),
(545, 'de los conectados', '78106795', '78106793', 1),
(546, 'voy a arreglar un defectico que hay', '78106793', '78106795', 1),
(547, 'no entiendo tu pregunta', '78106793', '78106795', 1),
(548, 'por eje, cierra mi chat.. yo me desconecto.. ', '78106795', '78106793', 1),
(549, 'aja eso era lo que estaba diciendote hacer un', '78106793', '78106795', 1),
(550, 'Ahmm', '78106795', '78106793', 1),
(551, 'y ya con eso', '78106793', '78106795', 1),
(552, 'ahora voy a colocarle', '78106793', '78106795', 1),
(553, 'algo que le diga', '78106793', '78106795', 1),
(554, 'escribiendo...', '78106793', '78106795', 1),
(555, 'Mmmm', '78106795', '78106793', 1),
(556, 'Ok', '78106795', '78106793', 1),
(557, 'vale', '78106793', '78106795', 1),
(558, 'ya me llego tu mensaje', '78106793', '78106795', 1),
(559, 'mira emmm', '78106793', '78106795', 1),
(560, 'miro', '78106795', '78106793', 1),
(561, 'jejjejejeje', '78106793', '78106795', 1),
(562, 'que', '78106793', '78106795', 1),
(563, 'te desconectes un momentico', '78106793', '78106795', 1),
(564, 'bien', '78106795', '78106793', 1),
(565, 'para implementar lo del escribiendo', '78106793', '78106795', 1),
(566, 'ok', '78106795', '78106793', 1),
(567, ';)', '78106793', '78106795', 1),
(568, 'hola', '78106793', '1066524378', 1),
(569, 'jejejejje', '78106793', '1066524378', 1),
(570, 'ljkxkjkjxjck', '1066524378', '78106793', 1),
(571, 'jejejejejeje', '78106793', '1066524378', 1),
(572, 'hola seño como le va?', '78106792', '1066524378', 1),
(573, 'jejjeje', '78106792', '1066524378', 1),
(574, 'bien maria y tu?', '1066524378', '78106792', 1),
(575, 'jejejeje estoy escribiendote', '1066524378', '78106792', 1),
(576, 'jajajajaj eso veo', '78106792', '1066524378', 1),
(577, 'jejje', '78106792', '1066524378', 1),
(578, 'ya esta escribiendo', '78106792', '1066524378', 1),
(579, 'jejejejeje', '1066524378', '78106792', 1),
(580, 'Holaaa .. estas como melissa ?', '78106790', '1066524378', 1),
(581, 'jajaj iraaa', '1066524378', '78106790', 1),
(582, 'ya te sirvio el escribiendo?', '1066524378', '78106790', 1),
(583, 'jejejeje', '1066524378', '78106792', 1),
(584, 'Siii me sale melissa escribiendo....', '78106790', '1066524378', 1),
(585, ':D', '78106790', '1066524378', 1),
(586, 'jajajajaj si', '1066524378', '78106790', 1),
(587, 'Mira, estoy como acudiente', '78106790', '1066524378', 1),
(588, 'ammm bien', '1066524378', '78106790', 1),
(589, 'Me sale un numero tres en la carita del niño', '78106790', '1066524378', 1),
(590, 'bien', '1066524378', '78106790', 1),
(591, 'ajam porque no has visto las notificaciones d', '1066524378', '78106790', 1),
(592, 'sabes como se quitan?', '1066524378', '78106790', 1),
(593, 'cuando le des click', '1066524378', '78106790', 1),
(594, 'encima del niño ?', '78106790', '1066524378', 1),
(595, 'nono', '1066524378', '78106790', 1),
(596, 'osea eso fue que se me descuadro', '1066524378', '78106790', 1),
(597, 'tengo que cuadrarlo con css', '1066524378', '78106790', 1),
(598, 'Ahhhmmm Ya', '78106790', '1066524378', 1),
(599, 'se corrió el num', '78106790', '1066524378', 1),
(600, 'jajajaja', '1066524378', '78106790', 1),
(601, 'si hay que cuadrar la cajitadel css', '1066524378', '78106790', 1),
(602, 'y no es por preocupartepero la verdad ya inte', '1066524378', '78106790', 1),
(603, 'bueno aca me esta funcionando bien lo del esc', '1066524378', '78106790', 1),
(604, 'jejeje', '78106792', '1066524378', 1),
(605, 'alli va como nuevo', '1066524378', '78106792', 1),
(606, 'Ñeda mira y si se cabia de puesto el icono de', '78106790', '1066524378', 1),
(607, 'se rueda entonces mas hacia la derecha ?', '78106790', '1066524378', 1),
(608, 'jjajajaja', '78106792', '1066524378', 1),
(609, 'jajajaj', '78106792', '1066524378', 1),
(610, 'jajajaja', '78106792', '1066524378', 1),
(611, 'jejejjej', '78106792', '1066524378', 1),
(612, 'pues', '1066524378', '78106790', 1),
(613, 'Osea se ubicaría el numero en los tres puntit', '78106790', '1066524378', 1),
(614, '?', '78106790', '1066524378', 1),
(615, 'si', '1066524378', '78106790', 1),
(616, 'dejame y lo arreglo despues', '1066524378', '78106790', 1),
(617, 'T_T', '1066524378', '78106790', 1),
(618, 'En los docentes sale bien.', '78106790', '1066524378', 1),
(619, 'Encima del msje', '78106790', '1066524378', 1),
(620, 'Bueno está bien.', '78106790', '1066524378', 1),
(621, 'si pero la culpa es el largo de los docentes', '1066524378', '78106790', 1),
(622, 'osea es porque el nombre es muy largo', '1066524378', '78106790', 1),
(623, 'solo por eso', '1066524378', '78106790', 1),
(624, 'ahmm', '78106790', '1066524378', 1),
(625, 'jejejeje', '78106792', '1066524378', 1),
(626, 'como vas?', '78106792', '1066524378', 1),
(627, 'yo voy bien', '78106792', '1066524378', 1),
(628, 'solo eso', '1066524378', '78106790', 1),
(629, 'es que materialize me esta dando problemas', '1066524378', '78106790', 1),
(630, 'con la hubicacion de ese icono', '1066524378', '78106790', 1),
(631, 'bueno ya lo que falta es montarlo al server, ', '1066524378', '78106790', 1),
(632, 'Ahhhhh', '78106790', '1066524378', 1),
(633, 'para que tu asesor lo vea', '1066524378', '78106790', 1),
(634, 'Bueno, está bien.', '78106790', '1066524378', 1),
(635, 'y pues', '1066524378', '78106790', 1),
(636, 'Mira', '78106790', '1066524378', 1),
(637, 'si puedes ayudarme con las validaciones que f', '1066524378', '78106790', 1),
(638, 'miro', '1066524378', '78106790', 1),
(639, 'Eso iba a decirte', '78106790', '1066524378', 1),
(640, 'que faltan seria perfecto', '1066524378', '78106790', 1),
(641, 'envíamelo.. porque el pidió que validaramos p', '78106790', '1066524378', 1),
(642, 'ammm', '1066524378', '78106790', 1),
(643, 'ammm bien', '1066524378', '78106790', 1),
(644, 'y si sabes como hacerlo?', '1066524378', '78106790', 1),
(645, 'yo aca en la sopacroe que si puedes hacerlo', '1066524378', '78106790', 1),
(646, 'pues tengo idea', '78106790', '1066524378', 1),
(647, 'ammm perfecto', '1066524378', '78106790', 1),
(648, 'ya te lo envio entonces', '1066524378', '78106790', 1),
(649, 'bueno.. enviamelo', '78106790', '1066524378', 1),
(650, 'listo dale', '1066524378', '78106790', 1),
(651, 'ammmmun defectoque', '1066524378', '78106790', 1),
(652, 'acabe de pillar', '1066524378', '78106790', 1),
(653, 'hay que ampliar el varchar del mensaje la tbl', '1066524378', '78106790', 1),
(654, 'tu lo tienes solo en 45', '1066524378', '78106790', 1),
(655, 'ampliaselo a 500', '1066524378', '78106790', 1),
(656, 'o 900', '1066524378', '78106790', 1),
(657, 'Ahhh.. bueno dale', '78106790', '1066524378', 1),
(658, 'No has modificado en nada la BD ?', '78106790', '1066524378', 1),
(659, 'nonaditaammmmsisi', '1066524378', '78106790', 1),
(660, 'miento', '1066524378', '78106790', 1),
(661, 'Bueno, yo intentaré hacer eso ahora.. lo del ', '78106790', '1066524378', 1),
(662, 'si', '1066524378', '78106790', 1),
(663, 'listo', '1066524378', '78106790', 1),
(664, 'que modificaste ?', '78106790', '1066524378', 1),
(665, 'igual si no hay problemas', '1066524378', '78106790', 1),
(666, 'el server se monta en 5 min', '1066524378', '78106790', 1),
(667, 'en el campo mensajes', '1066524378', '78106790', 1),
(668, 'mejor te mando el .sql', '1066524378', '78106790', 1),
(669, 'que yo tengo para que no tengas problemas', '1066524378', '78106790', 1),
(670, 'bueno.. pasamelo', '78106790', '1066524378', 1),
(671, 'con el proyecto', '78106790', '1066524378', 1),
(672, 'las dos cosas', '78106790', '1066524378', 1),
(673, 'listo', '1066524378', '78106790', 1),
(674, 'ya le modifique el tamaño del mensaje , mira que ya deja escribir cosas mas largas, jejejejejeejejej', '1066524378', '78106790', 1),
(675, 'listo', '78106790', '1066524378', 1),
(676, 'ese mensaje que te acabe de enviar tiene mas de 45 caracteres y envio perfectamente...jejejeejejej. bueno ya te mando eso', '1066524378', '78106790', 1),
(677, 'no has detectado ninguna anomalia', '1066524378', '78106790', 1),
(678, '¿?', '1066524378', '78106790', 1),
(679, '?', '1066524378', '78106790', 1),
(680, 'el scroll', '78106790', '1066524378', 1),
(681, 'Y ajá que no se quita el número sino cuando le doy clic', '78106790', '1066524378', 1),
(682, 'ammmm perotu estas como acudiente', '1066524378', '78106790', 1),
(683, 'eso ya lo corregi', '1066524378', '78106790', 1),
(684, 'metete como docente para que veas que el scroll ya no molesta', '1066524378', '78106790', 1),
(685, 'no , como docente', '1066524378', '78106790', 1),
(686, 'ah', '78106790', '1066524378', 0),
(687, 'ya me conecte como jose', '78106793', '78106795', 1),
(688, 'si ves', '78106793', '78106795', 1),
(689, 'es nada mas corregir eso y ya', '78106793', '78106795', 1),
(690, 'Aja.', '78106795', '78106793', 1),
(691, 'bueno', '78106793', '78106795', 1),
(692, 'Aquí si.. se va rodando', '78106795', '78106793', 1),
(693, 'ya voy a tumbar el server', '78106793', '78106795', 1),
(694, 'Ok pues.. enviame a face', '78106795', '78106793', 1),
(695, 'listoya te lo envio', '78106793', '78106795', 1),
(696, 'aja', '78106793', '78106795', 1),
(697, 'ñerda esto se cago', '78106793', '78106795', 1),
(698, 'no se que paso', '78106793', '78106795', 1),
(699, 'jejejeje no mentira', '78106793', '78106795', 1),
(700, 'jejeejeej jueeee', '78106793', '78106795', 1),
(701, 'jhkjkjh', '78106793', '78106795', 1),
(702, 'lkjlklkjlklkjkkljlk', '78106795', '78106793', 1),
(703, 'hola maria como estas?', '78106793', '78106792', 1),
(704, 'como esta profe?', '78106792', '78106793', 1),
(705, 'bien profe y usted', '78106793', '78106792', 1),
(706, 'kjlkjlk', '78106792', '78106793', 1),
(707, 'kjlkjn', '78106793', '78106792', 1),
(708, 'jjlkjlkjllkjl', '78106792', '78106793', 1),
(709, 'ejejeje', '78106792', '78106793', 1),
(710, 'holaaa como vas?', '78106792', '78106793', 1),
(711, 'jejejejejej', '78106792', '78106793', 1),
(712, 'llllllklklkjlkjk', '78106792', '78106793', 1),
(713, 'kmkmlkkmlk', '78106792', '78106793', 1),
(714, 'hjjhlllllklklklkokmkpokpopokpokpo', '78106793', '78106792', 1),
(715, 'lklkkkl', '78106792', '78106793', 1),
(716, 'lkñlkklkk', '78106793', '78106792', 1),
(717, 'kkjkjkjjk', '78106792', '78106793', 1),
(718, 'kkjkjk', '78106793', '78106792', 1),
(719, 'kkkkklkl', '78106792', '78106793', 1),
(720, 'llllklk', '78106793', '78106792', 1),
(721, 'hola', '78106792', '78106793', 1),
(722, 'llkkk', '78106793', '78106792', 1),
(723, 'klklklk', '78106792', '78106793', 1),
(724, 'kklkdddddddd', '78106793', '78106792', 1),
(725, 'klkklkvvddd', '78106792', '78106793', 1),
(726, 'dd', '78106793', '78106792', 1),
(727, 'fff', '78106792', '78106793', 1),
(728, 'gg', '78106792', '78106793', 1),
(729, 'jueee', '78106792', '78106793', 1),
(730, 'veaa', '78106792', '78106793', 1),
(731, 'ggggf', '78106793', '78106792', 1),
(732, 'ddddff', '78106792', '78106793', 1),
(733, 'dsd', '78106792', '78106793', 1),
(734, 'ddd', '78106792', '78106793', 1),
(735, 'dd', '78106793', '78106792', 1),
(736, 'ddd', '78106792', '78106793', 1),
(737, 'dddd', '78106793', '78106792', 1),
(738, 'jejejej', '78106793', '78106792', 1),
(739, 'hola', '78106792', '78106793', 1),
(740, 'hhff', '78106793', '78106792', 1),
(741, 'jueeee profeee', '78106792', '78106793', 1),
(742, 'qqq', '78106792', '78106793', 1),
(743, 'ddd', '78106793', '78106792', 1),
(744, 'fddd', '78106793', '78106792', 1),
(745, 'ffeedded', '78106792', '78106793', 1),
(746, 'jueeeee', '78106793', '78106792', 1),
(747, 'hola', '78106793', '78106792', 1),
(748, 'como vas?', '78106793', '78106792', 1),
(749, 'bien y tu?', '78106793', '78106792', 1),
(750, 'hola', '78106792', '78106793', 1),
(751, 'hola', '78106793', '78106792', 1),
(752, 'como vas ?', '78106793', '78106792', 1),
(753, 'hola', '78106793', '78106792', 1),
(754, 'kkkk', '78106793', '78106792', 1),
(755, 'kklllllllllllll', '78106792', '78106793', 1),
(756, 'lljjj', '78106793', '78106792', 1),
(757, 'kkkkkkk', '78106792', '78106793', 1),
(758, 'kkkkkkkkk', '78106793', '78106792', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `cedula` int(20) NOT NULL,
  `nombre1` varchar(25) NOT NULL,
  `nombre2` varchar(25) DEFAULT NULL,
  `apellido1` varchar(25) NOT NULL,
  `apellido2` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `email` varchar(25) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `direccion` varchar(45) NOT NULL,
  `sexo` varchar(1) NOT NULL,
  `rol` int(1) NOT NULL,
  `estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`cedula`, `nombre1`, `nombre2`, `apellido1`, `apellido2`, `password`, `email`, `telefono`, `direccion`, `sexo`, `rol`, `estado`) VALUES
(78106790, 'Yaneth', 'Elena', 'Hoyos', 'Simanca', '123456', 'yane@hotmail.com', '236193102', 'Ayapel', 'F', 3, 'offline'),
(78106791, 'Carlos', 'Emiro', 'Perez', 'Arenilla', '123456', 'carlor@correo.com', '3107418248', 'Ayapel TV6', 'M', 2, 'offline'),
(78106792, 'Maria', 'Edith', 'Perez', 'Arenilla', '123456', 'mari@corre.com', '172811010', 'Ayapel', 'F', 3, 'offline'),
(78106793, 'Jose', 'Ernesto', 'Moncaleano', 'Suárez', '123456', 'jose@hotmail.com', '3107897654', 'Ayapel', 'M', 2, 'offline'),
(78106795, 'Ana', 'María', 'Mendez', 'Galindo', '123456', 'anita@hotmail.com', '35131311', 'Ayapel', 'F', 2, 'offline'),
(78106796, 'Sofia', 'Andrea', 'Perez', 'Mercado', '123456', 'sofi@hotmail.com', '4526181', 'Ayapel', 'F', 2, 'offline'),
(1066524378, 'Melissa', 'Andrea', 'Martínez', 'Durango', '123456', 'meli@hotmail.com', '3045678927', 'B.La floresta', 'F', 2, 'offline'),
(1066524379, 'Katy', 'Jhoanna', 'Pérez', 'Mestra', '123456', 'kapeme@hotmail.es', '3017904089', 'B.La floresta cll 38 cr 15B', 'F', 1, 'offline');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
