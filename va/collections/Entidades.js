Entidades = new Meteor.Collection('entidades');

// Define the schema
EntidadesSchema = new SimpleSchema({
  nome: {
    type: String,
    label: "Nome",
    max: 200
  },
  email: {
    type: String,
    label: "E-mail",
    regEx: SimpleSchema.RegEx.Email,
    optional: false,
    max:50
  },
  desc: {
    type: String,
    label: "Descrição",
    min: 0,
    max: 1000
  },
  criado: {
    type: Date,
    label: "Criado em",
    auto: function(){
      return new Date();

    }
  }
});


Entidades.attachSchema(EntidadesSchema);

// Validate an object against the schema
obj = {nome: "Rui", email: "rui.albuquerque@gmail.com"};

isValid = EntidadesSchema.namedContext("myContext").validate(obj);
// OR
isValid = EntidadesSchema.namedContext("myContext").validateOne(obj, "keyToValidate");
// OR
isValid = Match.test(obj, EntidadesSchema);
// OR
check(obj, EntidadesSchema);