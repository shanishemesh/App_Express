-- CREATE DATABASE employee_cards;
-- USE employee_cards;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `card_db`
-- --------------------------------------------------------
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `employees` (`id`, `name`, `email`, `description`) VALUES
(1, 'shani shemesh', 'sshemesh@gmail.com', 'develops and analyzes information systems'),
(2, 'Koral ifrach', 'Korall@gmail.com', 'Information systems supporter'),
(3, 'Elad Arel shemesh', 'Elad123@gmail.com', 'Network Manager, Asuta'),
(4, 'Adi shemesh', 'adai999@gmail.com', 'Champion Motors Business');


ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
