// Clinic Type -> Many Procedures <- Clinic Types

// So how do we know what procedure belongs to which clinic and vice versa?
// Normally you'd set up some kind of link table. Let's write a data abstraction for that

/*
  Example, Procedure 1010 belongs to ClinicTypes 1, 3, 5 2

  ClinicTypeId, ProcedureId
  1             1010
  1             1923
  1             2312
  3             1010
  5             1010
  2             1010
*/
var link = [
   /* {cTypeId : 1, procId: 2} */
];

_.each(procedures, function (item) {
  var i, len = item.clinicTypeId.length;

  for(i = 0; i < len; i++) {
    link.push({
      procId  : item.id,
      cTypeId : item.clinicTypeId[i]
    });
  }
});

// Find all procedures with a clinic type id of 416.
var procs = _.where(link, {cTypeId : 416});

// Find all clinics with procedure 1168 
var types = _.where(link, {procId : 1168});

var query = function (source, query) {
  // Cool, but no way to correlate objects to source?
  // Whatever my query function returns can be the comparison criteria?  
  // i.e. {}
}

var test = _.map(procs, function (obj) {
  return { id : obj.procId }
});

// Get all objects resulting from a link table lookup.
_.map(types, function () {
  
});
