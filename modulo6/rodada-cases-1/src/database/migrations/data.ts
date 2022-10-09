import { IDogWalkingDB, IPetWalkRelationInput, STATUS } from "../../model/DogWalking"
import { IPetDB } from "../../model/Pet"

export const dogWalking: IDogWalkingDB[] = [
    {
      "id": "650a9b41-338b-45cb-bab5-417b25492368",
      "status": STATUS.FINISHED,
      "date": new Date("10/07/2022"),
      "price": 55,
      "duration": 60,
      "latitude": 10,
      "longitude": 82,
      "start_time": "20:30",
      "finish_time": "21:30"
    },
    {
      "id": "2aa2ef83-bd3e-43dc-bf0e-cd88da2ed306",
      "status": STATUS.NOT_STARTED,
      "date": new Date("12/05/2022"),
      "price": 25,
      "duration": 30,
      "latitude": 40,
      "longitude": 120,
      "start_time": "08:30",
      "finish_time": "09:00"
    },
    {
      "id": "1a40fa86-4736-4b95-9c4d-f2c0c918d867",
      "status": STATUS.NOT_STARTED,
      "date": new Date("12/07/2022"),
      "price": 55,
      "duration": 30,
      "latitude": 40,
      "longitude": 120,
      "start_time": "11:30",
      "finish_time": "12:00"
    },
    {
      "id": "878e8c66-2876-4502-89eb-54e562b8e99b",
      "status": STATUS.NOT_STARTED,
      "date": new Date("12/10/2022"),
      "price": 55,
      "duration": 60,
      "latitude": 90,
      "longitude": -22,
      "start_time": "12:00",
      "finish_time": "13:00"
    }
  ]

export const pets: IPetDB[] = [
    {
        "id": "91950e5f-f4e0-434f-b113-3c3fcc29ca8b",
        "name": "Lord",
        "breed": "Golden Retriever",
        "age": 3
    },
    {
        "id": "18b5ab95-6194-46ec-ba6d-5f263a340f29",
        "name": "Meg",
        "breed": "Lhasa",
        "age": 11
    },
    {
        "id": "831e3155-6a10-46c1-b258-82f01f35954e",
        "name": "Panhoca",
        "breed": "Vira-lata",
        "age": 7
    },
    {
        "id": "3e2fb2b5-4871-4ec3-ad6d-1e801f2c380a",
        "name": "Puppy",
        "breed": "Shih Tzu",
        "age": 12
    },
    {
        "id": "91b96e5e-88df-4333-8139-69c0f627989e",
        "name": "Zeca",
        "breed": "Spitz",
        "age": 6
    }
]

export const walks = [
    {
        id: "26c09ade-1893-425c-8a69-6fc4422dc9c2",
        pet_id: "3e2fb2b5-4871-4ec3-ad6d-1e801f2c380a",
        walk_id: "2aa2ef83-bd3e-43dc-bf0e-cd88da2ed306"
    },
    {
        id: "2e863bc2-b914-440c-ae1f-0e38cc96d35f",
        pet_id: "91950e5f-f4e0-434f-b113-3c3fcc29ca8b",
        walk_id: "878e8c66-2876-4502-89eb-54e562b8e99b"
    },
    {
        id: "6c928099-7485-49c0-8bf3-b38a99295154",
        pet_id: "3e2fb2b5-4871-4ec3-ad6d-1e801f2c380a",
        walk_id: "650a9b41-338b-45cb-bab5-417b25492368"
    },
    {
        id: "7d57d312-6be4-4c63-bd96-bf41682e28a1",
        pet_id: "18b5ab95-6194-46ec-ba6d-5f263a340f29",
        walk_id: "878e8c66-2876-4502-89eb-54e562b8e99b"
    },
    {
        id: "df32c9d3-01df-4ab0-9a7d-583246ae4b98",
        pet_id: "91b96e5e-88df-4333-8139-69c0f627989e",
        walk_id: "1a40fa86-4736-4b95-9c4d-f2c0c918d867"
    },
    {
        id: "e604069a-2599-4d09-8e75-adde43c6165a",
        pet_id: "18b5ab95-6194-46ec-ba6d-5f263a340f29",
        walk_id: "1a40fa86-4736-4b95-9c4d-f2c0c918d867"
    },
    {
        id: "e7ca195e-5960-4204-a6e9-0bd084a53047",
        pet_id: "18b5ab95-6194-46ec-ba6d-5f263a340f29",
        walk_id: "650a9b41-338b-45cb-bab5-417b25492368"
    },
    {
        id: "f1653db6-0f4a-403e-a5bf-133a385f4f73",
        pet_id: "3e2fb2b5-4871-4ec3-ad6d-1e801f2c380a",
        walk_id: "1a40fa86-4736-4b95-9c4d-f2c0c918d867"
    }
]