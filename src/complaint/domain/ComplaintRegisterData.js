class ComplaintRegisterData {
    constructor() {
      this.nombre = '';
      this.apellido = '';
      this.genero = '';
      this.fechas_nacimiento = '';
      this.altura = '';
      this.peso = '';
      this.cicatriz = '';
      this.tatuaje = '';
      this.direccion = '';
      this.color_cabello = '';
      this.color_ojos = '';
      this.fecha_desaparicion = '';
      this.hora_desaparicion = '';
      this.ultima_ropa_puesta = '';
      this.ubicacion = '';
      this.user_id = '';
      this.nacionalidad_id = '';
      this.documento_id = '';
      this.idioma_id = '';
      this.tipo_cabello_id = '';
      this.estado = '';
      this.enfermedad = '';
      this.contacto = '';
      this.image = '';
    }
    setEnfermedad(enfermedad) {
        this.enfermedad = enfermedad;
    }
    getEnfermedad() {
        return this.enfermedad;
    }
    setContacto(contacto) {
        this.contacto = contacto;
    }
    getContacto() {
        return this.contacto;
    }
    setColor_ojos(color_ojos) {
        this.color_ojos = color_ojos;
    }
    getColor_ojos() {
        return this.color_ojos;
    }
    setColor_cabello(color_cabello) {
        this.color_cabello = color_cabello;
    }
    getColor_cabello() {
        return this.color_cabello;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getApellido() {
        return this.apellido;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    getGenero() {
        return this.genero;
    }
    
    setFechas_nacimiento(fechas_nacimiento) {
        this.fechas_nacimiento = fechas_nacimiento;
    }
    getFechas_nacimiento() {
        return this.fechas_nacimiento;
    }
    
    setAltura(altura) {
        this.altura = altura;
    }
    getAltura() {
        return this.altura;
    }
    
    setPeso(peso) {
        this.peso = peso;
    }
    getPeso() {
        return this.peso;
    }
    setCicatriz(cicatriz) {
        this.cicatriz = cicatriz;
    }
    getCicatriz() {
        return this.cicatriz;
    }
    setTatuaje(tatuaje) {
        this.tatuaje = tatuaje;
    }
    getTatuaje() {
        return this.tatuaje;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    getDireccion() {
        return this.direccion;
    }
    setUbicacion(ubicacion) {
        this.ubicacion = ubicacion;
    }
    getUbicacion() {
        return this.ubicacion;
    }
    
    setUser_id(user_id) {
        this.user_id = user_id;
    }
    getUser_id() {
        return this.user_id;
    }
    setNacionalidad_id(nacionalidad_id) {
        this.nacionalidad_id = nacionalidad_id;
    }
    getNacionalidad_id() {
        return this.nacionalidad_id;
    }
    
    setUltima_ropa_puesta(ultima_ropa_puesta) {
        this.ultima_ropa_puesta = ultima_ropa_puesta;
    }
    getUltima_ropa_puesta() {
        return this.ultima_ropa_puesta;
    }
    setDocumento_id(documento_id) {
        this.documento_id = documento_id;
    }
    getDocumento_id() {
        return this.documento_id;
    }
    setIdioma_id(idioma_id) {
        this.idioma_id = idioma_id;
    }
    getIdioma_id() {
        return this.idioma_id;
    }
    
    setTipo_cabello_id(tipo_cabello_id) {
        this.tipo_cabello_id = tipo_cabello_id;
    }
    getTipo_cabello_id() {
        return this.tipo_cabello_id;
    }
    
    setEstado(estado) {
        this.estado = estado;
    }
    getEstado() {
        return this.estado;
    }

    setFecha_desaparicion(fecha_desaparicion) {
        this.fecha_desaparicion = fecha_desaparicion;
    }
    getFecha_desaparicion() {
        return this.fecha_desaparicion;
    }

    setHora_desaparicion(hora_desaparicion) {
        this.hora_desaparicion = hora_desaparicion;
    }
    getHora_desaparicion() {
        return this.hora_desaparicion;
    }
    setImage(imageUri) {
        this.image = imageUri;
    }
    getImage() {
        return this.image;
    }     

    fillViewComplete(number_view){
        if(number_view == 2){
            return this.firstViewComplete();
        }else if(number_view == 3){
            return this.secondViewComplete();
        }else if(number_view == 4){
            return this.thirdViewComplete();
        }else{
            return true;
        }
    }
    firstViewComplete(){
        if(this.nombre != '' && this.genero != '' && this.fechas_nacimiento != '' && this.idioma_id != '' && this.nacionalidad_id != ''){
            return true;
        }else{
            return false;
        }
    }
    secondViewComplete(){
        if(this.color_cabello != '' && this.altura != '' && this.peso != '' && 
        this.color_ojos != '' && this.cicatriz != '' && this.tatuaje != ''){
            return true;
        }else{
            return false;
        }
    }
    thirdViewComplete(){
        if(this.direccion != '' && this.fecha_desaparicion != '' && this.hora_desaparicion != '' && this.ultima_ropa_puesta != '' && this.enfermedad != '' && this.contacto != '' ){
            return true;
        }else{
            return false;
        }
    }
    
    fourthViewComplete(){
        if(this.ubicacion != '' ){
            return true;
        }else{
            return false;
        }
    }
  }
  
  export default ComplaintRegisterData;