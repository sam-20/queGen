export const SQLI = [
  {
    que: `What are some of the challenges you experienced using SQL?`,
    ans: null,
  },
  {
    que: `What is Schema in SQL?`,
    ans: `A database schema defines how data is organized within a relational database; this is inclusive of logical constraints such as, table names, fields, data types, and the relationships between these entities`,
  },
  {
    que: `what is a composite primary key`,
    ans: ``,
  },
  {
    que: `what are events, triggers, views and stored procedures`,
    ans: ``,
  },
  {
    que: `what is the difference between views and stored procedures in sql? When should you use either?`,
    ans: ``,
  },
  {
    que: `what is the difference between SQL and Transact-SQL `,
  },
  {
    que: `what is the use of Begin/End Blocks and the Go keyword in SQL?`,
  },
  {
    que: `what is a transaction in sql with an example?`,
    ans: `A transaction is a single unit of work. 
    If a transaction is successful, all of the data modifications made during the transaction are committed and become a permanent part of the database. If a transaction encounters errors and must be canceled or rolled back, then all of the data modifications are erased. 
    For example, if you are creating a record or updating a record or deleting a record from the table, then you are performing a transaction on that table.`,
  },
  {
    que: `what are the types of database backups you can make in SQL server`,
    ans: (
      <>
        <p>
          1. Full Backup: backup all of the data and everthing in the database
        </p>
        <p>
          2. Differential backup: backup only data that has changed since the
          last full backup. This uses less time and is quicker since it only
          compares for changes and makes the backup of those changes
        </p>
        <p>3.Transaction Log backup: backup the SQL transaction log</p>
      </>
    ),
  },
  {
    que: `what are some ways to recover data accidentally deleted from the database`,
    ans: ``,
  },
  {
    que: `how would you migrate data from one sql server version to another`,
    ans: ``,
  },
  {
    que: `how would you handle redundant data in your database`,
    ans: ``,
  },
  {
    que: `what is SQL injection`,
    ans: ``,
  },
  {
    que: `What is the difference between DELETE and truncate in SQL?`,
    ans: `The DELETE command in SQL removes one or more rows from a table based on the conditions specified in those rows. SQL's TRUNCATE command is used to purge a table of all of its rows, regardless of whether or not any conditions are met`,
  },
];
