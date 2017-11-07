INSERT INTO Groups (group_name) VALUES ('group ABC');

INSERT INTO Users (first_name, last_name, GroupId) VALUES ('Kaitlin', 'Strand', 1);
INSERT INTO Users (first_name, last_name, GroupId) VALUES ('Max', 'Teibel', 1);
INSERT INTO Users (first_name, last_name, GroupId) VALUES ('Edge', 'Quintanilla', 1);
INSERT INTO Users (first_name, last_name, GroupId) VALUES ('Nick', 'Vree', 1);

INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('unclaimed1', '2017-01-01 06:00:00', 13, false, false, 1, null);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('unclaimed2', '2017-01-02 06:00:00', 10, false, false, 1, null);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('unclaimed3', '2017-01-03 06:00:00', 7, false, false, 1, null);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('unclaimed4', '2017-01-04 06:00:00', 11, false, false, 1, null);

INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed Incomplete1', '2017-01-01 06:00:00', 13, true, false, 1, 1);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed Incomplete2', '2017-01-01 06:00:00', 10, true, false, 1, 1);

INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed Complete 1', '2017-01-01 06:00:00', 13, true, true, 1, 1);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed Complete2', '2017-01-01 06:00:00', 10, true, true, 1, 1);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed complete3', '2017-01-01 06:00:00', 13, true, true, 1, 1);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed complete4', '2017-01-01 06:00:00', 10, true, true, 1, 1);

INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed Incomplete1', '2017-01-01 06:00:00', 13, true, false, 1, 2);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed Incomplete2', '2017-01-01 06:00:00', 10, true, false, 1, 2);

INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed Complete 1', '2017-01-01 06:00:00', 7, true, true, 1, 2);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed Complete2', '2017-01-01 06:00:00', 7, true, true, 1, 2);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed complete3', '2017-01-01 06:00:00', 7, true, true, 1, 2);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed complete4', '2017-01-01 06:00:00', 7, true, true, 1, 2);

INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed Complete 1', '2017-01-01 06:00:00', 6, true, true, 1, 3);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed Complete2', '2017-01-01 06:00:00', 6, true, true, 1, 3);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed complete3', '2017-01-01 06:00:00', 6, true, true, 1, 3);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed complete4', '2017-01-01 06:00:00', 6, true, true, 1, 3);

INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed Complete 1', '2017-01-01 06:00:00', 5, true, true, 1, 4);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed Complete2', '2017-01-01 06:00:00', 5, true, true, 1, 4);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed complete3', '2017-01-01 06:00:00', 5, true, true, 1, 4);
INSERT INTO Tasks (description, date_due, points, claim, completed, GroupId, UserId) VALUES ('Claimed complete4', '2017-01-01 06:00:00', 5, true, true, 1, 4);