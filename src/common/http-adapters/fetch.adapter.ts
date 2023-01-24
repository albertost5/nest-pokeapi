import { HttpAdapter } from '../interfaces/http-adapter.interface';

export class FetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  }
}
