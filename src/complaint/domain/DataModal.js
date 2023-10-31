class DataModal {
    constructor() {
      this.title = '';
      this.description = '';
    }
  
    setTitle(title_value) {
        this.title = title_value;
    }
    getTitle() {
        return this.title;
    }
    
    setDescription(description_value) {
        this.description = description_value;
    }
    getDescription() {
        return this.description;
    }
  }
  
  export default DataModal;