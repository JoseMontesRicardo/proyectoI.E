-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: db_colegio
-- ------------------------------------------------------
-- Server version	5.5.24-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acudiente`
--

DROP TABLE IF EXISTS `acudiente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `acudiente` (
  `usuario_cedula` int(20) NOT NULL,
  PRIMARY KEY (`usuario_cedula`),
  KEY `fk_acudiente_usuario1_idx` (`usuario_cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acudiente`
--

LOCK TABLES `acudiente` WRITE;
/*!40000 ALTER TABLE `acudiente` DISABLE KEYS */;
INSERT INTO `acudiente` VALUES (2786715),(6621755),(15047539),(25805443),(25807930),(25808562),(25808741),(30575853),(33083123),(50869268),(50897415),(50964921),(50992865),(50995166),(50995244),(78108539),(78110962),(78113647),(78734152),(78744525),(92499659),(92554308),(98552719);
/*!40000 ALTER TABLE `acudiente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `area` (
  `codigo` varchar(10) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES ('01','Matematicas'),('02','Ciencias Políticas'),('03','Ciencias Naturales y Educación Ambiental'),('04','Humanidades'),('05','Ética y Valores'),('06','Educación Artística'),('07','Filosofía'),('08','Educación física, recreación y deportes'),('09','Tecnología e informática'),('10','Educación religiosa'),('11','Física');
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asignatura`
--

DROP TABLE IF EXISTS `asignatura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asignatura` (
  `idasignatura` varchar(10) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `area_codigo` varchar(10) NOT NULL,
  PRIMARY KEY (`idasignatura`),
  KEY `fk_asignatura_area1_idx` (`area_codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignatura`
--

LOCK TABLES `asignatura` WRITE;
/*!40000 ALTER TABLE `asignatura` DISABLE KEYS */;
INSERT INTO `asignatura` VALUES ('01','Matemáticas','01'),('02','Geometría','01'),('03','Trigonometria','01'),('04','Álgebra','01'),('05','Sociales','02'),('06','Economía','02'),('07','Ciencias Naturales','03'),('08','Química','03'),('09','Castellano','04'),('10','Ingles','04'),('11','Ética','05'),('12','Arte','06'),('13','Filosofía','07'),('14','Educación Física','08'),('15','Tecnología','09'),('16','Religión','10'),('17','Física','11');
/*!40000 ALTER TABLE `asignatura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carga_academica`
--

DROP TABLE IF EXISTS `carga_academica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carga_academica` (
  `docente_cedula` int(20) NOT NULL,
  `idasignatura` varchar(10) NOT NULL,
  PRIMARY KEY (`docente_cedula`,`idasignatura`),
  KEY `fk_docente_has_asignatura_asignatura1_idx` (`idasignatura`),
  KEY `fk_docente_has_asignatura_docente1_idx` (`docente_cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carga_academica`
--

LOCK TABLES `carga_academica` WRITE;
/*!40000 ALTER TABLE `carga_academica` DISABLE KEYS */;
INSERT INTO `carga_academica` VALUES (6621755,'01'),(6621755,'15'),(15047539,'14'),(25807930,'05'),(25807930,'06'),(25808741,'16'),(30575853,'17'),(33083123,'07'),(50897415,'06'),(50897415,'13'),(50992865,'10'),(50992865,'14'),(78110962,'08'),(78734152,'03'),(78734152,'04'),(92499659,'09'),(92499659,'11'),(92499659,'12'),(92554308,'15');
/*!40000 ALTER TABLE `carga_academica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docente`
--

DROP TABLE IF EXISTS `docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `docente` (
  `usuario_cedula` int(20) NOT NULL,
  PRIMARY KEY (`usuario_cedula`),
  KEY `fk_docente_usuario1_idx` (`usuario_cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docente`
--

LOCK TABLES `docente` WRITE;
/*!40000 ALTER TABLE `docente` DISABLE KEYS */;
INSERT INTO `docente` VALUES (6621755),(15047539),(25807930),(25808562),(25808741),(30575853),(33083123),(50897415),(50992865),(50995166),(50995244),(78110962),(78113647),(78734152),(92499659),(92554308),(98552719);
/*!40000 ALTER TABLE `docente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estudiante` (
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
INSERT INTO `estudiante` VALUES ('1711200099','Luis','Fabio','Jimenez','Diaz','M',10,'2000-11-17T05:00:00.000Z','Calle37 #19 El bosque',78108539,1),('2102200499','Fabio','Luis','Jimenez','Diaz','M',5,'2004-02-21T05:00:00.000Z','Calle37 #19 El bosque',78108539,1);
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grado`
--

DROP TABLE IF EXISTS `grado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grado` (
  `idgrado` int(11) NOT NULL,
  PRIMARY KEY (`idgrado`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grado`
--

LOCK TABLES `grado` WRITE;
/*!40000 ALTER TABLE `grado` DISABLE KEYS */;
INSERT INTO `grado` VALUES (5),(10);
/*!40000 ALTER TABLE `grado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grado_asignatura`
--

DROP TABLE IF EXISTS `grado_asignatura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grado_asignatura` (
  `grado_idgrado` int(11) NOT NULL,
  `asignatura_idasignatura` varchar(10) NOT NULL,
  PRIMARY KEY (`grado_idgrado`,`asignatura_idasignatura`),
  KEY `fk_grado_has_asignatura_asignatura1_idx` (`asignatura_idasignatura`),
  KEY `fk_grado_has_asignatura_grado1_idx` (`grado_idgrado`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grado_asignatura`
--

LOCK TABLES `grado_asignatura` WRITE;
/*!40000 ALTER TABLE `grado_asignatura` DISABLE KEYS */;
INSERT INTO `grado_asignatura` VALUES (5,'01'),(5,'02'),(5,'05'),(5,'07'),(5,'09'),(5,'10'),(5,'11'),(5,'12'),(5,'13'),(5,'14'),(5,'15'),(10,'01'),(10,'03'),(10,'05'),(10,'06'),(10,'07'),(10,'08'),(10,'10'),(10,'11'),(10,'12'),(10,'14'),(10,'15'),(10,'17');
/*!40000 ALTER TABLE `grado_asignatura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grado_grupo`
--

DROP TABLE IF EXISTS `grado_grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grado_grupo` (
  `grado_idgrado` int(11) NOT NULL,
  `grupo_idgrupo` int(11) NOT NULL,
  PRIMARY KEY (`grado_idgrado`,`grupo_idgrupo`),
  KEY `fk_grado_has_grupo_grupo1_idx` (`grupo_idgrupo`),
  KEY `fk_grado_has_grupo_grado1_idx` (`grado_idgrado`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grado_grupo`
--

LOCK TABLES `grado_grupo` WRITE;
/*!40000 ALTER TABLE `grado_grupo` DISABLE KEYS */;
INSERT INTO `grado_grupo` VALUES (5,1),(10,1),(5,2),(10,2);
/*!40000 ALTER TABLE `grado_grupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupo`
--

DROP TABLE IF EXISTS `grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grupo` (
  `idgrupo` int(11) NOT NULL,
  PRIMARY KEY (`idgrupo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupo`
--

LOCK TABLES `grupo` WRITE;
/*!40000 ALTER TABLE `grupo` DISABLE KEYS */;
INSERT INTO `grupo` VALUES (1);
/*!40000 ALTER TABLE `grupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horario`
--

DROP TABLE IF EXISTS `horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `horario` (
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario`
--

LOCK TABLES `horario` WRITE;
/*!40000 ALTER TABLE `horario` DISABLE KEYS */;
INSERT INTO `horario` VALUES ('01','Mañana','Lunes','6:30am-7:30am','5','1',92499659,'09','06:30:00'),('02','Mañana','Lunes','7:30am-8:00am','5','1',92499659,'12','07:30:00'),('03','Mañana','Lunes','8:00am-9:00am','5','1',92499659,'05','08:30:00'),('04','Mañana','Lunes','9:30am-10:30am','5','1',92499659,'11','09:30:00'),('05','Mañana','Lunes','10:30am-11:30am','5','1',6621755,'01','10:30:00'),('06','Mañana','Lunes','11:30am-12:30pm','5','1',92554308,'15','11:30:00'),('07','Mañana','Martes','6:30am-7:30am','5','1',92554308,'15','06:30:00'),('08','Mañana','Martes','7:30am-8:00am','5','1',15047539,'14','07:30:00'),('09','Mañana','Martes','8:00am-9:00am','5','1',15047539,'14','08:30:00'),('10','Mañana','Martes','9:30am-10:30am','5','1',6621755,'01','09:30:00'),('11','Mañana','Martes','10:30am-11:30am','5','1',6621755,'01','10:30:00'),('12','Mañana','Martes','11:30am-12:30pm','5','1',50992865,'10','11:30:00'),('13','Mañana','Miercoles','6:30am-7:30am','5','1',50992865,'10','06:30:00'),('14','Mañana','Miercoles','7:30am-8:00am','5','1',6621755,'01','07:30:00'),('15','Mañana','Miercoles','8:00am-9:00am','5','1',33083123,'07','08:30:00'),('16','Mañana','Miercoles','9:30am-10:30am','5','1',33083123,'07','09:30:00'),('17','Mañana','Miercoles','10:30am-11:30am','5','1',92554308,'05','10:30:00'),('18','Mañana','Miercoles','11:30am-12:30pm','5','1',50995244,'09','11:30:00'),('19','Mañana','Jueves','6:30am-7:30am','5','1',50995244,'09','06:30:00'),('20','Mañana','Jueves','7:30am-8:00am','5','1',50995244,'09','07:30:00'),('21','Mañana','Jueves','8:00am-9:00am','5','1',6621755,'01','08:30:00'),('22','Mañana','Jueves','9:30am-10:30am','5','1',25807930,'05','09:30:00'),('23','Mañana','Jueves','10:30am-11:30am','5','1',33083123,'07','10:30:00'),('24','Mañana','Jueves','11:30am-12:30pm','5','1',6621755,'02','11:30:00'),('25','Mañana','Viernes','6:30am-7:30am','5','1',50992865,'10','06:30:00'),('26','Mañana','Viernes','7:30am-8:00am','5','1',92499659,'09','07:30:00'),('27','Mañana','Viernes','8:00am-9:00am','5','1',92499659,'09','08:30:00'),('28','Mañana','Viernes','9:30am-10:30am','5','1',6621755,'01','09:30:00'),('29','Mañana','Viernes','10:30am-11:30am','5','1',25807930,'05','10:30:00'),('30','Mañana','Viernes','11:30am-12:30pm','5','1',50897415,'13','11:30:00'),('31','Mañana','Lunes','6:30am-7:30am','10','1',50897415,'13','06:30:00'),('32','Mañana','Lunes','7:30am-8:00am','10','1',15047539,'14','07:30:00'),('33','Mañana','Lunes','8:00am-9:00am','10','1',15047539,'14','08:30:00'),('34','Mañana','Lunes','9:30am-10:30am','10','1',30575853,'17','09:30:00'),('35','Mañana','Lunes','10:30am-11:30am','10','1',30575853,'17','10:30:00'),('36','Mañana','Lunes','11:30am-12:30pm','10','1',78113647,'09','11:30:00'),('37','Mañana','Martes','6:30am-7:30am','10','1',78113647,'09','06:30:00'),('38','Mañana','Martes','7:30am-8:00am','10','1',78113647,'09','07:30:00'),('39','Mañana','Martes','8:00am-9:00am','10','1',92499659,'11','08:30:00'),('40','Mañana','Martes','9:30am-10:30am','10','1',92554308,'15','09:30:00'),('41','Mañana','Martes','10:30am-11:30am','10','1',50897415,'06','10:30:00'),('42','Mañana','Martes','11:30am-12:30pm','10','1',50897415,'06','11:30:00'),('49','Mañana','Miercoles','6:30am-7:30am','10','1',78734152,'03','06:30:00'),('50','Mañana','Miercoles','7:30am-8:00am','10','1',78734152,'03','07:30:00'),('51','Mañana','Miercoles','8:00am-9:00am','10','1',78110962,'08','08:30:00'),('52','Mañana','Miercoles','9:30am-10:30am','10','1',78110962,'08','09:30:00'),('53','Mañana','Miercoles','10:30am-11:30am','10','1',78113647,'09','10:30:00'),('54','Mañana','Miercoles','11:30am-12:30pm','10','1',92554308,'15','11:30:00'),('55','Mañana','Jueves','6:30am-7:30am','10','1',92554308,'15','06:30:00'),('56','Mañana','Jueves','7:30am-8:00am','10','1',78734152,'03','07:30:00'),('57','Mañana','Jueves','8:00am-9:00am','10','1',78110962,'07','08:30:00'),('58','Mañana','Jueves','9:30am-10:30am','10','1',78734152,'17','09:30:00'),('59','Mañana','Jueves','10:30am-11:30am','10','1',78734152,'17','10:30:00'),('60','Mañana','Jueves','11:30am-12:30pm','10','1',78110962,'07','11:30:00'),('61','Mañana','Viernes','6:30am-7:30am','10','1',78110962,'07','06:30:00'),('62','Mañana','Viernes','7:30am-8:00am','10','1',78110962,'07','07:30:00'),('63','Mañana','Viernes','8:00am-9:00am','10','1',78113647,'09','08:30:00'),('64','Mañana','Viernes','9:30am-10:30am','10','1',50897415,'05','09:30:00'),('65','Mañana','Viernes','10:30am-11:30am','10','1',50897415,'05','10:30:00'),('66','Mañana','Viernes','11:30am-12:30pm','10','1',92499659,'12','11:30:00');
/*!40000 ALTER TABLE `horario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `informe`
--

DROP TABLE IF EXISTS `informe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `informe` (
  `idinforme` int(11) NOT NULL AUTO_INCREMENT,
  `periodo` varchar(1) DEFAULT NULL,
  `año` varchar(8) DEFAULT NULL,
  `estudiante_ti` varchar(20) NOT NULL,
  PRIMARY KEY (`idinforme`),
  KEY `fk_informe_estudiante1_idx` (`estudiante_ti`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informe`
--

LOCK TABLES `informe` WRITE;
/*!40000 ALTER TABLE `informe` DISABLE KEYS */;
INSERT INTO `informe` VALUES (9,'4','2016','2102200499'),(10,'1','2016','2102200499'),(11,'1','2016','1711200099'),(12,'2','2016','1711200099'),(13,'2','2016','2102200499');
/*!40000 ALTER TABLE `informe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `informe_logro`
--

DROP TABLE IF EXISTS `informe_logro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `informe_logro` (
  `informe_idinforme` int(11) NOT NULL AUTO_INCREMENT,
  `logro_idlogro` varchar(20) NOT NULL,
  `nota` float DEFAULT NULL,
  `observacion` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`informe_idinforme`,`logro_idlogro`),
  KEY `fk_informe_has_logro_logro1_idx` (`logro_idlogro`),
  KEY `fk_informe_has_logro_informe1_idx` (`informe_idinforme`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informe_logro`
--

LOCK TABLES `informe_logro` WRITE;
/*!40000 ALTER TABLE `informe_logro` DISABLE KEYS */;
INSERT INTO `informe_logro` VALUES (10,'137',4.8,''),(10,'139',4.7,''),(10,'140',4.9,''),(10,'147',4.9,''),(10,'148',4.6,'Es muy creativo'),(10,'65',4.5,''),(10,'66',4.8,''),(10,'67',4.9,''),(10,'68',3.5,'Debe esforzarse mas, leyendo mas textos y comprenderlos'),(11,'129',4.8,''),(11,'130',4.7,''),(11,'155',4.6,''),(11,'156',4.8,''),(12,'157',4.5,''),(12,'158',4.4,''),(13,'69',4.6,''),(13,'70',4.8,''),(13,'71',4.5,''),(13,'72',4.9,'');
/*!40000 ALTER TABLE `informe_logro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logro`
--

DROP TABLE IF EXISTS `logro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logro` (
  `idlogro` varchar(20) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `periodo` varchar(1) NOT NULL,
  `grado` varchar(45) NOT NULL,
  `idasignatura` varchar(10) NOT NULL,
  PRIMARY KEY (`idlogro`),
  KEY `fk_logro_asignatura1_idx` (`idasignatura`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logro`
--

LOCK TABLES `logro` WRITE;
/*!40000 ALTER TABLE `logro` DISABLE KEYS */;
INSERT INTO `logro` VALUES ('01','Reconoce los números de 9 cifras, su escritura, lectura, valor posicional y propiedades.','1','5','01'),('02','Determina conjuntos de acuerdo a sus características.','1','5','01'),('03','Identifica los elementos y subconjuntos de un conjunto.','1','5','01'),('04','Usa la notación adecuada para establecer relaciones entre elementos y conjuntos.','1','5','01'),('05','Halla la unión, la intersección y la diferencia entre conjuntos y los representa en diagramas de Venn.','2','5','01'),('06','Interpreta y resuelve problemas de relación entre conjuntos.','2','5','01'),('07','Sumar y restar números naturales con fluidez','2','5','01'),('08','Utilizar estrategias, habilidades y conocimientos adquiridos previamente para resolver un problema dado.','2','5','01'),('09','Hacer conexiones entre diferentes conceptos con el fin de resolver un problema.','3','5','01'),('10','Aplicar correctamente los criterios de divisibilidad.','3','5','01'),('100','Descripción del movimiento de los cuerpos que posee movimiento uniforme y/o movimiento uniforme acelerado.','2','10','17'),('101','Descripción y comprensión del movimiento de caída libre y del movimiento circular uniforme.','3','10','17'),('102','Descripción, comprensión  y aplicación de las leyes de Newton en situaciones de la vida cotidiana.','3','10','17'),('103','Comprensión y utilización de los conceptos de trabajo, potencia y energía en su vida cotidiana','4','10','17'),('104','Manejo adecuado de los instrumentos y equipos del laboratorio, así como la realización y entrega de los informes de laboratorio.','4','10','17'),('105','Reconoce la recreación como un espacio de sano esparcimiento y utilización del tiempo libre pruebas al campo libre a pequeños grupos.','1','10','14'),('106','Desarrolla la creatividad, la ayuda mutua, la participación e integración a través de las actividades recreativas.','1','10','14'),('107','Analiza y construye proyectos a fin utilización del tiempo libre.','2','10','14'),('108','Analiza y construye proyectos a fin de mejorara la convivencia en la comunidad educativa en proyectos obligatorios de los estudiantes.','2','10','14'),('109','Realiza acciones como recepciones de balón bajas, medias y altas, colocación de dedos y remates en suspensión y bloqueos en situaciones tácticas relacionadas con el voleibol.','3','10','14'),('11','Aplica las propiedades de la adición para facilitar los cálculos.','3','5','01'),('110','Comprende la importancia de la actividad física como elemento posibilitador de una mejor calidad de vida.','3','10','14'),('111','En baloncesto desarrolla acciones como desplazamientos con y sin balón, dominio y conducción del balón, manejo de los carriles, detenciones, doble ritmo, pases, lanzamientos.','4','10','14'),('112','En futbol sala realiza pases estático y en movimiento con diferentes contactos del pie, pateo al arco de tiro libre y en movimiento.','4','10','14'),('113','Describe que dice San Agustín de la búsqueda de Dios por la voluntad.','1','10','16'),('114','Determina las características históricas, políticas, sociales y religiosas de la época en que vivió Jesús.','1','10','16'),('115','Establece relaciones de semejanza y diferencia entre la realidad que vivió Jesús y la actual.','2','10','16'),('116','Identifica porque el dar la vida significa el cumplimiento de la misión de Cristo.','2','10','16'),('117','Narra los hechos que describen a María como discípula de Jesús.','3','10','16'),('118','Relaciona y confronta las exigencias personales del mensaje de Jesús con sus actitudes.','3','10','16'),('119','Descubre las características de la identidad cristiana y las relaciona con su historia de vida.','4','10','16'),('12','Aplica las propiedades de la multiplicación para facilitar los cálculos.','3','5','01'),('120','Reconoce la presencia de Dios y la convierte en la base de su proyecto de vida.','4','10','16'),('121','Identifica a Jesús de Nazaret como la plena revelación de Dios en la historia.','1','5','16'),('122','Descubre las principales exigencias que se derivan de la aceptación del Reino de Dios que nos conduce a la perfección.','1','5','16'),('123','Reconoce que los sacramentos son signos sensibles, en que la Iglesia hace presente la salvación en cada cristiano que los recibe.','2','5','16'),('124','Reconoce el significado del testimonio como manifestación de autenticidad humana y responsabilidad, asumiendo el compromiso para prepararse de la mejor forma posible como buen “testigo de Dios”','2','5','16'),('125','Reconoce como el proyecto de vida de Jesús ilumina y fundamenta el proyecto personal del cristiano.','3','5','16'),('126','Comprende cómo el proyecto de vida del joven se construye y se realiza en la Iglesia.','3','5','16'),('127','Conoce la moral social y el sentido de la participación de las Iglesias.','4','5','16'),('128','Identifica en la Iglesia al nuevo pueblo de Dios fundado por Jesucristo.','4','5','16'),('129','Conoce el valor y el sentido de la vida en la experiencia humana.','1','10','11'),('13','Aplica las propiedades de la división para facilitar los cálculos.','4','5','01'),('130','Explica el hecho religioso e identifica los valores que le ayudan a vivir un proyecto de vida cristiana.','1','10','11'),('131','Reconoce el valor de orientar su vida y su comportamiento con base a criterios morales.','2','10','16'),('132','Valora el aporte que la comunidad cristiana hace para el bien de la sociedad mediante la promoción de los Derechos Humanos.','2','10','11'),('133','Comprende que la familia es fuente de crecimiento permanente para la formación integral de la persona fomentando el amor','3','10','11'),('134','Valora la dignidad del ser humano con sus posibilidades y limitaciones y cómo alcanzar un sentido trascendente en Cristo.','3','10','11'),('135','Reconoce el significado del testimonio como manifestación de autenticidad humana y responsabilidad.','4','10','16'),('136','Comprende los valores y los ejerce en clases.','4','10','11'),('137','Identifica el valor que tiene como persona única e irrepetible, creando una auto imagen positiva.','1','5','11'),('138','Reconoce las distintas habilidades, gustos y formas de ser que la distinguen de las demás.','4','10','11'),('139','Expresa sus sentimientos a través de diferentes posibilidades, reconociéndose como ser sociable.','1','5','11'),('14','Analiza y resuelve problemas usando la operación adecuada.','4','5','01'),('140','Identifica las funciones que cumplen las personas de un grupo determinado y describe su importancia.','1','5','11'),('141','Comprende la importancia de expresar sus sentimientos con sinceridad y lo aplica en sus relaciones interpersonales.','2','5','11'),('142','Genera mediante sus actitudes un clima de bienestar con sus compañeras de clase y en su grupo familiar.','2','5','11'),('143','Interioriza los valores como cualidades necesarias para vivir en armonía.','3','5','11'),('144','Reconoce las actitudes responsables para consigo mismo y para con los demás.','3','5','11'),('145','Atención y participación en clase.','4','5','11'),('146','Realizar evaluaciones y trabajos con responsabilidad.','4','5','11'),('147','Planea y realiza ejercicios de trazos utilizando líneas conocidas apoyándose en su creatividad e imaginación.','1','5','12'),('148','Expresa ideas gusto y emociones através del manejo de títeres (dedos), con personajes de la televisión.','1','5','12'),('149','Inventa expresiones artísticas construyendo globos cometas mostrado respeto por el trabajo del compañero trabajando en orden.','2','5','12'),('15','Reconoce los términos de una fracción y los representa gráficamente.','4','5','01'),('150','Muestra interés y aprecio realizado trazos de óvalos adquiriendo destrezas en el manejo del compás.','2','5','12'),('151','Comprende instrucciones haciendo uso adecuado de los materiales','3','5','12'),('152','Desarrolla la capacidad de observar, imaginar y centrar su atención.','3','5','12'),('153','Muestra buen manejo utilizando herramientas simples y material de desechos.','4','5','12'),('154','Desarrollo aptitudes mediante el empleo y la práctica de diferentes elementos como parte fundamental de la expresión.','4','5','12'),('155','Desarrollo expresivo de sus propias percepciones, evocaciones y el encuentro contemplativo del color de la naturaleza.','1','10','12'),('156','Conoce y practica los principios generales de la perspectiva artística en trabajos creativos.','1','10','12'),('157','Conoce y practica los valores estéticos y plásticos de la letra y la publicidad.','2','10','12'),('158','Aplica la secuencia correcta al dibujar figuras creativas.','2','10','12'),('159','Que manejen y disfruten el material de trabajo (escuadras). Para realizar expresiones artísticas.','3','10','12'),('16','Reconoce números fraccionarios los lee y escribe.','4','5','01'),('160','Contribuir al desarrollo sensomotriz al dibujar la letra.','3','10','12'),('161','Plantea con la técnica del color diferentes manifestaciones artísticas.','4','10','12'),('162','Organiza composiciones teniendo en cuenta los efectos artísticos.','4','10','12'),('17','Escoge la mejor definición entre varias dadas para una figura geométrica.','1','5','02'),('18','Construye y descompone figuras y sólidos a partir de condiciones dadas.','1','5','02'),('19','Compara y clasifica figuras bidimensionales de acuerdo con sus componentes (ángulos, vértices ) y características.','1','5','02'),('20','Valora simetrías en distintos aspectos del arte y el diseño.','1','5','02'),('21','Dibuja una figura simétrica.','2','5','02'),('22','Reconoce y diferencia rectas.','2','5','02'),('23','Decora distintas figuras geométricas de manera original y creativa.','2','5','02'),('24','Relacione imágenes, diagramas con conceptos geométricos.','2','5','02'),('25','Clasifica los prismas en triangulares, cuadrangulares,','3','5','02'),('26','Identifica al cilindro, al cono y a la esfera como cuerpos redondos','3','5','02'),('27','Reconocer las características de un cuerpo solido para construirlo.','3','5','02'),('28','Establecer relaciones de congruencia y semejanza entre figuras y objetos.','3','5','02'),('29','Ubicar figuras o sitios del entorno utilizando el plano cartesiano.','4','5','02'),('30','Realizar mediciones de longitud, superficie','4','5','02'),('31','Reconocer modelos matemáticos para hallar perímetro.','4','5','02'),('32','Analizar e interpretar información representada en tablas y gráficas.','4','5','02'),('33','Conocer y valorar las organizaciones que promueven los deberes en la escuela o el colegio.','1','5','05'),('34','Conocer los Derechos Humanos y las instituciones que os promueven y defienden en Colombia.','1','5','05'),('35','Reconocer la importancia de la Constitución Política Nacional.','1','5','05'),('36','Identificar las principales características del relieve.','1','5','05'),('37','Identificar las principales características de la hidrografia.','2','5','05'),('38','Identificar las principales características del clima de Colombia.','2','5','05'),('39','Reconocer y valorar los diferentes usos del suelo.','2','5','05'),('40','Reconocer y valorar los diferentes usos de los recursos naturales.','2','5','05'),('41','Identificar los diversos recursos naturales que existen en nuestro país.','3','5','05'),('42','Describir los límites geográficos de Colombia.','3','5','05'),('43','Analizar sus principales relaciones fronterizas.','3','5','05'),('44','Reconocer las regiones geográficas de Colombia.','3','5','05'),('45','Identifica las características y diferencias de las regiones.','4','5','05'),('46','Identificar y describir las características de las regiones naturales del mundo.','4','5','05'),('47','Describir y clasificar las actividades de los sectores productivos de la economía colombiana.','4','5','05'),('48','Valorar la importancia de las vías de comunicación y los medios de transporte que existen en nuestro país.','4','5','05'),('49','Reconocer que el clima es un componente importante y de gran influencia en la naturaleza.','1','5','07'),('50','Explicar la necesidad de los seres vivos de adaptarse a las condiciones ambientales.','1','5','07'),('51','Valorar la importancia de estudiar y conocer los ecosistemas y sus componentes.','1','5','07'),('52','Identificar los recursos naturales de Colombia y valorar su importancia.','1','5','07'),('53','Establecer las propiedades más importantes de la materia.','2','5','07'),('54','Identificar los estados de la materia y sus cambios.','2','5','07'),('55','Experimentar con los cambios de estado, en actividades comunes.','2','5','07'),('56','Identificar los elementos químicos y su ubicación en la Tabla Periódica.','2','5','07'),('57','Nombrar e identificar las mezclas, mediante ejemplos.','3','5','07'),('58','Identificar los usos que hacemos de algunas mezclas.','3','5','07'),('59','Aplicar medidas preventivas para evitar los efectos negativos provocados por la naturaleza.','3','5','07'),('60','Explicar la importancia del ahorro de la energía eléctrico.','3','5','07'),('61','Enuncia las utilidades de la luz y el sonido para los seres vivos','4','5','07'),('62','Describe las características de los animales.','4','5','07'),('63','Establece semejanzas y diferencias entre los seres del entorno.','4','5','07'),('64','Describe de manera sencilla objetos y fenómenos de su entorno cercano.','4','5','07'),('65','Organiza ideas para producir textos orales, con base en la realidad y la experiencia propia.','1','5','09'),('66','Identificar la intención comunicativa de los textos que leo, mientras avanzo en reconocer aspectos gramaticales.','1','5','09'),('67','Leer diversos tipos de textos descriptivos y organizar mis ideas para crear nuevos textos.','1','5','09'),('68','Reconocer características de objetos, personas y acciones que observo para construir textos orales y escritos que describen','1','5','09'),('69','Lee textos narrativos con función literaria, como los cuentos, y reconocer en ellos, personajes, tiempo, espacio, acciones.','2','5','09'),('70','Interpreta historietas y relaciona diversos tipos de textos.','2','5','09'),('71','Establece semejanzas y diferencias entre textos narrativos como el cuento y la fabula.','2','5','09'),('72','Propone y crea textos narrativos que tienen las características de una fabula.','2','5','09'),('73','Produce textos escritos a partir de un tema, teniendo en cuenta la estructura de operaciones y párrafos.','3','5','09'),('74','Reconocer que para escribir es necesario seguir un proceso: construir, leer y corregiir','3','5','09'),('75','Caracteriza las operaciones y los párrafos para relacionarlos la interior de los textos que lee','3','5','09'),('76','Selecciona y almacena información de los textos que lee, por medio del resumen.','3','5','09'),('77','Producir versiones de textos teniendo en cuenta aspectos de concordancia.','4','5','09'),('78','Crear textos narrativos a partir de mis propias experiencias.','4','5','09'),('79','Identificar la función comunicativa de textos como la carta.','4','5','09'),('80','Avanzar en la producción de textos escritos.','4','5','09'),('81','Aplicar el conocimiento del método científico en la resolución de problemas cotidianos.','1','10','08'),('82','Consulta y sintetiza la historia de la química con cada una de sus etapas.','1','10','08'),('83','Describe las diferentes ramas de la química y la influencia de estas en mi vida cotidiana.','1','10','08'),('84','Aplica los pasos del trabajo científico en el desarrollo de las prácticas de laboratorio y un proyecto de investigación.','1','10','08'),('85','Reconoce, analiza y describe las propiedades de los diferentes materiales.','2','10','08'),('86','Reconoce, analiza y describe las propiedades de los diferentes materiales.','2','10','08'),('87','Reconoce, analiza y describe las propiedades de los diferentes materiales.','2','10','08'),('88','Describe e identifica las características de las diversas partículas subatómicas.','2','10','08'),('89','Explica el comportamiento químico de los átomos con base a la distribución electrónica.','3','10','08'),('90','Identifica los elementos químicos en la tabla periódica teniendo en cuenta su número atómico y su distribución electrónica.','3','10','08'),('91','Realiza correctamente la distribución electrónica de un elemento dado, teniendo en cuanta conceptos básicos y la relación entre la tabla periódica.','3','10','08'),('92','Clasifica y define el enlace iónico, el covalente y el enlace metálico.','3','10','08'),('93','Diferencia el enlace iónico del covalente teniendo en cuenta la electronegatividad de los elementos que conforman el compuesto.','4','10','08'),('94','Determina las propiedades físicas y químicas de las moléculas a partir de las fuerzas intermoleculares que las mantienen unidas','4','10','08'),('95','Determina las propiedades físicas y químicas de las moléculas a partir de las fuerzas intermoleculares que las mantienen unidas','4','10','08'),('96','Aplica las normas de la nomenclatura stock, tradicional y sistemática para nombrar y formular compuestos inorgánicos.','4','10','08'),('97','Utilización  y  aplicación de la conversión de sistemas de unidades en situaciones de la vida cotidiana.','1','10','17'),('98','Reconocimiento de cantidades vectoriales, realización de operaciones con vectores y determinación del vector resultante mediante la descomposición rectangular de vectores.','1','10','17'),('99','Descripción del movimiento de los cuerpos utilizando los conceptos de posición, desplazamiento, velocidad y aceleración.','2','10','17');
/*!40000 ALTER TABLE `logro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensajes`
--

DROP TABLE IF EXISTS `mensajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mensajes` (
  `idmensajes` int(11) NOT NULL AUTO_INCREMENT,
  `mensaje` varchar(700) DEFAULT NULL,
  `emisor` varchar(45) DEFAULT NULL,
  `receptor` varchar(45) DEFAULT NULL,
  `leido` int(1) DEFAULT NULL,
  PRIMARY KEY (`idmensajes`)
) ENGINE=InnoDB AUTO_INCREMENT=713 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensajes`
--

LOCK TABLES `mensajes` WRITE;
/*!40000 ALTER TABLE `mensajes` DISABLE KEYS */;
INSERT INTO `mensajes` VALUES (710,'Hola señor Fabio','50897415','78108539',1),(711,'Hola seño Luz','78108539','50897415',1),(712,'Como esta?','78108539','50897415',1);
/*!40000 ALTER TABLE `mensajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (2786715,'Omar','Antonio','Urzola','Mestra','123456','omarurmes@yahoo.es','3216729928','Calle 17 #2 Santa Elena','M',3,'offline'),(6621755,'Luis','Eduardo','Lopez','Perez','123456','luiseperez1@hotmail.com','3008744583','Calle 10 #12 Santa Elena','M',2,'offline'),(15047539,'Orlando','Miguel','Vega','Hoyos','123456','omvega28@hotmail.com','3205107697','Calle 40 #22 La union','M',2,'offline'),(25805443,'Aydee','Isabel','Navarro','Delgado','123456','aydenavarro@hotmail.com','3135111346','Calle 11 # 7 Santa Elena','F',3,'offline'),(25807930,'Alexandra','Patricia','Avila','Arrieta','123456','alexandrapatriciaavila@ho','3216727928','Calle 12 # 20 Las flores','F',2,'offline'),(25808562,'Sirly','Andrea','Trespalacio','Ortega','123456','silytrespa@hotmail.com','3005617943','Calle 36 # 2 El bosque','F',2,'offline'),(25808741,'Livia','Estela','Vergara','Estrella','123456','livia312010@hotmail.com','3145549297','Calle 41 # 3 La union','F',2,'offline'),(30575853,'Levis','Astrid','Polo','Caliz','123456','levispolo@hotmail.com','3107346671','Calle 31 # 13 El prado','F',2,'offline'),(33083123,'Martha','Jacoba','Julio','Navarro','123456','marthajuna75@hotmail.com','3127197588','Calle 42 #15 La union','F',2,'offline'),(50869268,'Cristina','Ines','Diaz','Gonzalez','123456','cristidigon2011@hotmail.c','3145938387','Calle 21 #19 Las cruces','F',3,'offline'),(50897415,'Luz','Marina','Cavadia','Jimenez','123456','luzarinacavadia@hotmail.c','3136320992','Calle41 #30 La union','F',2,'online'),(50964921,'Mirian','Luz','Coronado','Cardenas','123456','Miriam74@outloook.com','3145110882','Calle 9 #11 Santa Elena','F',3,'offline'),(50992865,'Maria','Monica','Martinez','Avila','123456','ayapelense@yahoo.es','3012150615','Calle 30 # 5 El prado','F',2,'offline'),(50995166,'Maria','Eunice','Villalba','Delgado','123456','eumavide@gmail.com','3114364190','Calle 8 #29 Las cruces','F',2,'offline'),(50995244,'Eliana','Yojana','Alvarez','Almanza','123456','elianalvarez5@hotmail.com','3135621899','Calle 37 #14 El bosque','F',2,'offline'),(78108539,'Fabio','Luis','Jimenez','Diaz','123456','fabiojimen@hotmail.com','3008460699','Calle37 #19 El bosque','M',3,'offline'),(78110962,'Ervin','Alexis','Mosquera','Serpa','123456','ervimos@gmail.com','3147080774','calle 31 # 10 El prado','M',2,'offline'),(78113647,'Carlos','Arturo','Guerra','Arrieta','123456','caguerra@hotmail.com','3206739733','Calle11 # 34 Las cruces','M',2,'offline'),(78734152,'Vicente','Vicente','Aguilar','Martelo','123456','ee_12306800023201@hotmail','3116877156','Calle 8 #20 Las cruces','M',2,'offline'),(78744525,'Yorlen','Yoss','Barragan','Blanco','123456','yorlen74@hotmail.com','3135938089','Calle 44 #2 El prado','M',3,'offline'),(92499659,'Everaldo','Andres','Correa','Verbel','123456','everaldocorreav@hotmail.c','3116666013','Calle 38#1 El bosque','M',2,'offline'),(92554308,'Hector','Manuel','Vergara','Castro','123456','hemaveca123456@hotmail.co','3126587924','Calle 43 #2 La union','M',2,'offline'),(98552719,'Jose','Gustavo','Marquez','Arango','123456','gustavomay@hotmail.com','3034490956','Calle 32 #7 El prado','M',2,'offline'),(1066524379,'Katy','Jhoanna','Pérez','Mestra','123456','kapeme@hotmail.es','3017904089','B.La floresta cll 38 cr 15B','F',1,'offline');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-05-26 21:31:38
