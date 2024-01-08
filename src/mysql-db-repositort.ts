export class MySQLDBRepository implements DatabaseRepository {

    constructor(user: string, password: string, host: string, port: string, database: string) {
        console.log("conectado");
    }

    connect(user: string, password: string, host: string, port: string, database: string) {
        console.log("conectado");
    }

    select(query: string) {
        console.log(`select ${query}`);
    }

    insert(query: string) {
        console.log(`insert ${query}`);
    }

    update(query: string) {
        console.log(`update ${query}`);
    }

    delete(query: string) {
        console.log(`delete ${query}`);
    }
}