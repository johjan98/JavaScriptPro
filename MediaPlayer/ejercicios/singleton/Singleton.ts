//Con este patrón de diseño se puede asegurar de que sólo una instancia de la clase sea creada y así trabajar con un sólo objeto según lo requiera la aplicación

class Singleton {
  private static instance: Singleton;

  private constructor (){
    //init
  }

  static getInstance(){
    //Se verifica si existe una instancia de la clase, si no existe se crea la instancia y se retorna. De lo contrario se retorna la instancia existente.
    if(!Singleton.instance){
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

export default Singleton;