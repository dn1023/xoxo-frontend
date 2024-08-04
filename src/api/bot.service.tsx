/* interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}
 */

interface Response {
    message?: string;
}

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API;

class BotService {
    private static instance: BotService;

    private constructor() { }

    public static getInstance(): BotService {
        if (!BotService.instance) {
            BotService.instance = new BotService();
        }
        return BotService.instance;
    }

    async create(token: string, chatid: string, password: string): Promise<Response> {
        return fetch(`${API_URL}create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': ''
            },
            body: JSON.stringify({ token, chatid, password }),
        }).then(response => {
            /* if (!response.ok) {
              throw new Error('Network response was not ok');
            } */
            return response.json();
        }).catch(error => console.error('Error creating:', error));
    }

    async register(token: string, chatid: string, password: string): Promise<Response> {
        return fetch(`${API_URL}register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': ''
            },
            body: JSON.stringify({ token, chatid, password }),
        }).then(response => {
            /* if (!response.ok) {
              throw new Error('Network response was not ok');
            } */
            return response.json();
        }).catch(error => console.error('Error registering:', error));
    }

    async update(password: string, newpassword: string): Promise<Response> {
        return fetch(`${API_URL}update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': ''
            },
            body: JSON.stringify({ password, newpassword }),
        }).then(response => {
            /* if (!response.ok) {
              throw new Error('Network response was not ok');
            } */
            return response.json();
        }).catch(error => console.error('Error registering:', error));
    }

    async getToken(password: string): Promise<[]> {
        return fetch(`${API_URL}get`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': ''
            },
            body: JSON.stringify({ password }),
        })
            .then(response => {
                /* if (!response.ok) {
                  throw new Error('Network response was not ok');
                } */
                return response.json();
            });
    }

    async message(message: string, password: string): Promise<Response> {
        return fetch(`${API_URL}postWeb`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': ''
            },
            body: JSON.stringify({ message, password }),
        })
            .then(response => {
                /* if (!response.ok) {
                  throw new Error('Network response was not ok');
                } */
                return response.json();
            });
    }

}

export default BotService.getInstance();