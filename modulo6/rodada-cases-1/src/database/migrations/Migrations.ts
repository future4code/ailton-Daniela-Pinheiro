import { BaseDatabase } from "../BaseDatabase"
import { DogWalkingDatabase } from "../DogWalkingDatabase"
import { dogWalking, pets, walks } from "./data"


class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${DogWalkingDatabase.TABLE_DOG_WALKING};
        DROP TABLE IF EXISTS ${DogWalkingDatabase.TABLE_PETS};
        DROP TABLE IF EXISTS ${DogWalkingDatabase.TABLE_WALKS};
        
        CREATE TABLE IF NOT EXISTS ${DogWalkingDatabase.TABLE_DOG_WALKING}(
            id VARCHAR(255) PRIMARY KEY,
            status ENUM ("not_started", "started", "finished") NOT NULL DEFAULT "not_started",
            date DATE NOT NULL,
            price FLOAT NOT NULL,
            duration INT NOT NULL,
            latitude FLOAT NOT NULL,
            longitude FLOAT NOT NULL,
            start_time TIME NOT NULL,
            finish_time TIME NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${DogWalkingDatabase.TABLE_PETS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            breed VARCHAR(255) NOT NULL,
            age INT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${DogWalkingDatabase.TABLE_WALKS}(
            id VARCHAR(255) PRIMARY KEY,
            pet_id VARCHAR(255) NOT NULL,
            walk_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (pet_id) REFERENCES ${DogWalkingDatabase.TABLE_PETS}(id),
            FOREIGN KEY (walk_id) REFERENCES ${DogWalkingDatabase.TABLE_DOG_WALKING}(id)
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(DogWalkingDatabase.TABLE_DOG_WALKING)
            .insert(dogWalking)

        await BaseDatabase
            .connection(DogWalkingDatabase.TABLE_PETS)
            .insert(pets)

        await BaseDatabase
            .connection(DogWalkingDatabase.TABLE_WALKS)
            .insert(walks)
    }
}

const migrations = new Migrations()
migrations.execute()