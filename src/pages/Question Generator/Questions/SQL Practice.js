export const SQLP = [
  {
    que: `retrieve the list of databases`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SELECT name FROM master.sys.databases</p>
        <p>WHERE name NOT IN ('master', 'tempdb', 'model', 'msdb');</p>

        <p>**MySQL**</p>
        <p>SHOW DATABASES;</p>
      </>
    ),
  },
  {
    que: `create a database`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>CREATE Database worldbank</p>
      </>
    ),
  },
  {
    que: `move into a database`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>USE worldbank;</p>
      </>
    ),
  },
  {
    que: `rename a database`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>ALTER DATABASE [oldDbName]</p>
        <p>MODIFY NAME = [newDbName];</p>

        <p>**MySQL**</p>
        <p>
          You cannot rename a database in MySQL using Query. Either use the
          phpmyadmin interface or command line. Below is how to use the command
          line
        </p>
        <p>
          -- First, dump the old database. The -R flag is to make sure stored
          procedures and functions are included in the dump file.
        </p>
        <p>
          $ mysqldump -u username -p password -R old_db_name {">"}{" "}
          db_dumpfile.sql
        </p>
        <p>-- Then create a new database:</p>
        <p>$ mysqladmin -u username -p password CREATE DATABASE new_db_name</p>
        <p>-- Then, import the dump file to the new database:</p>
        <p>$ mysql -u username -p password new_db_name {"<"} db_dumpfile.sql</p>
        <p>-- Lastly, drop the old database</p>
        <p>$ mysql -u username -p password DROP DATABASE olddbname</p>
      </>
    ),
  },
  {
    que: `delete a database`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>DROP DATABASE databasename;</p>
      </>
    ),
  },
  {
    que: `set a database to offline mode. NB:This stops all connections to the database and cannot be accessed 
until you set it back online. Even the command 'USE databaseName' wouldnt work unless switched back online.
Useful when database cannot be for eg. dropped due to active connections using it`,
    ans: (
      <>
        <p>ALTER DATABASE databaseName SET OFFLINE</p>
        <p>
          WITH NO_WAIT --option is used if users or processes are connected, but
          you do not wish the command to be blocked
        </p>
      </>
    ),
  },
  {
    que: `set a database to be online`,
    ans: (
      <>
        <p>ALTER DATABASE databaseName SET ONLINE</p>
      </>
    ),
  },
  {
    que: `backup a single database`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>BACKUP DATABASE databaseName</p>
        <p>
          TO DISK = 'C:\Program Files\Microsoft SQL
          Server\MSSQL16.SQLEXPRESS\MSSQL\Backup\mystudents.bak'
        </p>
        <p>-- the lines below are optional</p>
        <p>WITH FORMAT,</p>
        <p>NAME='Students database',</p>
        <p>MEDIANAME = 'StudDB',</p>
        <p>DESCRIPTION = 'This is a full backup of the students database'</p>
        <p>-- or -- </p>
        <p>
          right click database name from Object Explorer pane {"->"} Tasks{" "}
          {"->"} Back Up...
        </p>
      </>
    ),
  },
  {
    que: `backup multiple databases at a time`,
    ans: ``,
  },
  {
    que: `schedule a database backup`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>
          uncollapse Management from object explorer pane {"->"} right click
          Maintenance Plans {"->"}
          Maintenance Plan Wizard {"->"}
        </p>
      </>
    ),
  },
  {
    que: `restore a database which has been completely dropped`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>RESTORE DATABASE sampleDB</p>
        <p>
          FROM DISK = 'C:\Program Files\Microsoft SQL
          Server\MSSQL16.SQLEXPRESS\MSSQL\Backup\mystudents2.bak'
        </p>
        <p>
          -- NB: the command may throw an error and suggest using WITH REPLACE
          OPTION.
        </p>
        <p>
          -- 1. Simply go to C:\Program Files\Microsoft SQL
          Server\MSSQL16.SQLEXPRESS\MSSQL\DATA
        </p>
        <p>
          -- 2. delete the .mdf and log.ldf of the database which you want to
          restore
        </p>
        <p>-- 3. then execute restore command again</p>

        <p>-- or --</p>
        <p>
          right click Databases from Object Explorer pane {"->"} Restore
          Database {"->"}
          choose Device as the Source {"->"} click ... button next to it {"->"}{" "}
          select Add {"->"}
          select database file
        </p>
      </>
    ),
  },
  {
    que: `restore a database which hasnt been dropped but rather a table/record/constraint etc has been accidentally changed or deleted`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>1. switch the database to offline</p>
        <p>ALTER DATABASE databaseName SET OFFLINE WITH NO_WAIT</p>

        <p>2. restore with command</p>
        <p>RESTORE DATABASE databaseName</p>
        <p>
          FROM DISK = 'C:\Program Files\Microsoft SQL
          Server\MSSQL16.SQLEXPRESS\MSSQL\Backup\mystudents2.bak'
        </p>
        <p> -- or --</p>
        <p>
          2. right click databasename in object explorer {"->"} Tasks {"->"}{" "}
          Restore {"->"} Database {"->"} either select from device or existing
          database backup list shown
        </p>
      </>
    ),
  },
  {
    que: `display tables in the database`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SELECT name FROM sys.tables</p>
        <p>or</p>
        <p>SELECT table_schema, table_name, table_type</p>
        <p>FROM information_schema.tables</p>
        <p>=============</p>
        <p>**MySQL**</p>
        <p>SHOW TABLES;</p>
      </>
    ),
  },
  {
    que: `display tables from another database`,
    ans: null,
  },
  {
    que: `create a table`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>CREATE TABLE myTable ( </p>
        <p>
          id INT NOT NULL IDENTITY(1, 1) PRIMARY KEY, --IDENTITY is used for
          auto-increment ie. IDENTITY(startValue,increment)
        </p>
        <p>username VARCHAR (255) UNIQUE,</p>
        <p>City varchar(255) DEFAULT 'California',</p>
        <p>age TINYINT NOT NULL, </p>
        <p>dob DATE,</p>
        <p>netWorth DECIMAL (10, 2), </p>
        /*decimal([precision],[scale]) precision = the total number of digits on
        both sides of the decimal point (10).Scale number of digits to the right
        of the decimal (2)*/
        <p>
          employerID INT FOREIGN KEY REFERENCES employers(id) ON DELETE CASCADE
          ON UPDATE CASCADE
        </p>
        );
        <p>============</p>
        <p>**MySQL**</p>
        <p>create table myTable(</p>
        <p>id INT NOT NULL AUTO_INCREMENT,</p>
        <p>username VARCHAR(255) UNIQUE,</p>
        <p>content TEXT NOT NULL,</p>
        <p>age TINYINT NOT NULL,</p>
        <p>age2 BIGINT UNSIGNED DEFAULT 1, </p>
        <p>dob DATE,</p>
        <p>dob_year YEAR,</p>
        <p>netWorth DECIMAL(10,2),</p>
        <p>
          experience varchar(50) DEFAULT 'unknown' COMMENT 'Years of using sms',
        </p>
        <p>employerID INT(10),</p>
        <p>commentmsg_id bigint(20) DEFAULT NULL,</p>
        <p>iso3 char(3) DEFAULT NULL,</p>
        <p>numcode smallint(6) DEFAULT NULL,</p>
        <p>PRIMARY KEY (`id`),</p>
        <p>
          FOREIGN KEY (`user_id`) REFERENCES `useraccount` (`user_id`) ON DELETE
          CASCADE ON UPDATE CASCADE
        </p>
        )
      </>
    ),
  },
  {
    que: `create a table with one column being the computation of another`,
    ans: (
      <>
        <p>**MS SQL SERVER</p>
        <p>CREATE TABLE GFG_user</p>
        <p> (</p>
        <p>Id INT NOT NULL,Dt DATE,</p>
        <p>
          Address VARCHAR(100),Dt_FORMATTED AS (convert(varchar(255), dt, 104)){" "}
        </p>
        <p>)</p>
      </>
    ),
  },
  {
    que: `update a table's name`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>sp_rename [old_table_name],[new_table_name];</p>
        <p>**MySQL**</p>
        <p>ALTER TABLE old_table_name RENAME new_table_name;</p>
        <p>or</p>
        <p>RENAME TABLE old_table_name TO new_table_name;</p>
      </>
    ),
  },
  {
    que: `delete a table`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>DROP TABLE new_sms_download</p>
      </>
    ),
  },
  {
    que: `display columns names in a table`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SELECT COLUMN_NAME</p>
        <p>FROM INFORMATION_SCHEMA.COLUMNS</p>
        <p>WHERE TABLE_NAME = 'orders'</p>
        <p>========</p>
        <p>**MySQL**</p>
        <p>SHOW COLUMNS FROM [tableName];</p>
      </>
    ),
  },
  {
    que: `display all the data in a table`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>SELECT * from [tableName]</p>
      </>
    ),
  },
  {
    que: `insert a record into a table`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>INSERT INTO student</p>
        <p>VALUES</p>
        <p>
          ('Joe', 'O''Brien') --how to escape apostrophe in some words ie.
          double-up the apostrophe character
        </p>
        <p>('Jen','Thomspson')</p>
      </>
    ),
  },
  {
    que: `insert a record into a table given only a few columns data`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>INSERT INTO state(stateCountryID,name)</p>
        <p>VALUES</p>
        <p>("3","Coventry"),</p>
        <p>("1","Cape Coast")</p>
      </>
    ),
  },
  {
    que: `insert records from one table A into another table B`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>INSERT INTO student_males</p>
        <p>SELECT * FROM student WHERE gender = 'M'</p>
      </>
    ),
  },
  {
    que: `create a new column which is the result of multiple columns. Eg. create a new column in the students table which combines the student's name and age as the username`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>option 1</p>
        <p>
          ALTER TABLE student ADD username AS CONCAT(name,age); --joining mixed
          columns
        </p>
        <p>
          ALTER TABLE student ADD balance AS (fees-paid); --creating columns
          from computations
        </p>
        <p>option 2</p>
        <p>--first create the column</p>
        <p>ALTER TABLE students</p>
        <p>ADD username text;</p>
        <p>--then fill it with the values</p>
        <p>UPDATE students SET username = CONCAT(name,age)</p>
        <p>or</p>
        <p>UPDATE students SET balance = fees-paid</p>
      </>
    ),
  },
  {
    que: `update a single record in a table where the new data is a text containing an apostrophe`,
    ans: (
      <>
        <p>**MS SQL Server & MySQL</p>
        <p>UPDATE student</p>
        <p>
          SET last_name='O''Brien' --how to escape apostrophe in some words
          ie.double-up the apostrophe character
        </p>
        <p>WHERE first_name = "Joe"</p>
      </>
    ),
  },
  {
    que: `update multiple values of a single record. eg. change the name, age and address at the same time`,
    ans: (
      <>
        <p>**MS SQL Server & MySQL</p>
        <p>UPDATE student</p>
        <p>SET name='Jane Doe-Carter', age=14, address='California'</p>
        <p>WHERE name = 'Jane Doe Carter'</p>
      </>
    ),
  },
  {
    que: `change the entire column values of a table into the same value. eg. change all students' genders to unknown`,
    ans: (
      <>
        <p>**MS SQL Server & MySQL</p>
        <p>UPDATE student</p>
        <p>SET gender='unknown'</p>
      </>
    ),
  },
  {
    que: `delete a record from a table`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>DELETE FROM state WHERE name="Cape Coast"</p>
        <p>
          NB: if the table id col was generated using the IDENTITY property,
          then deleting a row removes that particular row ID. However, inserting
          a new row later doesnt use the deleted the row IDs. Meaning the rows
          IDs would not be in order with some numbers missing. This is not an
          issue but if you want to update the row ids automatically, then you
          should reset the IDENTITY seed after deleting the row. Therefore it
          becomes
        </p>
        <p>DELETE FROM state WHERE name="Cape Coast"</p>
        <p>DBCC CHECKIDENT ('state', RESEED, 1)</p>
        <p>======</p>
        <p>**MySQL**</p>
        <p>DELETE FROM state WHERE name="Cape Coast"</p>
      </>
    ),
  },
  {
    que: `delete all the records from an existing table without deleting the table itself`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>TRUNCATE TABLE tablename</p>
      </>
    ),
  },
  {
    que: `add a new column to a table`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>ALTER TABLE country</p>
        <p>ADD</p>
        <p>ethincity varchar(20);</p>
        <p>Addres varchar(500) NULL,</p>
        <p>City varchar(255) DEFAULT 'California'</p>
      </>
    ),
  },
  {
    que: `add new column as the first column in the table`,
    ans: (
      <>
        <p>**MySQL**</p>
        <p>ALTER TABLE new_sms_download</p>
        <p>ADD age INT(20) FIRST</p>
      </>
    ),
  },
  {
    que: `add a new column after a specific column`,
    ans: (
      <>
        <p>**MySQL**</p>
        <p>ALTER TABLE new_sms_download</p>
        <p>ADD age INT AFTER gender</p>
      </>
    ),
  },
  {
    que: `rename column`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>sp_rename 'TableName.OldColumnName', 'New ColumnName', 'COLUMN';</p>
        <p>sp_rename 'country.contenent', 'continent', 'COLUMN'</p>
      </>
    ),
  },
  {
    que: `delete a column from a table`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>ALTER TABLE country</p>
        <p>DROP COLUMN continent, postcode, population</p>
      </>
    ),
  },
  {
    que: `view the properties(data type, length, nullable, etc.) and constraints(primary key, foreign key, unique, check) of all columns in a table`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>sp_help 'table_name'</p>

        <p>**MySQL**</p>
        <p>DESCRIBE table_name --displays only properties</p>
      </>
    ),
  },
  {
    que: `view only the constraints of a table's columns`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>SELECT TABLE_NAME, CONSTRAINT_TYPE, CONSTRAINT_NAME</p>
        <p>FROM information_schema.table_constraints</p>
        <p>WHERE table_name='student';</p>
      </>
    ),
  },
  {
    que: `add properties/constraints to a column`,
    ans: (
      <>
        <p>**MS SQL Server**</p>
        <p>ALTER TABLE state</p>
        <p>ADD PRIMARY KEY(id) --adding a PK constraint</p>
        <p>
          ADD FOREIGN KEY(country_id) REFERENCES country(id) ON DELETE CASCADE
          ON UPDATE CASCADE --adding a FK constraint
        </p>
        <p>ADD UNIQUE(population) --adding a unique constraint</p>
        <p>=================</p>
        <p>**MySQL**</p>
        <p>ALTER TABLE new_sms_download </p>
        <p>ADD CONSTRAINT UNIQUE(id); --adding a unique constraint</p>
      </>
    ),
  },
  {
    que: `update the properties/constraints/datatype of a column`,
    ans: (
      <>
        <p>**MS SQL Server</p>
        <p>ALTER TABLE country</p>
        <p>
          ALTER COLUMN continent text NULL; --updating the datatype of a column
        </p>
        <p>To alter an existing constraint, first drop it then reassign it</p>

        <p>**MySQL**</p>
        <p>--updating the datatype of a column</p>
        <p>ALTER TABLE country</p>
        <p>MODIFY col1 BIGINT UNSIGNED DEFAULT 1 COMMENT 'my column'</p>
        <p>To alter an existing constraint, first drop it then reassign it</p>
      </>
    ),
  },
  {
    que: `add a DEFAULT constraint on an existing column with no DEFAULT constraint set. Eg. add a default value of heterosexual to the gender column`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>
          NB: column shouldnt have any DEFAULT constraint set for it already.
        </p>
        <p>ALTER TABLE Persons</p>
        <p>ADD CONSTRAINT df_Qualification</p>
        <p>DEFAULT 'Dr.' FOR Qualification;</p>
        <p>================</p>
        <p>**MySQL**</p>
        <p>ALTER TABLE Persons</p>
        <p>ALTER City SET DEFAULT 'Sandnes';</p>
      </>
    ),
  },
  {
    que: `update the existing DEFAULT constraint of column. Eg. change the default value of the gender column from heterosexual to unselected`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>first drop constraint then reassign it</p>
      </>
    ),
  },
  {
    que: `drop a DEFAULT constraint on a column. eg. remove the default value of heterosexual set for the gender column`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>ALTER TABLE students</p>
        <p>DROP CONSTRAINT constraint_name;</p>
        <p>eg.</p>
        <p>DROP CONSTRAINT DF__state__design__4F7CD00D;</p>
        <p>================</p>
        <p>**MySQL**</p>
        <p>ALTER TABLE students</p>
        <p>ALTER gender DROP DEFAULT;</p>
      </>
    ),
  },
  {
    que: `remove the constraints of a column`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>
          NB:first use the syntax sp_help 'table_name' to view the constraints
          and properties of all the columns. From there you can take note of the
          constraint names
        </p>
        <p>ALTER TABLE 'table_name'</p>
        <p>DROP CONSTRAINT constraint_name;</p>
        <p>eg. </p>
        <p>
          DROP CONSTRAINT PK__state__3213E83F614ADC28 --dropping a PK constraint
        </p>
        <p>
          DROP CONSTRAINT FK__state__country_i__4BAC3F29 --dropping a FK
          constraint
        </p>
        <p>
          DROP CONSTRAINT UQ__state__8BE3E9176B1184AD --dropping a unique
          constraint
        </p>
        <p>=========</p>
        <p>**MySQL**</p>
        <p>ALTER TABLE state</p>
        <p>DROP UNIQUE/FOREIGN KEY/PRIMARY KEY constraint_name</p>
        <p>DROP FOREIGN KEY `state_ibfk_1`</p>
        <p>
          DROP INDEX `state_ibfk_1` --You might have to drop the index too
          because simply removing foreign key doesn’t remove the index.
        </p>
      </>
    ),
  },
  {
    que: `comment statements in sql`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>-- FROM new_sms_download</p>
        <p>or</p>
        <p>
          {"/**"} FROM new_sms_download {"*/"}
        </p>
        <p>
          the second example is more efficient because it also allows you to add
          comments to the end of statements as shown below
        </p>
        <p>
          SELECT AVG(id) FROM new_sms_download /**run innermost query first*/
        </p>
      </>
    ),
  },
  {
    que: `select only one column data from a table`,
    ans: (
      <>
        <p>SELECT [columnName] from [tableName]</p> or
        <p>SELECT [tableName].[columnName] from [tableName]</p> eg.
        <p>SELECT customers.address FROM customers;</p>
        <p>SELECT sellers.address FROM sellers</p>
      </>
    ),
  },
  {
    que: `select the first non-null value in a list`,
    ans: (
      <>
        <p>SELECT COALESCE (NULL, 1, 2, 'W3Schools.com')</p>
      </>
    ),
  },
  {
    que: `select column data in a specified datatype's format`,
    ans: (
      <>
        <p>SELECT CAST(25.65 AS varchar)</p>
        <p>SELECT CAST('2017-08-25' AS datetime);</p>
      </>
    ),
  },
  {
    que: `convert a value from one data type to another.`,
    ans: `convert?`,
  },
  {
    que: `select multiple columns data from a table`,
    ans: `SELECT [columnName1],[columnName2],... from [tableName]`,
  },
  {
    que: `show column data without duplicates`,
    ans: `SELECT DISTINCT [columnName] from [tableName]`,
  },
  {
    que: `show only the first n results from the table`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SELECT TOP 3 * FROM Customers ORDER BY customer_id ASC;</p>
        <p>----</p>
        <p>**MySQL**</p>
        <p>SELECT * from Customers LIMIT 3</p>
      </>
    ),
  },
  {
    que: `show only the last n results from the table`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SELECT TOP 3 * FROM Customers ORDER BY customer_id DESC</p>
      </>
    ),
  },
  {
    que: `show only the first x% of records in the table. Eg. display top half(50%), quarter(25%), 60% of the recrods`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SELECT TOP 50 PERCENT * FROM Customers ORDER BY customer_id ASC;</p>
      </>
    ),
  },
  {
    que: `show only the last x% of records in the table. Eg. display bottom half(50%), quarter(25%), 60% of the recrods`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SELECT TOP 50 PERCENT * FROM Customers ORDER BY customer_id DESC</p>
      </>
    ),
  },
  {
    que: `select a date from a table in a format you want it to appear. Eg. YYYY-DD-MM, DD/MM/YYYY, etc`,
    ans: null,
  },
  {
    que: `delete the first n records`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>DELETE FROM Customers</p>
        <p>
          WHERE customer_id IN (SELECT TOP 3 customer_id FROM Customers ORDER BY
          customer_id ASC)
        </p>
      </>
    ),
  },
  {
    que: `delete the last n records`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>DELETE FROM Customers</p>
        <p>
          WHERE customer_id IN (SELECT TOP 3 customer_id FROM Customers ORDER BY
          customer_id DESC)
        </p>
      </>
    ),
  },
  {
    que: `show only n results starting from position/row number x`,
    ans: (
      <>
        <p>**MySQL**</p>
        <p>SELECT * from [tableName] LIMIT idx,num</p>
        <p>
          <b>NB:</b> position/row count starts from 0
        </p>
      </>
    ),
  },
  {
    que: `sort data by a single column`,
    ans: (
      <>
        <p>SELECT student_first_name from student</p>
        <p>ORDER BY student_first_name</p>
      </>
    ),
  },
  {
    que: `sort data by multiple columns`,
    ans: (
      <>
        <p>
          SELECT student_number, student_year, student_first_name FROM `student`
        </p>
        <p>ORDER BY student_year,student_first_name</p>
      </>
    ),
  },
  {
    que: `sort data by multiple columns using different sort directions for each column`,
    ans: (
      <>
        <p>
          SELECT student_number, student_year, student_first_name FROM `student`
        </p>
        <p>ORDER BY student_year ASC,student_first_name DESC</p>
      </>
    ),
  },
  {
    que: `sort data neither by asc or desc order but with a custom sort preference`,
    ans: (
      <>
        <p>/*</p>
        <p>select * from table_name</p>
        <p>order by case</p>
        <p>when column_field = "value1" then priority1</p>
        <p>when column_field = "value2" then priority2</p>
        <p>when column_field = "value3" then priority3</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>else priorityN</p>
        <p>end asc</p>
        <p>*/</p>

        <p>eg.</p>
        <p>SELECT * FROM sales$</p>
        <p>-- defining order of sort</p>
        <p>ORDER BY CASE</p>
        <p>WHEN Branch = 'B' then 1</p>
        <p>WHEN Branch = 'C' then 2</p>
        <p>WHEN Branch = 'A' then 3</p>
        <p>
          ELSE 4 --if the column value's sort position is not defined, it falls
          here. ie. it D, E, G, etc.
        </p>
        <p>
          END ASC --sort type for remaining column values whose sort positions
          are not defined{" "}
        </p>
      </>
    ),
  },
  {
    que: `fetch data using all the comparison operators`,
    ans: (
      <>
        <p>
          SELECT student_number, student_year, student_first_name FROM `student`
        </p>
        <p>WHERE student_booking_payment_status = "F"</p>
        <b>NB:</b>Conditional operators are =, !=, &lt;, {"<="} , &gt;,{">="}
      </>
    ),
  },

  {
    que: `filter data whose condition falls inside a range. Eg. select students whose ids are between 20 and 30`,
    ans: (
      <>
        <p>SELECT * FROM room</p>
        <p>WHERE room_id BETWEEN 5 and 10</p>
      </>
    ),
  },
  {
    que: `filter data which satisfies one or multiple conditions. Eg. retrieve students who are in 1st/4th year and paid their fees`,
    ans: (
      <>
        <p>SELECT * FROM room WHERE</p>
        <p>(hall_id = 1 OR hall_id = 4)</p>
        <p>AND (room_beds_vacant {">"} 2)</p>
      </>
    ),
  },
  {
    que: `get a random record from the table`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SELECT TOP 1 * FROM customerSales</p>
        <p>ORDER BY NEWID()</p>

        <p>**MySQL**</p>
        <p>SELECT * FROM country</p>
        <p>ORDER BY RAND()</p>
        <p>LIMIT 1</p>
      </>
    ),
  },
  {
    que: `filter data where you have to use a bunch of OR statements`,
    ans: (
      <>
        <p>SELECT * FROM room WHERE</p>
        <p>hall_id IN (1,3,4)</p>
      </>
    ),
  },
  {
    que: `filter data which begins with a given set of characters and can have any number of characters after it. Eg. select countries which begin with Ma`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country LIKE 'Ma%'</p>
      </>
    ),
  },
  {
    que: `filter data which ends with a given set of characters and can have any number of characters before it. Eg. select countries which end with na`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country LIKE '%na'</p>
      </>
    ),
  },
  {
    que: `filter data which begins with a given set of characters, can have any number of characters in between and then ends with a given set of characters. Eg. select countries which begin with C and end with A`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country LIKE 'C%a'</p>
      </>
    ),
  },
  {
    que: `filter data which contains a given set of characters anywhere. Eg. select countries which contain an`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country LIKE '%ama%'</p>
      </>
    ),
  },
  {
    que: `Select all records where the second letter of the text is an specific letter eg. A`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '_a%';</p>
      </>
    ),
  },
  {
    que: `Select all records where the first letter of the text starts with anything from an "a" to an "f"`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[a-f]%';</p>
      </>
    ),
  },
  {
    que: `Select all records where the first letter of the text is NOT an "a", "c" or "f".`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[^acf]%';</p>
      </>
    ),
  },
  {
    que: `Finds any text that starts with "a"`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'a%';</p>
      </>
    ),
  },
  {
    que: `Finds any values that have "or" in any position`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '%or%';</p>
      </>
    ),
  },
  {
    que: `Finds any text that have "r" in the second position`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '_r%';</p>
      </>
    ),
  },
  {
    que: `Finds any text that starts with "a" and are at least 3 characters in length`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'a___%';</p>
      </>
    ),
  },
  {
    que: `select all text starting with "ber"`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'ber%';</p>
      </>
    ),
  },
  {
    que: `select all text containing the pattern "es"`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '%es%';</p>
      </>
    ),
  },
  {
    que: `select text starting with any character, followed by "ondon"`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '_ondon';</p>
      </>
    ),
  },
  {
    que: `select text starting with "L", followed by any character, followed by "n", followed by any character, followed by "on":`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'L_n_on';</p>
      </>
    ),
  },
  {
    que: `select text starting with "b", "s", or "p"`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[bsp]%';</p>
      </>
    ),
  },
  {
    que: `select text starting with "a","b","c","d" or "e"`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[a-e]%';</p>
      </>
    ),
  },
  {
    que: `select text NOT starting with "b", "s", or "p"`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[^bsp]%';</p>
        <p>or</p>
        <p>WHERE City LIKE '[!bsp]%';</p>
      </>
    ),
  },
  {
    que: `select text NOT starting with a to k`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[^a-k]%';</p>
        <p>or</p>
        <p>WHERE City LIKE '[!a-k]%';</p>
      </>
    ),
  },
  {
    que: `select text where either b, d or g should first appear before ent then followed by any number of characters`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[bdg]ent%';</p>
      </>
    ),
  },
  {
    que: `select text where any number of characters should first appear before ent, then the last character following ent should be either b, d or g`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '%ent[bdg]';</p>
      </>
    ),
  },
  {
    que: `select text where either b,d or g should first appear followed by e, then lastly followed by either b, d or g`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[bdg]e[bdg]';</p>
      </>
    ),
  },
  {
    que: `select text where e should first appear followed by either b, d or g then lastly followed by ar`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'e[bdg]ar';</p>
      </>
    ),
  },
  {
    que: `select text where either 'o' or 'a' appears between h and t`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'h[oa]t';</p>
      </>
    ),
  },
  {
    que: `select text where any character can appear between h and t except o and a`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'h[^oa]t';</p>
        <p>or</p>
        <p>WHERE City LIKE 'h[!oa]t';</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data beginning with a particular pattern. Eg. find countries beginning with united`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country REGEXP '^united'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data which ends with a particular pattern. Eg. find countries ending with ma`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country REGEXP 'na$'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data where any number of characters should appear before,after or middle of a pattern. Eg. select countries which contains na and any number of characters should appear before it`,
    ans: (
      <>
        <p>SELECT DISTINCT country FROM new_sms_download </p>
        <p>WHERE country REGEXP '.na'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data where a fixed number of characters should appear before,after or middle of a pattern. Eg. select countries where exactly two characters should appear before na`,
    ans: (
      <>
        <p>SELECT DISTINCT country FROM new_sms_download</p>
        <p>WHERE country REGEXP '^..na'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data that contains a certain text`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country REGEXP 'ana'</p>
      </>
    ),
  },
  {
    que: `find data which contains one of a given set of patterns. Eg. find countries which contain united,republic or northern`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country REGEXP 'ana|uni|ma'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to filter data which contains one of a given set of characters. Eg. countries that contain x,y or z`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country REGEXP '[xyz]'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data containing a range of characters. Eg. find messages containing numbers`,
    ans: (
      <>
        <p>SELECT content FROM new_sms_download </p>
        <p>WHERE content REGEXP '[0-9]'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data not containing a range of characters. eg. find messages not containing numbers ie. not numbers`,
    ans: (
      <>
        <p>SELECT content FROM new_sms_download </p>
        <p>WHERE content REGEXP '[^0-9]'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data which contains only non-alphanumeric characters`,
    ans: (
      <>
        <p>SELECT content FROM new_sms_download</p>
        <p>WHERE content NOT REGEXP '[a-z0-9]'</p>
      </>
    ),
  },
  {
    que: `select data which is as a result of the combination of multiple columns into a single one. Eg. select date from the database whose columns are day,mon,yr,`,
    ans: (
      <>
        <p>SELECT CONCAT(day," ",month," ",yr) AS fullDate FROM buyers</p>
      </>
    ),
  },
  {
    que: `select data which is as a result of a mathemical computation. Eg. select student's ages in the next 5 years`,
    ans: (
      <>
        <p>SELECT age+5 AS futureAge FROM Students</p>
      </>
    ),
  },
  {
    que: `produce data results in capitalized form`,
    ans: (
      <>
        <p>SELECT DISTINCT UPPER(country) FROM new_sms_download</p>
      </>
    ),
  },
  {
    que: `produce data results in small letters form`,
    ans: (
      <>
        <p>SELECT DISTINCT LOWER(country) FROM new_sms_download</p>
      </>
    ),
  },
  {
    que: `produce the square root of a data column`,
    ans: (
      <>
        <p>SELECT SQRT(id) FROM new_sms_download</p>
      </>
    ),
  },
  {
    que: `select the average value of a column data`,
    ans: (
      <>
        <p>SELECT AVG(room_total_beds) FROM room</p>
      </>
    ),
  },
  {
    que: `select the total value of a column's data`,
    ans: (
      <>
        <p>SELECT SUM(room_beds_vacant) FROM room</p>
      </>
    ),
  },
  {
    que: `find the total number of rows in a table`,
    ans: (
      <>
        <p>SELECT COUNT(*) AS totalRows from new_sms_download</p>
        <p>can be used with other functions as well eg. </p>
        <p>SELECT COUNT(DISTINCT(country)) FROM new_sms_download</p>
      </>
    ),
  },
  {
    que: `select the highest value in a column`,
    ans: (
      <>
        <p>SELECT MAX(id) from new_sms_download</p>
      </>
    ),
  },
  {
    que: `select the lowest value in a column`,
    ans: (
      <>
        <p>SELECT MIN(id) from new_sms_download</p>
      </>
    ),
  },
  {
    que: `find the total number of/sum/avg/min/max of a column A for each distinct value of column B. Eg. find the total number of people in each country`,
    ans: (
      <>
        <p>SELECT country, COUNT(gender) AS population, AVG(id)</p>
        <p>FROM new_sms_download</p>
        <p>GROUP BY country</p>
      </>
    ),
  },
  {
    que: `write an sql statement to combine, aggregate functions, group by, where, having, order`,
    ans: (
      <>
        <p>SELECT country, COUNT(gender) AS population, AVG(id) </p>
        <p>FROM new_sms_download</p>
        <p>WHERE country REGEXP '[a-m]%'</p>
        <p>GROUP BY country </p>
        <p>HAVING population {"<"} 100</p>
        <p>ORDER BY population DESC, country ASC</p>

        <p>or</p>
        <p>
          select student.id, student.fname, max(fees.date_paid) from student
        </p>
        <p>left join academic_year on academic_year.student_id = student.id</p>
        <p>left join fees on fees.student_id = student.id</p>
        <p>where student.age {">"} 20</p>
        <p>group by student.id, student.fname</p>
      </>
    ),
  },
  {
    que: `display the count of duplicates in a column. eg. FInd the number of duplicate usernames`,
    ans: (
      <>
        <p>SELECT username, COUNT(*) AS Duplicates</p>
        <p>FROM students</p>
        <p>GROUP BY username</p>
        <p>HAVING Duplicates {">"} 1</p>
        <p>ORDER BY Duplicates DESC</p>
      </>
    ),
  },
  {
    que: `display the duplicate rows/column values in a table`,
    ans: (
      <>
        <p>SELECT * FROM students AS A</p>
        <p>JOIN (</p>
        <p>SELECT username, COUNT(*) AS Duplicates</p>
        <p>FROM students</p>
        <p>GROUP BY username</p>
        <p>HAVING Duplicates {">"} 1 </p>
        <p>) AS B</p>
        <p>on A.username = B.username</p>
        <p>ORDER BY A.username</p>
      </>
    ),
  },
  {
    que: `write an sql statement that uses a subquery`,
    ans: (
      <>
        <p>SELECT country, AVG(id) as AvgID FROM new_sms_download </p>
        <p>GROUP BY country</p>
        <p> HAVING AvgID {">"}</p>
        <p>
          (SELECT AVG(id) FROM new_sms_download) /**run innermost query first*/{" "}
        </p>
        <p> ORDER BY AvgID ASC, country ASC</p>
      </>
    ),
  },
  {
    que: `A table called country has 2 columns: name, population. How would you write a query to select the country with the least population`,
    ans: (
      <>
        <p>SELECT country FROM countries</p>
        <p>WHERE population = </p>
        <p>{"("}</p>
        <p>SELECT MIN(population) FROM countries</p>
        <p>{")"}</p>
      </>
    ),
  },
  {
    que: `alias a column and table in a single query`,
    ans: (
      <>
        <p>SELECT name AS countryName FROM country AS C</p>
        <p>WHERE c.continent = "Africa"</p>
      </>
    ),
  },
  {
    que: `combine different sql queries into a single result table rather than as separate table results`,
    ans: (
      <>
        <p>SELECT * FROM country WHERE continent = "Africa"</p>
        <p>UNION</p>
        <p>SELECT * FROM country WHERE continent = "Asia"</p>
        <p>
          NB: whenever you use unions, your columns returned in each query has
          to be the same. Use UNION ALL to return duplicates in both queries
        </p>
      </>
    ),
  },
  {
    que: `create a view`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>CREATE VIEW myCustomView -- CREATE VIEW view_name</p>
        <p>AS</p>
        <p>{"("}</p>
        <p>SELECT * FROM country</p>
        <p>{")"}</p>
      </>
    ),
  },
  {
    que: `view list of created views`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>
          SELECT TABLE_SCHEMA,TABLE_NAME -- the keyword is literally TABLE_NAME
        </p>
        <p>FROM information_schema.VIEWS</p>
        <p>or</p>
        <p>**MS SQL SERVER**</p>
        <p> SELECT * FROM sys.views</p>
      </>
    ),
  },
  {
    que: `query a view / display the contents of a view`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>SELECT * FROM view_name;</p>
        <p>eg. </p>
        <p>SELECT * FROM myCustomView;</p>
      </>
    ),
  },
  {
    que: `update the query statement of a view`,
    ans: (
      <>
        <p>**MS SQL Server && MySQL**</p>
        <p>ALTER VIEW myCustomView</p>
        <p>AS</p>
        <p>{"("}</p>
        <p>SELECT continent FROM country</p>
        <p>{")"}</p>
      </>
    ),
  },
  {
    que: `delete a view`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>DROP VIEW view_name</p>
        <p>eg. </p>
        <p>DROP VIEW myCustomView</p>
      </>
    ),
  },
  {
    que: `create a stored procedure that takes no parameters`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>CREATE PROCEDURE viewStates -- CREATE PROCEDURE procedure_name</p>
        <p>AS</p>
        <p>SELECT * FROM state</p>
        <p>**MySQL**</p>
        <p>DELIMITER // -- DELIMITER // is required</p>
        <p>CREATE PROCEDURE viewStates()</p> -- CREATE PROCEDURE
        procedure_name()
        <p>BEGIN -- BEGIN is required</p>
        <p>SELECT * FROM state; -- ; is required</p>
        <p>END // -- END // is required</p>
        <p>DELIMITER ; -- DELIMITER ; is required</p>
      </>
    ),
  },
  {
    que: `execute a user-defined stored procedure that takes no parameter`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>EXEC viewStates --EXEC procedure_name;</p>

        <p>**MySQL**</p>
        <p>call viewStates() -- call procedure_name()</p>
      </>
    ),
  },
  {
    que: `create a stored procedure that takes multiple parameters`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>CREATE PROCEDURE filterStates --procedure_name</p>
        <p>@minID int, @maxID int, @cityName nvarchar(10) --parameters</p>
        <p>AS</p>
        <p>SELECT * FROM state</p>
        <p>WHERE id BETWEEN @minID AND @maxID --using parameters</p>
        <p>AND name LIKE @cityName</p>

        <p>**MySQL**</p>
        <p>DELIMITER //</p>
        <p>CREATE PROCEDURE filterStates(</p>
        <p>
          IN minID int,IN maxID int,IN cityName varchar(50) -- IN rep input, OUT
          rep output
        </p>
        <p>)</p>
        <p>BEGIN</p>
        <p>SELECT * FROM state</p>
        <p>WHERE (id BETWEEN minID AND maxID)</p>
        <p>AND name LIKE cityName;</p>
        <p>END //</p>
        <p>DELIMITER ;</p>
      </>
    ),
  },
  {
    que: `execute a user-defined stored procedure that takes multiple parameters`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>EXEC filterStates</p>
        <p>@minID = 2, @maxID = 10, @cityName = '[a-c]%'</p>

        <p>**MySQL**</p>
        <p>CALL filterStates(2,10,'a%')</p>
      </>
    ),
  },
  {
    que: `create a stored procedure that takes a parameter variable as a list/array. eg. a stored procedure where the parameter is a given list of continents and displays countries in those continents`,
    ans: (
      <>
        <p>**MS SQL SERVER** </p>
        <p>
          --1. define the data type for the parameter in the stored procedure
          which would store the list of values.
        </p>
        <p>-- AS TABLE means the variable would be a list/table/array</p>
        <p>CREATE TYPE continentListType AS TABLE</p>
        <p>(</p>
        <p>
          continentName varchar(max) -- the data type for the parameter list
          values should be the same as the data type of the values you'd fetch
          from the table
        </p>
        <p>)</p>
        <p>--2. use the data type in your stored procedure code</p>
        <p>CREATE PROCEDURE filterCountries</p>
        <p>
          @continents continentListType READONLY, --parameter which is a list
        </p>
        <p>@minPopulation int --single value parameter</p>
        <p>AS</p>
        <p>SELECT * FROM country </p>
        <p>WHERE</p>
        <p>
          continent IN ( SELECT continentName FROM @continents) --we retrieve
          the values stored inside the parameter list table and pass it to the
          IN statement
        </p>
        <p>AND</p>
        <p>population {">"} @minPopulation</p>

        <p>**MySQL**</p>
        <p>DELIMITER //</p>
        <p>CREATE PROCEDURE filterCountries </p>
        <p>(</p>
        <p>IN continentList TEXT, -- parameter to store list of values</p>
        <p>IN minPopulation int</p>
        <p>)</p>
        <p>BEGIN</p>
        <p>SELECT * FROM country</p>
        <p>
          WHERE FIND_IN_SET(continent, continentList) -- {"=>"} WHERE continent
          in continentList
        </p>
        <p>AND population {">"} minPopulation;</p>
        <p>END //</p>
        <p>DELIMITER ;</p>
      </>
    ),
  },
  {
    que: `execute a user-defined stored procedure that takes a parameter as a list/array`,
    ans: (
      <>
        <p>**MS SQL SERVER</p>
        <p>
          --Before you call a stored procedure which takes a parameter as a
          list, you must perform all these 3 actions at the same time in one
          query
        </p>
        <p>--a. declare a variable to save the the list of values</p>
        <p>DECLARE @continentArr continentListType</p>
        <p>--b. insert the values into the declared variable</p>
        <p>INSERT into @continentArr VALUES</p>
        <p>('Africa'), ('Asia')</p>
        <p>--c. call your stored procedure</p>
        <p>EXEC filterCountries @continentArr, @minPopulation=500</p>
        <p>-- NB: to drop a defined type</p>
        <p>DROP TYPE continentListType</p>

        <p>**MySQL**</p>
        <p>CALL filterCountries('Africa,Asia',500)</p>
      </>
    ),
  },
  {
    que: `view list of stored procedures`,
    ans: (
      <>
        <p>**MS SQL SERVER && MySQL**</p>
        <p>SELECT ROUTINE_TYPE, ROUTINE_NAME</p>
        <p>FROM INFORMATION_SCHEMA.ROUTINES</p>
        <p>WHERE ROUTINE_TYPE = 'PROCEDURE';</p>

        <p>**MS SQL SERVER**</p>
        <p>SELECT * FROM sys.procedures;</p>

        <p>**MySQL**</p>
        <p>SHOW PROCEDURE STATUS</p>
      </>
    ),
  },
  {
    que: `display the syntax of a user-defined stored procedure`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>sp_helptext 'filterStates' --stored procedure name</p>

        <p>**MySQL**</p>
        <p>SHOW CREATE PROCEDURE filterStates -- stored procedure name</p>
        <p>
          -- click 'Extra Options' button in query results section and check
          'Full texts' to see the truncated procedure definition in full
        </p>
      </>
    ),
  },
  {
    que: `rename a user-defined stored procedure`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>
          sp_rename 'filterStates','viewStates' --oldProcedure_name,
          newProcedure_name
        </p>

        <p>**MySQL**</p>
        <p>UPDATE `mysql`.`proc`</p>
        <p>SET name = 'viewStates', -- newProcedure_name</p>
        <p>specific_name = 'viewStates' -- newProcedure_name</p>
        <p>WHERE db = 'practicejoins' AND</p>
        <p>name = 'filterStates'; -- oldProcedure_name</p>
      </>
    ),
  },
  {
    que: `update the syntax of a user-defined stored procedure`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>ALTER PROCEDURE viewStates --procedure_name</p>
        <p>AS</p>
        <p>BEGIN</p>
        <p>SELECT * FROM state</p>
        <p>END</p>

        <p>**MySQL**</p>
        <p>
          There is no statement in MySQL for modifying the parameters or the
          body of a stored procedure. To change parameters or the body, drop the
          stored procedure and create a new one.
        </p>
      </>
    ),
  },
  {
    que: `delete a user made stored procedure`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>DROP PROCEDURE viewStates --procedure_name</p>
      </>
    ),
  },
  {
    que: `declare an empty variable and print it`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>DECLARE @localVariable datatype [ = value ] </p>
        <p>eg.</p>
        <p>DECLARE @age int</p>
        <p>
          PRINT @age --the query you execute to print the variable must also
          contain the variable declaration
        </p>
      </>
    ),
  },
  {
    que: `declare a variable with an initial value and print it`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>DECLARE @localVariable datatype [ = value ] </p>
        <p>eg.</p>
        <p>DECLARE @gender varchar (10) = 'male'</p>
        <p>
          PRINT @gender --the query you execute to print the variable must also
          contain the variable declaration
        </p>
      </>
    ),
  },
  {
    que: `declare a variable with/without an initial value, then reassign the variable before printing it`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>
          DECLARE @firstName varchar(50) ='Samuel Asare', @lastName varchar(50)
          = 'Botwe'
        </p>
        <p>
          SELECT @firstName='Samuel', @lastName = 'Asare-Botwe' --SELECT can be
          used in place of SET and unlike SET, it allows you to assign multiple
          variables in one go
        </p>
        <p>
          PRINT @fiRstName -- like SQL keywords, variables are case-insensitive
        </p>
        <p>PRINT @lastName</p>
      </>
    ),
  },
  {
    que: `save the result of an sql query into a variable(s). Eg. store the name and score of the studen who scored the highest marks`,
    ans: (
      <>
        <p>-- variables to store results</p>
        <p>DECLARE @stdname varchar(20), @score int</p>

        <p>-- query to save into variables</p>
        <p>SELECT @stdname=name, @score=marks FROM student</p>
        <p>WHERE marks = (</p>
        <p>SELECT MAX(marks) FROM student</p>
        <p>)</p>
        <p>
          -- NB:Assume that, we assigned a value from table to a variable and
          the result set of the SELECT statement returns more than one row. The
          last row of the resultset will be assigned to the variable
        </p>

        <p>--print variables</p>
        <p>PRINT @stdname</p>
        <p>PRINT @score</p>
      </>
    ),
  },
  {
    que: (
      <>
        <p>
          A newly registered student's data is being added to the 'Students'
          table in the 'school' database. Create a trigger that should delete
          the record of that student from the alumni table before
          entering/registering the student in the Students table.
        </p>
        <span style={{ fontStyle: "italic" }}>P.S</span> Assuming you're using
        data from the 'triggers test' excel file
      </>
    ),
    ans: (
      <>
        <p>
          Whole reasoning behind task: Before you insert into this table, do
          something with the data {"=>"} the use of 'BEFORE INSERT' trigger in
          MySQL and the use of 'INSTEAD OF' trigger in MS SQL SERVER.
        </p>
        <p>
          --NB: 1. With MySQL's 'BEFORE' trigger option, it triggers an action
          before we insert/update/delete on table. Eg. Here, it would delete the
          student's record in the alumni table before it inserts new record into
          the students table. With MS SQL SERVER's 'INSTEAD OF' trigger option,
          it triggers an action and then skips the insert/update/delete on the
          table. Eg. So here it would delete the student's record in the alumni
          table alright. But it would skip, thus it wouldnt go on to insert the
          new record into the student's table. Hence, the name INSTEAD OF. ie.
          instead of insert/update/delete, fire this action instead.
        </p>
        <p>
          NB:2. With the 'AFTER' trigger option, it works the same way in both
          MS SQL and MySQL ie. it fires the action after the
          insert/update/delete command has completed.
        </p>
        <p>**MS SQL SERVER**</p>
        <p>CREATE TRIGGER students_table_insert -- define a new trigger</p>
        <p>
          ON Students -- trigger should fire when something is being done to
          this table
        </p>
        <p>
          INSTEAD OF INSERT -- what is the trigger option and command(ie.
          INSTEAD OF/BEFORE/AFTER insert/update/delete)
        </p>
        <p>AS</p>
        <p>BEGIN -- what should the trigger do</p>
        <p>
          SET NOCOUNT ON; -- Optional: this will prevent us from being noted
          that a trigger query has executed. We wwant the trigger to run
          silently
        </p>
        <p>
          /** instead of/before inserting, we want to do something with the data
          being inserted. Now how do we get access to that data which used for
          the insert? It is stored by SQL in a table called INSERTED. We can
          verify and see what's in the table by doing SELECT * FROM INSERTED. So
          for instance, if are inserting values for IndexNo, FullName, Age into
          the Students table and knowing this data is stored in INSERTED, we can
          access the data in the trigger with [tablename].[columnName], ie. if
          we want the student FullName, we have it in INSERTED.FullName */
        </p>
        <p>
          -- instead of/before we insert, we want to do something with the data
          thus delete that student's record in the alumni table and we need the
          student's index number for that
        </p>

        <p>
          -- create variable to store student's index number from the user's
          insert query
        </p>
        <p>DECLARE @insertedStdIdxNumber int</p>

        <p>
          --we fetch the indexnumber inside the INSERTED table and copy to our
          variable
        </p>
        <p>SELECT @insertedStdIdxNumber=IndexNo FROM INSERTED</p>

        <p>
          --now we go to our alumni table and use the retrieved index number to
          delete the record
        </p>
        <p>DELETE FROM Alumni WHERE StdIdxNum = @insertedStdIdxNumber</p>
        <p>END</p>
      </>
    ),
  },
  {
    que: `When you manipulate your database, you can fire a trigger action that
    should do something with the data you used or a trigger action that should just go 
    and perform some other query or function elsewhere.
    Create a simple trigger which should display the data that was being used incase you wanted to do 
    something with that data`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>CREATE TRIGGER trigger1 ON Students</p>
        <p>AFTER INSERT</p>
        <p>AS</p>
        <p>BEGIN</p>
        <p>SELECT * FROM INSERTED</p>
        <p>END</p>

        <p>GO</p>

        <p>--Testing trigger</p>
        <p>INSERT INTO students (indexNo,fullname,age)</p>
        <p>VALUES</p>
        <p>(192,'Sam',13)</p>
      </>
    ),
  },
  {
    que: (
      <>
        <p>
          Once a newly registered student's data has been added to the
          'students' table in the 'school' database, create a trigger that
          should go to the 'StudentsAdmissionYears' table and add a new record
          containing that student's index number and current year as the
          admssion year
          <span style={{ fontStyle: "italic" }}>P.S</span> Assuming you're using
          data from the 'triggers test' excel file
        </p>
      </>
    ),
    ans: (
      <>
        <p>
          Whole reasoning behind task: After you insert into this table, do
          something with the data {"=>"} AFTER INSERT trigger
        </p>
        <p>**MS SQL SERVER**</p>
        <p>CREATE TRIGGER addToAdmissionTable ON Students</p>
        <p>AFTER INSERT</p>
        <p>AS</p>
        <p>BEGIN</p>
        <p>SET NOCOUNT ON</p>
        <p>
          DECLARE @idxNoRetrieved INT --variable to store idx number that user
          inserted into the students table
        </p>
        <p>
          SELECT @idxNoRetrieved=IndexNo FROM INSERTED -- we fetch it from the
          INSERTED table and save the index number
        </p>
        <p>-- then we insert our stored index number to our other table</p>
        <p>INSERT INTO StudentAdmissionYears(StdIdxNum, AdmissionYear)</p>
        <p>VALUES</p>
        <p>(@idxNoRetrieved, 2022)</p>
        <p>END</p>
      </>
    ),
  },
  {
    que: `write a statement that should trigger an action before/after a record is updated in a table. 
    Eg. when a student's index no in the students table is updated, we want it to reflect in the admissionstable too`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>CREATE TRIGGER updateAdmissionTableIdxNum ON Students</p>
        <p>AFTER UPDATE</p>
        <p>
          -- NB: INSTEAD OF UPDATE does not go on to update the user's query
          record after the trigger has fired. AFTER UPDATE goes on to delete the
          user's query record after trigger
        </p>
        <p>AS</p>
        <p>BEGIN</p>
        <p>SET NOCOUNT ON</p>

        <p>
          --variable to store studentidxnumber and row ID from the user's update
          query
        </p>
        <p>DECLARE @idxNoRetrieved INT, @IDRetrieved INT </p>

        <p>-- copy the user query data to our variables</p>
        <p>SELECT @idxNoRetrieved=IndexNo, @IDRetrieved=ID </p>
        <p>
          FROM INSERTED -- also in the UPDATE TRIGGER, our data is stored in the
          INSERTED table
        </p>

        <p>-- then we update the idxNumber in the admissionsTable elsewhere</p>
        <p>UPDATE StudentAdmissionYears</p>
        <p>SET StdIdxNum= @idxNoRetrieved WHERE ID=@IDRetrieved</p>
        <p>END</p>
      </>
    ),
  },
  {
    que: `write a statement that should trigger an action before/after a record is deleted in a table. 
    Eg. before/after a student's record is deleted from the students table, we want to save their data in the alumni table`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>CREATE TRIGGER saveStdIntoAlumniTable ON Students</p>
        <p>INSTEAD OF DELETE</p>
        <p>
          -- NB: INSTEAD OF DELETE does not go on to delete the user's query
          record after the trigger has fired. AFTER DELETE goes on to delete the
          user's query record after trigger
        </p>
        <p>AS</p>
        <p>BEGIN</p>
        <p>SET NOCOUNT ON</p>

        <p>
          --variable to store studentidxnumber and studentname from the user's
          delete query
        </p>
        <p>DECLARE @idxNoRetrieved INT, @nameRetrieved varchar(50)</p>

        <p>-- copy the user query data to our variables</p>
        <p>SELECT @idxNoRetrieved=IndexNo, @nameRetrieved=FullName</p>
        <p>
          FROM DELETED -- unlike INSERT and UPDATE triggers, our data is stored
          in the DELETED table
        </p>

        <p>-- then we insert the student's data into alumni table</p>
        <p>INSERT INTO Alumni VALUES</p>
        <p>(@idxNoRetrieved,@nameRetrieved)</p>

        <p>END</p>
      </>
    ),
  },
  {
    que: `view the list of created triggers`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SELECT * FROM sys.triggers</p>
      </>
    ),
  },
  {
    que: `modify the syntax of a created trigger`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>ALTER TRIGGER studentsTrigger</p>
        <p>ON Students</p>
        <p>AFTER INSERT</p>
        <p>AS</p>
        <p>BEGIN</p>
        <p>SET NOCOUNT ON</p>
        <p>SELECT age FROM INSERTED</p>
        <p>END</p>
      </>
    ),
  },
  {
    que: `rename a trigger`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>
          sp_rename 'students_table_insert', 'studentsTrigger' --oldname,
          newname
        </p>
      </>
    ),
  },
  {
    que: `delete a trigger`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>DROP TRIGGER trigger_name</p>
      </>
    ),
  },
  { que: `cursors`, ans: null },
  { que: `user defined functions(UDF), if and else statement`, ans: null },
  { que: `data modelling in sql`, ans: null },
  { que: `creating, calling, using, deleting schemas`, ans: null },
  {
    que: `import data from txt file format`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>Does not require the table to be created before import</p>
        <p>
          right click the database name from the object explorer {"->"} Tasks
          {"->"} Import Flat File ... {"->"} Run through the wizard to import
          the data
        </p>
      </>
    ),
  },
  {
    que: `import data from csv file format`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>METHOD 1</p>
        <p>
          Does not require the table to be created before import. Same approach
          as importing from .txt file
        </p>
        <p>--------------</p>
        <p>METHOD 2</p>
        <p>Using sql(requires existing table to be created)</p>
        <p>
          BULK INSERT customerSales --exisiting empty table_name whose columns
          have been designed to match incoming data
        </p>
        <p>FROM "C:\Users\Samuel\Documents\sales.csv"</p>
        <p>WITH</p>
        <p>(</p>
        <p>FORMAT = 'CSV',</p>
        <p>
          FIRSTROW =2, --2 is for row where data begins. First row contains
          column names
        </p>
        <p>FIELDTERMINATOR = ',',</p>
        <p>ROWTERMINATOR = '\n'</p>
        <p>
          -- ROWTERMINATOR = '0x0a',--Files are generated with this row
          terminator in Google Bigquery
        </p>
        )
        <p>
          'NB: if data being imported contains dates, the date should be in the
          US format before importing ie. 'MM/DD/YYYY. Inside SQL, using the
          'date' datatype produces dates in the format 'YYYY-MM-DD'
        </p>
      </>
    ),
  },
  {
    que: `import data from xlsx file format`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>Does not require the table to be created before import</p>
        <p>
          Install the 32 and 64bit version of Microsoft Access Database Engine
          2016 Redistributable. NB: Windows won't allow you to install the 32bit
          version saying you already have the 64 bit version installed, so to
          workaround this run the installer with the /quiet flag ie.
          accessdatabaseengine.exe /quiet
        </p>
        <p>
          right click the database name from the object explorer {"->"} Tasks
          {"->"} Import Data ... {"->"} Run through the wizard to import the
          data
        </p>
        <p>From the import wizard:</p>
        <p>
          Data Source: select "Microsoft Excel" and choose excel version that
          matches your imported workbook version. use the latest version from
          the list if your workbook is more recent and cannot be found in the
          list
        </p>
        <p>
          Data Destination: select "Microsoft OLE DB Driver for SQL Server".
          Then go to Properties to choose the type of connection (Windows
          Authentication/SQL Server Authentiation) to use. To know your current
          connection type, go to the SSMS Object Explorer menu {"->"} Connect
          {"->"} Database Engine...
        </p>
      </>
    ),
  },
  {
    que: `import multiple tables from a single excel worksheet to sql server`,
    ans: (
      <>
        <p>
          using the import wizard, import the xlsx worksheet then at the
          "Specify Table Copy or Query" section of the import wizard, use the
          "Copy data from one or more tables or views" option to allow you to
          select the tables you want from the worksheet
        </p>
      </>
    ),
  },
  {
    que: `import data from ms access file`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>Does not require the table to be created before import</p>
        <p>
          Install the 32 and 64bit version of Microsoft Access Database Engine
          2016 Redistributable. NB: Windows won't allow you to install the 32bit
          version saying you already have the 64 bit version installed, so to
          workaround this run the installer with the /quiet flag ie.
          accessdatabaseengine.exe /quiet
        </p>
        <p>
          right click the database name from the object explorer {"->"} Tasks
          {"->"} Import Data ... {"->"} Run through the wizard to import the
          data
        </p>
        <p>From the import wizard:</p>
        <p>
          Data Source: select "Microsoft Excel" and choose excel version that
          matches your imported workbook version. use the latest version from
          the list if your workbook is more recent and cannot be found in the
          list
        </p>
        <p>
          Data Destination: select "Microsoft OLE DB Driver for SQL Server".
          Then go to Properties to choose the type of connection (Windows
          Authentication/SQL Server Authentiation) to use. To know your current
          connection type, go to the SSMS Object Explorer menu {"->"} Connect
          {"->"} Database Engine...
        </p>
      </>
    ),
  },
  {
    que: `import tables from multiple excel workbooks`,
    ans: (
      <>
        <p>Using SSIS</p>
        <p>https://www.youtube.com/watch?v=TH9ptAkCHNA</p>
        <p>https://www.youtube.com/watch?v=GAvlUX1Vb14</p>
      </>
    ),
  },
  { que: `import data from .pdf file format`, ans: null },
  {
    que: `import data from .sql file format`,
    ans: null,
  },
  {
    que: `import data from outlook file`,
    ans: null,
  },
  { que: `import data from webpage`, ans: null },
  {
    que: `import and append data from multiple sources into the same table in sql server`,
    ans: null,
  },
  {
    que: `import an sql script file containing database data`,
    ans: `File -> Open -> File -> then select SQL file OR Ctrl+O -> then select sql file`,
  },
  {
    que: `create/generate/export an sql script file from your database which contains data with or without objects and schema`,
    ans: `NB: This approach creates a script in which the database is being created as well
    Right click your database -> Tasks -> Generate Scripts -> 
    Click 'Next' on the Generate and Publish Scripts Wizard Introduction screen ->
    Select the database objects to script(entire db or specific db objects) and click 'Next'
    Click on the 'Advanced' button ->
    Under 'General' -> 'Types of data to script' option, select 'Schema and Data' from the dropdown. 
    Click ok and specify how the script should be saved ie. Save as script file
    Review your choices and then click 'Next'`,
  },
  {
    que: `export sql table data into excel,csv,txt,pdf format`,
    ans: null,
  },
  {
    que: `open power bi and import sql data into it using the "Import data from SQL Server" feature`,
    ans: null,
  },
  {
    que: `Export the table from one database to another database`,
    ans: null,
  },
  {
    que: `Copy Database From One Server to Another Server in SQL`,
    ans: null,
  },
  { que: `events (MySQL)`, ans: `` },
  { que: `commit and rollback`, ans: null },
];

/**
 https://www.digitalocean.com/community/tutorials/sql-commit-sql-rollback
 https://www.youtube.com/watch?v=m4RtVdluNPM
 https://www.simplilearn.com/tutorials/sql-tutorial/schema-in-sql#:~:text=DevelopmentExplore%20Program-,What%20is%20Schema%20in%20SQL%3F,user%20who%20constructs%20the%20object.
 https://learn.microsoft.com/en-us/sql/t-sql/statements/create-trigger-transact-sql?view=sql-server-ver16
 https://www.youtube.com/watch?v=xmfyzqfvLCs
 https://www.youtube.com/watch?v=clK8kPZi_4w
 https://www.youtube.com/watch?v=YlBL1hNR8Pg
 https://www.youtube.com/watch?v=i-a4bQoAg8E&list=PLIAyxElqji2SiORUKAhcs17ejUup7zgiJ&index=1
 https://www.youtube.com/playlist?list=PLIAyxElqji2TQ1yXj4RxwdpE7B1KfGc9i
 https://www.youtube.com/watch?v=t2R0-xcKw44
 https://www.youtube.com/watch?v=ABwD8IYByfk
 https://www.youtube.com/watch?v=Il6m6vuMZXs
 https://www.w3schools.com/sql/sql_injection.asp
 https://www.youtube.com/watch?v=wcaiKgQU6VE
 https://www.youtube.com/watch?v=gm_FH8YNHtc
 https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-cursor/
 https://www.nuttyabouthosting.co.uk/knowledgebase/article/how-to-generate-database-scripts-with-data-in-sql-server
 https://learn.microsoft.com/en-us/sql/relational-databases/import-export/import-flat-file-wizard?view=sql-server-ver16s
 https://www.youtube.com/watch?v=6_95vbBrrXI
 https://www.w3schools.com/sql/sql_ref_sqlserver.asp
 https://www.w3schools.com/sql/sql_dates.asp#:~:text=SQL%20Server%20comes%20with%20the,%2DDD%20HH%3AMI%3ASS
 https://www.geeksforgeeks.org/how-to-specify-a-date-format-on-creating-a-table-and-fill-it-in-sql/
 */
