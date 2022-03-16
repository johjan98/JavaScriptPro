//El decorator permite extender funcionalidades de una clase sin necesidad de modificar el código de esta.
//Las clases deben estar cerradas para modificación pero abiertas para ser extendidas.

class Field{

  errors: string[];
  input: HTMLInputElement;

  constructor(input: HTMLInputElement){
    this.input = input;
    this.errors = [];

    let errorMessage = document.createElement('p');
    errorMessage.className = 'text-danger';
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener('input', () => {
      this.errors = [];
      this.validate();
      errorMessage.innerText = this.errors[0] || '';
    });
  }

  validate(){}
}

function requiredFieldDecoration(field: Field): Field{
  let validate = field.validate;
  field.validate = function(){
    validate();
    let value = field.input.value;
    if(!value){
      field.errors.push('Requerido');
    }
  }
  return field
}

function emailFieldDecoration(field: Field): Field{
  let validate = field.validate;
  field.validate = function(){
    validate();
    let value = field.input.value;
    if(value.indexOf('@') === -1){
      field.errors.push('Debe ser un email');
    }
  }
  return field
}

let field = new Field(document.querySelector('#email'));
field = requiredFieldDecoration(field);
field = emailFieldDecoration(field);