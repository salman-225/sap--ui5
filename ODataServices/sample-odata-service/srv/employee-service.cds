using {com.sijas.capire.employee as my} from '../db/schema';

service EmployeeService @(_requires : 'authenticated-user') {
  entity Employee as projection on my.Employee;
}