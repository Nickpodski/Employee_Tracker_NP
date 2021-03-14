use employeeDB;

INSERT INTO department
  (name)
Values 
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Sales Lead', 100000, 1),
  ('Salesperson', 80000, 1),
  ('Lead Engineer', 150000, 2),
  ('Software Engineer', 120000, 2),
  ('Account Manager', 160000, 3),
  ('Accountant', 125000, 3),
  ('Legal Team Lead', 250000, 4),
  ('Lawyer', 190000, 4);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Nick', 'Podniestrzanski', 3, NULL),
  ('AJ', 'Faries', 1, NULL),
  ('Katelyn', 'Podniestrzanski', 5, NULL),
  ('Chris', 'Podniestrzanski', 1, 2),
  ('Cathy', 'Podniestrzanski', 7, NULL),
  ('Marty', 'Brennan', 4, 1),
  ('Kevin', 'Mcphilips', 4, 5),
  ('Andrew', 'Dugay', 6, 3);
