import { DatabaseRepository } from "./interface/database.interface";

export class PostgresDBRepository implements DatabaseRepository {
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