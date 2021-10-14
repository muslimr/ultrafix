import {API_ROUTES} from "../config/ultrafix-routes";

export class Api {
    static routes = API_ROUTES;

    static async request(url, method = "GET", params) {

        return await fetch(
            method === "GET"
                ? `${this.routes[url]}?${this.serializeQuery(this.filterParams(params))}`
                : this.routes[url],
            {
                method,
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body:
                    method !== "GET" ? JSON.stringify(params) : null,
            }
        )
            .then(async (res) => {
                return await res.json();
            })
            .catch(async (err) => {
                return err;
            });
    }

    static async get(url, params) {
        return await this.request(url, "GET", params);
    }

    static async post(url, params) {
        return await this.request(url, "POST", params);
    }

    static async put(url, params) {
        return await this.request(url, "PUT", params);
    }

    static async del(url, params) {
        return await this.request(url, "DELETE", params);
    }

    static filterParams(params) {

        let obj = {};

        if (params) {
            Object.keys(params).map((key) => {
                let value = params[key];
                if (!value) {
                    value = "";
                }
                obj[key] = value;

                return obj;
            });
        }
        return obj;
    }

    static serializeQuery(params, prefix) {
        const query = Object.keys(params).map((key) => {
            const value = params[key];

            if (params.constructor === Array) {
                key = `${prefix}[]`;
            } else if (params.constructor === Object) {
                key = prefix ? `${prefix}[${key}]` : key;
            }
            if (typeof value === "object") {
                return this.serializeQuery(value, key);
            } else {
                return `${key}=${encodeURIComponent(value)}`;
            }
        });
        return [].concat.apply([], query).join("&");
    };
}
