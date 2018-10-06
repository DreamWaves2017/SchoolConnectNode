
--drop table dbo.feedetails
CREATE TABLE dbo.feedetails
(
  feeid smallserial,
  classid smallint references dbo.class(classid),
  feesdesc character varying(500),
  startdt date NOT NULL,
  enddt date NOT NULL,
  fineamount double precision NOT NULL,
  graceperiod double precision default(15)  
);
create unique index idxfee on dbo.feedetails(classid,feesdesc,startdt,enddt);

select * from  dbo.feedetails

insert into dbo.feedetails (classid,feesdesc,startdt,enddt,fineamount,graceperiod)
values(1,'Term Fees','01-Jan-2018','31-Mar-2018',100,20)

insert into dbo.feedetails (classid,feesdesc,startdt,enddt,fineamount,graceperiod)
values(12,'Term Fees','01-Jan-2018','31-Mar-2018',5000,20);

insert into dbo.feedetails (classid,feesdesc,startdt,enddt,fineamount,graceperiod)
values(13,'Term Fees','01-Jan-2018','31-Mar-2018',10000,20);

insert into dbo.feedetails (classid,feesdesc,startdt,enddt,fineamount,graceperiod)
values(13,'Book Fees','01-Jan-2018','31-Mar-2018',1000,20);


select * from dbo.class

Create table dbo.FeeDetails
(ClassID int not null,
FeesDesc varchar(500),
StartDt date not null,
EndDt date not null,
FineAmount float not null)

--drop table dbo.Class

Create table dbo.Class
(ClassID smallserial primary key,
ClassName varchar(50))

--truncate table dbo.Class
select * from dbo.Class



/*
INSERT INTO dbo.class(classname) VALUES ('PreKG');
INSERT INTO dbo.class(classname) VALUES ('LKG');
INSERT INTO dbo.class(classname) VALUES ('I Std');
INSERT INTO dbo.class(classname) VALUES ('II Std');
INSERT INTO dbo.class(classname) VALUES ('III Std');
INSERT INTO dbo.class(classname) VALUES ('IV Std');
INSERT INTO dbo.class(classname) VALUES ('V Std');
INSERT INTO dbo.class(classname) VALUES ('VI Std');
INSERT INTO dbo.class(classname) VALUES ('VII Std');
INSERT INTO dbo.class(classname) VALUES ('VIII Std');
INSERT INTO dbo.class(classname) VALUES ('IX Std');
INSERT INTO dbo.class(classname) VALUES ('X Std');
INSERT INTO dbo.class(classname) VALUES ('XI Std');
INSERT INTO dbo.class(classname) VALUES ('XII Std');
*/
Create table dbo.mapStudentTofees
(feeid integer not null,
enrollid integer not null,
classid integer not null,
ispaid bit default('0')
)

insert into dbo.mapStudentTofees (feeid,enrollid,classid,ispaid)
values(1,1,1,'1')

select * from dbo.mapStudentTofees

--drop table dbo.enrollStudent
create table dbo.enrollStudent
(EMISID bigint not null,
enrollid bigserial primary key
)
DROP INDEX dbo.idxenroll;
 on dbo.enrollStudent
create unique index idxEnroll on dbo.enrollStudent(enrollid)
--drop table mapStudentTofees
select * from dbo.enrollstudent

/*
insert into dbo.enrollstudent
select 123456789123456789


insert into dbo.enrollstudent
select 123456789123456788

*/
--drop table dbo.StudentDetails
create table dbo.StudentDetails
( enrollid bigint  references dbo.enrollStudent(enrollid),
FirstName varchar(50) not null,
MiddleName varchar(50),
LastName varchar(50) not null,
FatherName varchar(50) not null,
MotherName varchar(50) not null,
Nationality varchar(50) not null,
Sex varchar(15) not null,
DateOfAdmission date not null,
ClassOfAdmission smallint,
DateOfBirth date not null,
Community varchar(100) 
)
/*
insert into dbo.StudentDetails	(enrollId,firstname,lastname,fathername,mothername,Nationality,sex,dateofadmission,DateOfBirth)
values ( 1,'Dinakaran','chandrasekaran','chandrasekaran','Poongothai','Indian','Male','2011-01-01','1983-07-29')

insert into dbo.StudentDetails	(enrollId,firstname,lastname,fathername,mothername,Nationality,sex,dateofadmission,DateOfBirth)
values ( 2,'sathya','rajendran','Rajendran','Mother','Indian','Male','2015-01-01','1986-01-29')
*/
--drop table dbo.sectiondetails;
create table dbo.sectiondetails
(sectionid smallserial primary key,
section varchar(3) not null)

/*
insert into dbo.sectiondetails (section) values ('A');
insert into dbo.sectiondetails (section) values ('B');
insert into dbo.sectiondetails (section) values ('C');
insert into dbo.sectiondetails (section) values ('D');
insert into dbo.sectiondetails (section) values ('E');
insert into dbo.sectiondetails (section) values ('F');
insert into dbo.sectiondetails (section) values ('G');
insert into dbo.sectiondetails (section) values ('H');
insert into dbo.sectiondetails (section) values ('I');
insert into dbo.sectiondetails (section) values ('J');
insert into dbo.sectiondetails (section) values ('K');
insert into dbo.sectiondetails (section) values ('L');
insert into dbo.sectiondetails (section) values ('M');
insert into dbo.sectiondetails (section) values ('N');
insert into dbo.sectiondetails (section) values ('O');
*/

/*
INSERT INTO dbo.class(
            classid, classname)
    VALUES (1, 'PreKG');
INSERT INTO dbo.class(
            classid, classname)
    VALUES (2, 'LKG');
INSERT INTO dbo.class(
            classid, classname)
    VALUES (3, 'I Std');
INSERT INTO dbo.class(
            classid, classname)
    VALUES (4, 'II Std');
INSERT INTO dbo.class(
            classid, classname)
    VALUES (5, 'III Std');
INSERT INTO dbo.class(
            classid, classname)
    VALUES (6, 'IV Std');
INSERT INTO dbo.class(
            classid, classname)
    VALUES (7, 'V Std');
INSERT INTO dbo.class(
            classid, classname)
    VALUES (8, 'VI Std');
INSERT INTO dbo.class(
            classid, classname)
    VALUES (9, 'VII Std');
    INSERT INTO dbo.class(
            classid, classname)
    VALUES (10, 'VIII Std');
INSERT INTO dbo.class(
            classid, classname)
    VALUES (11, 'IX Std');
INSERT INTO dbo.class(
            classid, classname)
    VALUES (12, 'X Std');
INSERT INTO dbo.class(
            classid, classname)
    VALUES (13, 'XI Std');
INSERT INTO dbo.class(classid, classname)
    VALUES (14, 'XII Std');
*/
create table dbo.mapClassToSection
(
classsectionId smallserial primary key,
classid smallint not null,
sectionid smallint not null)

/*
insert into dbo.mapClassToSection (classid,sectionid)
select classid,sectionid from dbo.class
cross join dbo.sectiondetails
order by classid
*/

--drop table dbo.mapStudentToClass
Create table dbo.mapStudentToClass
(enrollid bigint not null,
classsectionId smallint not null
) 
create unique index idxstdclass on dbo.mapStudentToClass(enrollid,classsectionId)

/*
insert into dbo.mapStudentToClass (enrollid,classsectionId)
select 1, 190;
insert into dbo.mapStudentToClass (enrollid,classsectionId)
select 2, 180;
*/


select * from dbo.class;
select * from dbo.mapStudentTofees;
select * from dbo.StudentDetails
select * from dbo.sectiondetails
select * from dbo.enrollstudent
select * from dbo.mapClassToSection
select * from dbo.mapStudentToClass




--delete from dbo.sectiondetails where section='D' and sectionid=5

--insert into dbo.mapStudentTofees

SELECT generate_series as num FROM generate_series(0, 5)





   CREATE OR REPLACE FUNCTION dbo.GetStudents(ref refcursor) RETURNS refcursor AS $$
      BEGIN
       OPEN ref FOR SELECT s.firstname,s.lastname,s.fathername,s.mothername,s.Nationality,s.sex,s.dateofadmission,s.DateOfBirth 
	FROM dbo.studentdetails s
	join dbo.mapStudentToClass m on s.enrollid=m.enrollid
	join dbo.mapClassToSection cs on cs.classsectionid=m.classsectionid
	join dbo.class c on c.classid=cs.classid
	join dbo.sectiondetails sd on sd.sectionid=cs.sectionid
	join dbo.feedetails f on f.classid=c.classid ;
      RETURN ref;
    END;
    $$ LANGUAGE plpgsql;

   -- Start a transaction
   BEGIN;
 
   SELECT dbo.GetStudents('cities_cur');
   -- Returns: cities_cur
 
   FETCH ALL IN "cities_cur";
   COMMIT;




CREATE OR REPLACE FUNCTION dbo.GetStudentInfo(IN id bigint,IN fname varchar(50),IN lname varchar(50), ref refcursor) RETURNS refcursor AS $$
      BEGIN   
      OPEN ref FOR SELECT 	s.firstname,s.lastname,s.fathername,s.mothername,
				s.Nationality,s.sex,s.dateofadmission,s.DateOfBirth,
				c.classname,sd.section,f.*
	FROM dbo.studentdetails s
	join dbo.mapStudentToClass m on s.enrollid=m.enrollid
	join dbo.mapClassToSection cs on cs.classsectionid=m.classsectionid
	join dbo.class c on c.classid=cs.classid
	join dbo.sectiondetails sd on sd.sectionid=cs.sectionid
	join dbo.feedetails f on f.classid=c.classid 
	where (s.enrollid=case when id=0 then s.enrollid else id end)
	and (UPPER(s.firstname)=case when LENGTH(trim(fname))=0 then UPPER(s.firstname) else UPPER(trim(fname)) end)
	and (UPPER(s.lastname)=case when LENGTH(trim(lname))=0 then UPPER(s.lastname) else UPPER(trim(lname)) end);
      RETURN ref;
    END;
    $$ LANGUAGE plpgsql;

SELECT dbo.GetStudentInfo(0,'dinakaran','','cities_cur');
   -- Returns: cities_cur
 
   FETCH ALL IN "cities_cur";



CREATE OR REPLACE FUNCTION dbo.GetStudentFees(IN id bigint,IN fname varchar(50),IN lname varchar(50), ref refcursor) RETURNS refcursor AS $$
      BEGIN   
      OPEN ref FOR SELECT 	s.firstname,s.lastname,c.classname,sd.section,f.*
	FROM dbo.studentdetails s
	join dbo.mapStudentToClass m on s.enrollid=m.enrollid
	join dbo.mapClassToSection cs on cs.classsectionid=m.classsectionid
	join dbo.class c on c.classid=cs.classid
	join dbo.sectiondetails sd on sd.sectionid=cs.sectionid
	join dbo.feedetails f on f.classid=c.classid 
	where (s.enrollid=case when id=0 then s.enrollid else id end)
	and (UPPER(s.firstname)=case when LENGTH(trim(fname))=0 then UPPER(s.firstname) else UPPER(trim(fname)) end)
	and (UPPER(s.lastname)=case when LENGTH(trim(lname))=0 then UPPER(s.lastname) else UPPER(trim(lname)) end);
      RETURN ref;
    END;
    $$ LANGUAGE plpgsql;


   SELECT dbo.GetStudentFees(0,'dinakaran','','cities_cur');
   -- Returns: cities_cur
 
   FETCH ALL IN "cities_cur";

