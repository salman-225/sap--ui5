using {
  Currency,
  managed,
  sap
} from '@sap/cds/common';

namespace com.sijas.capire.employee;

entity Employee : managed {
  key ID       : UUID @odata.Type : 'Edm.String';
      fname    : String;
      lname    : String;
      email    : String;
      age      : Integer;
      salary   : Decimal(9, 2);
      currency : Currency;
}
