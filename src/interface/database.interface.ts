export interface DatabaseRepository {
    connect(user: string, password: string, host: string, port: string, database: string): void;
    select(query: string): void;
    insert(query: string): void;
    update(query: string): void;
    delete(query: string): void;
}