class CoreModel {
    id;
    created_at;
    updated_at;

    constructor(id, created_at, updated_at) {
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

module.exports = CoreModel;
