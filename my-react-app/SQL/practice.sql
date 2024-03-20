CREATE DATABASE DBsample;

USE DBsample;

CREATE TABLE Persons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE
    )

INSERT INTO Persons (name, email) VALUES 
('John Doe', 'john@example.com'),
('Jane Smith', 'jane@example.com'),
('ALice Johnson', 'alice@example.com');

SELECT * FROM Persons;