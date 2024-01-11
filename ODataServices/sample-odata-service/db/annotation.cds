using {com.sijas.capire.employee as my} from '../db/schema';

annotate my.Employee with {
  ID         @(UI.Hidden);
  createdAt  @(UI.Hidden);
  createdBy  @(UI.Hidden);
  modifiedAt @(UI.Hidden);
  modifiedBy @(UI.Hidden);
  fname      @(title : 'First Name'
                                   // ,Common:{
                                   //   ValueList : {
                                   //       $Type : 'Common.ValueListType',
                                   //       CollectionPath : 'Employee',
                                   //       Parameters:[
                                   //         { $Type: 'Common.ValueListParameterInOut',
                                   //                       LocalDataProperty: fname,
                                   //                       ValueListProperty: 'fname'
                                   //                   },
                                   //                   { $Type: 'Common.ValueListParameterDisplayOnly',
                                   //                       ValueListProperty: 'lname'
                                   //                   }
                                   //       ]
                                   //   },
                                   // }
                       );
  lname      @title : 'Last Name';
  age        @title : 'Age';
  email      @title : 'Email Address';
  salary     @title : 'Salary';
  currency   @title : 'Currency';
}

annotate my.Employee with @(UI : {
  HeaderInfo       : {
    TypeName       : 'Employee',
    TypeNamePlural : 'Employees',
    Title          : {
      $Type : 'UI.DataField',
      Value : fname
    },
    Description    : {
      $Type : 'UI.DataField',
      Value : lname
    }
  },
  LineItem         : [
    {Value : fname},
    {Value : lname},
    {Value : email},
    {Value : age},
    {Value : salary},
    {Value: currency_code}
  ],
  SelectionFields  : [
    fname,
    lname
  ],
  Facets           : [{
    $Type  : 'UI.ReferenceFacet',
    Label  : 'Main',
    Target : '@UI.FieldGroup#Main'
  }],
  FieldGroup #Main : {Data : [
    {Value : fname},
    {Value : lname},
    {Value : email},
    {Value : age},
    {Value : salary},
    {Value: currency_code}
  ]}
});
