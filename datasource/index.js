class DataSource {
    constructor() {
        this.baseUrl = 'https://reqres.in/api';
    }

    auth = () => {
        return {
            login: (payload) => {
                return new Promise((resolve, reject) => {
                    fetch(`${this.baseUrl}/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    })
                        .then(res => res.json())
                        .then(json => resolve(json))
                        .catch((err) => {
                            reject(err)
                        })
                });
            },
            register: (payload) => {
                return new Promise((resolve, reject) => {
                    fetch(`${this.baseUrl}/register`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    })
                        .then(res => res.json())
                        .then(json => resolve(json))
                        .catch((err) => {
                            reject(err)
                        })
                });
            },
        };
    }

    user = () => {
        return {
            create: (payload) => {
                return new Promise((resolve, reject) => {
                    fetch(`${this.baseUrl}/users`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    })
                        .then(res => res.json())
                        .then(json => resolve(json))
                        .catch((err) => {
                            reject(err)
                        })
                });
            },

            update: (id, payload) => {
                return new Promise((resolve, reject) => {
                    fetch(`${this.baseUrl}/users/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    })
                        .then(res => res.json())
                        .then(json => resolve(json))
                        .catch((err) => {
                            reject(err)
                        })
                });
            },

            delete: (id) => {
                return new Promise((resolve, reject) => {
                    fetch(`${this.baseUrl}/users/${id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then(res => resolve(res))
                        .catch((err) => {
                            reject(err)
                        })
                });
            },

            getById: (id) => {
                const url = `/users/${id}`;
                return new Promise((resolve, reject) => {
                    fetch(`${this.baseUrl}${url}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        },
                    })
                        .then(res => res.json())
                        .then(json => resolve(json))
                        .catch((err) => {
                            reject(err)
                        })
                });
            },
            getList: (page = 1) => {
                const url = `/users/?page=${page}`;
                return new Promise((resolve, reject) => {
                    fetch(`${this.baseUrl}${url}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        },
                    })
                        .then(res => res.json())
                        .then(json => resolve(json))
                        .catch((err) => {
                            reject(err)
                        })
                });
            }
        };
    }

    resource = () => {
        return {
            getById: (id) => {
                const url = `/resources/${id}`;
                return new Promise((resolve, reject) => {
                    fetch(`${this.baseUrl}${url}`, {method: "GET"})
                        .then(res => res.json())
                        .then(json => resolve(json))
                        .catch((err) => {
                            reject(err)
                        })
                });
            },
            getList: (page = 1) => {
                const url = `/resources/?page=${page}`;
                return new Promise((resolve, reject) => {
                    fetch(`${this.baseUrl}${url}`, {method: "GET"})
                        .then(res => res.json())
                        .then(json => resolve(json))
                        .catch((err) => {
                            reject(err)
                        })
                });
            }
        };
    }

}

const dataSource = new DataSource();

module.exports = dataSource;