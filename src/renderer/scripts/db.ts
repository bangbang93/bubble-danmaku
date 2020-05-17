interface UserInDB {
    id: number;
    name: String;
    nickName: string;
    faceUrl: String;
    description: string;
    topPhotoFileName: string;
    birthday: string;
}

let dbConst = {
    "db": {
        "name": "db",
        "version": 2,
        stores: {
            "user": {
                storeName: "user",
                keyPath: "id",
                indexes: [
                    {name: "name", unique: false}
                ]
            }
        }
    }
}


class DB {

    db;

    constructor() {
        this.db = null;
    }

    connectAsync() {
        return new Promise<IDBDatabase>(((resolve, reject) => {
            let dbRequest = window.indexedDB.open(dbConst.db.name, dbConst.db.version);
            dbRequest.onsuccess = (e) => {
                this.db = dbRequest.result;
                resolve(this.db);
            }
            dbRequest.onupgradeneeded = (e) => {
                if (!this.db) {
                    this.db = dbRequest.result
                }
                let stores = dbConst.db.stores;
                for (let storeKey in stores) {
                    let store = stores[storeKey];

                    if (!this.db.objectStoreNames.contains(store.storeName)) {
                        // 没有store则创建
                        let objectStore = this.db.createObjectStore(store.storeName, {keyPath: store.keyPath});
                        // 创建索引
                        for (let index of store.indexes) {
                            objectStore.createIndex(index.name, index.name, {"unique": index.unique});
                        }
                    } else {
                    }
                }
            }
            dbRequest.onerror = console.error
        }))
    }

    addAsync(storeName: string, object: Object): Promise<Event> {
        return new Promise((resolve, reject) => {
            let request = this.db.transaction([storeName], 'readwrite')
                .objectStore(storeName)
                .add(object);

            request.onsuccess = function (event) {
                resolve(event);
            };

            request.onerror = function (event) {
                reject(event);
            }
        })
    }

    readAsync(storeName: string, key: string | number) {
        return new Promise((resolve, reject) => {
            let transaction = this.db.transaction([storeName]);
            let objectStore = transaction.objectStore(storeName);
            let request = objectStore.get(key);

            request.onerror = function (event) {
                reject(event)
            };

            request.onsuccess = function (event) {
                resolve(request.result)
            };
        })
    }

    updateAsync(storeName:string, object:Object){
        return new Promise(((resolve, reject) => {
            let request = this.db.transaction([storeName], 'readwrite')
                .objectStore(storeName)
                .put(object);
            request.onerror = function (event) {
                reject(event)
            };

            request.onsuccess = function (event) {
                resolve(request.result)
            };
        }))
    }

    async addUserAsync(user: UserInDB) {
        return await this.addAsync("user", user);
    }

    async readUserByIdAsync(userId: number): Promise<UserInDB> {
        return <UserInDB>await this.readAsync("user", userId);
    }

    async updateUserAsync(user:UserInDB){
        return await this.updateAsync("user", user);
    }
}

export default DB;
export {UserInDB};
